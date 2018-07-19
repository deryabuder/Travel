<template>
  <div>
    <div class='banner' @click='hanleBannerClick'>
      <img class='banner-img' src='http://img1.qunarzz.com/sight/p0/1503/55/5577ab22b2e205d0.water.jpg_600x330_2a541cbf.jpg'/>
      <div class='banner-info'>
        <div class='banner-title'>大连海洋世界</div>
        <div class='banner-number'>
          <span class='iconfont banner-icon'>&#xe692;
          </span>
          39
        </div>
      </div>
    </div>
    <common-gallery :imgs='imgs' v-show='showGallery' @close='handleGalleryClose'></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallery: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1503/fe/fe5c99cd2e6f7595.water.jpg_350x240_7825760a.jpg',
        'http://img1.qunarzz.com/sight/p21/201211/05/39e583422d2dd02c93835fbb.jpg_350x240_98acf37c.jpg']
    }
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
    CommonGallery
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
