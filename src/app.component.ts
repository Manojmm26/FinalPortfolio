import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WindowManagerService } from './services/window-manager.service';
import { DesktopComponent } from './components/desktop/desktop.component';
import { TaskbarComponent } from './components/taskbar/taskbar.component';
import { WindowComponent } from './components/window/window.component';
import { NotepadComponent } from './apps/notepad/notepad.component';
import { SettingsComponent } from './apps/settings/settings.component';
import { BSODComponent } from './apps/bsod/bsod.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    DesktopComponent,
    TaskbarComponent,
    WindowComponent,
    NotepadComponent,
    SettingsComponent,
    BSODComponent
  ]
})
export class AppComponent {
  windowManager = inject(WindowManagerService);
  
  theme = this.windowManager.activeTheme;
  processes = this.windowManager.processes;
}
