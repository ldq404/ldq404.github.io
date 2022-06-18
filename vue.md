
## 下拉框 + 搜索过滤 + 关键词标红

?> 常见的搜索功能, 当输入内容时, 下拉框里所有匹配的选项会**`自动过滤`**并**`标红显示`**

```vue [App.vue] { ...vueConfig }
<template>
  <div>
    <el-select
      v-model="value"
      filterable
      placeholder="请选择"
      :filter-method="handleFilter"
      @visible-change="v => !v && (search = '')"
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
      search: '',
      options,
    }
  },
  methods: {
    isRed (str, i) {
      const { search } = this
      const index = str.indexOf(search)
      return index <= i && i < search.length + index
    },
    handleFilter (val) {
      this.search = val
      this.options = options.filter(item => {
        return item.label.indexOf(val) > -1
      })
    }
  }
}
</script>
```

<br />

## 下拉框 - 清空全部数据前二次确认

?> 针对多选下拉框进行优化, 在清空所有数据前, 进行弹窗询问, `二次确认后再清空所有数据`

- 起因: 我某次操作后台系统的线上角色权限时, 不小心点到了下拉框的清空, 瞬间一身冷汗, 虽然还没有保存, 但还是怕有人粗心大意的点击保存, 才做的这个二次确认的优化

```vue [App.vue] { ...vueConfig }
<template>
  <el-select
    v-model="value"
    :multiple="true"
    :clearable="true"
    placeholder="请选择"
    @clear="handleClear"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></el-option>
  </el-select>
</template>

<script>
export default {
  data() {
    return {
      value: [1, 2, 3, 4],
      oldVal: [],
      clearResolve: null,
      options: [
        { value: 1, label: '黄金糕' },
        { value: 2, label: '双皮奶' },
        { value: 3, label: '蚵仔煎' },
        { value: 4, label: '龙须面' },
        { value: 5, label: '北京烤鸭' },
      ],
    }
  },
  watch: {
    value (newVal, oldVal) {
      const { clearResolve } = this
      if (typeof clearResolve === 'function') {
        clearResolve(oldVal)
      }
    }
  },
  methods: {
    async handleClear () {
      const value = await new Promise(resolve => {
        this.clearResolve = resolve
      })
      this.clearResolve = null
      this.value = value
      await this.$confirm('是否清除所有选中的值?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.value = []
      }).catch(() => {})
    }
  }
}
</script>
```