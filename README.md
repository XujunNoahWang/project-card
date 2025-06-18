# Project Card

<div align="right">
  <a href="#english">🇺🇸 English</a> | <a href="#chinese">🇨🇳 中文</a>
</div>

---

<div id="chinese">

> **Noah的项目展示平台** - 采用苹果风格设计的响应式项目展示卡片

![Project Card](https://img.shields.io/badge/Project-Card-blue)
![Version](https://img.shields.io/badge/version-2.0-green)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ 特性亮点

### 🎨 **苹果风格设计**
- **同步滑动动画** - 完美复刻苹果官网的项目切换效果
- **优雅过渡** - 使用专业的缓动函数 `cubic-bezier(0.25, 0.1, 0.25, 1)`
- **硬件加速** - 利用GPU优化，确保60fps流畅体验
- **简约美学** - 遵循苹果的设计哲学，去除一切不必要的装饰

### 🚀 **交互体验**
- **多种导航方式**：
  - 🖱️ 鼠标点击导航箭头
  - ⌨️ 键盘左右箭头键
  - 👆 移动设备触摸滑动
  - 🖱️ 桌面端鼠标拖拽
- **智能滑动检测** - 支持快速滑动和方向识别
- **实时视觉反馈** - 触摸时的阻力感和视觉变化
- **防抖机制** - 防止快速操作导致的状态混乱

### 🌍 **国际化支持**
- **双语切换** - 中文/英文无缝切换
- **本地化存储** - 记住用户的语言偏好
- **完整翻译** - 界面文本完全本地化

### 🎭 **主题系统**
- **日夜模式** - 优雅的明暗主题切换
- **自适应设计** - 根据系统偏好自动调整
- **一致性保证** - 所有组件统一的视觉风格

## 🛠 技术栈

- **前端框架**: 原生 JavaScript (ES6+)
- **样式技术**: CSS3 + CSS变量 + Flexbox/Grid
- **动画系统**: CSS Transitions + requestAnimationFrame
- **兼容性**: 现代浏览器 (Chrome 60+, Firefox 55+, Safari 12+)
- **性能优化**: 硬件加速 + will-change + 懒加载

## 📦 项目结构

```
ProjectCard/
├── 📄 index.html          # 主页面
├── 🎨 styles.css          # 样式表
├── ⚡ script.js           # 核心逻辑
├── 🐍 start_server.py     # 智能服务器启动脚本
├── 🚀 start.bat           # Windows启动器
├── 📖 README.md           # 中文文档
├── 📖 README_EN.md        # 英文文档
├── 🔧 .gitignore          # Git忽略文件
└── 📁 src/
    └── snapshot/          # 项目截图
        ├── AustinEnglish/
        ├── NoahsIELTSTimer/
        └── QuoteCard/
```

## 🚀 快速开始

### 方法一：智能启动（推荐）

**Windows:**
```bash
# 双击运行
start.bat

# 或命令行运行
python start_server.py
```

**macOS/Linux:**
```bash
python3 start_server.py
```

### 方法二：简单HTTP服务器

```bash
# 在项目目录下运行
python -m http.server 8000

# 然后访问
http://localhost:8000
```

## 🎯 展示项目

当前展示的三个精选项目：

### 1. 🎓 Austin English
**个性化英语复习工具**
- **技术栈**: Next.js, React, TypeScript, Tailwind CSS, Unsplash API
- **特色**: 零预设内容，完全由家长自建学习内容库
- **核心功能**: 
  - ✓ 零预设内容，完全定制化
  - ✓ 配合任何英语课程
  - ✓ 智能音频与图片系统
  - ✓ 字母、单词、句子全方位练习
- **链接**: [访问项目](https://austin-english.vercel.app/) | [源码](https://github.com/XujunNoahWang/austin-english)

### 2. ⏱️ Noah's IELTS Timer
**雅思练习专用计时器**
- **技术栈**: HTML5, CSS3, JavaScript, Web Audio API
- **特色**: 专为雅思考试设计的多模块计时器
- **核心功能**:
  - ✓ 预设和自定义计时器
  - ✓ 圆形进度可视化指示
  - ✓ 音频通知和警告
  - ✓ 触控友好的移动界面
  - ✓ 键盘快捷键支持
  - ✓ 日夜主题切换
- **链接**: [访问项目](https://noahs-ielts-timer.vercel.app/) | [源码](https://github.com/XujunNoahWang/noahs-ielts-timer)

### 3. 💭 Quote Card
**无任何预设语录，只记录你真正喜欢的句子**
- **技术栈**: HTML5, CSS3, JavaScript ES6+
- **特色**: 苹果风格的个人语录管理应用，支持完整的导入导出功能
- **核心功能**:
  - ✓ 苹果风格设计与流畅动画
  - ✓ 无预设语录，用户自建私人语录库
  - ✓ 完整的语录管理功能
  - ✓ 导入导出与云端同步
  - ✓ 中英文双语支持
  - ✓ 日夜主题切换
- **链接**: [访问项目](https://quote-card-by-noah.vercel.app/) | [源码](https://github.com/XujunNoahWang/quote-card)

## 💻 开发指南

### 代码规范
- ✅ ES6+ 语法
- ✅ 语义化变量命名
- ✅ 模块化代码结构
- ✅ 详细注释文档
- ✅ 无调试代码残留

### 性能优化
- ✅ 硬件加速动画
- ✅ 防抖机制
- ✅ 内存泄漏防护
- ✅ 响应式图片
- ✅ 缓存策略

### 兼容性
- ✅ 现代浏览器完全支持
- ✅ 移动设备优化
- ✅ 触摸手势支持
- ✅ 键盘导航
- ✅ 无障碍访问

## 🎨 设计理念

> "简约是复杂的终极形式。" - 达芬奇

本项目遵循苹果的设计哲学：
- **简约至上** - 去除一切不必要的装饰
- **功能至上** - 每个元素都有其存在意义
- **用户至上** - 以用户体验为中心
- **细节至上** - 精雕细琢每个交互细节

## 📈 版本历史

### v2.0.0 (2025-06-15) - 重大更新
- 🎉 **重大更新**: 完全重构滑动动画系统
- ✨ **新增**: 苹果风格同步滑动效果
- �� **优化**: 性能提升50%，动画更流畅
- 🔧 **修复**: 解决内容消失和动画冲突问题
- 🎨 **改进**: 统一设计语言，优化视觉体验
- 🧹 **清理**: 移除图标，简化界面布局
- 📱 **响应式**: 完善移动端适配

### v1.0.0 (初始版本)
- 🎯 基础项目展示功能
- 🌍 双语支持
- 🎭 主题切换
- 📱 响应式设计

## 🌟 特色功能

### 滑动动画系统
- **同步滑动**: 两个项目同时动画，一个滑出一个滑入
- **方向智能**: 左右滑动对应正确的项目切换方向
- **性能优化**: 使用硬件加速和智能防抖
- **流畅体验**: 60fps动画，媲美原生应用

### 响应式布局
- **桌面端**: 完整功能展示
- **平板端**: 优化的触摸体验
- **移动端**: 专门的导航控制

### 无障碍设计
- **键盘导航**: 完整的键盘快捷键支持
- **屏幕阅读器**: 完善的ARIA标签
- **高对比度**: 支持高对比度模式
- **减少动画**: 尊重用户的动画偏好

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 👤 作者

**Noah Wang**
- LinkedIn: [Noah Wang](https://www.linkedin.com/in/xujunnoahwang/)
- GitHub: [@XujunNoahWang](https://github.com/XujunNoahWang)

---

<div align="center">

**如果这个项目对你有帮助，请给它一个 ⭐**

Made with ❤️ by Noah Wang

[🇺🇸 English Documentation](./README_EN.md)

</div>

</div>

---

<div id="english">

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
├── 📖 README.md           # Project documentation
├── 🔧 .gitignore          # Git ignore file
└── 📁 src/
    └── snapshot/          # Project screenshots
        ├── AustinEnglish/
        ├── NoahsIELTSTimer/
        └── QuoteCard/
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

Three carefully selected projects currently showcased:

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

### 3. 💭 Quote Card
**No preset quotes, just record the sentences you really like**
- **Tech Stack**: HTML5, CSS3, JavaScript ES6+
- **Unique Feature**: Apple-style personal quote management application, supporting complete import/export functionality
- **Core Functions**:
  - ✓ Apple-style design and smooth animation
  - ✓ No preset quotes, user-built private quote library
  - ✓ Complete quote management functionality
  - ✓ Import/export and cloud synchronization
  - ✓ Bilingual support
  - ✓ Day/night theme switching
- **Links**: [Visit Project](https://quote-card-by-noah.vercel.app/) | [Source Code](https://github.com/XujunNoahWang/quote-card)

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

</div>

</div> 