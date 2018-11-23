<template>
<div class="icons">
  <swiper :options="swiperOption">
    <swiper-slide v-for="(page,index) of pages" :key="index">
      <div  class="icon"
            v-for="item of page"
            :key="item.id"
      >
        <div class="icon-img">
          <img class="icon-img-content" :src="item.imgUrl" />
        </div>
        <p class="icon-desc" v-html="item.decs"></p>
      </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default{
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: false
      },
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        decs: '景点门票'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        decs: '文化古迹'
      },
      {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
        decs: '演出'
      },
      {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        decs: '一日游'
      },
      {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        decs: '兴汉胜境'
      },
      {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        decs: '动植物园'
      },
      {
        id: '0007',
        imgUrl: 'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        decs: '打卡圣地'
      },
      {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
        decs: '兵马俑'
      },
      {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
        decs: '亲子游'
      },
      {
        id: '0010',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
        decs: '全部玩乐'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((currentItem, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(currentItem)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  height: 0
  padding-bottom: 55%
.icons >>> .swiper-pagination-bullet-active
  background: rgba(0,175,190,.8)
.swiper-pagination-bullets
  bottom: 0
.icons
  margin-top: .1rem
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .15rem
      .icon-img-content
        display: block
        height: 100%
        margin: 0 auto
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      color: $darkTextColor
      text-align: center
      ellipsis()
</style>
