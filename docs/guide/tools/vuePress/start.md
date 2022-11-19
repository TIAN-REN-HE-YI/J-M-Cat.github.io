# 安装
### 准备工作
- [安装Git](https://git-scm.com/downloads)
- [拥有Github账号](https://github.com/)
- [安装Node](https://nodejs.org/zh-cn/)
- [安装VSCode（可选）](https://code.visualstudio.com/)

### 安装步骤
如果你只是想随便用下 VuePress，你可以在全局安装它：
<br>`npm install -g vuepress`

创建项目文件夹：
<br>`mkdir vuepress-demo`

进入项目文件夹：
<br>`cd vuepress-demo`

初始化项目：
<br>`npm init`

然后你就可以开始编写文档了：
<br>`npm run docs:dev`

要生成静态资源，请运行：
<br>`npm run docs:build`

### 创建基本目录结构
```
|—— docs
|    |—— .vuepress
|    |   |—— public
|    |   |   └── favicon.ico
|    |   └── config.js
|    |—— guide
|    └── README.md
|—— deploy.sh
└── package.json
```
