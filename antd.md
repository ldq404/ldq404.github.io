
### 测试 antd 组件

```jsx [App.jsx] {...antdConfig}
import React, { useState } from 'react'
import antd from 'antd'
const { Button } = antd

export default function App() {
  const [num, setNum] = useState(0)
  return <Button type="primary" onClick={() => {
    setNum(num + 1)
  }}>
    点击次数: {num}
  </Button>
}
```
