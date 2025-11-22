import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DesktopIcon {
    id: string;
    label: string;
    iconUrl: string;
    action?: () => void;
}

@Component({
    selector: 'app-desktop',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './desktop.component.html',
    styleUrls: ['./desktop.component.css']
})
export class DesktopComponent {
    @Input() icons: DesktopIcon[] = [];
    @Output() iconDoubleClicked = new EventEmitter<string>();

    onDoubleClick(icon: DesktopIcon) {
        if (icon.action) {
            icon.action();
        } else {
            this.iconDoubleClicked.emit(icon.id);
        }
    }
}
