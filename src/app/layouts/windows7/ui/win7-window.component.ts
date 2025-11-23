import { Component, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

export type WindowContentType = 'computer' | 'notepad' | 'custom';

@Component({
    selector: 'app-win7-window',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './win7-window.component.html',
    styles: [`
    .aero-glass {
      background: linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.1) 100%);
      backdrop-filter: blur(12px);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.7), 0 5px 15px rgba(0,0,0,0.5);
      border: 1px solid rgba(255,255,255,0.4);
    }
  `]
})
export class Win7WindowComponent {
    @Input() isOpen = false;
    @Input() title = 'Window';
    @Input() icon?: string;
    @Input() contentType: WindowContentType = 'custom';
    @Input() initialX = 50;
    @Input() initialY = 50;
    @Input() width = 600;
    @Input() height = 400;

    @Output() close = new EventEmitter<void>();
    @Output() minimize = new EventEmitter<void>();
    @Output() maximize = new EventEmitter<void>();

    isDragging = false;
    dragOffsetX = 0;
    dragOffsetY = 0;
    currentX = 50;
    currentY = 50;

    constructor(private elementRef: ElementRef) { }

    ngOnInit() {
        this.currentX = this.initialX;
        this.currentY = this.initialY;
    }

    startDrag(event: MouseEvent) {
        event.preventDefault();
        this.isDragging = true;
        this.dragOffsetX = event.clientX - this.currentX;
        this.dragOffsetY = event.clientY - this.currentY;
    }

    @HostListener('document:mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        if (this.isDragging) {
            this.currentX = event.clientX - this.dragOffsetX;
            this.currentY = event.clientY - this.dragOffsetY;

            // Keep window on screen
            this.currentX = Math.max(0, Math.min(this.currentX, window.innerWidth - 100));
            this.currentY = Math.max(0, Math.min(this.currentY, window.innerHeight - 100));
        }
    }

    @HostListener('document:mouseup')
    onMouseUp() {
        this.isDragging = false;
    }

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
