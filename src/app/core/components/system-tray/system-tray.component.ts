import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-system-tray',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './system-tray.component.html',
    styleUrls: ['./system-tray.component.css']
})
export class SystemTrayComponent implements OnInit, OnDestroy {
    @Input() isActionCenterOpen = false;
    @Input() isCalendarOpen = false;
    @Output() toggleActionCenter = new EventEmitter<void>();
    @Output() toggleCalendar = new EventEmitter<void>();

    currentTime: string = '';
    currentDate: string = '';
    currentMonth: string = '';
    private timer: any;

    ngOnInit() {
        this.updateTime();
        this.timer = setInterval(() => this.updateTime(), 1000);
    }

    ngOnDestroy() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    updateTime() {
        const now = new Date();
        this.currentTime = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
        this.currentDate = now.toLocaleDateString();
        this.currentMonth = now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    }

    onToggleActionCenter() {
        this.toggleActionCenter.emit();
    }

    onToggleCalendar() {
        this.toggleCalendar.emit();
    }
}
