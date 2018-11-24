<template>
<div class="list">
  <div class="area">
    <div class="title border-topbottom">当前城市</div>
    <div class="button-list">
      <div class="button-wrapper">
        <div class="button">西安</div>
      </div>
    </div>
  </div>
  <div class="area">
    <div class="title border-topbottom">热门城市</div>
    <div class="button-list">
      <div class="button-wrapper">
        <div class="button">西安</div>
      </div>
      <div class="button-wrapper">
        <div class="button">西安</div>
      </div>
      <div class="button-wrapper">
        <div class="button">西安</div>
      </div>
      <div class="button-wrapper">
        <div class="button">西安</div>
      </div>
      <div class="button-wrapper">
        <div class="button">西安</div>
      </div>
      <div class="button-wrapper">
        <div class="button">西安</div>
      </div>
    </div>
  </div>
  <div class="area">
    <div class="title border-topbottom">A</div>
    <div class="item-list">
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item">阿拉尔</div>
      <div class="item">阿拉尔</div>
      <div class="item">阿拉尔</div>
    </div>
    <div class="title border-topbottom">A</div>
    <div class="item-list">
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item">阿拉尔</div>
      <div class="item">阿拉尔</div>
      <div class="item">阿拉尔</div>
    </div>
    <div class="title border-topbottom">A</div>
    <div class="item-list">
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item">阿拉尔</div>
      <div class="item">阿拉尔</div>
      <div class="item">阿拉尔</div>
    </div>
    <div class="title border-topbottom">A</div>
    <div class="item-list">
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item">阿拉尔</div>
      <div class="item">阿拉尔</div>
      <div class="item">阿拉尔</div>
    </div>
    <div class="title border-topbottom">A</div>
    <div class="item-list">
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item">阿拉尔</div>
      <div class="item">阿拉尔</div>
      <div class="item">阿拉尔</div>
    </div>
    <div class="title border-topbottom">A</div>
    <div class="item-list">
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item">阿拉尔</div>
      <div class="item">阿拉尔</div>
      <div class="item">阿拉尔</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CityList'
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
.border-topbottom
  &:before
    border-color: #CCC
  &:after
    border-color: #CCC
.border-topbottom
  &:before
    border-color: #CCC
.list
  overflow:hidden
  position: absolute
  top: 1.78rem
  left: 0
  right: 0
  bottom: 0
  .title
    line-height: .4rem
    padding-left: .2rem
    background: #eee
    color: #666
    font-size: .26rem
  .button-list
    overflow: hidden
    padding: .1rem .6rem .1rem .1rem
    .button-wrapper
      width: 33.33%
      float: left
      .button
        margin: .1rem
        padding: .1rem 0
        border-radius: .06rem
        text-align: center
        border: .02rem solid #ccc
  .item-list
    .item
      line-height: .76rem
      padding-left: .2rem
</style>
