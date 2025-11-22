import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class NotepadComponent {}