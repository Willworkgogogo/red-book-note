# SVG Sprite

> css sprite 这种雪碧图，常用，能减少对icon小图标请求的http次数。但是制作和前端使用过程确实是折磨人。


> svg sprite 的出现将彻底改变这种局面。但是得满足ie9+。

## 什么是SVG
`特点：`
1. 历史悠久，2003年成为w3c标准
1. 使用XML文档描述来绘图
1. 矢量图，改变大小不失真
1. ie9+


## 使用svg
- svg双标签，内部可以定义绘制矢量图
- use标签，具体使用哪个矢量图
```html
  <svg>
    <defs>
      <g id="shape">
          <rect x="0" y="0" width="50" height="50" />
          <circle cx="0" cy="0" r="50" />
      </g>
    </defs>
  
    <use xlink:href="#shape" x="50" y="50" />
    <use xlink:href="#shape" x="200" y="100" />
  </svg>
```

## SVG Sprite
> 因为有了use可以指定使用你某个具体的svg，所以有了svg雪碧图，现在是如何解决svg雪碧图的制作的事了。这里只讲webpack下的使用。我这里使用svg-sprite-loader生成svg雪碧图

```js
  // 在webpack中配置对图标的配置
  {
    test: /\.svg$/,
    loader: 'svg-sprite-loader',
    include: [resolve('src/icons')],
    options: {
      symbolId: 'icon-[name]' // 这里通过该属性设置，相当于给每个svg起了名字，一个文件代表一个svg图标，用于页面引用。重要！！
    }
  }
```

`页面中使用：`
```html
  <svg>
    <use xlink:href="icon-name"/>
  </svg>
```

