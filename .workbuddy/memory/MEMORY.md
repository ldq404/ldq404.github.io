# 项目长期记忆 · ldq404.github.io（学习笔记站）

## 架构（2026-09-01 现状：docsify + docsify-theme-macos 主题）

**docsify 路线（非自研框架）**：页面用 docsify@4（CDN）+ 本地自包含主题。

- `index.html`：docsify 配置 + 本地 Prism 高亮（`lib/prism.min.js` + 语言组件）+ `./docsify-theme/macos.css` 主题。
- `docsify-theme/macos.css`：**自包含完整主题**（= docsify 官方 vue.css + mac 覆盖合并，替换 vue.css 即可），含 mac 代码窗口（渐变标题栏 + 红黄绿圆点 + 语言名，纯 CSS `attr(data-lang)`）、表格、**划重点两件套：`<mark>` 涂色 + `<line>` 波浪线**（各 7 色 class：yellow/red/orange/green/blue/purple/gray，默认色走 `.markdown-section` 上 `--mark-bg`/`--line-color` 变量，随时可改）、`!>`/`?>` 提示块、Prism token 高亮色（Xcode Light 系）。此主题已发布 GitHub `buuing/docsify-theme`。
- `lib/`：prism@1.29.0 core（内置 markup/css/clike/javascript）+ 独立语言组件（sql/python/bash/go/java/json/jsx/markdown/typescript/yaml，本地离线）、marked.min.js、MONACO.TTF（后两者暂未引用）。
- 内容：PostgreSQL 学习笔记（`_sidebar.md` = PostgreSQL.md）。
- `package.json` dev：`python -m http.server 3000 -o`。

## 代码高亮方案（关键）

- **docsify 4.x 内置打包了 Prism 核心**，加载时执行 `window.Prism = 内部核心`（源码末尾 `window.Prism=Pn`）。
- **语言组件（prism-sql/python/bash...）必须在 docsify 脚本【之后】加载**，才会注册到内部核心上；放在 docsify 之前会被覆盖成空注册（`Prism.languages.sql` 不存在 → 渲染回退 markup 语法 → 等于没高亮）。**不要引 `lib/prism.min.js`**（docsify 自带核心，外部核心会被覆盖，多余）。
- docsify 渲染代码块时自动高亮（`renderer.code` 调内部 `Prism.highlight`），输出 `<pre v-pre data-lang="sql"><code class="lang-sql">`；无需自定义 doneEach 插件。
- 所有 prism 脚本必须在 docsify CDN 之前引入（`$docsify` 配置也要在 docsify 加载前定义）。
- **引入策略（用户 2026-09-01 确认）：全部 11 个语言组件全量保留引入**，不精简（总 ~40KB，写任何语言笔记都免改 index.html）。

## 主题与样式约定

- **macOS 风格 = 中性灰白 + 系统蓝 `#007AFF` 仅用于链接/选中/进度条等交互元素**；用户反感"贯穿全站的主题色"。
- 代码高亮 Xcode Light 系（keyword `#9B2393`、string `#C41A16`、number `#272AD8`、comment `#8E8E93`）；行内代码 `#FF3B30`（macOS systemRed）。
- 代码块 = mac 窗口（纯 CSS 圆点标题栏 + 语言名），复制按钮 JS 已由用户移除（用户偏好纯 CSS，不要 JS）。
- 字体：正文系统比例字体栈（-apple-system → PingFang SC → 微软雅黑），Monaco 只用于代码。

## 踩坑记录

- **docsify 不自动高亮**：必须自己引 Prism 并加 doneEach 钩子；类名 `lang-` → `language-` 转换不可省。
- **`git rm` 在 Windows 沙盒下会误删整个目录（含未跟踪文件）**：批量删除后必须立即 `ls` 确认。
- **本机 curl 访问 localhost 需 `--noproxy "*"`**（环境有 `http_proxy=http://127.0.0.1:7897/`，代理未运行时 curl 默认走代理 → 000）。验证本地服务器用同调用内 urllib 或 --noproxy。
- 用户自己管理本地服务器进程，**不要随意启动/杀用户进程**。
