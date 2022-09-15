
flexConfig = {
  css: `
    .box {
      background: #e7e5fb;
      border: 2px solid #6970e6;
    }
    .child {
      width: 50px;
      height: 50px;
      background: #b8bdeb;
      text-align: center;
      line-height: 50px;
      margin: 5px;
    }
  `
}

canvasConfig = {
  head: [
    ['script', {}, `
      document.write('<canvas></canvas>')
      var canvas = document.querySelector('canvas')
      var w = 300, h = 150, dpr = window.devicePixelRatio || 1
      w *= dpr
      h *= dpr
      canvas.width = w
      canvas.height = h
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      canvas.style['transform-origin'] = 'left top'
      canvas.style.transform = \`scale(\${1 / dpr})\`
      var ctx = canvas.getContext('2d')
      ctx.scale(dpr, dpr)
    `]
  ],
  css: `
    body {
      overflow: hidden;
    }
    canvas {
      border: 1px solid red;
    }
  `
}

