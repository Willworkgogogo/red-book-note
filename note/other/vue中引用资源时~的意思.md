## 资源引用时，~符号的意义

`背景：`
> 在使用webpack做构建工具时，webpack配置文件里的alias属性，可以方便对资源路径进行管理。js中引用外部模块，非常方便。但是在html和样式中引用图片等资源时，渲染的路径却是错误的。

```js
  alias: {
    'src': path.resolve(__dirname, '../src'),
    'assets': path.resolve(__dirname, '../src/assets'),
    'components': path.resolve(__dirname, '../src/components')
  }
```

```js
  // 下面除了js的路径引用正确，html和css的路径都引用错误。
  <template>
    <img src="assets/images/logo.jpg" />
  </template>
  <script>
    import 'assets/css/style.css'
  </script>
  <style>
  .logo {
    background: url(asset/images/bg.jpg)
  }
  </style>
```

### 根源
> vue-html-loader and css-loader translates non-root URLs to relative paths. In order to treat it like a module path, prefix it with ~ 

> vue-html-loader 和 css-loader会将未指定根路径的url解析成相对路径。而此处我们是想引用一个资源块，所以这里有一个hack方式，就是在路径前添加`~符号`。这就告诉这两个loader，遇到路径头部带~的不要自作主张解析成相对路径。接下来会做两步，一是去webpack的alias属性里匹配有没有预先定义的相同字段，二是检查是不是node_modules的模块



---------
参考了这篇[文章](https://segmentfault.com/a/1190000008107976),这也是网上少有的终结此问题的文章！👍
