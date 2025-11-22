import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XpDesktopIconComponent, DesktopIcon } from './ui/xp-desktop-icon.component';
import { XpStartMenuComponent } from './ui/xp-start-menu.component';
import { XpTaskbarComponent, TaskbarItem } from './ui/xp-taskbar.component';
import { XpWindowComponent } from './ui/xp-window.component';

@Component({
    selector: 'app-windowsxp-layout',
    standalone: true,
    imports: [
        CommonModule,
        XpDesktopIconComponent,
        XpStartMenuComponent,
        XpTaskbarComponent,
        XpWindowComponent
    ],
    templateUrl: './windowsxp-layout.component.html',
    styleUrls: ['./windowsxp-layout.component.css']
})
export class WindowsXpLayoutComponent {
    isStartMenuOpen = false;
    isMyComputerOpen = false;
    isMyComputerMinimized = false;

    desktopIcons: DesktopIcon[] = [
        { id: 'my-computer', label: 'My Computer', iconType: 'computer' },
        { id: 'recycle-bin', label: 'Recycle Bin', iconType: 'recycle' },
        { id: 'my-documents', label: 'My Documents', iconType: 'folder' }
    ];

    get taskbarItems(): TaskbarItem[] {
        const items: TaskbarItem[] = [];

        if (this.isMyComputerOpen || this.isMyComputerMinimized) {
            items.push({
                id: 'my-computer',
                title: 'My Computer',
                icon: 'computer',
                isActive: this.isMyComputerOpen
            });
        }

        return items;
    }

    toggleStartMenu() {
        this.isStartMenuOpen = !this.isStartMenuOpen;
    }

    openMyComputer() {
        if (this.isMyComputerMinimized) {
            this.isMyComputerMinimized = false;
            this.isMyComputerOpen = true;
        } else {
            this.isMyComputerOpen = true;
        }
        this.isStartMenuOpen = false;
    }

    closeMyComputer() {
        this.isMyComputerOpen = false;
        this.isMyComputerMinimized = false;
    }

    minimizeMyComputer() {
        this.isMyComputerOpen = false;
        this.isMyComputerMinimized = true;
    }

    maximizeMyComputer() {
        // Placeholder for maximize functionality
        console.log('Maximize My Computer');
    }

    onTaskbarItemClick(itemId: string) {
        if (itemId === 'my-computer') {
            if (this.isMyComputerMinimized) {
                this.isMyComputerMinimized = false;
                this.isMyComputerOpen = true;
            } else {
                this.minimizeMyComputer();
            }
        }
    }

    onDesktopIconClick(iconId: string) {
        if (iconId === 'my-computer') {
            this.openMyComputer();
        }
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
        const target = event.target as HTMLElement;

        // Close start menu when clicking outside
        if (this.isStartMenuOpen) {
            const startMenu = document.querySelector('app-xp-start-menu');
            const startButton = document.querySelector('.start-btn-bg');

            if (startMenu && !startMenu.contains(target) && startButton && !startButton.contains(target)) {
                this.isStartMenuOpen = false;
            }
        }
    }
}
