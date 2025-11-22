import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DesktopIcon {
    id: string;
    label: string;
    iconType: 'computer' | 'recycle' | 'folder';
}

@Component({
    selector: 'app-xp-desktop-icon',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="w-20 flex flex-col items-center group cursor-default" (click)="handleClick()">
            <div class="w-12 h-12 mb-1 relative group-active:opacity-70">
                <!-- My Computer Icon -->
                <svg *ngIf="icon().iconType === 'computer'" viewBox="0 0 48 48" class="w-full h-full drop-shadow-md">
                    <path d="M6 8h36v26H6z" fill="#98C8F3" stroke="#285496" stroke-width="1"/>
                    <path d="M9 11h30v20H9z" fill="#204476"/>
                    <path d="M12 38h24v4H12z" fill="#D8D8D8" stroke="#888" stroke-width="1"/>
                    <rect x="14" y="34" width="20" height="4" fill="#B0B0B0"/>
                </svg>

                <!-- Recycle Bin Icon -->
                <svg *ngIf="icon().iconType === 'recycle'" viewBox="0 0 48 48" class="w-full h-full drop-shadow-md">
                    <path d="M14 12h20l-2 28H16z" fill="rgba(255,255,255,0.3)" stroke="#888" stroke-width="1"/>
                    <path d="M14 12h20v-4h-6v-2h-8v2h-6z" fill="#ccc" stroke="#666"/>
                    <path d="M18 18l2 18m8-18l-2 18" stroke="#aaa" stroke-width="2"/>
                </svg>

                <!-- Folder Icon -->
                <svg *ngIf="icon().iconType === 'folder'" viewBox="0 0 48 48" class="w-full h-full drop-shadow-md">
                    <path d="M4 10h16l4 4h20v28H4z" fill="#F3C358" stroke="#C58824"/>
                    <path d="M6 12h14l4 4h18" fill="none" stroke="#fff" stroke-opacity="0.4"/>
                </svg>
            </div>
            <span class="text-white text-xs icon-text-shadow px-1 rounded group-hover:bg-[#0b61ff]/30 group-active:bg-[#0b61ff]/50 border border-transparent group-active:border-dotted group-active:border-white/50">
                {{ icon().label }}
            </span>
        </div>
    `,
    styles: [`
        .icon-text-shadow {
            text-shadow: 0px 1px 2px rgba(0,0,0,0.8);
        }
    `]
})
export class XpDesktopIconComponent {
    icon = input.required<DesktopIcon>();
    iconClick = output<string>();

    handleClick() {
        this.iconClick.emit(this.icon().id);
    }
}
