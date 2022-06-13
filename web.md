
### 文本溢出隐藏

```html [index.html] { title: '文本溢出隐藏', css: 'p { border: 1px solid red }' }
<style>
  .line-clamp-1 {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    /* 指定显示多少行 */
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
</style>

<p class="line-clamp-1">Vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue被设计为可以自底向上逐层应用。Vue的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。</p>
<p class="line-clamp-3">Vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue被设计为可以自底向上逐层应用。Vue的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。</p>
```

### flex 布局

#### 主轴方向 flex-direction

```html [row.html] { title: '从左到右', ...flexConfig }
<style>
  .box {
    display: flex;
    flex-direction: row;
  }
</style>

<div class="box">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
</div>
```
```html [row-reverse.html] { title: '从右到左', ...flexConfig }
<style>
  .box {
    display: flex;
    flex-direction: row-reverse;
  }
</style>

<div class="box">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
</div>
```
```html [column.html] { title: '从上到下', ...flexConfig }
<style>
  .box {
    display: flex;
    flex-direction: column;
  }
</style>

<div class="box">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
</div>
```
```html [column-reverse.html] { title: '从下到上', ...flexConfig }
<style>
  .box {
    display: flex;
    flex-direction: column-reverse;
    /* flex-direction: column-reverse; */
    /* flex-direction: column-reverse; */
  }
</style>

<div class="box">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
</div>
```

#### 子元素在主轴的对齐方式 justify-content

```html [flex-start.html] { title: '开始方向', ...flexConfig }
<style>
  .box {
    display: flex;
    justify-content: flex-start;
  }
</style>

<div class="box">
  <div class="child" style="width: 80px;">1</div>
  <div class="child" style="width: 50px">2</div>
  <div class="child" style="width: 100px">3</div>
</div>
```
```html [flex-end.html] { title: '结束方向', ...flexConfig }
<style>
  .box {
    display: flex;
    justify-content: flex-end;
  }
</style>

<div class="box">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
</div>
```
```html [center.html] { title: '居中对齐', ...flexConfig }
<style>
  .box {
    display: flex;
    justify-content: center;
  }
</style>

<div class="box">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
</div>
```
```html [space-between.html] { title: '两端对齐', ...flexConfig }
<style>
  .box {
    display: flex;
    justify-content: space-between;
  }
</style>

<div class="box">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
</div>
```
```html [space-around.html] { title: '等距对齐', ...flexConfig }
<style>
  .box {
    display: flex;
    justify-content: space-around;
  }
</style>

<div class="box">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
</div>
```

#### 子元素在侧轴的对齐方式 align-items


```html [flex-start.html] { title: '开始方向', ...flexConfig }
<style>
  .box {
    display: flex;
    align-items: flex-start;
  }
</style>

<div class="box">
  <div class="child" style="height: 80px">1</div>
  <div class="child" style="height: 50px">2</div>
  <div class="child" style="height: 100px">3</div>
</div>
```
```html [flex-end.html] { title: '结束方向', ...flexConfig }
<style>
  .box {
    display: flex;
    align-items: flex-end;
  }
</style>

<div class="box">
  <div class="child" style="height: 80px">1</div>
  <div class="child" style="height: 50px">2</div>
  <div class="child" style="height: 100px">3</div>
</div>
```
```html [center.html] { title: '居中对齐', ...flexConfig }
<style>
  .box {
    display: flex;
    align-items: center;
  }
</style>

<div class="box">
  <div class="child" style="height: 80px">1</div>
  <div class="child" style="height: 50px">2</div>
  <div class="child" style="height: 100px">3</div>
</div>
```
```html [stretch.html] { title: '居中对齐', ...flexConfig }
<style>
  .box {
    height: 112px;
    display: flex;
    align-items: stretch;
  }
</style>

<div class="box">
  <div class="child" style="height: auto">1</div>
  <div class="child" style="height: auto">2</div>
  <div class="child" style="height: auto">3</div>
</div>
```

#### 多个侧轴之间的对其方式

```html [flex-start.html] { title: 'flex-start', ...flexConfig }
<style>
  .box {
    height: 240px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
  }
</style>

<div class="box">
  <div class="child" style="width: 70%">1</div>
  <div class="child" style="flex: 1">2</div>
  <div class="child" style="width: 100%">3</div>
  <div class="child" style="width: 80px">4</div>
  <div class="child" style="width: 50px">5</div>
  <div class="child" style="flex: 1">6</div>
</div>
```
```html [flex-end.html] { title: 'flex-end', ...flexConfig }
<style>
  .box {
    height: 240px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
  }
</style>

<div class="box">
  <div class="child" style="width: 70%">1</div>
  <div class="child" style="flex: 1">2</div>
  <div class="child" style="width: 100%">3</div>
  <div class="child" style="width: 80px">4</div>
  <div class="child" style="width: 50px">5</div>
  <div class="child" style="flex: 1">6</div>
</div>
```

<!-- 
```html [index.html] { title: '有趣的css边框' }
<div class="gradient-border"></div>

<style>
  body {
    background: #000;
  }
  :root {
    --border-width: 3px;
  }
  .gradient-border {
    margin: 100px auto;
    --border-width: 3px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 200px;
    font-size: 2.5rem;
    text-transform: uppercase;
    color: white;
    background: #222;
    border-radius: var(--border-width);
  }
  .gradient-border::after {
    position: absolute;
    content: "";
    top: calc(-1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    z-index: -1;
    width: calc(100% + var(--border-width) * 2);
    height: calc(100% + var(--border-width) * 2);
    background: linear-gradient(60deg, #5f86f2, #a65ff2, #f25fd0, #f25f61, #f2cb5f, #abf25f, #5ff281, #5ff2f0);
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: calc(2 * var(--border-width));
    animation: moveGradient 4s alternate infinite;
  }
  @keyframes moveGradient {
    50% {
      background-position: 100% 50%;
    }
  }
</style>
``` -->