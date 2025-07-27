# Project Card

<div align="right">
  <a href="#english">🇺🇸 English</a> | <a href="#chinese">🇨🇳 中文</a>
</div>

---

<div id="chinese">

> **Noah的项目展示平台** - 采用苹果风格设计的响应式项目展示卡片

![Project Card](https://img.shields.io/badge/Project-Card-blue)
![Version](https://img.shields.io/badge/version-1.8-green)
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
  - ⌨️ 键盘左右箭头键 `←/→`
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
        ├── PromptGrower/
        ├── DoubleMedicalCheck/
        └── AustinMath/
```

## 🚀 快速开始

### 方法一：直接打开（推荐）

**直接双击 `index.html` 文件即可在浏览器中打开应用！**

由于项目使用纯前端技术栈，无需服务器即可运行。

### 🎮 **操作方式**

1. **项目切换**: 
   - 🖱️ 点击左右箭头按钮
   - 👆 触摸滑动（移动端）
   - ⌨️ 键盘左右箭头键 `←/→`
2. **🔍 搜索项目**: 使用顶部搜索框
3. **📤 分享项目**: 点击项目的"分享"按钮
4. **🎨 主题切换**: 点击右上角的主题切换按钮
5. **🌍 语言切换**: 点击右上角的语言切换按钮

### 方法二：本地服务器（可选）

如果需要测试某些高级功能（如PWA、分享API等），可以使用本地服务器：

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (需要先安装 http-server)
npx http-server

# 然后访问
http://localhost:8000
```

### 方法三：在线部署

可以直接部署到以下平台：
- **Vercel**: 拖拽文件夹即可部署
- **Netlify**: 支持拖拽部署
- **GitHub Pages**: 推送到GitHub仓库即可

## 🎯 展示项目

当前展示的八个精选项目：

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

### 7. 🩺 Double Medical Check
**AI驱动的医疗检测报告分析工具**
- **技术栈**: Python, Flask, Google Gemini AI, HTML5, CSS3, JavaScript
- **特色**: 基于Google Gemini AI的智能医疗检测报告分析应用，支持多图片上传和智能去重，自动识别异常指标并提供诊断建议
- **核心功能**: 
  - ✓ 多模态AI图像识别分析
  - ✓ 智能去重和结构化输出
  - ✓ 异常指标自动检测
  - ✓ 多图片批量处理
  - ✓ 中英文双语支持
  - ✓ 响应式设计适配
- **链接**: [访问项目](https://double-medical-check.vercel.app/) | [源码](https://github.com/XujunNoahWang/double-medical-check)

### 8. 🧮 Austin Math
**专为幼儿园设计的数学练习生成器**
- **技术栈**: React 18, TypeScript, Tailwind CSS, Vercel
- **特色**: 智能数学习题生成器，专门为幼儿园儿童设计，支持自定义难度级别、题目数量和类型
- **核心功能**: 
  - ✓ 智能题目生成算法
  - ✓ 可配置难度和题目数量
  - ✓ 支持二元和三元运算问题
  - ✓ 打印友好的工作表设计
  - ✓ 中英文双语支持
  - ✓ 离线使用功能
- **链接**: [访问项目](https://austin-math.vercel.app/) | [源码](https://github.com/XujunNoahWang/austin-math)

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

### v1.8 (2025-07-27) - Austin Math 项目
- 🧮 **新增项目**: 添加Austin Math - 专为幼儿园设计的数学练习生成器
- 🎯 **智能生成**: 智能数学习题生成算法，支持自定义难度和题目数量
- 📊 **多元运算**: 支持二元和三元运算问题，适合不同学习阶段
- 🖨️ **打印友好**: 提供打印友好的工作表设计，便于线下练习
- 🌐 **双语支持**: 完整的中英文界面支持
- 📱 **离线功能**: 支持离线使用，随时随地练习数学

### v1.7 (2025-07-24) - Double Medical Check 项目
- 🩺 **新增项目**: 添加Double Medical Check - AI驱动的医疗检测报告分析工具
- 🤖 **AI技术**: 基于Google Gemini AI的智能图像识别和分析
- 📊 **医疗应用**: 支持多图片上传、智能去重、异常检测
- 🌐 **双语支持**: 完整的中英文界面支持
- 📱 **响应式设计**: 完美适配桌面和移动设备

### v1.6 (2025-07-04) - MyTempo 项目
- 🎤 **新增项目**: 添加MyTempo - 专业的提词器工具
- 🖥️ **桌面专用**: 项目组合中首个桌面专用应用
- 🎨 **UI适配**: 为桌面专用项目优化设备切换界面
- 🔗 **下载链接**: 提供直接exe下载，优化用户体验

### v1.5 (2025-07-01) - Word Battle 项目
- 🎮 **新增项目**: 添加Word Battle - 多人在线单词游戏平台
- 🌐 **部署优化**: 使用Railway进行项目部署
- 🎨 **UI优化**: 优化项目展示效果
- 📱 **移动适配**: 完善所有项目的移动端体验

### v1.4 (2025-06-19) - Quote Card 项目
- 🎯 **新增项目**: 添加Quote Card - 苹果风格语录卡片应用
- 📱 **移动端支持**: Austin English项目启用完整的移动端体验
- 🖼️ **设备切换**: 所有项目现支持桌面端/移动端视图切换
- 🎨 **UI优化**: 移除header边框，优化导航计数器层级

### v1.3 (2025-06-15) - Prompt Grower 项目
- 🌱 **新增项目**: 添加Prompt Grower - 智能提示词生成器
- 🤖 **AI工具**: 9步渐进式需求收集，支持多种AI工具
- 📊 **企业级**: 生成企业级开发提示词，适配主流AI IDE
- 🎨 **现代化UI**: React 18 + TypeScript + Tailwind CSS

### v1.2 (2025-06-15) - IELTS Timer 项目
- ⏱️ **新增项目**: 添加Noah's IELTS Timer - 雅思练习专用计时器
- 🎯 **专业设计**: 专为雅思考试设计的多模块计时器
- 🔊 **音频支持**: 音频通知和警告功能
- 🎨 **可视化**: 圆形进度可视化指示器

### v1.1 (2025-06-15) - Austin English 项目
- 🎓 **新增项目**: 添加Austin English - 个性化英语复习工具
- 🎯 **零预设**: 零预设内容，完全由家长自建学习内容库
- 🎨 **现代化**: Next.js + React + TypeScript技术栈
- 📱 **响应式**: 完美适配桌面和移动设备

### v1.0 (2025-06-15) - Project Card 基础平台
- 🎉 **核心功能**: 完全重构的苹果风格滑动动画系统
- ✨ **动画效果**: 苹果风格同步滑动效果，60fps流畅动画
- 🌍 **双语支持**: 完整的中英文国际化
- 🎭 **主题系统**: 日夜模式无缝切换
- 📱 **响应式设计**: 完善的移动端适配
- 🔍 **搜索功能**: 项目搜索，支持实时搜索和清除
- 📤 **分享功能**: 支持项目链接分享和复制
- ⌨️ **键盘导航**: 完整的键盘导航支持
- 🔗 **URL路由**: 支持直接访问特定项目
- 🛠️ **开发工具**: 构建脚本、配置文件、性能监控

## 🌟 特色功能

### 滑动动画系统
- **同步滑动**: 两个项目同时动画，一个滑出一个滑入
- **方向智能**: 左右滑动对应正确的项目切换方向
- **性能优化**: 使用硬件加速和智能防抖
- **流畅体验**: 60fps动画，媲美原生应用

### 智能搜索系统
- **实时搜索**: 支持项目标题、描述的实时搜索
- **防抖优化**: 300ms防抖，避免频繁搜索
- **清除功能**: 一键清除搜索结果

### 分享功能
- **原生分享**: 支持移动端原生分享API
- **链接复制**: 自动复制项目链接到剪贴板
- **Toast提示**: 优雅的操作反馈提示
- **URL路由**: 支持直接访问特定项目

### 响应式布局
- **桌面端**: 完整功能展示
- **平板端**: 优化的触摸体验
- **移动端**: 专门的导航控制

### 无障碍设计
- **键盘导航**: 支持左右箭头键切换项目
- **屏幕阅读器**: 完善的ARIA标签
- **高对比度**: 支持高对比度模式
- **减少动画**: 尊重用户的动画偏好

### PWA支持
- **离线访问**: 支持离线浏览
- **桌面安装**: 可安装为桌面应用
- **快捷方式**: 支持项目快捷方式
- **原生体验**: 接近原生应用的体验

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
![Version](https://img.shields.io/badge/version-1.8-green)
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

Eight carefully selected projects currently showcased:

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

### 7. 🩺 Double Medical Check
**AI-Powered Medical Test Report Analysis Tool**
- **Tech Stack**: Python, Flask, Google Gemini AI, HTML5, CSS3, JavaScript
- **Unique Feature**: Intelligent medical test report analysis application based on Google Gemini AI, supporting multi-image upload and smart deduplication, automatically identifying abnormal indicators and providing diagnostic suggestions
- **Core Functions**: 
  - ✓ Multimodal AI image recognition analysis
  - ✓ Smart deduplication and structured output
  - ✓ Automatic abnormal indicator detection
  - ✓ Multi-image batch processing
  - ✓ Chinese/English bilingual support
  - ✓ Responsive design adaptation
- **Links**: [Visit Project](https://double-medical-check.vercel.app/) | [Source Code](https://github.com/XujunNoahWang/double-medical-check)

### 8. 🧮 Austin Math
**Math Practice Generator for Kindergarten**
- **Tech Stack**: React 18, TypeScript, Tailwind CSS, Vercel
- **Unique Feature**: Intelligent math problem generator designed specifically for kindergarten children, supporting customizable difficulty levels, problem quantities and types
- **Core Functions**: 
  - ✓ Intelligent problem generation algorithm
  - ✓ Configurable difficulty and problem count
  - ✓ Supports two and three operand problems
  - ✓ Print-friendly worksheet design
  - ✓ Chinese/English bilingual support
  - ✓ Offline usage capability
- **Links**: [Visit Project](https://austin-math.vercel.app/) | [Source Code](https://github.com/XujunNoahWang/austin-math)

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

### v1.8 (2025-07-27) - Austin Math Project
- 🧮 **New Project**: Added Austin Math - Math Practice Generator for Kindergarten
- 🎯 **Intelligent Generation**: Smart math problem generation algorithm, supports customizable difficulty and problem count
- 📊 **Multi-operand**: Supports two and three operand problems, suitable for different learning stages
- 🖨️ **Print-friendly**: Provides print-friendly worksheet design for offline practice
- 🌐 **Bilingual Support**: Complete Chinese/English interface support
- 📱 **Offline Function**: Supports offline usage, practice math anytime anywhere

### v1.7 (2025-07-24) - Double Medical Check Project
- 🩺 **New Project**: Added Double Medical Check - AI-powered medical test report analysis tool
- 🤖 **AI Technology**: Based on Google Gemini AI for intelligent image recognition and analysis
- 📊 **Medical Application**: Supports multi-image upload, smart deduplication, abnormal detection
- 🌐 **Bilingual Support**: Complete Chinese/English interface support
- 📱 **Responsive Design**: Perfect adaptation for desktop and mobile devices

### v1.6 (2025-07-04) - MyTempo Project
- 🎤 **New Project**: Added MyTempo - Professional Teleprompter Tool
- 🖥️ **Desktop Focus**: First desktop-only application in the portfolio
- 🎨 **UI Adaptation**: Optimized device switching for desktop-only projects
- 🔗 **Download Link**: Provided direct exe download for better user experience

### v1.5 (2025-07-01) - Word Battle Project
- 🎮 **New Project**: Added Word Battle - Multiplayer Online Word Picture Matching Game Platform
- 🌐 **Deployment Optimization**: Used Railway for project deployment
- 🎨 **UI Optimization**: Optimized project display effect
- 📱 **Mobile Adaptation**: Perfect mobile experience for all projects

### v1.4 (2025-06-19) - Quote Card Project
- 🎯 **New Project**: Added Quote Card - Apple-style quote card application
- 📱 **Mobile Support**: Austin English project now has full mobile experience
- 🖼️ **Device Switching**: All projects now support desktop/mobile view switching
- 🎨 **UI Optimization**: Removed header border, optimized navigation counter hierarchy

### v1.3 (2025-06-15) - Prompt Grower Project
- 🌱 **New Project**: Added Prompt Grower - Intelligent AI Prompt Generator
- 🤖 **AI Tools**: 9-step progressive requirement collection, supports multiple AI tools
- 📊 **Enterprise**: Generates enterprise-grade development prompts, compatible with mainstream AI IDEs
- 🎨 **Modern UI**: React 18 + TypeScript + Tailwind CSS

### v1.2 (2025-06-15) - IELTS Timer Project
- ⏱️ **New Project**: Added Noah's IELTS Timer - IELTS Practice Dedicated Timer
- 🎯 **Professional Design**: Multi-module timer specifically designed for IELTS exam
- 🔊 **Audio Support**: Audio notifications and warnings functionality
- 🎨 **Visualization**: Circular progress visual indicator

### v1.1 (2025-06-15) - Austin English Project
- 🎓 **New Project**: Added Austin English - Personalized English Review Tool
- 🎯 **Zero Preset**: Zero preset content, completely built by parents' custom content library
- 🎨 **Modern**: Next.js + React + TypeScript tech stack
- 📱 **Responsive**: Perfect adaptation for desktop and mobile devices

### v1.0 (2025-06-15) - Project Card Base Platform
- 🎉 **Core Features**: Completely refactored Apple-style sliding animation system
- ✨ **Animation Effects**: Apple-style synchronized sliding effects, 60fps smooth animations
- 🌍 **Bilingual Support**: Complete Chinese/English internationalization
- 🎭 **Theme System**: Seamless day/night mode switching
- 📱 **Responsive Design**: Comprehensive mobile adaptation
- 🔍 **Search Function**: Project search, supports real-time search and clear
- 📤 **Share Function**: Supports project link sharing and copying
- ⌨️ **Keyboard Navigation**: Complete keyboard navigation support
- 🔗 **URL Routing**: Supports direct access to specific projects
- 🛠️ **Development Tools**: Build scripts, configuration files, performance monitoring

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