# 介绍
VuePress 由两部分组成：一个以 Vue 驱动的主题系统的简约静态网站生成工具，和一个为编写技术文档而优化的默认主题。它是为了支持 Vue 子项目的文档需求而创建的。

由 VuePress 生成的每个页面，都具有相应的预渲染静态 HTML，它们能提供出色的加载性能，并且对 SEO 友好。然而，页面加载之后，Vue 就会将这些静态内容，接管为完整的单页面应用程序(SPA)。当用户在浏览站点时，可以按需加载其他页面。

# 运行原理
VuePress 网站实际上是由 Vue, Vue Router 和 webpack 驱动的单页面应用程序。如果你以前使用过 Vue，那么在编写或开发自定义主题时（甚至可以使用 Vue DevTools 来调试你的自定义主题！），你会融入到熟悉的开发体验中！

在构建过程中，我们会创建应用程序的服务器渲染版本，并且实际上是通过访问每个路由，来渲染相应的 HTML。这种方式受到 Nuxt 的 nuxt generate 命令以及 Gatsby 等其他项目的启发。

每个 markdown 文件都使用 markdown-it 编译为 HTML，然后作为 Vue 组件的模板进行处理。这允许你直接在 markdown 文件中使用 Vue，在需要嵌入动态内容时，这种使用方式非常有用。

> #### 更多用法可以参考:
>
> [VuePress 官方文档](http://caibaojian.com/vuepress/)
>
> [Markdown 官方文档](https://markdown.com.cn/)
