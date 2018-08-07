<template>
<div class="wrapper">
<swiper :options="swiperOption" v-if='showSwip'>
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl"/>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
    }
  },
  computed: {
    showSwip () {
      return this.list.length
    }
  }
}
</script>

// scoped使组件样式模块化
<style lang='stylus' scoped>
// 不受scoped限制
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff !important;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  // 预设高度的方法，防止图片没加载是，dom没留图片的高度
  height: 0;
  // 高度相对于宽度自动撑开31.15%
  padding-bottom: 31.25%;
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>
