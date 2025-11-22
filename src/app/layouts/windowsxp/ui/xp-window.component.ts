import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragEnd, DragDropModule } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-xp-window',
    standalone: true,
    imports: [CommonModule, DragDropModule],
    templateUrl: './xp-window.component.html',
    styles: [`
        .window-title-bar {
            background: linear-gradient(to bottom, #0058EE 0%, #3593FF 4%, #288EFF 10%, #127DEE 90%, #0351E7 100%);
            text-shadow: 1px 1px 1px #0f387d;
            border-radius: 8px 8px 0 0;
        }

        :host ::ng-deep ::-webkit-scrollbar {
            width: 16px;
            height: 16px;
            background: #ECE9D8;
        }
        
        :host ::ng-deep ::-webkit-scrollbar-thumb {
            background-color: #CDD2E9;
            border: 1px solid white;
            box-shadow: inset 1px 0 0 #F3F4F9, inset 0 1px 0 #F3F4F9;
        }
        
        :host ::ng-deep ::-webkit-scrollbar-button {
            background-color: #ECE9D8;
            width: 16px;
            height: 16px;
            border: 1px solid #fff;
            box-shadow: inset -1px -1px 0 #ACA899, inset 1px 1px 0 #fff;
        }
    `]
})
export class XpWindowComponent {
    isOpen = input.required<boolean>();
    title = input<string>('My Computer');

    close = output<void>();
    minimize = output<void>();
    maximize = output<void>();
    dragEnd = output<{ x: number; y: number }>();

    onDragEnded(event: CdkDragEnd) {
        const position = event.source.getFreeDragPosition();
        this.dragEnd.emit(position);
    }
}
