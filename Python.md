## 语法基础

### 注释

py 单行注释使用`#`

```py
# py代码
name = '张三' # 用户昵称
```

py 没有专门的多行注释语法

```py
# 第一行注释
# 第二行注释
# 第三行注释
```

虽然可以看到这种写法：

```py
"""
第一行
第二行
第三行
"""
```

但它本质上是一个多行字符串，不是注释。

```py
# 这种就是 docstring（文档字符串）
def login():
    """用户登录"""
```



### 变量与赋值

py 定义变量不需要使用 `var`/`let`/`const`

```py
name = "张三" # 字符串类型
age = 32 # 数字类型
balance = 1000.50 # 浮点类型
is_active = True # 布尔类型
```

py 推荐使用下划线这种命名方式

```py
user_name = "张三"
user_age = 32
is_active = True
```

并且 py 的变量是<mark class="">动态类型</mark>

```py
val = 100
val = 'hello'
val = True
```

<line>变量没有固定类型，变量只是绑定到一个对象。</line>

py 跟 js 一样, 可以多变量赋值

```py
name, age = '张三', 18
# 等价于
name = '张三'
age = 18
```

可以利用这个特性直接交换变量

```py
a = 10
b = 20

a, b = b, a
```

py 删除变量跟 js 的 delete 类似

```py
name = '张三'
del name
print(name) # 报错 NameError
```

### 缩进与代码块

?> Python 最大的语法特点之一就是<mark>没有代码块</mark>的概念, 而是使用缩进来代替, 推荐使用<mark>4个空格</mark>进行缩进

```py
# if 后面的 : 表示要开始一个代码块
if age > 18:
    print('成年人')
```

```py
# 多层缩进来实现嵌套代码块
if age > 18:
    if is_true:
        print('成年人')
```


### 运算符

#### 算术运算符

```py
a + b   # 加
a - b   # 减
a * b   # 乘
a / b   # 除
a // b  # 地板除
a % b   # 取余
a ** b  # 幂
```

但是需要注意一下, 地板除是向<mark>负无穷</mark>取整

```py
5 / 2   # 2.5
5 // 2  # 2
-5 // 2 # -3
```

#### 赋值运算符

!> py 没有自增`++`和自减`--`

```py
num += 1  # 加
num -= 1  # 减
num *= 2  # 乘
num /= 2  # 除
num //= 2 # 地板除（向负无穷取整）
num %= 2  # 取余
num **= 2 # 幂运算
```

#### 比较运算符


```py
# py 没有 a === b
a == b   # 等于    
a != b   # 不等于
a > b    # 大于
a >= b   # 大于等于
a < b    # 小于
a <= b   # 小于等于
```

```py
# 链式比较
18 <= age < 60
# 等价于
18 <= age and age < 60
```

#### 成员运算符

`in` / `not in` 是否包含

```py
username = "张三"
print(username in ["张三", "李四"])     # True
print(username not in ["小明", "小红"]) # True

name = '张三'
print('张' in name) # True
```

#### 身份运算符


`is` / `is not` 是否指向同一个对象

```py
a = [1, 2, 3]
b = [1, 2, 3]

print(a == b) # True
print(a is b) # False

# 比较常见的场景
name is None
name is not None
```

#### 逻辑运算符

- `and` 对应 js 里的 `&&`
- `or` 对应 js 里的 `||`
- `not` 对应 js 里的 `!`

```py
True and True    # True
True and False   # False
False and True   # False
False and False  # False

True or True     # True
True or False    # True
False or True    # True
False or False   # False

not True         # False
not False        # True
```

!> `and`/`or` 返回操作数本身，不一定返回 `Boolean`


### 输入与输出

- `input` 用来接收用户的输入内容 *(返回的值永远是字符串)*
- `print` 用来打印输出
    - `sep` 分隔符 *默认是空格*
    - `end` 结尾 *默认是换行*

```py
name = input("请输入姓名：")
age = 20

# 打印内容
print(name) # 张三

# 打印多个内容
print(name, age) # 张三 20

# 指定分隔符
print(name, age, sep=" / ") # 张三/32

# 指定结尾
print("hello", end="")
print("world") # helloworld
```


## 数据类型

### 数字

### 字符串

### 布尔值

### None


## 数据结构

### 列表

### 元组

### 集合

### 字典

### 切片

### 解包

### 推导式



## 流程控制

### 条件判断

### 循环



## 函数

### 函数定义

### 参数

#### 默认参数

#### 关键字参数

#### *args / **kwargs

### 返回值

### Lambda

### 作用域



## 核心特性

### 对象与引用

### 可变与不可变

### 浅拷贝与深拷贝

### 迭代器与可迭代对象

### 生成器

### 装饰器

### 上下文管理器



## 面向对象

### 类与对象

#### class 与 \_\_init\_\_

#### self

#### 属性与方法

#### 类属性

### 继承

### 特殊方法



## 工程基础

### 异常处理

### 模块与包

### 文件操作

### JSON

### 类型注解

### dataclass 与 Pydantic

### 虚拟环境与依赖管理

#### venv 与 pip

#### pyproject.toml

### 环境变量

### logging

### 测试



## 异步

### 同步与异步

### 协程

#### async / await

#### coroutine 与 Task

#### asyncio

### 并发模型

#### 并发与并行

#### IO-bound 与 CPU-bound



## Python + PostgreSQL

### 数据库连接

### 参数化 SQL

### 查询

### 增删改（INSERT / UPDATE / DELETE）

### 事务

### 连接池



## FastAPI

### HTTP 基础与 REST API

### 路由

### 请求参数

#### Path 参数

#### Query 参数

#### Request Body

### 响应

#### Response 与 Response Model

#### Status Code

#### Header 与 Cookie

### 文件上传

### 核心机制

#### Pydantic

#### 依赖注入

#### 中间件

#### 异常处理

#### CORS

### 认证与权限

#### Authentication

#### JWT

#### 权限控制

### 实时通信

#### SSE

#### WebSocket



## 全栈开发

### 前后端分离

### API 设计

### 常见功能

#### 登录注册

#### 权限

#### 分页、搜索、排序与筛选

#### 文件上传

### 前端调用 API

#### SSE 流式通信



## 工程化

### Git

### Docker

#### Docker Compose

### Linux

### Nginx

### 环境变量

### 日志

### 测试

### CI/CD 与部署

### 监控



## RAG

### 基础概念

#### Embedding

#### 相似度

### 向量与存储

#### Vector

#### pgvector

### 文档处理

#### 文档解析

#### 文本切分与 Chunk

#### Metadata

### 检索

#### Vector Search

#### Hybrid Search

#### Rerank

### 流程与评估

#### RAG Pipeline

#### RAG Evaluation



## Agent

### Agent 基础

#### Agent 与普通 LLM 应用

#### Agent Loop

### Tool

#### Tool 与 Tool Calling

#### Tool 设计与 Schema

#### Tool 可靠性（权限 / 超时 / 重试 / 幂等）

### 核心机制

#### State 与 Memory

#### Planning

#### 多工具 Agent 与多 Agent

#### Human-in-the-loop

### Agent 工程化

#### Context 与 Token 管理

#### 长任务与 Background Task

#### Agent 状态持久化

#### Trace 与 Evaluation

#### 成本控制

#### 并发控制



## 综合项目

### 技术栈

#### 前端

#### FastAPI

#### PostgreSQL 与 pgvector

### 核心能力

#### RAG

#### Agent 与 Tool

#### SSE

### 上线

#### Docker

#### 部署
