先从最简单的打包文件分析起

`目录结构`
```shell
  - webpack-demo
    - index.js
    - bar.js
    - webpack.config.js
```

index.js
```js
import bar from './bar'
bar()
```

bar.js
```js
export default function bar() {
  // bar.js 文件
  console.log(`this is from bar.js file`)
}
```

`打包后的文件：`
```js

// 我手动把它的/*****/格式去掉了

;(function(modules) {
  // webpack启动程序
  // 建立一个map，用于缓存模块，key就是模块的id
  var installedModules = {}

	// The require function
	// @param {} number 模块id
	// 这里的模块id，其实是根据传入的数组的小标来定义的，标记数组里的每个函数
  function __webpack_require__(moduleId) {
    // 检查当前模块id是否已经存在缓存map里了，存在则直接返回模块的exports对象
    if (installedModules[moduleId]) return installedModules[moduleId].exports

		// Create a new module (and put it into the cache)
		// 创建一个新的模块，并将其存放入缓存变量中
		// 这里webpack定义的所谓的模块，就是一个实现了约定接口的对象
    var module = (installedModules[moduleId] = {
      exports: {}, // exports 对象
      id: moduleId, // id 定义的模块id
      loaded: false // 是否已经加载的标记
    })

		// 执行模块函数
		// 根据模块id调用modules数组里的函数
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    )

		// 修改模块的是否已加载的标记，改为true
    module.loaded = true

    // 返回模块的exports对象
    return module.exports
  }

  // expose the modules object (__webpack_modules__)
  __webpack_require__.m = modules

  // expose the module cache
  __webpack_require__.c = installedModules

  // __webpack_public_path__
  __webpack_require__.p = ''

  // Load entry module and return exports
  return __webpack_require__(0)
})([
  /* 0 */
  function(module, exports) {
    import bar from './bar'
    bar()
  }
])

```

## 分解

`骨架`

```js
// 立即执行函数，执行函数内部为webpack核心代码，模块以
(function(modules) {
  // ...
})([function(module, exports){ // 
  
}])
```