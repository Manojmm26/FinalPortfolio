import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WindowManagerService } from './core/services/window-manager.service';
import { DesktopComponent } from './core/components/desktop/desktop.component';
import { TaskbarComponent } from './core/components/taskbar/taskbar.component';
import { WindowComponent } from './core/components/window/window.component';
import { NotepadComponent } from './apps/notepad/notepad.component';
import { SettingsComponent } from './apps/settings/settings.component';
import { BSODComponent } from './apps/bsod/bsod.component';
import { Windows11LayoutComponent } from './layouts/windows11/windows11-layout.component';
import { WindowsXpLayoutComponent } from './layouts/windowsxp/windowsxp-layout.component';
import { Windows7LayoutComponent } from './layouts/windows7/windows7-layout.component';

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
    BSODComponent,
    Windows11LayoutComponent,
    WindowsXpLayoutComponent,
    Windows7LayoutComponent
  ]
})
export class AppComponent {
  windowManager = inject(WindowManagerService);

  theme = this.windowManager.activeTheme;
  processes = this.windowManager.processes;
}
