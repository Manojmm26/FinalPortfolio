import { ChangeDetectionStrategy, Component, computed, inject, input, viewChild, ElementRef, afterNextRender } from '@angular/core';
import { CdkDragEnd, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Process } from '../../models/os-types';
import { WindowManagerService } from '../../services/window-manager.service';

@Component({
    selector: 'app-window',
    standalone: true,
    imports: [CommonModule, DragDropModule],
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WindowComponent {
    windowManager = inject(WindowManagerService);
    process = input.required<Process>();

    isActive = computed(() => this.process().processId === this.windowManager.activeProcessId());

    private windowEl = viewChild<ElementRef>('windowFrame');

    constructor() {
        // Center new windows when they are created
        afterNextRender(() => {
            const el = this.windowEl()?.nativeElement;
            if (el) {
                const { width, height } = this.process().size;
                const x = (window.innerWidth - width) / 2;
                const y = (window.innerHeight - height) / 4;
                this.windowManager.updatePosition(this.process().processId, { x, y });
            }
        });
    }

    onDragEnded(event: CdkDragEnd) {
        const newPosition = event.source.getFreeDragPosition();
        this.windowManager.updatePosition(this.process().processId, newPosition);
    }

    onFocus() {
        this.windowManager.focusProcess(this.process().processId);
    }

    onClose() {
        this.windowManager.closeProcess(this.process().processId);
    }

    onMinimize() {
        this.windowManager.minimizeProcess(this.process().processId);
    }

    onMaximize() {
        this.windowManager.toggleMaximizeProcess(this.process().processId);
    }
}
