import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { WindowManagerService } from '../../services/window-manager.service';
import { WindowsTheme } from '../../models/os-types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class SettingsComponent {
  windowManager = inject(WindowManagerService);
  
  themes: { id: WindowsTheme, name: string }[] = [
    { id: 'win95', name: 'Windows 95' },
    { id: 'winXP', name: 'Windows XP' },
    { id: 'win7', name: 'Windows 7' },
    { id: 'win10', name: 'Windows 10' },
    { id: 'win11', name: 'Windows 11' },
  ];

  selectTheme(themeId: WindowsTheme) {
    this.windowManager.activeTheme.set(themeId);
  }
}