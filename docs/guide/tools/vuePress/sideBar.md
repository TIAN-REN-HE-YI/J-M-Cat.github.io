## config.js (侧边栏)
参数配置
```
module.exports = {
    themeConfig: {
        sidebar: {
            '/guide/tools/vuePress/': [
                { 
                    title: '介绍',
                    collapsable: false, // 开启/关闭 展开
                    path: '/guide/tools/vuePress/introduce' 
                },
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
```

效果图如下:

![图片alt](./img/sideBar.png "主页效果图")

`
侧边栏组默认情况下是可折叠的。你可以强制一个组始终以 collapsable：false 打开。
`