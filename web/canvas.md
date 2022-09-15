
# Canvas 笔记
---

### 点线

- `lineWidth: number` 线宽
- `lineCap: 'butt' | 'round' | 'square'` 端点样式
- `beginPath()` 开始路径
- `closePath()` 闭合路径
- `moveTo(x, y)` 起始点
- `lineTo(x, y)` 连接点
- `stroke()` 描边绘制
- `fill()` 填充绘制

两点确认一条直线

```html [demo1.html] { title: '直线', ...canvasConfig }
<script>
  ctx.beginPath()
  ctx.moveTo(50, 50)
  ctx.lineTo(100, 100)
  ctx.stroke()
</script>
```

只要绘制的点足够多, 也能形成一条曲线

```html [demo2.html] { title: '曲线', ...canvasConfig }
<script>
  ctx.beginPath()
  ctx.moveTo(100, 50)
  for (let i = 0; i < 90; i++) {
    const deg = Math.PI / 180 * i
    const x = Math.cos(deg) * 50 + 50
    const y = Math.sin(deg) * 50 + 50
    ctx.lineTo(x, y)
  }
  ctx.stroke()
</script>
```


绘制一条虚线

```html [demo1.html] { title: '虚线', ...canvasConfig }
<script>
  ctx.beginPath()
  ctx.setLineDash([10])
  ctx.moveTo(50, 50)
  ctx.lineTo(250, 50)
  ctx.stroke()

  ctx.beginPath()
  ctx.setLineDash([20, 10, 5, 10])
  ctx.moveTo(50, 100)
  ctx.lineTo(250, 100)
  ctx.stroke()
</script>
```

设置线的宽度和端点样式

```html [demo1.html] { title: '线宽和端点', ...canvasConfig }
<script>
  const drawLine = (x1, y1, x2, y2) => {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
  }
  ctx.lineWidth = 15
  ctx.lineCap = 'butt'
  drawLine(50, 40, 250, 40)
  ctx.lineCap = 'round'
  drawLine(50, 75, 250, 75)
  ctx.lineCap = 'square'
  drawLine(50, 110, 250, 110)

  // 辅助线
  ctx.lineWidth = 1
  ctx.setLineDash([5])
  drawLine(50, 20, 50, 140)
</script>
```

当你需要一个封闭图形的时候, 可以调用 `closePath()` 方法

```html [demo1.html] { title: '闭合路径', ...canvasConfig }
<script>
  const drawTriangle = (isClose) => {
    ctx.beginPath()
    ctx.lineWidth = 10
    ctx.moveTo(30, 30)
    ctx.lineTo(30, 120)
    ctx.lineTo(120, 120)
    ctx.lineTo(30, 30)
    if (isClose) ctx.closePath() // 闭合路径
    ctx.stroke()
  }
  drawTriangle() // 非闭合的三角形
  ctx.translate(150, 0)
  drawTriangle(true) // 闭合的三角形
</script>
```

如果你想填充一个图形, 可以使用 `fill()` 方法 (会自动封闭图形)

```html [demo1.html] { title: '填充', ...canvasConfig }
<script>
  const drawStar = (fillRule = '') => {
    ctx.beginPath()
    ctx.moveTo(75, 20)
    ctx.lineTo(40, 130)
    ctx.lineTo(130, 60)
    ctx.lineTo(20, 60)
    ctx.lineTo(110, 130)
    ctx.fill(fillRule)
  }
  drawStar('nonzero') // 非零填充
  ctx.translate(150, 0)
  drawStar('evenodd') // 奇偶填充
</script>
```

### 绘制形状

- `rect()` 绘制矩形
- `arc()` 绘制圆形

### 文字
### 图片
### 渐变色
