
# Form 表单
---

### 监听 form 表单的数据变化

在很多场景下, 表单控件之间的状态可能是相互联动的, 这个时候我就需要根据 A 控件的数据, 来决定 B 控件的状态

<br />

##### 使用`onChange` *(不推荐)*

这个是最简单的方案, 使用一个额外的变量, 然后在`onChange`里通过切换变量来控制

缺点是不够灵活, 需要一套额外的变量来控制状态, 在面对大量表单联动的场景下, 会让代码显得非常臃肿

```jsx [App.jsx] { title: '简单场景', ...antdConfig }
import React, { useState } from 'react'
import antd from 'antd'
const { Form, Switch, Input } = antd

export default function App() {
  const [enable, setEnable] = useState(false)
  return <>
    <Form>
      <Form.Item label="开关" name="enable">
        <Switch onChange={val => setEnable(val)} />
      </Form.Item>
      <Form.Item label="输入框" name="value">
        <Input disabled={!enable} />
      </Form.Item>
    </Form>
  </>
}
```

比如下面的这种情况, 产品想要用户按照顺序来依次输入, 每次输入来解锁下一个 input *(大部分场景下可能是下拉框依次选择, 但为了节约代码行数我用 input 输入框来演示)*

需要多个变量来控制其他表单控件的状态, 代码会显得特别low, 并且十分不优雅

```jsx [App.jsx] { title: '复杂场景', ...antdConfig }
import React, { useState } from 'react'
import antd from 'antd'
const { Form, Input } = antd

export default function App() {
  const [enableB, setEnableB] = useState(false)
  const [enableC, setEnableC] = useState(false)
  const [enableD, setEnableD] = useState(false)
  const [enableE, setEnableE] = useState(false)
  return <>
    <Form>
      <Form.Item label="输入框 A" name="v1">
        <Input onChange={v => setEnableB(!!v)} />
      </Form.Item>
      <Form.Item label="输入框 B" name="v2">
        <Input disabled={!enableB} onChange={v => setEnableC(!!v)} />
      </Form.Item>
      <Form.Item label="输入框 C" name="v3">
        <Input disabled={!enableC} onChange={v => setEnableD(!!v)} />
      </Form.Item>
      <Form.Item label="输入框 D" name="v4">
        <Input disabled={!enableD} onChange={v => setEnableE(!!v)} />
      </Form.Item>
      <Form.Item label="输入框 E" name="v5">
        <Input disabled={!enableE} />
      </Form.Item>
    </Form>
  </>
}
```

<br />

##### 使用`useWatch`

useWatch 可以让 formData 里的数据更新, 便于在代码中执行一些复杂的逻辑, 并且 formData 本身就是 form 表单提供的数据, 可以避免声明多余的变量来维护控件的状态

但依然需要调用一下`Form.useWatch()`API, 否则 formData 里的数据依然不会更新

```jsx [App.jsx] { title: '简单场景', ...antdConfig }
import React, { useState } from 'react'
import antd from 'antd'
const { Form, Switch, Input } = antd

export default function App() {
  const [form] = Form.useForm()
  const formData = form.getFieldsValue()
  Form.useWatch('enable', form)
  return <>
    <Form form={form}>
      <Form.Item label="开关" name="enable">
        <Switch />
      </Form.Item>
      <Form.Item label="输入框" name="value">
        <Input disabled={!formData.enable} />
      </Form.Item>
    </Form>
  </>
}
```

复杂情况下暂未想到合适的应用场景, 后续再补充

```
...
```

<br />

##### 使用`shouldUpdate` *(推荐)*

这个方案的好处是, 既避免了声明多余的变量, 又避免了调用额外的 API, 只需要增加一个 shouldUpdate 属性, 就能在当前的 formItem 里获取到最新数据

其中 getFieldValue 方法可以获取任意 formData 中的属性, 并且 formItem 里是一个函数, 可以做更加自由的渲染方案

```jsx [App.jsx] { title: '简单场景', ...antdConfig }
import React, { useState } from 'react'
import antd from 'antd'
const { Form, Switch, Input } = antd

export default function App() {
  return <>
    <Form>
      <Form.Item label="开关" name="enable">
        <Switch />
      </Form.Item>
      <Form.Item shouldUpdate>
        {
          ({ getFieldValue }) => (
            <Form.Item label="输入框" name="value">
              <Input disabled={!getFieldValue('enable')} />
            </Form.Item>
          )
        }
      </Form.Item>
    </Form>
  </>
}
```

这里继续演示一下复杂场景下, 多个表单控件相互联动是如何使用的

```jsx [App.jsx] { title: '复杂场景', ...antdConfig }
import React, { useState } from 'react'
import antd from 'antd'
const { Form, Input } = antd

export default function App() {
  return <>
    <Form>
      <Form.Item label="输入框 A" name="v1">
        <Input />
      </Form.Item>
      <Form.Item shouldUpdate>
        {
          ({ getFieldValue }) => (
            <Form.Item label="输入框 B" name="v2">
              <Input disabled={!getFieldValue('v1')} />
            </Form.Item>
          )
        }
      </Form.Item>
      <Form.Item shouldUpdate>
        {
          ({ getFieldValue }) => (
            <Form.Item label="输入框 C" name="v3">
              <Input disabled={!getFieldValue('v2')} />
            </Form.Item>
          )
        }
      </Form.Item>
    </Form>
  </>
}
```

可以看到, 使用 shouldUpdate 属性非常方便, 在当前函数内也可以获取多个表单数据的最新值, 以此来实现复杂的逻辑