## 开发分支合并主分支

1. 先切换到开发分支

```
git checkout dev
```

2. 拉取分支

```
git pull
```

3. 切换到主分支

```
git checkout master
```

4. 合并代码到主分支

```
git merge dev
```

5. 提交代码

```
git push
```

## 主分支合并到开发分支

1. 先切换到主分支

```
git checkout master
```

2. 拉取代码

```
git pull
```

3. 切换到开发分支

```
git checkout dev
```

4. 主分支代码合并到开发分支

```
git merge master
```

5. 提交代码

```
git push
```