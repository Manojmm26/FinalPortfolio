# Project Roadmap & TODOs

This document outlines the development plan for the Windows Time Machine Portfolio. The goal is to create a polished, professional showcase of frontend engineering skills.

## 🚀 Phase 1: Portfolio Essentials (High Priority)

These features are critical for the "Portfolio" aspect of the project.

- [ ] **"About Me" Application:**
    - [ ] Create a `ProfileComponent` that acts as a native window.
    - [ ] Display bio, skills, experience, and social links.
    - [ ] Style it to look like a system settings or profile page.
- [ ] **"Projects" Explorer:**
    - [ ] Implement a virtual file explorer view.
    - [ ] List projects as "folders" or "files".
    - [ ] Clicking a project opens a detailed view (or a mock browser window with the live site).
- [ ] **Resume Viewer:**
    - [ ] Add a PDF viewer or a rich-text representation of the resume.
    - [ ] Add a "Download" button.
- [ ] **Contact App:**
    - [ ] A simple "Mail" app interface for sending messages (or copying email address).

## 🎨 Phase 2: The Windows 11 Experience (Current Focus)

Refining the Windows 11 layout to be the default "wow" factor.

- [x] **Basic Layout:** Desktop, Taskbar, Wallpaper.
- [x] **Window Dragging:** Implemented using CDK DragDrop.
- [ ] **Start Menu Interactivity:**
    - [ ] Make the search bar functional (filter apps).
    - [ ] Make pinned apps clickable to open actual windows.
- [ ] **Action Center:**
    - [ ] Make the sliders interactive (even if they don't change system volume).
    - [ ] Toggle buttons (WiFi, Bluetooth) should have active states.
- [ ] **Taskbar Polish:**
    - [ ] Show active indicators for open apps.
    - [ ] Minimize/Restore animations.

## 🛠 Phase 3: Architecture & Engineering (The "Senior" Touch)

Tasks that demonstrate code quality and architectural understanding.

- [ ] **Unit Testing:**
    - [ ] Add Jest/Jasmine tests for `WindowManagerService`.
    - [ ] Test the `Process` state logic.
- [ ] **Accessibility (a11y):**
    - [ ] Ensure full keyboard navigation (Tab support in Start Menu and Taskbar).
    - [ ] Add ARIA labels to all interactive elements.
- [ ] **Performance:**
    - [ ] Audit bundle size.
    - [ ] Optimize image loading (lazy loading for theme assets).

## 🔮 Phase 4: Time Travel (Theming)

Expanding the "Time Machine" concept.

- [ ] **Theme Switcher UI:** A dedicated "Time Machine" app or widget to switch eras.
- [ ] **Windows 95/98 Theme:** Retro pixel fonts, bevels, and grey backgrounds.
- [ ] **Windows XP Theme:** Bliss wallpaper, blue taskbar, rounded corners.
- [ ] **Windows 7 Theme:** Aero glass effect (backdrop-filter), glossy UI.

## 🐛 Known Issues / Bugs

- [ ] **Z-Index:** Clicking a window should always bring it to the front (check `mousedown` logic).
- [ ] **Mobile View:** Windows 11 layout needs a specific mobile adaptation (hide windows, show app grid).
