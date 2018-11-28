<template>
<div>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img" :src="bannerImg" />
    <div class="banner-info">
      <div class="banner-title">{{ this.sightName }}</div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe692;</span>
        {{ this.bannerImgs.length }}
      </div>
    </div>
  </div>
  <fade-animation>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </fade-animation>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default{
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_r_800x800_980118e2.jpg', 'http://img1.qunarzz.com/sight/p0/1602/53/53cf6caed9f9b9ee90.img.jpg_r_800x800_fab81cd0.jpg']
    }
  },
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style scoped lang="stylus">
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .banner-img
    width: 100%
  .banner-info
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: .6rem
    color: #fff
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
    .banner-title
      flex: 1
      font-size: .32rem
      padding: 0 .2rem
    .banner-number
      line-height: .32rem
      height: .32rem
      margin-top: .14rem
      padding: 0 .4rem
      border-radius: .2rem
      background: rgba(0, 0, 0, .5)
      font-size: .24rem
      .banner-icon
        font-size: .24rem
        margin-right: .06rem
</style>
