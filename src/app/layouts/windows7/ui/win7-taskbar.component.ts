import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Win7TaskbarItem {
    id: string;
    title: string;
    icon?: string;
    iconClass?: string;
    isActive: boolean;
}

@Component({
    selector: 'app-win7-taskbar',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="fixed bottom-0 w-full h-10 z-50 flex items-center justify-between px-0 backdrop-blur-md border-t border-white/30 shadow-[0_-2px_10px_rgba(0,0,0,0.5)]" 
         style="background: linear-gradient(to bottom, rgba(12, 41, 66, 0.9) 0%, rgba(12, 41, 66, 0.9) 100%);">
      
      <div class="flex items-center h-full">
        <!-- Start Button -->
        <div class="relative w-12 h-full flex items-center justify-center hover:bg-white/10"
             (click)="startClick.emit()">
          <div class="w-9 h-9 rounded-full start-orb flex items-center justify-center relative z-20 cursor-pointer">
            <i class="fa-brands fa-windows text-white text-lg drop-shadow-[0_0_2px_rgba(0,0,0,0.5)]"></i>
          </div>
          <!-- Start Button Overflow Glow -->
          <div class="absolute bottom-0 left-0 w-full h-full rounded-full bg-blue-400 blur-xl opacity-0 hover:opacity-40 transition duration-500"></div>
        </div>

        <!-- Taskbar Items -->
        <div class="flex items-center ml-2 h-full gap-1">
          
          <!-- Quick Launch Icons -->
          <div class="flex items-center pr-2 border-r border-gray-600/50 h-3/4 mr-1 gap-2 pl-1">
            <i class="fa-brands fa-chrome text-lg text-gray-300 hover:text-white cursor-pointer hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] transition"></i>
            <i class="fa-regular fa-folder text-lg text-yellow-500 hover:brightness-125 cursor-pointer hover:drop-shadow-[0_0_5px_rgba(255,255,200,0.5)] transition"></i>
          </div>

          <!-- Active Apps -->
          @for (item of items; track item.id) {
            <div 
              [class.bg-white/10]="item.isActive"
              class="h-full w-12 hover:bg-white/10 border border-transparent hover:border-white/20 rounded mx-0.5 flex items-center justify-center relative group cursor-pointer shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]"
              (click)="itemClick.emit(item.id)">
              
              @if (item.icon) {
                <img [src]="item.icon" class="w-6 h-6 drop-shadow-md" [alt]="item.title">
              } @else if (item.iconClass) {
                <i [class]="item.iconClass + ' text-blue-300 text-lg drop-shadow-md'"></i>
              }
              
              <!-- Preview Tooltip -->
              <div class="absolute bottom-12 left-0 w-40 h-24 bg-white border border-gray-600 rounded shadow-lg hidden group-hover:block p-1 z-50">
                <div class="bg-blue-900 text-white text-xs p-1 mb-1">{{ item.title }}</div>
                <div class="w-full h-16 bg-gray-200"></div>
              </div>
            </div>
          }

        </div>
      </div>

      <!-- System Tray -->
      <div class="flex items-center h-full pr-4 gap-3 text-white/90 text-xs border-l border-gray-600/50 pl-2 bg-[#0c2942]/50">
        <i class="fa-solid fa-chevron-up text-[10px] cursor-pointer hover:text-white"></i>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/Windows_7_Action_Center_Icon.png" class="h-4 w-auto cursor-pointer" alt="Action Center">
        <i class="fa-solid fa-wifi cursor-pointer"></i>
        <i class="fa-solid fa-volume-high cursor-pointer"></i>
        
        <!-- Clock -->
        <div class="flex flex-col items-center justify-center leading-tight cursor-default w-16 hover:bg-white/10 h-full rounded px-1">
          <span class="font-medium">{{ currentTime }}</span>
          <span class="font-normal">{{ currentDate }}</span>
        </div>
        
        <!-- Show Desktop Button -->
        <div class="w-3 h-full border-l border-gray-500/50 ml-1 bg-white/10 hover:bg-white/30 cursor-pointer shadow-inner"
             (click)="showDesktopClick.emit()"></div>
      </div>
    </div>
  `,
    styles: [`
    .start-orb {
      background: radial-gradient(circle at center, #30d6ff 0%, #0074c5 48%, #00478f 100%);
      box-shadow: 0 0 10px rgba(0, 217, 255, 0.6), inset 0 2px 5px rgba(255,255,255,0.8);
      transition: all 0.2s;
    }
    
    .start-orb:hover {
      filter: brightness(1.2);
      box-shadow: 0 0 15px rgba(0, 217, 255, 0.8), inset 0 2px 5px rgba(255,255,255,1);
    }
  `]
})
export class Win7TaskbarComponent implements OnInit, OnDestroy {
    @Input() items: Win7TaskbarItem[] = [];
    @Output() startClick = new EventEmitter<void>();
    @Output() itemClick = new EventEmitter<string>();
    @Output() showDesktopClick = new EventEmitter<void>();

    currentTime = '';
    currentDate = '';
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
        this.currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        this.currentDate = now.toLocaleDateString();
    }
}
