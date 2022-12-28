module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/images/favicon.ico' }]
    ],
    title: "🍑🍉🍊🍇🍈🍍🍒🍋",
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
                    { text: 'egg', link: '' },
                    { text: 'mySql', link: '/guide/back/mySql/base' },
                ]
            },
            {
                text: 'Tools',
                items: [
                    { text: 'Git', link: '/guide/tools/git/introduce' },
                    { text: 'VuePress', link: '/guide/tools/vuePress/introduce/' },
                ]
            },
            { text: 'GitHub', link: 'https://github.com/J-M-Cat' },
        ],
        sidebar: {
            '/guide/back/mySql/': [
                { title: '基础篇', path: '/guide/back/mySql/base' },
            ],
            '/guide/tools/git/': [
                { title: '起步', path: '/guide/tools/git/introduce' },
                { title: '创建仓库', path: '/guide/tools/git/create' },
                { title: '常用命令', path: '/guide/tools/git/command' },
                { title: '合并分支', path: '/guide/tools/git/merge' },
                { title: '创建分支', path: '/guide/tools/git/checkout' },
                { title: '回退版本', path: '/guide/tools/git/reset' },
            ],
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
            ],
        },
    }
};
