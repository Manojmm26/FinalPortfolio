import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DesktopComponent, DesktopIcon } from '../../core/components/desktop/desktop.component';
import { TaskbarComponent, TaskbarApp } from '../../core/components/taskbar/taskbar.component';
import { StartMenuComponent } from '../../core/components/start-menu/start-menu.component';
import { SystemTrayComponent } from '../../core/components/system-tray/system-tray.component';
import { Win11WindowComponent } from './ui/win11-window.component';

@Component({
    selector: 'app-windows11-layout',
    standalone: true,
    imports: [
        CommonModule,
        DragDropModule,
        DesktopComponent,
        TaskbarComponent,
        StartMenuComponent,
        SystemTrayComponent,
        Win11WindowComponent
    ],
    templateUrl: './windows11-layout.component.html',
    styleUrls: ['./windows11-layout.component.css']
})
export class Windows11LayoutComponent {
    isStartMenuOpen = false;
    isActionCenterOpen = false;
    isCalendarOpen = false;

    // Window States
    isExplorerOpen = false;
    isExplorerMinimized = false;

    // Data
    desktopIcons: DesktopIcon[] = [
        { id: 'pc', label: 'This PC', iconUrl: 'https://img.icons8.com/color/48/000000/this-pc.png', action: () => this.toggleWindow('explorer') },
        { id: 'recycle', label: 'Recycle Bin', iconUrl: 'https://img.icons8.com/color/48/000000/trash--v1.png' },
        { id: 'edge', label: 'Microsoft Edge', iconUrl: 'https://img.icons8.com/color/48/000000/ms-edge-new.png', action: () => this.openEdge() }
    ];

    taskbarApps: TaskbarApp[] = [
        { id: 'start', iconUrl: '', isOpen: false, isActive: false }, // Handled separately in template but keeping structure if needed
        { id: 'search', iconUrl: 'https://img.icons8.com/fluency/48/000000/search.png', isOpen: false, isActive: false },
        { id: 'explorer', iconUrl: 'https://img.icons8.com/fluency/48/000000/folder-invoices--v1.png', isOpen: false, isActive: false, action: () => this.toggleWindow('explorer') },
        { id: 'edge', iconUrl: 'https://img.icons8.com/color/48/000000/ms-edge-new.png', isOpen: false, isActive: false, action: () => this.openEdge() },
        { id: 'store', iconUrl: 'https://img.icons8.com/fluency/48/000000/microsoft-store.png', isOpen: false, isActive: false }
    ];

    get activeTaskbarApps(): TaskbarApp[] {
        // Map state to apps
        return this.taskbarApps.map(app => {
            if (app.id === 'explorer') {
                return { ...app, isOpen: this.isExplorerOpen || this.isExplorerMinimized, isActive: this.isExplorerOpen };
            }
            return app;
        }).filter(app => app.id !== 'start'); // Start button is separate
    }

    toggleMenu(menu: 'start' | 'action' | 'calendar') {
        // Close others
        if (menu !== 'start') this.isStartMenuOpen = false;
        if (menu !== 'action') this.isActionCenterOpen = false;
        if (menu !== 'calendar') this.isCalendarOpen = false;

        switch (menu) {
            case 'start':
                this.isStartMenuOpen = !this.isStartMenuOpen;
                break;
            case 'action':
                this.isActionCenterOpen = !this.isActionCenterOpen;
                break;
            case 'calendar':
                this.isCalendarOpen = !this.isCalendarOpen;
                break;
        }
    }

    toggleWindow(windowId: string) {
        if (windowId === 'explorer') {
            if (this.isExplorerMinimized) {
                this.isExplorerMinimized = false;
                this.isExplorerOpen = true;
            } else {
                this.isExplorerOpen = !this.isExplorerOpen;
            }
        }
    }

    minimizeWindow(windowId: string) {
        if (windowId === 'explorer') {
            this.isExplorerMinimized = true;
            this.isExplorerOpen = false;
        }
    }

    closeWindow(windowId: string) {
        if (windowId === 'explorer') {
            this.isExplorerOpen = false;
            this.isExplorerMinimized = false;
        }
    }

    maximizeWindow(windowId: string) {
        // Placeholder for maximize logic
        console.log('Maximize', windowId);
    }

    openEdge() {
        window.open('https://microsoft.com/edge', '_blank');
    }

    launchApp(appName: string) {
        console.log('Launch app:', appName);
        this.isStartMenuOpen = false;
        // Add logic to open specific apps
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
        const target = event.target as HTMLElement;
        if (target.classList.contains('wallpaper') || target.classList.contains('desktop-grid')) {
            this.isStartMenuOpen = false;
            this.isActionCenterOpen = false;
            this.isCalendarOpen = false;
        }
    }
}
