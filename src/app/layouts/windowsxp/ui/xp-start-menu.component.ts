import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-xp-start-menu',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div *ngIf="isOpen()" class="absolute bottom-8 left-0 w-[380px] bg-white rounded-t-lg shadow-[2px_-2px_5px_rgba(0,0,0,0.5)] z-50 border-[2px] border-[#245EDB]">
            <!-- Header -->
            <div class="start-menu-blue h-14 rounded-t text-white flex items-center px-2 gap-3 border-b-[2px] border-orange-500 shadow-[inset_0_5px_10px_rgba(255,255,255,0.3)]">
                <div class="w-10 h-10 bg-white rounded border-2 border-white/50 overflow-hidden shadow-inner relative">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=XP" class="w-full h-full bg-[#D3E5FA]" alt="User">
                </div>
                <span class="font-bold text-lg drop-shadow-md tracking-wide">Administrator</span>
            </div>

            <!-- Body -->
            <div class="flex h-[360px]">
                <!-- Left Panel (White) -->
                <div class="w-1/2 bg-white p-1 flex flex-col gap-1 text-sm text-[#333]">
                    <!-- Pinned Apps -->
                    <div class="flex items-center gap-2 p-2 hover:bg-[#316AC5] hover:text-white rounded cursor-pointer group">
                        <div class="w-8 h-8 bg-blue-100 rounded border border-gray-300 flex items-center justify-center text-blue-600 font-bold">IE</div>
                        <div class="flex flex-col">
                            <span class="font-bold">Internet</span>
                            <span class="text-[10px] text-gray-400 group-hover:text-blue-200">Internet Explorer</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 p-2 hover:bg-[#316AC5] hover:text-white rounded cursor-pointer group">
                        <div class="w-8 h-8 bg-gray-100 rounded border border-gray-300 flex items-center justify-center text-gray-600">📧</div>
                        <div class="flex flex-col">
                            <span class="font-bold">E-mail</span>
                            <span class="text-[10px] text-gray-400 group-hover:text-blue-200">Outlook Express</span>
                        </div>
                    </div>

                    <div class="start-menu-orange-line my-1 mx-1"></div>

                    <!-- Recent Apps -->
                    <div class="flex items-center gap-2 p-1 px-2 hover:bg-[#316AC5] hover:text-white rounded cursor-pointer">
                        <span class="text-lg">🎵</span>
                        <span>Windows Media Player</span>
                    </div>
                    <div class="flex items-center gap-2 p-1 px-2 hover:bg-[#316AC5] hover:text-white rounded cursor-pointer">
                        <span class="text-lg">🎨</span>
                        <span>Paint</span>
                    </div>
                    <div class="flex-1"></div>
                    
                    <div class="text-center py-2 font-bold hover:bg-[#316AC5] hover:text-white rounded cursor-pointer text-xs">
                        All Programs ▶
                    </div>
                </div>

                <!-- Right Panel (Light Blue) -->
                <div class="w-1/2 bg-[#D3E5FA] border-l border-[#95BDE7] p-1 flex flex-col gap-1 text-xs text-[#113262]">
                    <div class="font-bold p-1 hover:bg-[#316AC5] hover:text-white rounded cursor-pointer flex items-center gap-2">
                        <span class="text-blue-600 group-hover:text-white">📂</span> My Documents
                    </div>
                    <div class="font-bold p-1 hover:bg-[#316AC5] hover:text-white rounded cursor-pointer flex items-center gap-2">
                        <span class="text-orange-400 group-hover:text-white">🖼</span> My Pictures
                    </div>
                    <div class="font-bold p-1 hover:bg-[#316AC5] hover:text-white rounded cursor-pointer flex items-center gap-2">
                        <span class="text-purple-400 group-hover:text-white">🎵</span> My Music
                    </div>
                    <div class="start-menu-orange-line bg-[#95BDE7] h-[1px] my-1 mx-2"></div>
                    
                    <div class="p-1 hover:bg-[#316AC5] hover:text-white rounded cursor-pointer flex items-center gap-2" (click)="myComputerClick.emit()">
                        <span>💻</span> My Computer
                    </div>
                    <div class="p-1 hover:bg-[#316AC5] hover:text-white rounded cursor-pointer flex items-center gap-2">
                        <span>🌐</span> My Network Places
                    </div>
                    
                    <div class="start-menu-orange-line bg-[#95BDE7] h-[1px] my-1 mx-2"></div>
                    
                    <div class="p-1 hover:bg-[#316AC5] hover:text-white rounded cursor-pointer flex items-center gap-2">
                        <span>⚙️</span> Control Panel
                    </div>
                    <div class="p-1 hover:bg-[#316AC5] hover:text-white rounded cursor-pointer flex items-center gap-2">
                        <span>🖨</span> Printers and Faxes
                    </div>
                    
                    <div class="flex-1"></div>
                    
                    <div class="p-1 hover:bg-[#316AC5] hover:text-white rounded cursor-pointer flex items-center gap-2">
                        <span>❓</span> Help and Support
                    </div>
                    <div class="p-1 hover:bg-[#316AC5] hover:text-white rounded cursor-pointer flex items-center gap-2">
                        <span>🔎</span> Search
                    </div>
                    <div class="p-1 hover:bg-[#316AC5] hover:text-white rounded cursor-pointer flex items-center gap-2">
                        <span>🏃</span> Run...
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div class="start-menu-blue h-10 flex justify-end items-center px-2 gap-2 text-white rounded-b text-xs shadow-inner border-t border-white/30">
                <div class="flex items-center gap-1 hover:bg-blue-600 px-2 py-1 rounded cursor-pointer border border-transparent hover:border-white/30 shadow-none hover:shadow-[inset_0_0_2px_rgba(255,255,255,0.5)]">
                    <div class="w-4 h-4 bg-[#E58D33] rounded-sm border border-white/50 flex items-center justify-center">🔑</div>
                    <span>Log Off</span>
                </div>
                <div class="flex items-center gap-1 hover:bg-blue-600 px-2 py-1 rounded cursor-pointer border border-transparent hover:border-white/30 shadow-none hover:shadow-[inset_0_0_2px_rgba(255,255,255,0.5)]">
                    <div class="w-4 h-4 bg-[#E04C38] rounded-sm border border-white/50 flex items-center justify-center text-[8px]">⏻</div>
                    <span>Turn Off Computer</span>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .start-menu-blue {
            background: linear-gradient(to bottom, #1766CA 0%, #3B79C7 100%);
        }

        .start-menu-orange-line {
            background: linear-gradient(to right, rgba(0,0,0,0) 0%, #E55C00 10%, #E55C00 90%, rgba(0,0,0,0) 100%);
            height: 1px;
        }
    `]
})
export class XpStartMenuComponent {
    isOpen = input.required<boolean>();
    myComputerClick = output<void>();
}
