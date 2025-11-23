import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-win7-start-menu',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div 
      [class.hidden]="!isOpen"
      class="absolute bottom-10 left-0 w-96 h-[450px] bg-white rounded-tr-lg shadow-[0_0_10px_rgba(0,0,0,0.5)] z-50 border border-gray-500/50 flex overflow-hidden aero-glass bg-opacity-90">
      
      <!-- Left Pane -->
      <div class="w-2/3 bg-white p-2 flex flex-col gap-1">
        <!-- Recent Apps -->
        <div class="flex items-center gap-2 p-2 hover:bg-gradient-to-b hover:from-blue-100 hover:to-blue-200 rounded cursor-pointer border border-transparent hover:border-blue-300">
          <i class="fa-brands fa-chrome text-2xl text-red-500"></i>
          <div>
            <div class="font-semibold text-gray-800">Google Chrome</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 hover:bg-gradient-to-b hover:from-blue-100 hover:to-blue-200 rounded cursor-pointer border border-transparent hover:border-blue-300">
          <i class="fa-regular fa-folder-open text-2xl text-yellow-500"></i>
          <div>
            <div class="font-semibold text-gray-800">File Explorer</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 hover:bg-gradient-to-b hover:from-blue-100 hover:to-blue-200 rounded cursor-pointer border border-transparent hover:border-blue-300"
             (click)="notepadClick.emit()">
          <i class="fa-solid fa-pencil text-2xl text-blue-600"></i>
          <div>
            <div class="font-semibold text-gray-800">Notepad</div>
          </div>
        </div>

        <div class="mt-auto pb-1">
          <div class="border-t border-gray-200 mb-2"></div>
          <div class="flex items-center gap-2 px-2 py-1 hover:bg-blue-100 cursor-pointer rounded">
            <span class="font-semibold text-gray-700">All Programs</span>
            <i class="fa-solid fa-caret-right text-gray-500"></i>
          </div>
          <div class="relative mt-2">
            <input 
              type="text" 
              placeholder="Search programs and files" 
              class="w-full border border-gray-300 rounded px-2 py-1 text-gray-500 italic focus:outline-none focus:border-blue-400 shadow-inner">
            <i class="fa-solid fa-magnifying-glass absolute right-2 top-2 text-gray-400"></i>
          </div>
        </div>
      </div>
      
      <!-- Right Pane -->
      <div class="w-1/3 bg-[#dbeaf9] border-l border-white/50 p-2 text-gray-700 text-xs space-y-2 shadow-[inset_10px_0_20px_-10px_rgba(0,0,0,0.1)] flex flex-col">
        <div class="hover:bg-blue-200/50 p-1 rounded cursor-pointer flex items-center gap-2">
          <div class="w-8 h-8 bg-gray-300 rounded-full overflow-hidden border-2 border-white shadow">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="User">
          </div>
          <span class="font-bold text-sm">User</span>
        </div>
        
        <div class="space-y-1 mt-2">
          <div class="hover:bg-blue-200/50 p-1 rounded cursor-pointer">Documents</div>
          <div class="hover:bg-blue-200/50 p-1 rounded cursor-pointer">Pictures</div>
          <div class="hover:bg-blue-200/50 p-1 rounded cursor-pointer">Music</div>
        </div>
        
        <div class="border-t border-gray-300/50 my-2"></div>
        
        <div class="space-y-1">
          <div class="hover:bg-blue-200/50 p-1 rounded cursor-pointer font-semibold"
               (click)="computerClick.emit()">Computer</div>
          <div class="hover:bg-blue-200/50 p-1 rounded cursor-pointer">Control Panel</div>
          <div class="hover:bg-blue-200/50 p-1 rounded cursor-pointer">Devices and Printers</div>
          <div class="hover:bg-blue-200/50 p-1 rounded cursor-pointer">Default Programs</div>
          <div class="hover:bg-blue-200/50 p-1 rounded cursor-pointer">Help and Support</div>
        </div>

        <div class="mt-auto">
          <button class="win-btn w-full py-1.5 px-2 rounded text-gray-800 flex items-center justify-center gap-1 hover:text-white transition-none"
                  (click)="shutdownClick.emit()">
            Shut down
          </button>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .aero-glass {
      background: linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.1) 100%);
      backdrop-filter: blur(12px);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.7), 0 5px 15px rgba(0,0,0,0.5);
      border: 1px solid rgba(255,255,255,0.4);
    }

    .win-btn {
      background: linear-gradient(to bottom, #f2f2f2 0%, #ebebeb 50%, #dddddd 51%, #cfcfcf 100%);
      border: 1px solid #707070;
      box-shadow: inset 0 1px 0 #fff;
    }
    
    .win-btn:hover {
      background: linear-gradient(to bottom, #eaf6fd 0%, #d9f0fc 50%, #bee6fd 51%, #a7d9f5 100%);
      border-color: #3c7fb1;
    }
  `]
})
export class Win7StartMenuComponent {
    @Input() isOpen = false;
    @Output() computerClick = new EventEmitter<void>();
    @Output() notepadClick = new EventEmitter<void>();
    @Output() shutdownClick = new EventEmitter<void>();
}
