<template>
  <div>
    <div class='banner' @click='hanleBannerClick'>
      <img class='banner-img' :src='banner'/>
      <div class='banner-info'>
        <div class='banner-title'>{{title}}</div>
        <div class='banner-number'>
          <span class='iconfont banner-icon'>&#xe692;
          </span>
          39
        </div>
      </div>
    </div>
    <fade-animation>
      <!-- 对应的是<slot></slot>,外部的动画效果会作用在这里 -->
      <common-gallery :imgs='gallery' v-show='showGallery' @close='handleGalleryClose'></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallery: false
    }
  },
  props: {
    title: String,
    banner: String,
    gallery: Array
  },
  methods: {
    hanleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  },
  components: {
    CommonGallery,
    FadeAnimation
  }
}
</script>

<style lang='stylus' scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    // 从上往下的从白色编黑色的效果
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      height: 0.32rem;
      line-height: 0.32rem;
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;

      .banner-icon {
        font-size {
          font-size: 0.24rem;
        }
      }
    }
  }
}
</style>
