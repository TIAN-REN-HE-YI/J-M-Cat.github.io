(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{342:function(t,a,n){"use strict";n.r(a);var e=n(14),l=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"什么是pnpm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是pnpm"}},[t._v("#")]),t._v(" 什么是pnpm？")]),t._v(" "),a("p",[a("strong",[t._v("pnpm")]),t._v(" 和 "),a("strong",[t._v("npm/yarn")]),t._v(" 一样，是种包管理器。")]),t._v(" "),a("h3",{attrs:{id:"pnpm优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pnpm优势"}},[t._v("#")]),t._v(" pnpm优势")]),t._v(" "),a("p",[t._v("主要优势在于：")]),t._v(" "),a("ul",[a("li",[t._v("包安装速度极快")]),t._v(" "),a("li",[t._v("磁盘空间利用效率高")]),t._v(" "),a("li",[t._v("支持monorepo")])]),t._v(" "),a("p",[t._v("速度是 npm/yarn 的两倍。")]),t._v(" "),a("h3",{attrs:{id:"为什么使用pnpm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用pnpm"}},[t._v("#")]),t._v(" 为什么使用pnpm？")]),t._v(" "),a("p",[t._v("由于扁平化算法的极其复杂，以及会存在多项目间相同依赖副本的情况。pnpm 在尝试解决这些问题时，放弃了扁平化处理 node_modules 的方式。而是采用 硬链+软链 方式。")]),t._v(" "),a("ul",[a("li",[t._v("不会重复安装同一个包。使用npm/yarn 的时候，如果100个包依赖lodash ，那么就可能安装了100次lodash ，磁盘中就有100个地方写入了这部分代码。但是pnpm会只在一个地方写入这部分代码，后面使用会直接使用hard link。")]),t._v(" "),a("li",[t._v("即使一个包的不同版本，pnpm 也会极大程度地复用之前版本的代码。举个例子，比如 lodash 有 100 个文件，更新版本之后多了一个文件，那么磁盘当中并不会重新写入 101 个文件，而是保留原来的 100 个文件的 hardlink，仅仅写入那一个新增的文件。")])]),t._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[a("code",[t._v("npm i pnpm")])]),t._v(" "),a("h3",{attrs:{id:"常用指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用指令"}},[t._v("#")]),t._v(" 常用指令")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("安装依赖")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("pnpm install")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("更新依赖")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("pnpm update")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("删除依赖")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("pnpm uninstall")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("添加依赖")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("pnpm add")])])])])])}),[],!1,null,null,null);a.default=l.exports}}]);