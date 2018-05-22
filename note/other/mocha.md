# Mocha
> mocha是一个功能丰富的可运行在nodejs和浏览器环境的测试框架。

## INSTALL
```shell
  npm i -g mocha
  npm i mocha --save-dev
```

## STARTED
```js

// 建立一个test.js文件
const assert = require('assert')
describe('Array', function() {
  describe('#IndexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1)
    })
  })
})

// 在终端执行
// 匹配规则： 直接执行mocha命令， mocha命令会匹配名称为test的文件
// 或者指定文件 mocha src/oh.js
mocha

```
