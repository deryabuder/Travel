<template>
  <div>
    <div class='search'>
      <input class='search-input' v-model='keyword' type='text' placeholder="输入城市名或拼音">
    </div>
    <div class='search-content' ref='search' v-show='keyword'>
      <ul>
        <li class='search-item border-bottom' v-for='item of list' :key='item.id' @click='handleCityClick(item.name)'>
          {{item.name}}
        </li>
        <li class='search-item border-bottom' v-show='hasNoData'>
          没有找到匹配项
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      timer: null,
      list: []
    }
  },
  methods: {
    // 点击搜索结果中的城市，可以改变state和localStorage中的城市，并跳转到首页
    handleCityClick (city) {
      // 省略掉action这一步
      // this.$store.dispatch('changeCity', city)
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  watch: {
    // 监听keyword的变化，防抖，只有当用户不再改变输入时，才会获取结果
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      // 获取匹配结果，保存在this.list数组中
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  computed: {
    // 计算属性，判断是否有匹配数据
    hasNoData () {
      return !this.list.length
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl';

.search {
  height: 0.72rem;
  background: $bgColor;
  padding: 0 0.1rem;

  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}

.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background: #fff;
    color: #666;
  }
}
</style>
