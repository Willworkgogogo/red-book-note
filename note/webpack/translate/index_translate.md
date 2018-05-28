# Webpack README.md

> webpack 是一个模块打包工具。它的主要目的是打包js文件，使其在浏览器中可运行。同时也可用于转换、打包各种资源。

<h2 align="center">安装</h2>

Install with npm:

```bash
npm install --save-dev webpack
```

Install with yarn:

```bash
yarn add webpack --dev
```

<h2 align="center">介绍</h2>
> 这篇介绍是基于webpack2.x和3.x。 webpack 1.x 的文档已经被移除了

`特点：`
- 能打包ES Module、CommonJS、AMD模式，甚至它们的混合形式
- 可以打包成单个文件，或者多个模块用于异步加载，这样可以较少初次加载时间
- 依赖文件在编译时就被处理，这样能减少运行时的文件大小
- Loaders加载器能在编译时预处理文件，如把typescript转成js、把字符串转成函数、把图片转成base64
- 高级的模块插件能够实现你的应用中需要的任何东西

<h2 align="center">概念</h2>

webpack有着丰富的插件接口，这些接口本身在webpack内部就被使用着。插件使得webpack更富有灵活性。

|Name|Status|Install Size|Description|
|:--:|:----:|:----------:|:----------|
|[extract-text-webpack-plugin][extract]|![extract-npm]|![extract-size]|从打包文件中提取css内容单独打包成一个css文件，如(app.bundle.css)|
|[compression-webpack-plugin][compression]|![compression-npm]|![compression-size]|Prepares compressed versions of assets to serve them with Content-Encoding|
|[i18n-webpack-plugin][i18n]|![i18n-npm]|![i18n-size]|Adds i18n support to your bundles|
|[html-webpack-plugin][html-plugin]|![html-plugin-npm]|![html-plugin-size]| Simplifies creation of HTML files (`index.html`) to serve your bundles|


[common-npm]: https://img.shields.io/npm/v/webpack.svg
[extract]: https://github.com/webpack/extract-text-webpack-plugin
[extract-npm]: https://img.shields.io/npm/v/extract-text-webpack-plugin.svg
[extract-size]: https://packagephobia.now.sh/badge?p=extract-text-webpack-plugin
[component]: https://github.com/webpack/component-webpack-plugin
[component-npm]: https://img.shields.io/npm/v/component-webpack-plugin.svg
[component-size]: https://packagephobia.now.sh/badge?p=component-webpack-plugin
[compression]: https://github.com/webpack/compression-webpack-plugin
[compression-npm]: https://img.shields.io/npm/v/compression-webpack-plugin.svg
[compression-size]: https://packagephobia.now.sh/badge?p=compression-webpack-plugin
[i18n]: https://github.com/webpack/i18n-webpack-plugin
[i18n-npm]: https://img.shields.io/npm/v/i18n-webpack-plugin.svg
[i18n-size]: https://packagephobia.now.sh/badge?p=i18n-webpack-plugin
[html-plugin]: https://github.com/ampedandwired/html-webpack-plugin
[html-plugin-npm]: https://img.shields.io/npm/v/html-webpack-plugin.svg
[html-plugin-size]: https://packagephobia.now.sh/badge?p=html-webpack-plugin
