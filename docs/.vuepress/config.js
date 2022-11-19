module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/images/favicon.ico' }]
    ],
    title: "TIAN-REN-HE-YI（学习笔记）",
    description: "",
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: '前端',
                items: [
                    { text: 'Vue3', link: '' },
                    { text: 'JavaScript', link: '' },
                    { text: 'Css/Css3', link: '' },
                    { text: 'Vite', link: '' },
                    { text: 'Pina', link: '' },
                    { text: 'TypeScript', link: '' }
                ]
            },
            {
                text: '后端',
                items: [
                    { text: 'Nest', link: '' },
                    { text: 'MongoDB', link: '' },
                ]
            },
            {
                text: 'Tools',
                items: [
                    { text: 'Git', link: '' },
                    { text: 'VuePress', link: '/guide/tools/vuePress/introduce/' },
                ]
            },
            { text: 'GitHub', link: 'https://github.com/J-M-Cat' },
        ],
        sidebar: {
            '/guide/tools/vuePress/': [
                { title: '介绍', path: '/guide/tools/vuePress/introduce' },
                { title: '安装', path: '/guide/tools/vuePress/start' },
                {
                    title: '配置',
                    children: [
                        { title: '主页', path: '/guide/tools/vuePress/toConfigure' },
                        { title: '导航链接', path: '/guide/tools/vuePress/navBar' },
                        { title: '侧边栏', path: '/guide/tools/vuePress/sideBar' },
                    ],
                },
                { title: '部署', path: '/guide/tools/vuePress/deploy' }
            ]
        },
    }
};
