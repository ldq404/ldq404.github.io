## 语法基础

### 注释

py 单行注释使用`#`

```py
# py代码
name = "张三" # 用户昵称
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
val = "hello"
val = True
```

<line>变量没有固定类型，变量只是绑定到一个对象。</line>

py 跟 js 一样, 可以多变量赋值

```py
name, age = "张三", 18
# 等价于
name = "张三"
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
name = "张三"
del name
print(name) # 报错 NameError
```

### 缩进与代码块

> Python 最大的语法特点之一就是<mark>没有代码块</mark>的概念, 而是使用缩进来代替, 推荐使用<mark>4个空格</mark>进行缩进

```py
# if 后面的 : 表示要开始一个代码块
if age > 18:
    print("成年人")
```

```py
# 多层缩进来实现嵌套代码块
if age > 18:
    if is_true:
        print("成年人")
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

name = "张三"
print("张" in name) # True
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

py 变量可以通过`type()`查看对象的类型, 类似于 js 的 <mark class="gray">typeof</mark>

### 数字

1. `int` 整数 *(任意精度整数)*

```py
age = 20
num = -100

type(age) # <class 'int'>
```

!> Python 的`int`没有固定的 32 位 / 64 位整数上限，只受实际内存限制。


2. `float` 浮点数

```py
a = 0.1
b = 0.2

type(a) # <class 'float'>
print(a + b) # 0.30000000000000004
```

!> Python 的`float`和 JS 的 Number 一样，都存在浮点数精度问题。

3. `complex` 复数

```py
z = 3 + 4j

print(z) # (3+4j)
```

4. 数字类型转换

- `int()` 转整数
- `float()` 转浮点数
- `complex()` 转复数

```py
int(10.8)   # 10
float(10)   # 10.0
complex(10) # (10+0j)
```

### 字符串

字符串用<line>单引号</line> / <line>双引号</line>都可以


```py
# 单引号
name = "张三"
# 双引号
name = "李四"
# 多行字符串
msg = """
第一行
第二行
第三行
"""

# 字符串类型
type(name) # <class 'str'>
# 字符串长度
len(name) # 2
# 字符重复
hello * 3 # hellohellohello
```


### 布尔值

Python 的布尔类型是 bool

```py
is_active = True
is_deleted = False

# bool 类型转换
bool(1)       # True
bool(0)       # False
bool("hello") # True
bool("")      # False
```

以下这些均属于"假值"

```py
False # False
None  # False
0     # False
0.0   # False
""    # False
[]    # False
()    # False
{}    # False
set() # False
```

!> 还有一个特殊的地方, 在 Python 里`bool`实际上是`int`的子类

```py
int(True)           # 1
int(False)          # 0
print(True + True)  # 2
print(True + False) # 1
```

### None

Python 中的`None`表示没有值 / 值不存在

```py
name = None

type(name) # <class 'NoneType'>
```

想要判断是否是`None`, 需要借助`is`和`is not`来判断

```py
name = None

print(name is None)     # True
print(name is not None) # False
```

!> 如果函数没有指定返回值, 则默认返回`None`



## 数据结构

### 列表 list

Python 的列表类型是`list`, 官方给其的定义是*可变序列（mutable sequence）*

<line>但是 Python 比 JS 多一个非常好用的特性：<mark>负数下标</mark></line>

```py
users = ["张三", "李四", "王五"]
nums = [1, 2, 3]
data = ["小明", 18, True, [1, 2, 3]]

# 正数下标
print(data[0])  # '小明'
print(data[99]) # 报错 IndexError

# 负数下标
print(users[-1])  # '王五'
print(data[-2]) # True
```

基础用法

```py
# 通过字面量的方式创建列表
arr1 = [1, 2, 3]

# 通过 list 方法创建列表
arr2 = list((4, 5, 6)) # 从元组转换

# 获取列表长度
len(arr1) # 3

# 判断是否包含元素
print(2 in arr1) # True

# 拼接两个列表
print(arr1 + arr2) # [1, 2, 3, 4, 5, 6]

# 列表重复 n 次
print(arr2 * 2) # [4, 5, 6, 4, 5, 6]
```

关于列表的方法

| 方法 | 说明 | 示例 | 返回值 | 原数据 |
| :- | :- | :- | :- | :- |
| `append(x)` | 末尾添加元素 | `[1, 2].append(3)` | `None` | `[1, 2, 3]` |
| `insert(i, x)` | 在 `i` 位置插入元素 | `[1, 3].insert(1, 2)` | `None` | `[1, 2, 3]` |
| `remove(x)` | 删除第一个等于 `x` 的元素 | `[1, 2, 1].remove(1)` | `None` | `[2, 1]` |
| `pop()` | 删除并返回末尾元素 | `[1, 2].pop()` | `2` | `[1]` |
| `pop(i)` | 删除并返回指定位置元素 | `[1, 2].pop(0)` | `1` | `[2]` |
| `clear()` | 清空列表 | `[1, 2].clear()` | `None` | `[]` |
| `sort()` | 原地排序 | `[3, 1].sort()` | `None` | `[1, 3]` |
| `reverse()` | 原地反转 | `[1, 2].reverse()` | `None` | `[2, 1]` |


### 元组 tuple

元祖跟列表很像, 但有一点不一样, <line>列表可变, 元祖不可变</line>

```py
users = ("张三", "李四", "王五")
nums = (1, 2, 3)
data = ("小明", 20, True, [1, 2, 3])

users[0]  # '张三'
users[-1] # '王五'

# 元祖不可变
users[0] = "小明" # 报错 TypeError
```

但是元祖有个坑, 如果只有一个元素, 就得多加一个逗号, 否则会识别成其他类型

```py
type((10))  # int
type((10,)) # tuple
```

元祖可以使用`len`和`in`

```py
nums = (1, 2, 3)

len(nums) # 3
print(2 in nums) # True
```

### 集合 set

Python 的集合类型有两个特性, <line class="">1. 不允许重复元素</line>, <line class="">2. 不能通过下标访问</line>, 因为其本身是无序集合, 不记录元素位置

```py
users = {"张三", "李四", "王五"}
nums = {1, 2, 3}
```

如果需要<mark>创建空集合</mark>, 就会出现一个坑

```py
type({})    # <class 'dict'>
type(set()) # <class 'set'>
```

并且集合没有下标, 通过下标访问会报错

```py
nums = {1, 2, 3}
nums[0]  # 报错 TypeError
nums[-1] # 报错 TypeError
```

集合同样可以使用`len`和`in`

```py
nums = {1, 2, 3}

len(nums) # 3
print(2 in nums) # True
```

集合运算

```py
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

# 并集 (等价union方法)
print(a | b) # {1, 2, 3, 4, 5, 6}

# 交集 (等价intersection方法)
print(a & b) # {3, 4}

# 差集 (等价difference方法)
print(a - b) # {1, 2}

# 对称差集 (等价symmetric_difference方法)
print(a ^ b) # {1, 2, 5, 6}
```


关于集合的方法

| 方法 | 说明 | 示例 | 返回值 | 原数据 |
| :- | :- | :- | :- | :- |
| `add(x)` | 添加元素 | `{1, 2}.add(3)` | `None` | `{1, 2, 3}` |
| `remove(x)` | 删除元素，不存在时报错 | `{1, 2}.remove(2)` | `None` | `{1}` |
| `discard(x)` | 删除元素，不存在不报错 | `{1, 2}.discard(2)` | `None` | `{1}` |
| `pop()` | 删除并返回任意一个元素 | `{1, 2}.pop()` | 被删的元素（无序） | 移除一个 |
| `clear()` | 清空集合 | `{1, 2}.clear()` | `None` | `set()` |
| `union()` | 并集 | `{1, 2}.union({2, 3})` | `{1, 2, 3}` | 无变化 |
| `intersection()` | 交集 | `{1, 2}.intersection({2, 3})` | `{2}` | 无变化 |
| `difference()` | 差集 | `{1, 2}.difference({2, 3})` | `{1}` | 无变化 |
| `symmetric_difference()` | 对称差集 | `{1, 2}.symmetric_difference({2, 3})` | `{1, 3}` | 无变化 |


### 字典 dict

Python 的字典类型跟 JS 的 Map 有点相似, 都是 key-value 键值对的格式

```py
user = {
    "name": "张三",
    "age": 20,
}

# 使用 dict() 创建
user = dict(name="张三", age=20)
```

增删改查

```py
# 读取
print(user["name"]) # 张三
print(user["age"])  # 20

# 更新
user["age"] = 99

# 新增
user["sex"] = "男"

# 删除
del user["age"]
user.pop("name")
```

字段同样可以使用len和in

```py
user = {
    "name": "张三",
    "age": 20
}

# 字典的长度
len(user) # 2

# 判断属性是否存在
print("name" in user)  # True
print("email" in user) # False

# 判断值是否存在
print("张三" in user.values()) # True
print(20 in user.values())     # True
```

关于字典的方法

| 方法 | 说明 | 示例 | 返回值 | 原数据 |
| :- | :- | :- | :- | :- |
| `get(key)` | 获取键对应的值，键不存在不报错 | `{"name": "张三"}.get("age")` | `None` | 无变化 |
| `get(key, 默认值)` | 键不存在时返回默认值 | `{"name": "张三"}.get("age", 0)` | `0` | 无变化 |
| `keys()` | 获取所有的键 | `{"name": "张三"}.keys()` | `dict_keys(['name'])` | 无变化 |
| `values()` | 获取所有的值 | `{"name": "张三"}.values()` | `dict_values(['张三'])` | 无变化 |
| `items()` | 获取所有的键值对 | `{"name": "张三"}.items()` | `dict_items([('name', '张三')])` | 无变化 |
| `pop(key)` | 删除键值对并返回对应的值，键不存在时报错 | `{"name": "张三", "age": 20}.pop("age")` | `20` | `{"name": "张三"}` |
| `pop(key, 默认值)` | 键不存在时不报错，返回默认值 | `{"name": "张三"}.pop("age", 0)` | `0` | 无变化 |
| `update()` | 批量更新或新增键值对 | `{"name": "张三"}.update({"age": 20})` | `None` | `{"name": "张三", "age": 20}` |
| `clear()` | 清空字典 | `{"name": "张三"}.clear()` | `None` | `{}` |

!> py 里的 `keys()`/`values()`/`items()` 返回的是动态的 view 对象, 当原字典变化时, view 也会跟着一起变化

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
