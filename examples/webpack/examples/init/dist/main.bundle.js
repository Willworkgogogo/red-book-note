;(function(modules) {
  // 建立一个模块缓存变量
  var installedModules = {}

  // 构建一个__webpack_require__函数， 接收一个模块id参数
  // 返回模块的exports对象
  function __webpack_require__(moduleId) {
    // 检查当前模块是否已经在缓存变量installedModules中，如果已经缓存，则直接取缓存里的模块，并返回该模块的exports对象
    // 否则往下执行
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports
    }

    // 按定义的接口创建一个新的模块，并将它存入缓存变量中
    var module = (installedModules[moduleId] = {
      i: moduleId, // 模块id，传入的id值
      l: false, // 是否已加载，默认false
      exports: {} // exports对象，默认为空
    })

    // 关键：这里开始执行模块函数
    modules[moduleId].call(
      module.exports, // 执行环境设为模块的exports对象
      module, // 参数1
      module.exports, // 参数2
      __webpack_require__ // 参数3， 把函数指针变量__webpack_require__导出
    )

    // 标记该模块已执行
    module.l = true

    // 把模块的exports对象导出
    return module.exports
  }

  // 把模块数组挂载在__webpack_require__对象上
  __webpack_require__.m = modules

  // 把缓存变量挂载在__webpack_require__对象上
  __webpack_require__.c = installedModules

  // define getter function for harmony exports
  // 为exports对象设置name属性，都过Object.defineProperty设置它的getter函数
  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      // exports对象上如果不含有name属性，则执行下面操作
      Object.defineProperty(exports, name, {
        configurable: false,
        enumerable: true,
        get: getter
      })
    }
  }

  // getDefaultExport function for compatibility with non-harmony modules
  // 返回getter函数
  __webpack_require__.n = function(module) {
    var getter =
      module && module.__esModule
        ? function getDefault() {
            return module['default']
          }
        : function getModuleExports() {
            return module
          }
    __webpack_require__.d(getter, 'a', getter)
    return getter
  }

  // 用于判断对象上是否有某个属性
  // @param {} object 检测对象
  // @param {} property 检测属性
  // @return boolean
  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property)
  }

  // __webpack_public_path__
  __webpack_require__.p = ''

  // Load entry module and return exports
  // 加载入口模块，返回的是模块0(入口模块)的exports对象
  return __webpack_require__((__webpack_require__.s = 0))
})(
  /************************************************************************/
  [
    /* 0 */
    // 数组的第一项
    function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      Object.defineProperty(__webpack_exports__, '__esModule', { value: true }) // 设置模块id为0的模块的，exports对象的__esModule的value属性为true
      var __WEBPACK_IMPORTED_MODULE_0__bar__ = __webpack_require__(1) // 拿到模块id为1的exports对象  // 先调用数组第二项

      Object(__WEBPACK_IMPORTED_MODULE_0__bar__['a' /* default */])()
    },
    /* 1 */
    // 数组的第二项
    function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_exports__['a'] = bar // 把导入的函数bar()，挂载到__webpack_exports__对象上
      function bar() {
        // bar.js 文件
        console.log(`this is from bar.js file`)
      }
    }
  ]
)
