import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TaskbarApp {
    id: string;
    iconUrl: string;
    isOpen: boolean;
    isActive: boolean;
    action?: () => void;
}

@Component({
    selector: 'app-taskbar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './taskbar.component.html',
    styleUrls: ['./taskbar.component.css']
})
export class TaskbarComponent {
    @Input() apps: TaskbarApp[] = [];
    @Input() isStartMenuOpen = false;
    @Output() startMenuToggled = new EventEmitter<void>();
    @Output() appClicked = new EventEmitter<string>();

    toggleStartMenu() {
        this.startMenuToggled.emit();
    }

    onAppClick(app: TaskbarApp) {
        if (app.action) {
            app.action();
        } else {
            this.appClicked.emit(app.id);
        }
    }
}
