
## 一、环境与工具（先跑起来）

!> TODO: Python 安装与版本管理
!> - 装 Python 3.11+（agent 生态基本都要求 3.10+）
!> - pyenv（管理多版本，类似前端的 nvm）或系统直接装
!> - 验证：python --version / pip --version

!> TODO: 虚拟环境（必学，对应前端 node_modules 隔离）
!> - python -m venv .venv 创建
!> - source .venv/Scripts/activate（Windows 激活）
!> - 退出：deactivate
!> - 作用：每个项目隔离依赖，避免全局污染（类比前端的 npm init + 局部依赖）

!> TODO: 包管理与运行
!> - pip install 包名 / pip install -r requirements.txt
!> - 推荐新工具 uv（比 pip 快很多，Rust 写的）
!> - 跑脚本：python main.py
!> - 交互环境：python 进入 REPL（类似浏览器 console）

!> TODO: 编辑器与调试
!> - VS Code + Python 插件（你已经会 VS Code）
!> - 断点调试：和前端几乎一样
!> - 推荐装 ruff（Lint）、black（格式化）


## 二、Python 语法基础（从前端视角切入）

> 你是前端，下面每条都标了「JS 里你已知的对应物」，照着迁移最快。

### 基础类型与变量

!> TODO: 变量与动态类型
!> - 不用 let/const，直接 name = 'tom'（默认可变）
!> - 类型靠值推断，但建议写类型注解（见后面 typing 节）
!> - 没有 var，也没有块级作用域的 let 概念

!> TODO: 基础类型（对比 JS）
!> - int / float → 对应 JS 的 number（但 Python 区分整数和浮点，没有 NaN 坑少）
!> - str → 对应 JS string，格式化用 f'hello {name}'（对应模板字符串 `hello ${name}`）
!> - bool → True / False（首字母大写！JS 是 true/false）
!> - None → 对应 JS 的 null（不是 undefined，Python 没有 undefined）
!> - list → 对应 JS Array
!> - dict → 对应 JS Object（{key: value} 写法一样）
!> - tuple → 只读的 list（前端没有对应物，记住“创建后不能改”）
!> - set → 对应 JS Set

### 运算符与字符串

!> TODO: 运算符差异
!> - 取模 %、幂 **（JS 是 Math.pow）
!> - 整除 //（向下取整）
!> - 逻辑：and / or / not（JS 的 && || !）
!> - 判断相等 ==，身份 is（判同一个对象，少用）
!> - 没有 ===/!==，Python 的 == 已经比较值（但有坑，先记住基本用法）

!> TODO: 字符串
!> - f-string：f'{name} 今年 {age} 岁'（最常用）
!> - 多行字符串：'''长文本'''（对应 JS 模板字符串多行）
!> - 没有反引号类型，也没有 ${}，统一用 f-string

### 控制流（重点：缩进代替大括号）

!> TODO: if / for / while
!> - 没有 {}，用缩进表示代码块（这是 Python 最反前端的点，务必习惯）
!> - if x > 0: 末尾有冒号，下一行缩进 4 空格
!> - for item in items: 直接遍历（对应 JS for (const item of items)）
!> - for i in range(10): 生成 0~9（对应 JS for (let i=0; i<10; i++)）
!> - while 条件: 和 JS 一样

!> TODO: 条件表达式与推导式
!> - 三元：x if cond else y（对应 JS cond ? x : y）
!> - 列表推导：[x*2 for x in items]（前端没有，但很像 map+filter 合一，强烈建议掌握）
!> - 字典推导：{k: v for k, v in d.items()}

### 函数与错误处理

!> TODO: 函数定义
!> - def 函数名(参数): 冒号 + 缩进（对应 JS function / 箭头函数）
!> - 返回值：return（没有 return 默认返回 None）
!> - 默认参数：def f(a, b=10):（对应 JS 默认参数）
!> - 不定参数：*args（对应 JS ...rest）、**kwargs（对应 JS 展开对象）
!> - lambda：lambda x: x*2（对应 JS 箭头函数，但只能一行）

!> TODO: 异常处理
!> - try / except 异常类型 as e: / finally:（对应 JS try / catch(e) / finally）
!> - 没有 try...catch 关键字，是 try...except
!> - 主动抛错：raise ValueError('出错')（对应 JS throw）

### 类与模块（面向对象）

!> TODO: 类
!> - class User: + def __init__(self, name): 构造器（对应 JS constructor）
!> - self 相当于 JS 的 this，但必须显式写（前端最不习惯的点之一）
!> - 继承：class Admin(User): 括号里写父类
!> - 没有 public/private 关键字，约定单下划线 _xxx 表示私有

!> TODO: 模块与导入
!> - 一个 .py 文件就是一个模块（对应前端一个 module）
!> - import os（对应 JS import）
!> - from module import func（对应 JS 具名导入）
!> - 没有 export 关键字，全靠文件顶层定义 + import


## 三、类型注解与工程化（全栈必会，agent 开发尤其重要）

!> TODO: 类型注解 typing
!> - 变量：name: str = 'tom'
!> - 函数：def add(a: int, b: int) -> int:
!> - 常用：List[int]、Dict[str, int]、Optional[str]（可能为 None）、Any
!> - 作用：代码可读 + IDE 补全 + 接 mypy 查错（对应 TS 的 interface/type）
!> - agent 开发强烈建议学：LLM 框架（如 Pydantic）靠类型定义做数据校验

!> TODO: Pydantic（数据模型，agent 高频）
!> - from pydantic import BaseModel
!> - class User(BaseModel): name: str; age: int
!> - 自动校验类型、自动解析 JSON（对应 TS 的 zod / interface）
!> - agent 里常用它定义工具入参、结构化输出

!> TODO: 项目结构与入口
!> - if __name__ == '__main__': main()（对应前端的入口判断，避免被 import 时误执行）
!> - 推荐目录：src/ 放代码、tests/ 放测试、requirements.txt 锁依赖


## 四、Python 与数据库（接上 PostgreSQL.md）

!> TODO: 数据库连接驱动
!> - 同步：psycopg2 / psycopg（最常用）
!> - 异步：asyncpg（性能更好，agent/接口高并发推荐）
!> - ORM：SQLAlchemy（对应前端的 Prisma / TypeORM）
!> - 简单封装：用原生 SQL 也行（你已经会 SQL，混用很常见）

!> TODO: 执行查询（基础套路）
!> - 建立连接 conn = psycopg.connect(...)
!> - 游标 cur = conn.cursor()
!> - cur.execute('SELECT * FROM users WHERE id = %s', (user_id,))（注意参数用 %s 占位，防注入！对应 JS 的 ? 占位）
!> - 取结果：cur.fetchall() / fetchone()
!> - 事务：conn.commit() / conn.rollback()

!> TODO: 防 SQL 注入（重点）
!> - 永远用参数化查询，不要字符串拼接（对应前端最该养成的习惯）
!> - f'SELECT * FROM users WHERE name = {name}' 是错的、危险的

!> TODO: ORM 入门（SQLAlchemy）
!> - 定义表模型 class User(Base): ...
!> - session.query(User).filter_by(name='tom').all()
!> - 关系：relationship() 对应你 PostgreSQL.md 里的 FOREIGN KEY


## 五、Web 后端与接口（转全栈核心）

!> TODO: Web 框架
!> - FastAPI（推荐，和 agent 生态契合，自带类型 + 自动文档）
!> - Flask（经典轻量，适合理解原理）
!> - Django（全家桶，重但功能全）
!> - 选 FastAPI 起步：类型注解直接复用第三章

!> TODO: 写一个接口（FastAPI 套路）
!> - @app.get('/users/{user_id}') 装饰器定义路由（对应前端前端路由的概念）
!> - 函数参数自动从 path/query/body 解析
!> - 返回 dict / Pydantic 模型，自动转 JSON（对应前端 res.json()）
!> - 启动：uvicorn main:app --reload（对应 npm run dev）

!> TODO: 请求与响应
!> - GET/POST/PUT/DELETE 和前端 fetch 一一对应
!> - 请求体用 Pydantic 模型接（对应前端 POST 的 JSON body）
!> - 跨域 CORS：用 fastapi-cors（对应前端遇到的跨域问题）

!> TODO: 接口分层
!> - 路由层（收请求）→ 服务层（写业务逻辑）→ 数据层（查库）
!> - 对应前端可能没强分层的习惯，后端强烈建议分


## 六、Agent 开发（你的目标方向）

!> TODO: LLM SDK
!> - OpenAI SDK（Python 官方库，最通用）
!> - Anthropic SDK（claude 官方库）
!> - 调用套路：client.messages.create(model=..., messages=[...])

!> TODO: Agent 框架
!> - LangChain（最流行，组件多）
!> - LlamaIndex（偏 RAG 检索）
!> - 原生手写（不依赖框架也行，理解原理后更灵活）

!> TODO: 工具调用 Tool Calling
!> - 用 Pydantic 模型定义工具入参（接第三章）
!> - 模型返回“要调哪个函数 + 参数”，你执行后再把结果喂回去
!> - 对应你 PostgreSQL.md 里 JSONB 存 tool_calls 的场景

!> TODO: 记忆与状态持久化
!> - 接 PostgreSQL：sessions + messages 两表（对应 PostgreSQL.md 的 Agent 场景）
!> - 向量检索 pgvector（对应 PostgreSQL.md 的向量检索 TODO）

!> TODO: 异步 asyncio（agent 高并发必懂）
!> - async / await（对应前端 JS 的 async/await，语法几乎一样！）
!> - 这是 Python 对前端最友好的部分，迁移成本极低


## 七、测试与工程实践

!> TODO: 单元测试 pytest
!> - 函数名以 test_ 开头，自动发现
!> - assert 结果 == 预期（对应 JS 的 assert / 测试库 expect）
!> - 对应前端 jest / vitest

!> TODO: 虚拟环境与依赖锁定
!> - requirements.txt（pip freeze > requirements.txt）
!> - 或用 uv / poetry 管理

!> TODO: 代码风格
!> - PEP8（Python 官方风格指南，缩进 4 空格）
!> - 工具 black（自动格式化，对应 prettier）、ruff（对应 eslint）


## 八、了解即可（先放着，用到再查）

- 装饰器进阶（@property / 类装饰器）
- 生成器 generator / yield（对应 JS generator）
- 并发：多线程 threading / 多进程 multiprocessing（GIL 限制，了解即可）
- 元类 metaclass、描述符（偏底层，几乎用不到）
- 打包发布：poetry / pip 发布到 PyPI
