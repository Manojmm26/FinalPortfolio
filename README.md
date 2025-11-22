# Windows Time Machine Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white" alt="RxJS" />
</div>

<br />

**Welcome to my interactive portfolio.** 

This project is not just a static website; it's a fully functional **Operating System Simulation** built with modern web technologies. It demonstrates my ability to architect complex frontend applications, manage state effectively, and create immersive user experiences.

## 🚀 Concept: The Time Machine

The core feature of this portfolio is the ability to **"travel through time"**. Users can switch between different eras of the Windows operating system (Windows 95, XP, 7, 10, and 11), completely transforming the UI/UX while maintaining the underlying application state.

## 🛠 Technical Highlights

As a Senior Frontend Developer, I built this project to showcase advanced patterns and best practices:

- **Modern Angular Architecture:** Built with the latest Angular features, including **Standalone Components** and **Signals** for fine-grained reactivity.
- **State Management:** A custom, lightweight state management solution using Angular Signals to handle window z-indexing, process management, and theme switching without the overhead of external libraries like NgRx.
- **Dynamic Component Rendering:** Applications are rendered dynamically based on a registry pattern, allowing for scalable app development.
- **Performance Optimization:** utilized `OnPush` change detection and optimized DOM manipulations to ensure smooth 60fps window dragging and animations.
- **CSS Variables & Theming:** A robust theming engine that swaps CSS variables at the root level to instantly re-skin the entire application.

## 🌟 Key Features

- **Window Management:** Draggable, resizable, minimizable, and maximizable windows with proper z-index stacking.
- **Taskbar & Start Menu:** Fully functional taskbar with dynamic app grouping and Start Menu integration.
- **File System Simulation:** A virtual in-memory file system to manage "files" and "folders" within the portfolio.
- **Theme Switching:** Instant switching between Windows 95, XP, 7, 10, and 11.
- **Responsive Design:** Adapts to different screen sizes (with a special "Tablet Mode" for mobile).

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/windows-time-machine.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 👨‍💻 About Me

I am a passionate Senior Frontend Developer with a knack for building performant, scalable, and beautiful web applications. This project serves as a playground for my experiments with UI engineering and component architecture.

---

*Note: This project is a tribute to the history of Windows and is for educational/portfolio purposes only. Windows is a trademark of Microsoft.*
