# Project TODO List

This document tracks the specific, actionable tasks for the "Windows Time Machine" project.

## Core Functionality

- [ ] **Window Resizing:** Implement resizing handles on window corners and edges.
- [ ] **Start Menu:**
    - [ ] Create a functional Start Menu component.
    - [ ] Populate it with shortcuts to open applications.
    - [ ] Style the Start Menu according to the active theme.
- [ ] **Desktop Icons:**
    - [ ] Enable selection of desktop icons (single and marquee/box selection).
    - [ ] Allow dragging and dropping icons to reposition them on the desktop.
- [ ] **Right-Click Context Menus:**
    - [ ] Implement a context menu for the desktop (e.g., "New Folder", "Change Background").
    - [ ] Implement context menus for icons and taskbar items.
- [ ] **File System Simulation:**
    - [ ] Create a virtual file system service.
    - [ ] Implement basic concepts like Desktop, My Documents, and folders.
    - [ ] Allow apps like Notepad to "save" and "open" files from this virtual system.

## UI/UX Enhancements

- [ ] **Animations:**
    - [ ] Add animations for opening/closing windows.
    - [ ] Create a "genie" effect for minimizing windows to the taskbar.
    - [ ] Animate the maximizing/restoring transition.
- [ ] **Theme Fidelity:**
    - [ ] Refine button styles, fonts, and icons for each OS theme to be more accurate.
    - [ ] Add theme-specific sounds for system events (startup, shutdown, errors).
- [ ] **Boot/Login Sequence:**
    - [ ] Create a boot-up screen animation for each OS.
    - [ ] Add a mock login screen.
- [ ] **Taskbar Improvements:**
    - [ ] Show window previews on hover for Win7 and later themes.
    - [ ] Implement "active" and "hover" states more accurately for each theme.
- [ ] **State Persistence:**
    - [ ] Use `localStorage` to remember the active theme across sessions.
    - [ ] Remember the position and size of windows when they are closed and reopened.

## New Applications

- [ ] **File Explorer:** A basic file explorer to navigate the virtual file system.
- [ ] **Minesweeper:** The classic game, with theme-aware styling.
- [ ] **Paint:** A simple drawing application with basic tools (pencil, brush, shapes).
- [ ] **Internet Explorer (Mock):** A mock browser that can display a few static HTML pages hosted within the app.
- [ ] **Calculator:** A standard calculator application.

## Bugs & Refactoring

- [ ] **Z-Index Management:** Review and potentially refactor z-index logic to be more robust, especially with hundreds of windows.
- [ ] **Mobile View:** Improve the "Tablet Mode" to be more than just maximized windows. Consider a different UI paradigm for small screens.
- [ ] **Performance:** Profile and optimize performance, especially when many windows are open and moving.
- [ ] **Accessibility:** Add ARIA attributes and ensure the application can be navigated using a keyboard.
