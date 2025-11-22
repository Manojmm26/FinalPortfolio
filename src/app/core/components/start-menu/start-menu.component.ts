import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-start-menu',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './start-menu.component.html',
    styleUrls: ['./start-menu.component.css']
})
export class StartMenuComponent {
    @Input() isOpen = false;
    @Output() appLaunched = new EventEmitter<string>();

    launchApp(appName: string) {
        this.appLaunched.emit(appName);
    }
}
