/**
 * Project Card Configuration
 * Centralized configuration for all projects and settings
 */

const CONFIG = {
    // Application settings
    app: {
        name: 'Project Card',
        version: '1.0.0',
        author: 'Noah Wang',
        totalProjects: 7,
        defaultLanguage: 'zh',
        defaultTheme: 'light',
        animationDuration: 800
    },

    // Project data
    projects: [
        {
            id: 'austin-english',
            index: 0,
            category: 'education',
            technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Unsplash API'],
            links: {
                demo: 'https://austin-english.vercel.app/',
                source: 'https://github.com/XujunNoahWang/austin-english'
            },
            images: {
                desktop: 'src/snapshot/AustinEnglish/AustinEnglish_desktop.png',
                mobile: [
                    'src/snapshot/AustinEnglish/AustinEnglish_mobile_1.png',
                    'src/snapshot/AustinEnglish/AustinEnglish_mobile_2.png'
                ]
            },
            deviceSupport: ['desktop', 'mobile']
        },
        {
            id: 'ielts-timer',
            index: 1,
            category: 'productivity',
            technologies: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Tailwind CSS'],
            links: {
                demo: 'https://noahs-ielts-timer.vercel.app/',
                source: 'https://github.com/XujunNoahWang/IELTSTimer'
            },
            images: {
                desktop: 'src/snapshot/NoahsIELTSTimer/NoahsIELTSTimer_desktop.png',
                mobile: [
                    'src/snapshot/NoahsIELTSTimer/NoahsIELTSTimer_mobile_1.png',
                    'src/snapshot/NoahsIELTSTimer/NoahsIELTSTimer_mobile_2.png'
                ]
            },
            deviceSupport: ['desktop', 'mobile']
        },
        {
            id: 'quote-card',
            index: 2,
            category: 'lifestyle',
            technologies: ['HTML5', 'CSS3', 'JavaScript ES6+'],
            links: {
                demo: 'https://quote-card-by-noah.vercel.app/',
                source: 'https://github.com/XujunNoahWang/quote-card'
            },
            images: {
                desktop: 'src/snapshot/QuoteCard/QuoteCard_desktop.png',
                mobile: [
                    'src/snapshot/QuoteCard/QuoteCard_mobile_1.png',
                    'src/snapshot/QuoteCard/QuoteCard_mobile_2.png'
                ]
            },
            deviceSupport: ['desktop', 'mobile']
        },
        {
            id: 'word-battle',
            index: 3,
            category: 'game',
            technologies: ['Node.js', 'Express', 'Socket.IO', 'HTML5', 'CSS3', 'JavaScript ES6+'],
            links: {
                demo: 'https://wordbattle.up.railway.app/',
                source: 'https://github.com/XujunNoahWang/word-battle'
            },
            images: {
                desktop: 'src/snapshot/WordBattle/WordBattle_desktop.png',
                mobile: [
                    'src/snapshot/WordBattle/WordBattle_mobile_1.png',
                    'src/snapshot/WordBattle/WordBattle_mobile_2.png'
                ]
            },
            deviceSupport: ['desktop', 'mobile']
        },
        {
            id: 'mytempo',
            index: 4,
            category: 'productivity',
            technologies: ['Python', 'tkinter', 'Markdown'],
            links: {
                download: 'https://github.com/XujunNoahWang/mytempo/releases/download/v0.5.3/MyTempo.exe',
                source: 'https://github.com/XujunNoahWang/mytempo'
            },
            images: {
                desktop: 'src/snapshot/MyTempo/MyTempo_desktop.png',
                mobile: []
            },
            deviceSupport: ['desktop'], // Desktop only
            isDesktopApp: true
        },
        {
            id: 'promptgrower',
            index: 5,
            category: 'ai',
            technologies: ['React 18', 'TypeScript', 'Zustand', 'Tailwind CSS', 'Vite'],
            links: {
                demo: 'https://promptgrower.vercel.app/',
                source: 'https://github.com/XujunNoahWang/promptgrower'
            },
            images: {
                desktop: 'src/snapshot/PromptGrower/PromptGrower_desktop.png',
                mobile: [
                    'src/snapshot/PromptGrower/PromptGrower_mobile_1.png',
                    'src/snapshot/PromptGrower/PromptGrower_mobile_2.png'
                ]
            },
            deviceSupport: ['desktop', 'mobile']
        },
        {
            id: 'double-medical-check',
            index: 6,
            category: 'ai',
            technologies: ['Python', 'Flask', 'Google Gemini AI', 'HTML5', 'CSS3', 'JavaScript'],
            links: {
                demo: 'https://double-medical-check.vercel.app/',
                source: 'https://github.com/XujunNoahWang/double-medical-check'
            },
            images: {
                desktop: 'src/snapshot/DoubleMedicalCheck/DoubleMedicalCheck_desktop.png',
                mobile: [
                    'src/snapshot/DoubleMedicalCheck/DoubleMedicalCheck_mobile_1.png',
                    'src/snapshot/DoubleMedicalCheck/DoubleMedicalCheck_mobile_2.png'
                ]
            },
            deviceSupport: ['desktop', 'mobile']
        }
    ],

    // Theme configuration
    themes: {
        light: {
            name: 'Light',
            icon: '☀️'
        },
        dark: {
            name: 'Dark', 
            icon: '🌙'
        }
    },

    // Language configuration
    languages: {
        zh: {
            name: '中文',
            code: 'zh-CN'
        },
        en: {
            name: 'English',
            code: 'en'
        }
    },

    // Performance settings
    performance: {
        imagePreloadDelay: 500,
        resizeDebounceDelay: 250,
        searchDebounceDelay: 300,
        animationBuffer: 200
    },

    // Feature flags
    features: {
        search: true,
        share: true,
        keyboardHelp: false,
        thumbnails: false,
        routing: true,
        analytics: false, // Set to true when ready to add analytics
        pwa: false // Set to true when ready to add PWA support
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}