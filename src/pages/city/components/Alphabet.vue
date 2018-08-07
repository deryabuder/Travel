<template>
  <ul class='list'>
    <!-- 阻止touchstart的默认行为 -->
    <li class='item' v-for='item of letters' :key='item' :ref='item'
    @click='handleletterClick'
    @touchstart.prevent='handleTouchStart'
    @touchmove='handleTouchMove'
    @touchend='handleTouchEnd'
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    // offsetTop A到搜索框下边框的距离
    // offsetTop：获取对象相对于由offsetParent属性指定的父坐标(css定位的元素或body元素)距离顶端的高度。
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleletterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          // 取消尚未执行的超时调用计划
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 手指距离搜索框下边框的距离，cliendY距离顶部的高度
          // 79是顶部加搜索框的高度
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
