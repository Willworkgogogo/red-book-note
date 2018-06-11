> vue提供的transition组件，可以给任何元素和组件提供进入和离开的过渡动画
- 条件渲染 (使用 v-if)
- 条件展示 (使用 v-show)
- 动态组件
- 组件根节点


> 比较

- 过渡： 指元素属性值得变化，如透明度，位置偏移等，关键字transition。opacity默认值是1，元素位置的默认值是0，当你设置初始值不为这些值时，动画内部会自动往这些值过渡

- 动画：关键字animation，使用同过渡用法

- vue暴露了一些优先级较高的类名，可以直接使用第三方库，如animate.css

- js钩子函数(当只用 JavaScript 过渡的时候， 在 enter 和 leave 中，回调函数 done 是必须的 。否则，它们会被同步调用，过渡会立即完成。)
  - @before-enter // 进入
  - @enter // 进入中
  - @after-enter // 进入后
  - @enter-cacelled // 取消

<iframe width="100%" height="300" src="//jsrun.net/aYgKp/embedded/all/light/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>