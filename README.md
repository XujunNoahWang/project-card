# Project Card

<div align="right">
  <a href="#english">🇺🇸 English</a> | <a href="#chinese">🇨🇳 中文</a>
</div>

---

<div id="chinese">

> **Noah的项目展示平台** - 采用苹果风格设计的响应式项目展示卡片

![Project Card](https://img.shields.io/badge/Project-Card-blue)
![Version](https://img.shields.io/badge/version-0.4-green)
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
        ├── QuoteCard/
        ├── MyTempo/
        ├── WordBattle/
        └── PromptGrower/
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

当前展示的六个精选项目：

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

### 4. 🎮 Word Battle
**多人在线单词图片匹配游戏平台**
- **技术栈**: Node.js, Express, Socket.IO, HTML5, CSS3, JavaScript ES6+
- **特色**: 基于WebSocket的多人在线游戏，支持实时对战和房间管理
- **核心功能**: 
  - ✓ 多人实时对战系统
  - ✓ 智能房间管理
  - ✓ 密码保护的单词管理
  - ✓ 资源智能预加载
  - ✓ 中英文双语支持
  - ✓ 完美适配移动端
- **链接**: [访问项目](https://wordbattle.up.railway.app/) | [源码](https://github.com/XujunNoahWang/word-battle)

### 5. 🎤 MyTempo
**专业的提词器工具**
- **技术栈**: Python, tkinter, Markdown, 桌面应用
- **特色**: 专业的提词器，支持浮动窗口始终置顶和Markdown脚本显示
- **核心功能**: 
  - ✓ 支持Markdown格式脚本
  - ✓ 浮动窗口始终置顶
  - ✓ 可调节滚动速度和透明度
  - ✓ 支持演示遥控器、键盘和鼠标控制
  - ✓ 动态字体大小调整
- **链接**: [下载应用](https://github.com/XujunNoahWang/mytempo/releases/download/v0.5.3/MyTempo.exe)

### 6. 🌱 Prompt Grower
**智能提示词生成器**
- **技术栈**: React 18, TypeScript, Zustand, Tailwind CSS, Vite
- **特色**: 通过9个精心设计的步骤，将模糊的想法转化为结构化的元提示词，发送给ChatGPT、Grok、Claude等AI工具生成企业级开发提示词，最终在AI IDE中实现代码生成
- **核心功能**: 
  - ✓ 9步渐进式需求收集，覆盖项目全生命周期
  - ✓ 多应用类型支持（Web、桌面、移动、CLI等）
  - ✓ 实时预览生成的元提示词效果
  - ✓ 支持ChatGPT、Grok、Claude等主流AI工具
  - ✓ 生成企业级开发提示词
  - ✓ 适配Cursor、Claude Code、Kiro等AI IDE
- **链接**: [访问项目](https://promptgrower.vercel.app/) | [源码](https://github.com/XujunNoahWang/promptgrower)

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

### v0.6 (2025-07-20) - Prompt Grower更新
- 🌱 **新增项目**: 添加Prompt Grower - 智能提示词生成器
- 🤖 **AI工作流**: 支持ChatGPT、Grok、Claude等主流AI工具
- 📋 **企业级提示词**: 生成开发就绪的详细指令
- 🦾 **AI IDE集成**: 适配Cursor、Claude Code、Kiro等AI IDE
- 🎨 **现代技术栈**: 采用React 18 + TypeScript + Tailwind CSS
- 🔄 **导航更新**: 项目计数器从5个更新为6个
- 📝 **文档更新**: 更新README，添加Prompt Grower项目详情
- 🌐 **在线体验**: 提供完整的Web应用体验

### v0.5 (2025-07-04) - MyTempo更新
- 🌱 **新增项目**: 添加Prompt Grower - 智能提示词生成器
- 🤖 **AI工具**: 项目组合中首个专门的AI辅助开发工具
- 🎨 **现代技术栈**: 采用React 18 + TypeScript + Tailwind CSS
- 🔄 **导航更新**: 项目计数器从5个更新为6个
- 📝 **文档更新**: 更新README，添加Prompt Grower项目详情
- 🌐 **在线体验**: 提供完整的Web应用体验

### v0.4 (2025-07-04) - MyTempo更新
- 🎤 **新增项目**: 添加MyTempo - 专业的提词器工具
- 🖥️ **桌面专用**: 项目组合中首个桌面专用应用
- 🎨 **UI适配**: 为桌面专用项目优化设备切换界面
- 🔄 **导航更新**: 项目计数器从4个更新为5个
- 📝 **文档更新**: 更新README，添加MyTempo项目详情
- 🔗 **下载链接**: 提供直接exe下载，优化用户体验

### v0.3 (2025-07-01) - Word Battle更新
- 🎮 **新增项目**: 添加Word Battle - 多人在线单词游戏平台
- 🌐 **部署优化**: 使用Railway进行项目部署
- 🎨 **UI优化**: 优化项目展示效果
- 📱 **移动适配**: 完善所有项目的移动端体验
- 🔄 **导航优化**: 更新项目导航计数器
- 📝 **内容更新**: 更新项目描述和文档

### v0.2 (2025-06-19) - 功能扩展更新
- 🎯 **新增项目**: 添加Quote Card - 苹果风格语录卡片应用
- 📱 **移动端支持**: Austin English项目启用完整的移动端体验
- 🖼️ **设备切换**: 所有项目现支持桌面端/移动端视图切换
- 🎨 **UI优化**: 移除header边框，优化导航计数器层级
- 📝 **内容更新**: 项目描述更加精准，去除过时的限制提示
- 🔧 **体验改进**: 统一所有项目的交互体验和视觉一致性

### v0.1 (2025-06-15) - 初始发布
- 🎉 **核心功能**: 完全重构的苹果风格滑动动画系统
- ✨ **动画效果**: 苹果风格同步滑动效果
- 🚀 **性能优化**: 硬件加速，60fps流畅动画
- 🌍 **双语支持**: 完整的中英文国际化
- 🎭 **主题系统**: 日夜模式无缝切换
- 📱 **响应式设计**: 完善的移动端适配
- 🎯 **初始项目**: Austin English和IELTS Timer两个精选项目

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
![Version](https://img.shields.io/badge/version-0.4-green)
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
        ├── QuoteCard/
        ├── MyTempo/
        ├── WordBattle/
        └── PromptGrower/
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

Six carefully selected projects currently showcased:

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

### 4. 🎮 Word Battle
**Multiplayer Online Word Picture Matching Game Platform**
- **Tech Stack**: Node.js, Express, Socket.IO, HTML5, CSS3, JavaScript ES6+
- **Unique Feature**: Multiplayer online game based on WebSocket, supporting real-time battles and room management
- **Core Functions**: 
  - ✓ Multiplayer real-time battle system
  - ✓ Intelligent room management
  - ✓ Password-protected word management
  - ✓ Resource intelligent preloading
  - ✓ Bilingual support
  - ✓ Perfect mobile adaptation
- **Links**: [Visit Project](https://wordbattle.up.railway.app/) | [Source Code](https://github.com/XujunNoahWang/word-battle)

### 5. 🎤 MyTempo
**Professional Teleprompter Tool**
- **Tech Stack**: Python, tkinter, Markdown, Desktop Application
- **Unique Feature**: Professional teleprompter with always-on-top floating window and Markdown script support
- **Core Functions**: 
  - ✓ Markdown script support
  - ✓ Always-on-top floating window
  - ✓ Adjustable scroll speed & transparency
  - ✓ Presentation remote, keyboard & mouse control
  - ✓ Dynamic font size adjustment
- **Links**: [Download App](https://github.com/XujunNoahWang/mytempo/releases/download/v0.5.3/MyTempo.exe)

### 6. 🌱 Prompt Grower
**Intelligent AI Prompt Generator**
- **Tech Stack**: React 18, TypeScript, Zustand, Tailwind CSS, Vite
- **Unique Feature**: Transform vague ideas into structured, executable development prompts through 9 carefully designed steps
- **Core Functions**: 
  - ✓ 9-Step Progressive Requirement Collection
  - ✓ Multi-Application Type Support
  - ✓ Real-time Preview Generation
  - ✓ Dark Mode Support
  - ✓ Local Data Persistence
  - ✓ Responsive Design
- **Links**: [Visit Project](https://promptgrower.vercel.app/) | [Source Code](https://github.com/XujunNoahWang/promptgrower)

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

### v0.5 (2025-07-20) - Prompt Grower Update
- 🌱 **New Project**: Added Prompt Grower - Intelligent AI Prompt Generator
- 🤖 **AI Tool**: First dedicated AI-assisted development tool in the portfolio
- 🎨 **Modern Tech Stack**: Built with React 18 + TypeScript + Tailwind CSS
- 🔄 **Navigation Update**: Updated project counter from 5 to 6 projects
- 📝 **Documentation**: Updated README with Prompt Grower project details
- 🌐 **Online Experience**: Provides complete web application experience

### v0.4 (2025-07-04) - MyTempo Update
- 🎤 **New Project**: Added MyTempo - Professional Teleprompter Tool
- 🖥️ **Desktop Focus**: First desktop-only application in the portfolio
- 🎨 **UI Adaptation**: Optimized device switching for desktop-only projects
- 🔄 **Navigation Update**: Updated project counter from 4 to 5 projects
- 📝 **Documentation**: Updated README with MyTempo project details
- 🔗 **Download Link**: Provided direct exe download for better user experience

### v0.3 (2025-07-01) - Word Battle Update
- 🎮 **New Project**: Added Word Battle - Multiplayer Online Word Picture Matching Game Platform
- 🌐 **Deployment Optimization**: Used Railway for project deployment
- 🎨 **UI Optimization**: Optimized project display effect
- 📱 **Mobile Adaptation**: Perfect mobile experience for all projects
- 🔄 **Navigation Optimization**: Updated project navigation counter
- 📝 **Content Update**: Updated project description and documentation

### v0.2 (2025-06-19) - Feature Expansion Update
- 🎯 **New Project**: Added Quote Card - Apple-style quote card application
- 📱 **Mobile Support**: Austin English project now has full mobile experience
- 🖼️ **Device Switching**: All projects now support desktop/mobile view switching
- 🎨 **UI Optimization**: Removed header border, optimized navigation counter hierarchy
- 📝 **Content Update**: More precise project descriptions, removed outdated limitation hints
- 🔧 **Experience Improvement**: Unified interaction experience and visual consistency across all projects

### v0.1 (2025-06-15) - Initial Release
- 🎉 **Core Features**: Completely refactored Apple-style sliding animation system
- ✨ **Animation Effects**: Apple-style synchronized sliding effects
- 🚀 **Performance Optimization**: Hardware acceleration, 60fps smooth animations
- 🌍 **Bilingual Support**: Complete Chinese/English internationalization
- 🎭 **Theme System**: Seamless day/night mode switching
- 📱 **Responsive Design**: Comprehensive mobile adaptation
- 🎯 **Initial Projects**: Austin English and IELTS Timer two featured projects

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