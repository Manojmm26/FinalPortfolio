import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WindowManagerService } from '../../services/window-manager.service';

@Component({
  selector: 'app-bsod',
  templateUrl: './bsod.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class BSODComponent {
  windowManager = inject(WindowManagerService);

  restart() {
    // This is a mock restart, it just closes all windows and resets theme.
    this.windowManager.processes.set([]);
    this.windowManager.activeTheme.set('win95');
  }
}