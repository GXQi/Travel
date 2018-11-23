<template>
<div class="weekend">
  <div class="title">
             周末去哪儿
  </div>
  <ul>
    <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
      <div class="item-img-wrapper">
        <img class="item-img" :src="item.imgUrl" />
      </div>
      <div class="item-info">
        <p class="item-title">{{ item.title }}</p>
        <p class="item-desc">{{ item.desc }}</p>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default{
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/63/808c022b285a2c.jpg_r_640x214_ad984479.jpg',
        title: '探寻文化古都',
        desc: '一场时空穿越的旅行，探寻历史悠久的文化古都！'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/74/98a840f2a881b.jpg_r_640x214_1bf94c8e.jpg',
        title: '西安温泉季',
        desc: '冬日温暖泡出来，西安温泉季'
      },
      {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/19/58f233e11df7ef.jpg_r_640x214_6b42c9fc.jpg',
        title: '西安必游TOP10',
        desc: '寻长安梦，开启穿越的圆梦之旅'
      },
      {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1511/14/1cf5dc2ecbfc16.jpg_r_640x214_b4b3a58a.jpg',
        title: '醉美丝路行',
        desc: '情系西北，中国梦丝路行'
      },
      {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/2f/bbb38e80bf749f.jpg_r_640x214_2590c69d.jpg',
        title: '唐诗里的秋天',
        desc: '秋日赏枫，梦幻枫叶的天堂'
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
  .item-img
    width: 100%
    padding: .1rem
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
