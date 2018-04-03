# vscode 配置.vue文件格式化过程

1. 安装vetur、stylus-supermacy、prettier、eslint
1. 贴一段自己当前的vscode自定义的配置

```json
  {
    "window.zoomLevel": 0,
    "files.autoSave": "afterDelay",
    "go.formatOnSave": false,
    "typescript.check.tscVersion": false,
    "editor.fontSize": 14,
    "workbench.colorTheme": "Atom One Dark",
    "workbench.iconTheme": "vscode-icons",
    "editor.tabSize": 2, // 缩进
    "editor.renderIndentGuides": false,
    "vsicons.dontShowNewVersionMessage": true,
    "editor.minimap.enabled": true,
    "go.toolsGopath": "/Users/wangweiwei/workplace:/Users/wangweiwei/workplace/src/web/hq.smm.cn",
    "git.confirmSync": false,
    "go.gopath": "~/workplace:/Users/wangweiwei/workplace/src/web/hq.smm.cn",
    "workbench.panel.location": "right",
    "vsicons.projectDetection.autoReload": true,
    "explorer.confirmDragAndDrop": false,
    "workbench.startupEditor": "newUntitledFile",
    "eslint.validate": [ // eslint 的配置修改
        "javascript",
        "javascriptreact",
        "html",
        {
            "language": "vue",
            "autoFix": true
        },
        {
            "language": "html",
            "autoFix": true
        }
    ],
    "eslint.options": {
        "plugins": ["html"]
    },
    "team.showWelcomeMessage": false,
    "eslint.autoFixOnSave": true,
    "prettier.semi": false, // 格式化的时候不需要添加分号
    "prettier.singleQuote": true, // 格式化的时候使用单引号
    "prettier.disableLanguages": [],
    "stylusSupremacy.insertSemicolons": false // stylus格式化时不允许插入分号
  }
```

- vetur插件使用prettier进行格式化，双引号、分号的添加都是在prettier中进行设置
- prettier中又内置了很多其他插件规范，比如有sass/less/stylus，所以要单独下载stylus superacy来对stylus的格式化进行配置
