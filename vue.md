
基于 `element-ui` 做了一个常见的搜索功能

- 当输入内容时, 下拉框里所有匹配的选项会**自动过滤**并**标红显示**

```vue [App.vue] { ...vueConfig }
<template>
  <div>
    <el-select
      v-model="value"
      filterable
      placeholder="请选择"
      :filter-method="handleFilter"
      @blur="input = ''"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
        <span
          v-for="(s, i) in item.label"
          :key="i"
          :style="{ color: isRed(item.label, i) ? 'red' : '0' }"
        >{{s}}</span>
      </el-option>
    </el-select>
  </div>
</template>

<script>
const options = [
  { value: 1, label: '北京市' },
  { value: 2, label: '北京烤鸭' },
  { value: 3, label: '北京市南大街' },
  { value: 4, label: '北京市北大街' },
  { value: 5, label: '北京市大街店铺' },
]
export default {
  data () {
    return {
      value: '',
      input: '',
      options,
    }
  },
  methods: {
    isRed (str, i) {
      const { input } = this
      const index = str.indexOf(input)
      return index <= i && i < input.length + index
    },
    handleFilter (val) {
      this.input = val
      this.options = options.filter(item => {
        return item.label.indexOf(val) > -1
      })
    }
  }
}
</script>
```
