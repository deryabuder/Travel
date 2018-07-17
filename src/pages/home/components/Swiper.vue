<template>
<div class="wrapper">
<swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://img1.qunarzz.com/vc/c0/89/67/ca6ecf79b44e11a62b0a148d38.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://img1.qunarzz.com/vc/44/3e/ec/591b009e8d0fdee7183bd696d0.jpg'
      }, {
        id: '0003',
        imgUrl: 'https://img1.qunarzz.com/vc/72/7c/d4/58d70f671715c5ae74114cffa6.jpg'
      }, {
        id: '0004',
        imgUrl: 'https://img1.qunarzz.com/vc/60/81/e4/5c9d8886fc2739988b097026cc.jpg'
      }, {
        id: '0005',
        imgUrl: 'https://img1.qunarzz.com/vc/b8/dc/e9/464bc1e47e99d8a308a6e24817.jpg'
      }
      ]
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
  height: 0;
  // 高度相对于宽度自动撑开31.15%
  padding-bottom: 31.25%;
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>
