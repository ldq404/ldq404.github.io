
# flex 布局
---

#### 主轴方向 flex-direction

```html [row.html] { title: '从左到右(默认)', ...flexConfig }
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

<br />

#### 子元素在主轴的对齐方式 justify-content

```html [flex-start.html] { title: '开始方向(默认)', ...flexConfig }
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

<br />


#### 子元素在侧轴的对齐方式 align-items


```html [stretch.html] { title: '拉伸(默认)', ...flexConfig }
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
```html [baseline.html] { title: '文字基线对齐', ...flexConfig }
<style>
  .box {
    height: 112px;
    display: flex;
    align-items: baseline;
  }
  #temp { height: auto; font-size: 35px; flex: 1 }
</style>

<div class="box">
  <div class="child" style="font-size: 12px">1</div>
  <div class="child" style="font-size: 40px">2</div>
  <div class="child" style="font-size: 20px">3</div>
  <div class="child" id="temp">基于首行文字的基线对齐</div>
</div>
```

<br />

#### 多个侧轴之间的对其方式 align-content

```html [stretch.html] { title: '拉伸(默认)', ...flexConfig }
<style>
  .box {
    height: 240px;
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
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
```html [flex-start.html] { title: '开始方向', ...flexConfig }
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
```html [flex-end.html] { title: '结束方向', ...flexConfig }
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
```html [center.html] { title: '居中对齐', ...flexConfig }
<style>
  .box {
    height: 240px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
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
```html [space-between.html] { title: '两端对齐', ...flexConfig }
<style>
  .box {
    height: 240px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
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
```html [space-around.html] { title: '等距对齐', ...flexConfig }
<style>
  .box {
    height: 240px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
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

<br />

#### 子元素是否换行 flex-wrap

```html [nowrap.html] { title: '不换行(默认)', ...flexConfig }
<style>
  .box {
    display: flex;
    flex-wrap: nowrap;
  }
</style>

<div class="box">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
  <div class="child">6</div>
  <div class="child">7</div>
  <div class="child">8</div>
  <div class="child">9</div>
</div>
```
```html [wrap.html] { title: '换行', ...flexConfig }
<style>
  .box {
    display: flex;
    flex-wrap: wrap;
  }
</style>

<div class="box">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
  <div class="child">6</div>
  <div class="child">7</div>
  <div class="child">8</div>
  <div class="child">9</div>
</div>
```
```html [wrap-reverse.html] { title: '换行(第一行在反方向)', ...flexConfig }
<style>
  .box {
    display: flex;
    flex-wrap: wrap-reverse;
  }
</style>

<div class="box">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
  <div class="child">6</div>
  <div class="child">7</div>
  <div class="child">8</div>
  <div class="child">9</div>
</div>
```

<br />

#### 主轴方向+是否换行 flex-flow `(flex-direction 和 flex-wrap 的简写)`

```css
.box {
  flex-flow: row wrap;
}
```

<br />

#### 子元素的排序方式 order

```html [demo1.html] { ...flexConfig }
<style>
  .box {
    display: flex;
  }
  .child {
    flex: 1;
  }
</style>

<div class="box">
  <div class="child" style="order: 2">order 2</div>
  <div class="child" style="order: 1">order 1</div>
  <div class="child" style="order: 3">order 3</div>
  <div class="child" style="order: -1">order -1</div>
</div>
```

<br />

#### flex-grow

<br />

#### flex-shrink

<br />

#### flex-basis

<br />

#### flex

<br />

#### align-self

<br />