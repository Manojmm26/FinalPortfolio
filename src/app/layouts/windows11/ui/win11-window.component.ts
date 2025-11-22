import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-win11-window',
    standalone: true,
    imports: [CommonModule, DragDropModule],
    templateUrl: './win11-window.component.html',
    styleUrls: ['./win11-window.component.css']
})
export class Win11WindowComponent {
    @Input() title: string = 'Window';
    @Input() iconUrl: string = '';
    @Input() isOpen: boolean = false;
    @Input() isMinimized: boolean = false;
    @Input() width: string = '800px';
    @Input() height: string = '500px';
    @Input() top: string = '20px';
    @Input() left: string = '40px';

    @Output() close = new EventEmitter<void>();
    @Output() minimize = new EventEmitter<void>();
    @Output() maximize = new EventEmitter<void>();

    onClose() {
        this.close.emit();
    }

    onMinimize() {
        this.minimize.emit();
    }

    onMaximize() {
        this.maximize.emit();
    }
}
