## 创建新分支

1. 切换到master分支

```
git checkout master
```

2. 拉取代码

```
git pull
```

3. 创建新分支 xx

```
git checkout -b xx
```

4. 将新分支推送到远端

```
git push origin xx
```

5. 将远端分支和本地分支关联起来

```
git branch --set-upstream-to=origin/xx
```

6. 拉取代码

```
git pull
```