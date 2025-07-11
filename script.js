/**
 * Project Card - Portfolio Website
 * Author: Noah Wang
 * Description: Interactive project showcase with theme switching, language support, and responsive design
 */

'use strict';

// Constants
const STORAGE_KEYS = {
    LANGUAGE: 'preferred-language',
    THEME: 'preferred-theme'
};

const DEFAULTS = {
    LANGUAGE: 'zh',
    THEME: 'light',
    TOTAL_PROJECTS: 5
};

// 优化动画性能 - 根据设备性能调整
const ANIMATION_DURATION = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 300 : 800;
const TOUCH_THRESHOLD = 50;

// 添加性能检测
const isHighPerformanceDevice = () => {
    return navigator.hardwareConcurrency >= 4 && 
           window.devicePixelRatio <= 2 &&
           !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Language translations
const translations = {
    zh: {
        title: "Project Card",
        visit: "访问项目",
        "visit-desktop": "访问项目（请在电脑端体验）",
        source: "源码",
        download: "下载应用",
        
        // Austin English
        "austin-title": "Austin English",
        "austin-subtitle": "个性化英语复习工具",
        "austin-desc": "与传统英语应用不同，Austin English没有预设学习内容，完全由家长根据孩子正在学习的英语课程自建复习内容库，配合任何英语课程使用。",
        "austin-feature1": "✓ 零预设内容，完全定制化",
        "austin-feature2": "✓ 配合任何英语课程",
        "austin-feature3": "✓ 智能音频与图片系统",
        "austin-feature4": "✓ 字母、单词、句子全方位练习",
        
        // IELTS Timer
        "ielts-title": "Noah's IELTS Timer",
        "ielts-subtitle": "雅思考生为雅思考生设计的练习计时器",
        "ielts-desc": "Noah's IELTS Timer，提供阅读、写作、口语和休息四个计时模块，支持预设和自定义时长，具备音频提醒和优美的圆形变色进度指示器。",
        "ielts-feature1": "✓ 预设和自定义计时器",
        "ielts-feature2": "✓ 圆形进度可视化指示",
        "ielts-feature3": "✓ 音频通知和警告",
        "ielts-feature4": "✓ 触控友好的移动界面",
        "ielts-feature5": "✓ 键盘快捷键支持",
        "ielts-feature6": "✓ 日夜主题切换",
        
        // Quote Card
        "quote-title": "Quote Card",
        "quote-subtitle": "无任何预设语录，只记录你真正喜欢的句子。",
        "quote-desc": "一个美观的苹果风格语录卡片应用，具备完整的管理功能和国际化支持。支持滑动浏览、语录管理、导入导出，以及云端备份同步功能。",
        "quote-feature1": "✓ 苹果风格设计与流畅动画",
        "quote-feature2": "✓ 无预设语录，用户自建私人语录库",
        "quote-feature3": "✓ 完整的语录管理功能",
        "quote-feature4": "✓ 导入导出与云端同步",
        "quote-feature5": "✓ 中英文双语支持",
        "quote-feature6": "✓ 日夜主题切换",
        
        // MyTempo
        "mytempo-title": "MyTempo",
        "mytempo-subtitle": "专业的提词器工具",
        "mytempo-desc": "MyTempo是一个专业的提词器工具，支持上传Markdown脚本文件，在优雅的浮动窗口中显示。窗口始终保持在最前方，让你在录制视频、直播或演讲时能够阅读脚本同时监控其他窗口。",
        "mytempo-feature1": "✓ 支持Markdown格式脚本",
        "mytempo-feature2": "✓ 浮动窗口始终置顶",
        "mytempo-feature3": "✓ 可调节滚动速度和透明度",
        "mytempo-feature4": "✓ 支持演示遥控器、键盘和鼠标控制",
        "mytempo-feature5": "✓ 动态字体大小调整",
        
        // Word Battle
        "wordbattle-title": "Word Battle",
        "wordbattle-subtitle": "多人在线单词图片匹配游戏平台",
        "wordbattle-desc": "一个基于WebSocket的多人在线单词图片匹配游戏平台，支持多设备实时连接和房间管理。采用Apple设计语言，提供现代化和优雅的用户界面。",
        "wordbattle-feature1": "✓ 多人实时对战系统",
        "wordbattle-feature2": "✓ 智能房间管理",
        "wordbattle-feature3": "✓ 密码保护的单词管理",
        "wordbattle-feature4": "✓ 资源智能预加载",
        "wordbattle-feature5": "✓ 中英文双语支持",
        "wordbattle-feature6": "✓ 完美适配移动端",
        
        // Tags
        "tag-education": "教育",
        "tag-productivity": "效率工具",
        "tag-lifestyle": "生活",
        "tag-game": "游戏"
    },
    en: {
        title: "Project Card",
        visit: "Visit Project",
        "visit-desktop": "Visit Project (Best on Desktop)",
        source: "Source Code",
        download: "Download App",
        
        // Austin English
        "austin-title": "Austin English",
        "austin-subtitle": "Personalized English Review Tool",
        "austin-desc": "Unlike traditional English apps, Austin English provides no pre-made content. Parents build completely custom review libraries based on their child's actual English courses, working with any curriculum.",
        "austin-feature1": "✓ Zero pre-made content, fully customized",
        "austin-feature2": "✓ Works with any English course",
        "austin-feature3": "✓ Smart audio & image system",
        "austin-feature4": "✓ Letters, words, sentences practice",
        
        // IELTS Timer
        "ielts-title": "Noah's IELTS Timer",
        "ielts-subtitle": "IELTS Practice Timer by IELTS Candidates",
        "ielts-desc": "Noah's IELTS Timer featuring reading, writing, speaking, and break timing modules with preset and custom durations, audio notifications, and beautiful circular color-changing progress indicators.",
        "ielts-feature1": "✓ Preset & Custom Timers",
        "ielts-feature2": "✓ Circular Progress Visualization",
        "ielts-feature3": "✓ Audio Notifications & Alerts",
        "ielts-feature4": "✓ Touch-friendly Mobile Interface",
        "ielts-feature5": "✓ Keyboard Shortcuts Support",
        "ielts-feature6": "✓ Day/Night Mode Toggle",
        
        // Quote Card
        "quote-title": "Quote Card",
        "quote-subtitle": "No preset quotes, only record the sentences you truly love.",
        "quote-desc": "A beautiful Apple-inspired quote card application with internationalization and advanced management features. Supports swipe navigation, quote management, import/export, and cloud backup sync.",
        "quote-feature1": "✓ Apple-style design with smooth animations",
        "quote-feature2": "✓ No preset quotes, build your private quote library",
        "quote-feature3": "✓ Complete quote management features",
        "quote-feature4": "✓ Import/Export & cloud sync",
        "quote-feature5": "✓ Chinese/English bilingual support",
        "quote-feature6": "✓ Day/Night theme toggle",
        
        // MyTempo
        "mytempo-title": "MyTempo",
        "mytempo-subtitle": "Professional Teleprompter Tool",
        "mytempo-desc": "MyTempo is a professional teleprompter tool that allows users to upload Markdown script files, displayed in an elegant floating window. The window stays on top of other applications, enabling you to read scripts while monitoring other windows during video recording, livestreaming, or presentations.",
        "mytempo-feature1": "✓ Markdown Script Support",
        "mytempo-feature2": "✓ Always-on-Top Floating Window",
        "mytempo-feature3": "✓ Adjustable Scroll Speed & Transparency",
        "mytempo-feature4": "✓ Presentation Remote, Keyboard & Mouse Control",
        "mytempo-feature5": "✓ Dynamic Font Size Adjustment",
        
        // Word Battle
        "wordbattle-title": "Word Battle",
        "wordbattle-subtitle": "Multiplayer Online Word-Image Matching Game Platform",
        "wordbattle-desc": "A WebSocket-based multiplayer online word-image matching game platform that supports real-time multi-device connections and room management. Featuring Apple design language for a modern and elegant user interface.",
        "wordbattle-feature1": "✓ Real-time Multiplayer Battle System",
        "wordbattle-feature2": "✓ Smart Room Management",
        "wordbattle-feature3": "✓ Password-Protected Word Management",
        "wordbattle-feature4": "✓ Intelligent Resource Preloading",
        "wordbattle-feature5": "✓ Chinese/English Bilingual Support",
        "wordbattle-feature6": "✓ Perfect Mobile Adaptation",
        
        // Tags
        "tag-education": "Education",
        "tag-productivity": "Productivity",
        "tag-lifestyle": "Lifestyle",
        "tag-game": "Game"
    }
};

/**
 * Main ProjectCard class
 */
class ProjectCard {
    constructor() {
        this.currentLang = localStorage.getItem(STORAGE_KEYS.LANGUAGE) || DEFAULTS.LANGUAGE;
        this.currentTheme = localStorage.getItem(STORAGE_KEYS.THEME) || DEFAULTS.THEME;
        this.currentProject = 0;
        this.isAnimating = false;
        
        this.init();
    }

    /**
     * Initialize the application
     */
    init() {
        this.setupEventListeners();
        this.loadTheme();
        this.loadLanguage();
        this.setupTouchEvents();
        this.setupKeyboardNavigation();
        this.initializeProjects();
        this.setupDeviceIcons();
        this.updateNavigationState();
    }

    /**
     * Initialize project slides
     */
    initializeProjects() {
        const slides = document.querySelectorAll('.project-slide');
        
        // 清理所有幻灯片状态
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'fade-in', 'fade-out');
            slide.style.cssText = ''; // 清理所有内联样式
            
            if (index === this.currentProject) {
                // 显示当前项目
                slide.style.display = 'block';
                slide.style.opacity = '1';
                slide.style.transform = 'translateX(0)';
                slide.classList.add('active');
            } else {
                // 隐藏其他项目
                slide.style.display = 'none';
                slide.style.opacity = '0';
                slide.style.transform = 'translateX(100%)';
            }
        });
        
        // 预加载所有图片，特别是移动端图片
        this.preloadAllImages();
        
        // 强制重排，确保状态生效
        document.body.offsetHeight;
    }

    /**
     * Preload all project images
     */
    preloadAllImages() {
        const allImages = document.querySelectorAll('.project-screenshot');
        allImages.forEach(img => {
            // 确保图片能正确加载
            if (img.src && !img.complete) {
                const tempImg = new Image();
                tempImg.onload = () => {
                    // 图片加载完成后，确保原图片显示正确
                    if (!img.complete) {
                        img.src = tempImg.src;
                    }
                };
                tempImg.src = img.src;
            }
        });
    }

    /**
     * Setup all event listeners
     */
    setupEventListeners() {
        this.setupThemeSwitch();
        this.setupLanguageSwitch();
        this.setupNavigationButtons();
    }

    /**
     * Setup theme switching
     */
    setupThemeSwitch() {
        const themeSwitch = document.getElementById('themeSwitch');
        const themeOptions = themeSwitch?.querySelectorAll('.theme-option');
        
        themeOptions?.forEach(option => {
            option.addEventListener('click', () => {
                const theme = option.getAttribute('data-theme');
                if (theme !== this.currentTheme) {
                    this.switchTheme(theme);
                }
            });
        });
    }

    /**
     * Setup language switching
     */
    setupLanguageSwitch() {
        const langSwitch = document.getElementById('langSwitch');
        const langOptions = langSwitch?.querySelectorAll('.lang-option');
        
        langOptions?.forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                if (lang !== this.currentLang) {
                    this.switchLanguage(lang);
                }
            });
        });
    }

    /**
     * Setup navigation buttons
     */
    setupNavigationButtons() {
        // Desktop navigation
        const navPrev = document.getElementById('navPrev');
        const navNext = document.getElementById('navNext');
        
        navPrev?.addEventListener('click', (e) => {
            e.preventDefault();
            this.previousProject();
        });
        
        navNext?.addEventListener('click', (e) => {
            e.preventDefault();
            this.nextProject();
        });

        // Mobile navigation
        const mobileNavPrevs = document.querySelectorAll('.mobile-nav-prev');
        const mobileNavNexts = document.querySelectorAll('.mobile-nav-next');
        
        mobileNavPrevs.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.previousProject();
            });
        });
        
        mobileNavNexts.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.nextProject();
            });
        });
    }

    /**
     * Setup touch events for swipe navigation
     */
    setupTouchEvents() {
        const slider = document.getElementById('projectsSlider');
        if (!slider) return;

        let startX = 0;
        let startY = 0;
        let isDragging = false;
        let dragStartTime = 0;

        const touchStart = (e) => {
            const touch = e.touches ? e.touches[0] : e;
            startX = touch.clientX;
            startY = touch.clientY;
            isDragging = true;
            dragStartTime = Date.now();
            
            // 添加视觉反馈
            slider.style.cursor = 'grabbing';
        };

        const touchMove = (e) => {
            if (!isDragging) return;
            
            const touch = e.touches ? e.touches[0] : e;
            const deltaX = touch.clientX - startX;
            const deltaY = touch.clientY - startY;
            
            // 只在水平滑动时阻止默认行为
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                e.preventDefault();
                
                // 添加实时视觉反馈（轻微的变换）
                if (isHighPerformanceDevice()) {
                    const currentSlide = document.querySelector('.project-slide.active');
                    if (currentSlide && Math.abs(deltaX) > 20) {
                        const progress = Math.min(Math.abs(deltaX) / 200, 0.15);
                        const resistance = 0.3; // 苹果风格的阻力感
                        
                        // 更细腻的实时反馈
                        const translateX = deltaX * resistance;
                        const scale = 1 - progress * 0.03;
                        const opacity = 1 - progress * 0.2;
                        
                        currentSlide.style.transform = `translateX(${translateX}px) scale(${scale}) translateZ(0)`;
                        currentSlide.style.opacity = opacity;
                        
                        // 添加轻微的阴影变化
                        currentSlide.style.filter = `brightness(${1 - progress * 0.1})`;
                    }
                }
            }
        };

        const touchEnd = (e) => {
            if (!isDragging) return;
            isDragging = false;
            dragStartTime = 0;
            
            slider.style.cursor = '';
            
            // 重置任何实时变换
            const currentSlide = document.querySelector('.project-slide.active');
            if (currentSlide) {
                // 平滑回弹效果
                currentSlide.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.2s ease-out, filter 0.2s ease-out';
                currentSlide.style.transform = '';
                currentSlide.style.opacity = '';
                currentSlide.style.filter = '';
                
                // 清理过渡效果
                setTimeout(() => {
                    if (currentSlide.style.transition) {
                        currentSlide.style.transition = '';
                    }
                }, 300);
            }

            const touch = e.changedTouches ? e.changedTouches[0] : e;
            const deltaX = touch.clientX - startX;
            const deltaY = touch.clientY - startY;
            const swipeTime = Date.now() - dragStartTime;

            // 优化滑动检测 - 考虑滑动速度
            const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);
            const isSignificantSwipe = Math.abs(deltaX) > TOUCH_THRESHOLD;
            const isFastSwipe = swipeTime < 300 && Math.abs(deltaX) > 30;
            
            if (isHorizontalSwipe && (isSignificantSwipe || isFastSwipe)) {
                // 苹果风格的滑动逻辑：
                // 向右滑动（deltaX > 0）= 显示上一个项目（从左侧滑入）
                // 向左滑动（deltaX < 0）= 显示下一个项目（从右侧滑入）
                if (deltaX > 0) {
                    this.previousProject(); // 上一个项目从左侧滑入（向右滑动）
                } else {
                    this.nextProject(); // 下一个项目从右侧滑入（向左滑动）
                }
            }
        };

        // 使用 passive: false 来启用 preventDefault
        slider.addEventListener('touchstart', touchStart, { passive: false });
        slider.addEventListener('touchmove', touchMove, { passive: false });
        slider.addEventListener('touchend', touchEnd, { passive: false });
        
        // 鼠标事件支持
        slider.addEventListener('mousedown', touchStart);
        slider.addEventListener('mousemove', touchMove);
        slider.addEventListener('mouseup', touchEnd);
        
        // 防止拖拽时的文本选择
        slider.addEventListener('selectstart', (e) => {
            if (isDragging) e.preventDefault();
        });
    }

    /**
     * Setup keyboard navigation
     */
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            
            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    this.previousProject();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.nextProject();
                    break;
            }
        });
    }

    /**
     * Switch theme
     */
    switchTheme(theme) {
        this.currentTheme = theme;
        localStorage.setItem(STORAGE_KEYS.THEME, theme);
        this.loadTheme();
    }

    /**
     * Load and apply theme
     */
    loadTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        
        const themeOptions = document.querySelectorAll('.theme-option');
        themeOptions.forEach(option => {
            const isActive = option.getAttribute('data-theme') === this.currentTheme;
            option.classList.toggle('active', isActive);
        });
        
        const themeSwitch = document.getElementById('themeSwitch');
        if (themeSwitch) {
            themeSwitch.setAttribute('data-active', this.currentTheme);
        }
    }

    /**
     * Switch language
     */
    switchLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
        this.loadLanguage();
    }

    /**
     * Load and apply language
     */
    loadLanguage() {
        document.documentElement.setAttribute('lang', this.currentLang === 'zh' ? 'zh-CN' : 'en');
        
        const langOptions = document.querySelectorAll('.lang-option');
        langOptions.forEach(option => {
            const isActive = option.getAttribute('data-lang') === this.currentLang;
            option.classList.toggle('active', isActive);
        });
        
        const langSwitch = document.getElementById('langSwitch');
        if (langSwitch) {
            langSwitch.setAttribute('data-active', this.currentLang);
        }
        
        this.updateTranslations();
    }

    /**
     * Update all translations
     */
    updateTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        const currentTranslations = translations[this.currentLang];
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (currentTranslations[key]) {
                element.textContent = currentTranslations[key];
            }
        });
    }

    /**
     * Navigate to previous project
     */
    previousProject() {
        if (this.isAnimating) return;
        const newIndex = this.currentProject === 0 ? DEFAULTS.TOTAL_PROJECTS - 1 : this.currentProject - 1;
        this.goToProject(newIndex, 'right'); // 上一个项目从左侧滑入（向右滑动）
    }

    /**
     * Navigate to next project
     */
    nextProject() {
        if (this.isAnimating) return;
        const newIndex = this.currentProject === DEFAULTS.TOTAL_PROJECTS - 1 ? 0 : this.currentProject + 1;
        this.goToProject(newIndex, 'left'); // 下一个项目从右侧滑入（向左滑动）
    }

    /**
     * Navigate to specific project
     */
    goToProject(index, direction = null) {
        if (this.isAnimating || index === this.currentProject || index < 0 || index >= DEFAULTS.TOTAL_PROJECTS) {
            return;
        }
        
        this.isAnimating = true;
        const previousIndex = this.currentProject;
        this.currentProject = index;
        
        // 立即更新导航状态
        this.updateNavigationState();
        
        // 执行动画
        this.updateProjectDisplayAppleStyle(previousIndex, index, direction);
        
        // 确保动画完成后解锁
        setTimeout(() => {
            this.isAnimating = false;
        }, ANIMATION_DURATION + 200); // 增加一些缓冲时间
    }

    /**
     * Apple-style simultaneous slide animation
     */
    updateProjectDisplayAppleStyle(fromIndex, toIndex, direction = 'left') {
        const slides = document.querySelectorAll('.project-slide');
        const currentSlide = slides[fromIndex];
        const nextSlide = slides[toIndex];
        
        if (!nextSlide || !currentSlide) return;
        
        // 苹果风格的缓动函数
        const appleEasing = 'cubic-bezier(0.25, 0.1, 0.25, 1)';
        
        // 确定滑动方向
        const slideInDirection = direction === 'left' ? '100%' : '-100%';
        const slideOutDirection = direction === 'left' ? '-100%' : '100%';
        
        // 先清理所有可能的残留样式
        slides.forEach(slide => {
            if (slide !== currentSlide && slide !== nextSlide) {
                slide.style.display = 'none';
                slide.classList.remove('active');
            }
        });
        
        // 准备下一个幻灯片（但不显示）
        nextSlide.style.display = 'block';
        nextSlide.style.opacity = '1';
        nextSlide.style.transform = `translateX(${slideInDirection}) translateZ(0)`;
        nextSlide.style.willChange = 'transform';
        // 注意：不要在这里就设置active类
        
        // 准备当前幻灯片
        currentSlide.style.willChange = 'transform, opacity';
        
        // 强制重排，确保初始状态生效
        nextSlide.offsetHeight;
        
        // 开始同步动画
        requestAnimationFrame(() => {
            // 当前幻灯片滑出
            currentSlide.style.transition = `transform ${ANIMATION_DURATION}ms ${appleEasing}, opacity ${ANIMATION_DURATION * 0.8}ms ease-out`;
            currentSlide.style.transform = `translateX(${slideOutDirection}) translateZ(0)`;
            currentSlide.style.opacity = '0';
            
            // 新幻灯片滑入
            nextSlide.style.transition = `transform ${ANIMATION_DURATION}ms ${appleEasing}`;
            nextSlide.style.transform = 'translateX(0) translateZ(0)';
        });
        
        // 在动画进行中更新active状态
        setTimeout(() => {
            currentSlide.classList.remove('active');
            nextSlide.classList.add('active');
        }, ANIMATION_DURATION / 2);
        
        // 动画完成后清理
        setTimeout(() => {
            // 隐藏旧幻灯片
            currentSlide.style.display = 'none';
            currentSlide.style.transition = '';
            currentSlide.style.transform = '';
            currentSlide.style.opacity = '';
            currentSlide.style.willChange = 'auto';
            
            // 清理新幻灯片的临时样式
            nextSlide.style.transition = '';
            nextSlide.style.transform = '';
            nextSlide.style.willChange = 'auto';
            
            // 确保只有当前幻灯片可见
            slides.forEach((slide, index) => {
                if (index === toIndex) {
                    slide.style.display = 'block';
                    slide.classList.add('active');
                    slide.style.opacity = '1';
                    slide.style.transform = '';
                } else {
                    slide.style.display = 'none';
                    slide.classList.remove('active');
                }
            });
        }, ANIMATION_DURATION + 100);
    }

    /**
     * Update navigation state (counters)
     */
    updateNavigationState() {
        const counters = document.querySelectorAll('.counter-text');
        const currentDisplay = `${this.currentProject + 1}/${DEFAULTS.TOTAL_PROJECTS}`;
        
        counters.forEach(counter => {
            counter.textContent = currentDisplay;
        });
    }

    /**
     * Setup device icons functionality
     */
    setupDeviceIcons() {
        const deviceIcons = document.querySelectorAll('.device-icons');
        
        deviceIcons.forEach(iconGroup => {
            const icons = iconGroup.querySelectorAll('.device-icon:not(.disabled)');
            
            icons.forEach(icon => {
                icon.addEventListener('click', () => {
                    const device = icon.getAttribute('data-device');
                    const projectSlide = icon.closest('.project-slide');
                    const projectType = projectSlide.getAttribute('data-project');
                    
                    this.switchDeviceView(projectType, device, icon);
                });
            });
        });
    }

    /**
     * Switch device view (desktop/mobile)
     */
    switchDeviceView(projectType, device, clickedIcon) {
        const iconGroup = clickedIcon.closest('.device-icons');
        const screenshotContainer = iconGroup.parentElement.querySelector('.screenshot-container');
        
        // Update active icon
        iconGroup.querySelectorAll('.device-icon').forEach(icon => {
            icon.classList.remove('active');
        });
        clickedIcon.classList.add('active');
        
        // Update indicator position
        iconGroup.setAttribute('data-active', device);
        
        // Switch screenshots
        const desktopScreenshot = screenshotContainer.querySelector('.desktop-screenshot');
        const mobileScreenshots = screenshotContainer.querySelector('.mobile-screenshots');
        
        if (device === 'desktop') {
            desktopScreenshot?.classList.add('active');
            mobileScreenshots?.classList.remove('active');
        } else {
            desktopScreenshot?.classList.remove('active');
            mobileScreenshots?.classList.add('active');
            
            // 确保移动端图片正确加载
            this.ensureMobileImagesLoaded(mobileScreenshots);
        }
    }

    /**
     * Ensure mobile images are properly loaded
     */
    ensureMobileImagesLoaded(mobileScreenshots) {
        if (!mobileScreenshots) return;
        
        const mobileImages = mobileScreenshots.querySelectorAll('.mobile-screenshot');
        mobileImages.forEach(img => {
            if (!img.complete || img.naturalHeight === 0) {
                // 强制重新加载图片
                const src = img.src;
                img.src = '';
                img.src = src;
            }
        });
    }
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectCard();
});

// Add resize event listener for responsive adjustments
window.addEventListener('resize', () => {
    // Handle any resize-specific logic here if needed
});

// Add intersection observer for scroll animations
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    // Observe project elements when they become visible
    setTimeout(() => {
        document.querySelectorAll('.project-slide').forEach(slide => {
            observer.observe(slide);
        });
    }, 100);
} 