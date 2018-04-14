### 查看本机是否已生成公钥
```shell
  # 查看.ssh文件, 主要是看是否存在.pub结尾的文件
  ls -al ~/.ssh
```

### 复制已有公钥
```shell
  pbcopy < ~/.ssh/id_rsa.pub
```

### 生成新的公钥
```shell

```
[github官方指导生成公钥](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)