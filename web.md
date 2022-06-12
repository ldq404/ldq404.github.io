
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