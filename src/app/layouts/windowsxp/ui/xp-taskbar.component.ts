import { Component, input, output, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TaskbarItem {
    id: string;
    title: string;
    icon: string;
    isActive: boolean;
}

@Component({
    selector: 'app-xp-taskbar',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="taskbar-bg h-[30px] w-full flex items-center justify-between px-0 fixed bottom-0 z-50 shadow-lg select-none">
            
            <!-- Start Button -->
            <div class="relative h-full z-50">
                <button 
                    (click)="startClick.emit()"
                    class="start-btn-bg h-full px-2 pr-4 flex items-center gap-1 rounded-r-[15px] cursor-pointer transition-all active:brightness-90 active:translate-y-[1px]"
                    style="clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%); width: 100px;"
                >
                    <!-- Windows Logo (SVG) -->
                    <svg viewBox="0 0 44 44" width="18" height="18" class="drop-shadow-sm filter brightness-110 ml-1">
                        <path d="M0 6.25L17.875 3.875V20.375H0V6.25Z" fill="#F34F1C"/>
                        <path d="M20.625 3.5L43.75 0V20.375H20.625V3.5Z" fill="#7FBC00"/>
                        <path d="M0 23.125H17.875V39.875L0 37.375V23.125Z" fill="#00A1F1"/>
                        <path d="M20.625 23.125H43.75V43.75L20.625 40.125V23.125Z" fill="#FFBA01"/>
                    </svg>
                    <span class="text-white font-bold italic text-lg tracking-wide font-sans" style="text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">start</span>
                </button>
            </div>

            <!-- Taskbar Items (Open Windows) -->
            <div class="flex-1 flex px-2 gap-1 overflow-hidden justify-start items-center h-full">
                <!-- Separator -->
                <div class="w-[2px] h-[20px] bg-[#13388C] border-r border-[#4D85D9] opacity-50 mr-1"></div>

                <!-- Active Task Items -->
                <div *ngFor="let item of items()" 
                     (click)="itemClick.emit(item.id)"
                     class="w-40 hover:bg-[#386EDE] active:bg-[#1941A5] cursor-pointer rounded-[2px] h-[24px] flex items-center px-2 gap-2 shadow-[inset_1px_1px_0px_rgba(255,255,255,0.1)] border-t border-l border-[#3B75D5] border-b border-r border-[#112F75]"
                     [class.bg-[#1F50B8]]="item.isActive"
                     [class.bg-[#245EDB]]="!item.isActive">
                    <svg viewBox="0 0 48 48" class="w-4 h-4 min-w-[16px]">
                        <path d="M6 8h36v26H6z" fill="#98C8F3" stroke="#285496"/>
                    </svg>
                    <span class="text-white text-xs truncate w-full font-sans">{{ item.title }}</span>
                </div>
            </div>

            <!-- System Tray -->
            <div class="h-full bg-[#0F86DB] border-l border-[#0E2D6F] shadow-[inset_2px_2px_2px_rgba(0,0,0,0.2)] px-3 flex items-center gap-2 text-white text-xs font-sans min-w-[100px]">
                <span class="cursor-pointer hover:opacity-80">🛡️</span>
                <span class="cursor-pointer hover:opacity-80">🔊</span>
                <span class="ml-1 cursor-default">{{ currentTime }}</span>
            </div>
        </div>
    `,
    styles: [`
        .taskbar-bg {
            background: linear-gradient(to bottom, #245EDB 0%, #3987E3 5%, #245EDB 10%, #2055CC 50%, #1941A5 100%);
            border-top: 1px solid #3E85E7;
        }
        
        .start-btn-bg {
            background: linear-gradient(to bottom, #3C9D4B 0%, #66B136 10%, #367B26 100%);
            box-shadow: inset 1px 1px 0px rgba(255,255,255,0.4), 1px 1px 2px rgba(0,0,0,0.5);
            border-radius: 0 15px 15px 0;
        }

        .start-btn-bg:hover {
            background: linear-gradient(to bottom, #4CB65C 0%, #7AD248 10%, #439631 100%);
        }
    `]
})
export class XpTaskbarComponent implements OnInit, OnDestroy {
    items = input<TaskbarItem[]>([]);
    startClick = output<void>();
    itemClick = output<string>();

    currentTime = '';
    private intervalId?: number;

    ngOnInit() {
        this.updateClock();
        this.intervalId = window.setInterval(() => this.updateClock(), 1000);
    }

    ngOnDestroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    private updateClock() {
        const now = new Date();
        this.currentTime = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    }
}
