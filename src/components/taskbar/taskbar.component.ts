import { ChangeDetectionStrategy, Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { WindowManagerService } from '../../services/window-manager.service';
import { Process } from '../../models/os-types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class TaskbarComponent implements OnInit, OnDestroy {
  windowManager = inject(WindowManagerService);
  processes = this.windowManager.processes;
  activeProcessId = this.windowManager.activeProcessId;
  currentTime = signal('');
  private timer: any;

  ngOnInit() {
    this.updateTime();
    this.timer = setInterval(() => this.updateTime(), 1000 * 30); // Update every 30s
  }
  
  ngOnDestroy() {
    clearInterval(this.timer);
  }

  updateTime() {
    this.currentTime.set(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  }

  handleTaskClick(process: Process) {
    if (this.activeProcessId() === process.processId && !process.isMinimized) {
      this.windowManager.minimizeProcess(process.processId);
    } else {
      this.windowManager.restoreProcess(process.processId);
      this.windowManager.focusProcess(process.processId);
    }
  }

  showDesktop() {
    // A simple implementation: minimize all windows
    this.processes().forEach(p => {
        this.windowManager.minimizeProcess(p.processId);
    });
  }
}