import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Win7DesktopIcon {
    id: string;
    label: string;
    iconUrl?: string;
    iconType?: 'computer' | 'recycle' | 'folder' | 'notepad';
}

@Component({
    selector: 'app-win7-desktop-icon',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div 
      class="group w-20 flex flex-col items-center cursor-pointer hover:bg-white/20 border border-transparent hover:border-white/30 rounded p-1"
      (click)="onClick()"
      (dblclick)="onDoubleClick()">
      
      @if (icon.iconUrl) {
        <img [src]="icon.iconUrl" class="w-10 h-10 mb-1 drop-shadow-lg" [alt]="icon.label">
      } @else if (icon.iconType === 'computer') {
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Computer-blue.svg/1024px-Computer-blue.svg.png" 
             class="w-10 h-10 mb-1 drop-shadow-lg" [alt]="icon.label">
      } @else if (icon.iconType === 'recycle') {
        <img src="https://icon-library.com/images/recycle-bin-icon-windows-7/recycle-bin-icon-windows-7-5.jpg" 
             class="w-10 h-10 mb-1 drop-shadow-lg rounded-full bg-transparent" [alt]="icon.label">
      } @else if (icon.iconType === 'notepad') {
        <div class="w-10 h-10 bg-white border border-gray-400 flex items-center justify-center shadow-lg mb-1">
          <i class="fa-solid fa-pencil text-blue-600 text-xl"></i>
        </div>
      } @else if (icon.iconType === 'folder') {
        <i class="fa-regular fa-folder text-yellow-500 text-5xl mb-1 drop-shadow-lg"></i>
      }
      
      <span class="text-white text-center leading-tight icon-text-shadow group-hover:text-shadow-none text-xs">
        {{ icon.label }}
      </span>
    </div>
  `,
    styles: [`
    .icon-text-shadow {
      text-shadow: 0 1px 3px rgba(0,0,0,0.8);
    }
  `]
})
export class Win7DesktopIconComponent {
    @Input({ required: true }) icon!: Win7DesktopIcon;
    @Output() iconClick = new EventEmitter<string>();
    @Output() iconDoubleClick = new EventEmitter<string>();

    onClick() {
        this.iconClick.emit(this.icon.id);
    }

    onDoubleClick() {
        this.iconDoubleClick.emit(this.icon.id);
    }
}
