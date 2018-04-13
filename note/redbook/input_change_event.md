# 比较change和input事件

`<input>`输入框触发change事件的条件是，输入框失去光标，意思就是change事件无法实时监听input输入框里内容的实时变化

```js
  document.querySelector('input').addEventListener('change', function(e){
    // 事件触发的时机在input元素失去焦点时
  }, false)
```

`input事件`
> input事件能实时响应input、textarea等输入框数据的变化，响应事件处理程序
```js
  document.querySelector('input').addEventListener('input', function(e){
    // 实时响应数据的变化
  }, false)
```