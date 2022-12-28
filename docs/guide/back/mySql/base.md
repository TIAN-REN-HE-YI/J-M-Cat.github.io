## 安装及启动

<style>
   @import "../../css/style.css"
</style>

<div class="body">
    <div class="content">
        <span class="title">注意</span><br/>
        <span>此处只适用于ios系统</span>
    </div>
</div>

**下载安装包**

[https://dev.mysql.com/downloads/](https://dev.mysql.com/downloads/)

**选择需要安装的版本**

![图片alt](./img/tu1.png "选择版本")

**根据需要选择（我一般选择.dmg）**

![图片alt](./img/tu2.png "选择版本")

**启动mysql**

![图片alt](./img/tu3.png "选择版本")

**配置环境变量**

此时输入`mysql -uroot -p`，会提示没有 ***commod not found***。

1. 进入/usr/local/mysql/bin，查看此目录下是否有mysql

`cd  /usr/local/mysql/bin`

2. 打开 ~/.bash_profile 文件

`open ~/.bash_profile`

3. 添加 path

`export PATH=$PATH:/usr/local/mysql/bin`

4. 再次输入 `mysql -uroot -p`，登录mysql

![图片alt](./img/tu4.png "选择版本")

**启动服务**

`sudo mysql.server start`

**关闭服务**

`sudo mysql.server stop`


**查看状态**

`sudo mysql.server status`



## Sequel Pro

<div class="body" style="margin-top: 20px;">
    <div class="content">
        <span class="title">说明</span><br/>
        <span>我也想用navicat，耐不住它要收费啊！</span>
    </div>
</div>

**下载地址**

[https://sequelpro.com/download](https://sequelpro.com/download)

**连接数据库**

![图片alt](./img/tu5.png "选择版本")

填好参数之后，点击 *test connection* 按钮；如上图所示，测试通过后，再点击 *connect* 连接数据库。

**基本用法**

![图片alt](./img/tu6.png "选择版本")

## 概述

**关系型数据库（RDBMS）**

**概念:**

建立在关系模型基础上，由多张相互连接的二维表组成的数据库。

**特点:**
1. 使用表存储数据，格式统一，便于维护。
2. 使用sql语言操作，标准统一，使用方便。

## SQL通用语法

1. sql语句可以单行或多行写，以分号结尾。
2. sql语句可以使用空格/缩进来增加语句的可读性。
3. mysql数据库的sql语句是不区分大小写的，关键字建议使用大写。
4. 单行用：-- 或 # 注释；多行用 /* */ 注释。

## SQL分类

|  分类   | 说明  |
|  ----  | ----  |
| DDL  | 数据定义语言，用于定义数据库对象（数据库，表，字段） |
| DML  | 数据操作语言，用来对数据库表中的数据进行增删改查 |
| DQL  | 数据查询语言，用来查询数据库中表的记录 |
| DCL  | 数据控制语言，用来创建数据库用户，控制数据库的访问权限 |

## DDL数据类型

**数值类型**

![图片alt](./img/tu7.png "选择版本")

**字符串类型**

![图片alt](./img/tu8.png "选择版本")

**时间类型**

![图片alt](./img/tu9.png "选择版本")

## DDL操作数据库

**查询所有数据库**

```
SHOW DATABASES;
```

**查询当前数据库**

```
SELECT DATABASE();
```

**创建数据库**

```
CREATE DATABASE [IF NOT EXISTS] 数据库名 [DEFAULT CHARSET 字符集][COLLATE 排序规则];
```

**删除数据库**

```
DROP DATABASE IF EXISTS 数据库名;
```

**使用数据库**

```
USE 数据库名;
```

## DDL表的创建

```
CREATE TABLE 表名(
    字段1 字段类型 [COMMENT '注释'],
    字段2 字段类型 [COMMENT '注释'],
    字段3 字段类型 [COMMENT '注释'],
    ···
    字段n 字段类型 [COMMENT '注释']
) [COMMENT '注释'];
```

<div class="body">
    <div class="content">
        <span class="title">注意</span><br/>
        <span>最后一个字段后面没有逗号！</span>
    </div>
</div>

## DDL表的查询

**查询当前数据库所有表**

```
SHOW TABLES;
```

**查询表结构**

```
DESC 表名;
```

**查询指定表的创表语句**

```
SHOW CREATE TABLE 表名;
```
## DDL表的修改

**添加字段**

```
ALTER TABLE 表名 ADD 字段名 字段类型（长度）[COMMENT '注释'] [约束];
```

**修改数据类型**

```
ALTER TABLE 表名 MODIFY 字段名 新数据类型（长度）;
```

**修改字段名和字段类型**

```
ALTER 表名 CHANGE 旧字段名 新字段名 数据类型（长度）[COMMENT '注释'] [约束];
```

**修改表名**

```
ALTER TABLE 表名 RENAME TO 新表名;
```

## DDL表的删除

**删除字段**

```
ALTER TABLE 表名 DROP 字段名;
```

**删除表**

```
DROP TABLE [IF EXISTS] 表名;
```

**删除指定表，并创建该表**

```
TRUNCATE TABLE 表名;
```