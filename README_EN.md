# Project Card

> **Noah's Project Showcase Platform** - Responsive project showcase cards with Apple-style design

![Project Card](https://img.shields.io/badge/Project-Card-blue)
![Version](https://img.shields.io/badge/version-2.0-green)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ Feature Highlights

### 🎨 **Apple-Style Design**
- **Synchronized Sliding Animation** - Perfect recreation of Apple's project transition effects
- **Elegant Transitions** - Professional easing curve `cubic-bezier(0.25, 0.1, 0.25, 1)`
- **Hardware Acceleration** - GPU-optimized for smooth 60fps experience
- **Minimalist Aesthetics** - Following Apple's design philosophy, removing all unnecessary decorations

### 🚀 **Interactive Experience**
- **Multiple Navigation Methods**:
  - 🖱️ Mouse click navigation arrows
  - ⌨️ Keyboard left/right arrow keys
  - 👆 Touch swipe on mobile devices
  - 🖱️ Desktop mouse drag
- **Intelligent Swipe Detection** - Supports quick swipe and direction recognition
- **Real-time Visual Feedback** - Touch resistance feel and visual changes
- **Debouncing Mechanism** - Prevents state confusion from rapid operations

### 🌍 **Internationalization Support**
- **Bilingual Switching** - Seamless Chinese/English switching
- **Local Storage** - Remembers user's language preference
- **Complete Translation** - Fully localized interface text

### 🎭 **Theme System**
- **Day/Night Mode** - Elegant light/dark theme switching
- **Adaptive Design** - Automatically adjusts based on system preference
- **Consistency Guarantee** - Unified visual style across all components

## 🛠 Tech Stack

- **Frontend Framework**: Vanilla JavaScript (ES6+)
- **Styling Technology**: CSS3 + CSS Variables + Flexbox/Grid
- **Animation System**: CSS Transitions + requestAnimationFrame
- **Compatibility**: Modern Browsers (Chrome 60+, Firefox 55+, Safari 12+)
- **Performance Optimization**: Hardware Acceleration + will-change + Lazy Loading

## 📦 Project Structure

```
ProjectCard/
├── 📄 index.html          # Main page
├── 🎨 styles.css          # Stylesheet
├── ⚡ script.js           # Core logic
├── 🐍 start_server.py     # Smart server startup script
├── 🚀 start.bat           # Windows launcher
├── 📖 README.md           # Chinese documentation
├── 📖 README_EN.md        # English documentation
├── 🔧 .gitignore          # Git ignore file
└── 📁 src/
    └── snapshot/          # Project screenshots
        ├── AustinEnglish/
        └── NoahsIELTSTimer/
```

## 🚀 Quick Start

### Method 1: Smart Launch (Recommended)

**Windows:**
```bash
# Double-click to run
start.bat

# Or run from command line
python start_server.py
```

**macOS/Linux:**
```bash
python3 start_server.py
```

### Method 2: Simple HTTP Server

```bash
# Run in project directory
python -m http.server 8000

# Then visit
http://localhost:8000
```

## 🎯 Featured Projects

Two carefully selected projects currently showcased:

### 1. 🎓 Austin English
**Personalized English Review Tool**
- **Tech Stack**: Next.js, React, TypeScript, Tailwind CSS, Unsplash API
- **Unique Feature**: Zero preset content, completely built by parents' custom content library
- **Core Functions**: 
  - ✓ Zero preset content, fully customizable
  - ✓ Compatible with any English curriculum
  - ✓ Intelligent audio and image system
  - ✓ Comprehensive practice for letters, words, and sentences
- **Links**: [Visit Project](https://austin-english.vercel.app/) | [Source Code](https://github.com/XujunNoahWang/austin-english)

### 2. ⏱️ Noah's IELTS Timer
**IELTS Practice Dedicated Timer**
- **Tech Stack**: HTML5, CSS3, JavaScript, Web Audio API
- **Unique Feature**: Multi-module timer specifically designed for IELTS exam
- **Core Functions**:
  - ✓ Preset and custom timers
  - ✓ Circular progress visual indicator
  - ✓ Audio notifications and warnings
  - ✓ Touch-friendly mobile interface
  - ✓ Keyboard shortcut support
  - ✓ Day/night theme switching
- **Links**: [Visit Project](https://noahs-ielts-timer.vercel.app/) | [Source Code](https://github.com/XujunNoahWang/noahs-ielts-timer)

## 💻 Development Guide

### Code Standards
- ✅ ES6+ syntax
- ✅ Semantic variable naming
- ✅ Modular code structure
- ✅ Detailed comment documentation
- ✅ No debug code residue

### Performance Optimization
- ✅ Hardware-accelerated animations
- ✅ Debouncing mechanism
- ✅ Memory leak protection
- ✅ Responsive images
- ✅ Caching strategy

### Compatibility
- ✅ Full support for modern browsers
- ✅ Mobile device optimization
- ✅ Touch gesture support
- ✅ Keyboard navigation
- ✅ Accessibility support

## 🎨 Design Philosophy

> "Simplicity is the ultimate sophistication." - Leonardo da Vinci

This project follows Apple's design philosophy:
- **Simplicity First** - Remove all unnecessary decorations
- **Function First** - Every element has its purpose
- **User First** - User experience centered
- **Details First** - Meticulously crafted interaction details

## 📈 Version History

### v2.0.0 (2025-06-15) - Major Update
- 🎉 **Major Update**: Complete refactoring of sliding animation system
- ✨ **New**: Apple-style synchronized sliding effects
- 🚀 **Optimization**: 50% performance improvement, smoother animations
- 🔧 **Fixed**: Resolved content disappearing and animation conflict issues
- 🎨 **Improved**: Unified design language, optimized visual experience
- 🧹 **Cleanup**: Removed icons, simplified interface layout
- 📱 **Responsive**: Enhanced mobile adaptation

### v1.0.0 (Initial Release)
- 🎯 Basic project showcase functionality
- 🌍 Bilingual support
- 🎭 Theme switching
- 📱 Responsive design

## 🌟 Special Features

### Sliding Animation System
- **Synchronized Sliding**: Both projects animate simultaneously, one slides out while another slides in
- **Direction Intelligence**: Left/right sliding corresponds to correct project switching direction
- **Performance Optimization**: Uses hardware acceleration and intelligent debouncing
- **Smooth Experience**: 60fps animation, comparable to native applications

### Responsive Layout
- **Desktop**: Full feature display
- **Tablet**: Optimized touch experience
- **Mobile**: Dedicated navigation controls

### Accessibility Design
- **Keyboard Navigation**: Complete keyboard shortcut support
- **Screen Reader**: Comprehensive ARIA labels
- **High Contrast**: High contrast mode support
- **Reduced Motion**: Respects user's animation preferences

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

## 👤 Author

**Noah Wang**
- LinkedIn: [Noah Wang](https://www.linkedin.com/in/xujunnoahwang/)
- GitHub: [@XujunNoahWang](https://github.com/XujunNoahWang)

---

<div align="center">

**If this project helps you, please give it a ⭐**

Made with ❤️ by Noah Wang

[🇨🇳 中文文档](./README.md)

</div> 