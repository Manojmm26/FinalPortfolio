import { Injectable, signal, computed, effect } from '@angular/core';
import { AppMetadata, Process, WindowsTheme } from '../models/os-types';
import { NotepadComponent } from '../../apps/notepad/notepad.component';
import { SettingsComponent } from '../../apps/settings/settings.component';
import { BSODComponent } from '../../apps/bsod/bsod.component';

@Injectable({ providedIn: 'root' })
export class WindowManagerService {
  // --- STATE SIGNALS ---
  activeTheme = signal<WindowsTheme>('win11');
  processes = signal<Process[]>([]);
  activeProcessId = signal<string | null>(null);
  private nextZIndex = signal(100);
  private lastPosition = { x: 50, y: 50 };

  // App Registry
  private registeredApps = new Map<string, AppMetadata>([
    ['notepad', {
      id: 'notepad',
      name: 'Notepad',
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADwSURBVFhH7ZaxCsJgEEVPp9vN5+gFehGP4BV6FY/gBHoknoA30LcT3kK3U3sBF3UTmhcQhILmQzEM/xAImvnlb3Ah+V+yY52V6xXJkZyT/BaRT3WkR+aUp5wQFGfEcS/WRBEVEvEk4yXg4pB4L5f0sF285I+k/9a0QcQRt3L54VxwjS2SgPK+xueBAbJSgDy3E2wdaT4Q0xIgS80SHy1XpI0ZJb25R/I17tV2a7NMrW214jS26VUW1uYBDgA021Yj+v38Dr37gH0+OT2Oq/vTa/fn1+g2+4EOPw7yS/JpE/p3BVLtFpZUEAAAAABJRU5ErkJggg==',
      component: NotepadComponent,
      defaultSize: { width: 450, height: 300 }
    }],
    ['settings', {
      id: 'settings',
      name: 'Settings',
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJlSURBVFhHxZfPaxRBGMZ/BwUhQk28BEG99eDJKYgXITyYm4g3L14EDz2IL8F/IHjw5qU3D978AxQEoUgePAnYpFBQD15ES00S0/ZkWltnN7uzO/vgQUi7s9/P/m+Gmd2dnQ781w/ExsfHw8WLF+V+X7hwwQsXLgzzA+fOnQsLCwu5e/fuoHwGjY2NhbVq1fK5c+dGLHa7XfT19cX1ej0uFApRLBbF5uZmXFhYCAaDARaLBYuLi+Pq6uog54R+/v7+eHl5OW6z2aG4uBjBYBCrq6uxvr4e19fXw3q9HlarVZw5cyYcHx8Pq1evDg/0+/0cHx+Px8fHw/nz58OVK1eG/d69e4fBwUFERkaGzM7OzpD/e/ToEbi7u+v01KlTQ05PT4937twJx8fHh/X8/Pzgr7/+EjJp0qQhNzc3h4GBgeDs7Ex7e3u5dOkStLW1aWlpKWlubkbBQUHq6urQDw8PcvjwYYiJiaErKyuSrVu3wt7eHmJiYvQvLi6GYDCIfv36lV69eiVqa2sRHx+vY9myZfD29qZdu3YJnZ2daGlp0aFDB9LWrVsRHh6uY/ny5UhOThZNTU16/PiRhg4dSvf69WuEh4frWLRoETw9PWnTpk3CpUuXEBsbK2tra48cOUJXV1e5e/cuODg40J49exATE6Nqa2sr/wMHDgRvb29as2aNsGnTJvj7+6tPnz7VfvjwoZydnaW2tlaMjo5SYGAgDAwMaPfu3UhMTHRsmTIFUlNTNTe3mEAgQFNTE169eiXs+7V9+3bYtWsXcndsbCw8f/4cHh8fD9XV1fDw4UNA0NXVhVdXV8PhcHDkyBHcu3cvnD9/Hh49ehQODg6GPb6/vw/b7XaYmZnBvXv3cHh4GO7cuRNOnToV/sP58+dhbW0N+/btg42NDbjd7mH99/c3jA2E0P8A3s/4/wP424z/wV8W/C/i5V/j/wB5G1B2L/l2QwAAAABJRU5ErkJggg==',
      component: SettingsComponent,
      defaultSize: { width: 380, height: 420 }
    }],
    ['bsod', {
      id: 'bsod',
      name: 'BSOD',
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACOSURBVFhH7c9BCoAwEATBdvf/n9pBbQjhhgQzb8tN38L/8g5Q4X157t/MGS6tL58EKLQeWwLYYLYE2GC2BNhgtgTYYLYE2GC2BNhgtgTYYLYE2GC2BNhgtgTYYLYE2GC2BNhgtgTYYLYE2GC2BNhgtgTYYLYE2GC2BNhgtgTYYPYC3gO+j7iA736WosYAAAAASUVORK5CYII=',
      component: BSODComponent,
      defaultSize: { width: window.innerWidth, height: window.innerHeight }
    }],
  ]);

  // --- DERIVED STATE ---
  public apps = signal<AppMetadata[]>(Array.from(this.registeredApps.values()));

  constructor() {
    effect(() => {
      // This is a simple effect to show how to react to state changes.
      console.log(`Current theme: ${this.activeTheme()}`);
      console.log(`Running processes: ${this.processes().length}`);
    });
  }

  // --- ACTIONS ---
  openApp(appId: string) {
    const appMeta = this.registeredApps.get(appId);
    if (!appMeta) return;

    // For BSOD, ensure it's fullscreen and singleton
    if (appId === 'bsod') {
      const existingBsod = this.processes().find(p => p.appId === 'bsod');
      if (existingBsod) {
        this.focusProcess(existingBsod.processId);
        return;
      }
    }

    const processId = `${appId}-${Math.random().toString(36).substring(2, 9)}`;
    const newZIndex = this.nextZIndex();

    // Cascade new windows
    this.lastPosition.x = (this.lastPosition.x + 30) % 300;
    this.lastPosition.y = (this.lastPosition.y + 30) % 300;

    const newProcess: Process = {
      processId,
      appId,
      title: appMeta.name,
      icon: appMeta.icon,
      component: appMeta.component,
      isMinimized: false,
      isMaximized: appId === 'bsod',
      zIndex: newZIndex,
      position: appId === 'bsod' ? { x: 0, y: 0 } : { ...this.lastPosition },
      size: appMeta.defaultSize || { width: 500, height: 400 },
    };

    this.processes.update(procs => [...procs, newProcess]);
    this.activeProcessId.set(processId);
    this.nextZIndex.set(newZIndex + 1);
  }

  closeProcess(processId: string) {
    this.processes.update(procs => procs.filter(p => p.processId !== processId));
    if (this.activeProcessId() === processId) {
      this.activeProcessId.set(null);
    }
  }

  minimizeProcess(processId: string) {
    this.processes.update(procs => procs.map(p =>
      p.processId === processId ? { ...p, isMinimized: true } : p
    ));
    this.activeProcessId.set(null);
  }

  toggleMaximizeProcess(processId: string) {
    this.processes.update(procs => procs.map(p =>
      p.processId === processId ? { ...p, isMaximized: !p.isMaximized } : p
    ));
    this.focusProcess(processId);
  }

  restoreProcess(processId: string) {
    this.processes.update(procs => procs.map(p =>
      p.processId === processId ? { ...p, isMinimized: false } : p
    ));
    this.focusProcess(processId);
  }

  focusProcess(processId: string) {
    if (this.activeProcessId() === processId) return;

    const newZIndex = this.nextZIndex();
    this.processes.update(procs => procs.map(p =>
      p.processId === processId ? { ...p, zIndex: newZIndex, isMinimized: false } : p
    ));
    this.activeProcessId.set(processId);
    this.nextZIndex.set(newZIndex + 1);
  }

  updatePosition(processId: string, position: { x: number, y: number }) {
    this.processes.update(procs => procs.map(p =>
      p.processId === processId ? { ...p, position: position } : p
    ));
  }
}
