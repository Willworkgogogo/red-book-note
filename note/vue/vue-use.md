# 浅析Vue.use()

`源码：`

  ```js
    function initUse (Vue) {
      // 参数限制为function 和 Object
      Vue.use = function (plugin: Function | Object) {
        var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
        // 检查plugin是否已在vue上挂载存在，已挂载的插件名会保存在_installedPlugins数组中
        // 如果已存在，则不处理，避免重复加载
        if (installedPlugins.indexOf(plugin) > -1) {
          return this
        }

        // additional parameters
        // 将插件参数转为数组
        var args = toArray(arguments, 1);
        // 往数组第一项添加this对象
        // 这里的this为Vue对象
        args.unshift(this);
        // 1. 首先会检测，plugin这个对象的install属性的值为函数
        // 这两个判断里做的事情是一样的
        // 都是调用插件内部函数，将内部this对象重新指向plugin对象
        if (typeof plugin.install === 'function') {
          plugin.install.apply(plugin, args);

        } else if (typeof plugin === 'function') {
          plugin.apply(null, args);
        }
        installedPlugins.push(plugin);
        return this
      };
    }

    /**
     * Convert an Array-like object to a real Array.
     * 将类数组对象转换成一个真实数组
     * 实现方式就是新建数组，将类数组中需要提取的项存到新数组中
     */
    function toArray (list, start) {
      start = start || 0;
      var i = list.length - start;
      var ret = new Array(i);
      while (i--) {
        ret[i] = list[i + start];
      }
      return ret
    }
  ```
