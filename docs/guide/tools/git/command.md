## 查看配置信息
查看配置信息
```
git config --list --global
```

## 更改用户名和邮箱
修改用户名
```
git config --global user.name 'xxx'
```

修改邮箱
```
git config --global user.email xxx@163.com
```

## 提交代码

拉取代码 获取代码更新
```
git pull
```

查看项目当前状态
```
git status
```

添加更改的文件到缓存
```
git add . // 添加全部更改文件到缓存

git add xxx.js // 将 xxx.js 文件添加到缓存
```

提交改动注释
```
git commit -m "我是注释"
```

将缓存区代码更新到线上仓库
```
git push
```

## 本地更改比较

查看尚未缓存的改动
```
git diff
```

查看已缓存的改动
```
git diff --cached
```

查看已缓存的与未缓存的所有改动
```
git diff HEAD
```

合并上一次提交（用于反复修改）
```
git commit --amend -m 'xxx'
```

## 查看分支

查看本地分支
```
git branch
```

查看远程分支
```
git branch -r
```

查看所有分支
```
git branch -a
```

查看一个分支的最后一次提交
```
git branch -v
```

查看哪些分支已经合并到当前分支
```
git branch --merged
```

## 删除分支

删除本地分支

```
git branch -d 分支名
```

删除远程分支
```
git push origin --delete 分支名
```

