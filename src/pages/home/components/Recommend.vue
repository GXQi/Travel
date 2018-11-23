<template>
<div class="recommend">
  <div class="title">
           热销推荐
  </div>
  <ul>
    <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
      <img class="item-img" :src="item.imgUrl" />
      <div class="item-info">
        <p class="item-title">{{ item.title }}</p>
        <p class="item-desc">{{ item.desc }}</p>
        <button class="item-button">查看详情</button>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default{
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_200x200_46b16057.jpg',
        title: '华清宫',
        desc: '探寻杨贵妃御汤遗址'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/89/66dadfb4d982e6f88abad45a3e062342.water.jpg_200x200_0443bc40.jpg',
        title: '曲江海洋极地公园',
        desc: '极地公园四馆八区带你畅游海洋世界'
      },
      {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1512/b5/b539dcc3d0fe7be990.img.jpg_200x200_6db19022.jpg',
        title: '西安东大南山温泉',
        desc: ''
      },
      {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1511/a3/a3939e44477746c490.img.jpg_200x200_327e7822.jpg',
        title: '西安临潼悦椿温泉',
        desc: '🔥好评如潮，小伙伴热推景点~'
      },
      {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_200x200_1b88abcf.jpg',
        title: '大唐芙蓉园',
        desc: '中国最大的仿唐皇家建筑群'
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
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        margin-top: .16rem
        line-height: .44rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
