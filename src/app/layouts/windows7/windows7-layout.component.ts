import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Win7DesktopIconComponent, Win7DesktopIcon } from './ui/win7-desktop-icon.component';
import { Win7StartMenuComponent } from './ui/win7-start-menu.component';
import { Win7TaskbarComponent, Win7TaskbarItem } from './ui/win7-taskbar.component';
import { Win7WindowComponent } from './ui/win7-window.component';

@Component({
    selector: 'app-windows7-layout',
    standalone: true,
    imports: [
        CommonModule,
        Win7DesktopIconComponent,
        Win7StartMenuComponent,
        Win7TaskbarComponent,
        Win7WindowComponent
    ],
    templateUrl: './windows7-layout.component.html',
    styleUrls: ['./windows7-layout.component.css']
})
export class Windows7LayoutComponent {
    isStartMenuOpen = false;
    isComputerOpen = false;
    isComputerMinimized = false;
    isNotepadOpen = false;
    isNotepadMinimized = false;

    desktopIcons: Win7DesktopIcon[] = [
        { id: 'computer', label: 'Computer', iconType: 'computer' },
        { id: 'recycle-bin', label: 'Recycle Bin', iconType: 'recycle' },
        { id: 'notepad', label: 'Notepad', iconType: 'notepad' }
    ];

    get taskbarItems(): Win7TaskbarItem[] {
        const items: Win7TaskbarItem[] = [];

        if (this.isComputerOpen || this.isComputerMinimized) {
            items.push({
                id: 'computer',
                title: 'Computer',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Computer-blue.svg/1024px-Computer-blue.svg.png',
                isActive: this.isComputerOpen
            });
        }

        if (this.isNotepadOpen || this.isNotepadMinimized) {
            items.push({
                id: 'notepad',
                title: 'Notepad',
                iconClass: 'fa-solid fa-pencil',
                isActive: this.isNotepadOpen
            });
        }

        return items;
    }

    toggleStartMenu() {
        this.isStartMenuOpen = !this.isStartMenuOpen;
    }

    openComputer() {
        if (this.isComputerMinimized) {
            this.isComputerMinimized = false;
            this.isComputerOpen = true;
        } else {
            this.isComputerOpen = true;
        }
        this.isStartMenuOpen = false;
    }

    closeComputer() {
        this.isComputerOpen = false;
        this.isComputerMinimized = false;
    }

    minimizeComputer() {
        this.isComputerOpen = false;
        this.isComputerMinimized = true;
    }

    maximizeComputer() {
        console.log('Maximize Computer');
    }

    openNotepad() {
        if (this.isNotepadMinimized) {
            this.isNotepadMinimized = false;
            this.isNotepadOpen = true;
        } else {
            this.isNotepadOpen = true;
        }
        this.isStartMenuOpen = false;
    }

    closeNotepad() {
        this.isNotepadOpen = false;
        this.isNotepadMinimized = false;
    }

    minimizeNotepad() {
        this.isNotepadOpen = false;
        this.isNotepadMinimized = true;
    }

    maximizeNotepad() {
        console.log('Maximize Notepad');
    }

    onTaskbarItemClick(itemId: string) {
        if (itemId === 'computer') {
            if (this.isComputerMinimized) {
                this.isComputerMinimized = false;
                this.isComputerOpen = true;
            } else {
                this.minimizeComputer();
            }
        } else if (itemId === 'notepad') {
            if (this.isNotepadMinimized) {
                this.isNotepadMinimized = false;
                this.isNotepadOpen = true;
            } else {
                this.minimizeNotepad();
            }
        }
    }

    onDesktopIconDoubleClick(iconId: string) {
        if (iconId === 'computer') {
            this.openComputer();
        } else if (iconId === 'notepad') {
            this.openNotepad();
        }
    }

    minimizeAll() {
        if (this.isComputerOpen) {
            this.minimizeComputer();
        }
        if (this.isNotepadOpen) {
            this.minimizeNotepad();
        }
    }

    onShutdown() {
        alert('Shutting down...');
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
        const target = event.target as HTMLElement;

        // Close start menu when clicking outside
        if (this.isStartMenuOpen) {
            const startMenu = document.querySelector('app-win7-start-menu');
            const startButton = document.querySelector('.start-orb');

            if (startMenu && !startMenu.contains(target) && startButton && !startButton.contains(target)) {
                this.isStartMenuOpen = false;
            }
        }
    }
}
