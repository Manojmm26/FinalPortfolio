import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WindowManagerService } from '../../services/window-manager.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class DesktopComponent {
  windowManager = inject(WindowManagerService);
  apps = this.windowManager.apps;

  openApp(appId: string) {
    this.windowManager.openApp(appId);
  }
}