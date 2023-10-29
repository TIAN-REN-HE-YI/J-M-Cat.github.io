## 搭建第一个vite项目

使用PNPM:

``` 
pnpm create vite
```

你还可以通过附加的命令行选项直接指定项目名称和你想要使用的模板。例如，要构建一个 Vite + Vue 项目，运行:

```
pnpm create vite my-vue-app --template vue
```

命令行界面

在安装了 Vite 的项目中，可以在 npm scripts 中使用 vite 可执行文件，或者直接使用 npx vite 运行它。下面是通过脚手架创建的 Vite 项目中默认的 npm scripts：

```
{
  "scripts": {
    "dev": "vite", // 启动开发服务器，别名：`vite dev`，`vite serve`
    "build": "vite build", // 为生产环境构建产物
    "preview": "vite preview" // 本地预览生产构建产物
  }
}
```

## plugin

### 支持vue

```
import { defineConfig } from 'vite';
import { vue } from '@vitejs/plugin-vue';

export defaut defineConfig({
  plugins: [
    vue(),
  ]
})
```

### plugin 通用插件

`@vitejs/plugin-legacy`

说明：兼容老版本浏览器

```
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy'

export defaut defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],  // 默认 不支持 ie11
    }),
  ]
})
```

[更多 Vite 资源](https://github.com/vitejs/awesome-vite)


## base

* 类型： string
* 默认： /

开发或生产环境服务的公共基础路径。合法的值包括以下几种：

* 绝对 URL 路径名，例如 /foo/
* 完整的 URL，例如 https://foo.com/
* 空字符串或 ./（用于嵌入形式的开发）

```
import { defineConfig } from 'vite';

export defaut defineConfig({
  base: './'
})
```

## resolve.alias（配置别名）

* 类型：Record<string, string> | Array<{ find: string | RegExp, replacement: string, customResolver?: ResolverFunction |ResolverObject }>

将会被传递到 @rollup/plugin-alias 作为 entries 的选项。也可以是一个对象，或一个 { find, replacement, customResolver } 的数组。

**当使用文件系统路径的别名时，请始终使用绝对路径。相对路径的别名值会原封不动地被使用，因此无法被正常解析。**

```
import { defineConfig } from 'vite';
import { resolve } from 'path'; // resolve 总能返回一个相当于当前工作目录的绝对路径

export defaut defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
```


## 生产环境移除console配置

### build.minify

* 类型： boolean | 'terser' | 'esbuild'
* 默认： 'esbuild'

设置为 false 可以禁用最小化混淆，或是用来指定使用哪种混淆器。默认为 Esbuild，它比 terser 快 20-40 倍，压缩率只差 1%-2%。Benchmarks

注意，在 lib 模式下使用 'es' 时，build.minify 选项不会缩减空格，因为会移除掉 pure 标注，导致破坏 tree-shaking。

当设置为 'terser' 时必须先安装 Terser。

```
import { defineConfig } from 'vite';

// minify 默认设置 Esbuild
// 使用 terserOptions 需将 minify 配置为 terser，否则 terserOptions 不生效

export defaut defineConfig({
  build: {
    minify: 'terser',
    terserOptions: {
      // 生产环境去除调试
      compress: {
        drop_console: true,
        drop_debugger: true,
      }
    }
  }
})
```

## 跨域代理配置

### server.proxy

* 类型： Record<string, string | ProxyOptions>

为开发服务器配置自定义代理规则。期望接收一个 { key: options } 对象。任何请求路径以 key 值开头的请求将被代理到对应的目标。如果 key 值以 ^ 开头，将被识别为 RegExp。configure 选项可用于访问 proxy 实例。

请注意，如果使用了非相对的 基础路径 base，则必须在每个 key 值前加上该 base。

```
import { defineConfig } from 'vite';

export defaut defineConfig({
  server: {
    proxy: {
      '/api': {
        target: "http://localhost:4567",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
```

## env环境配置

env文件用于切换不同环境配置的参数

创建`.env.development`文件

```
VITE_BASE_PATH: '/api'  // 开发环境路径
```

创建`.env.production`文件

```
VITE_BASE_PATH: 'http://1.1.1.1'  // 生产环境路径
```

获取配置参数
`import meta.env.VITE_xxx`

配置更多环境:

  `.env.xxx`