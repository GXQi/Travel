<template>
<div class="header">
  <div class="header-left">返回</div>
  <div class="header-input">输入城市/景点/游玩主题</div>
  <div class="header-right">城市</div>
</div>
</template>

<script>
export default{
  name: 'HomeHeader'
}
</script>

<style scoped lang="stylus">
.header
  display: flex
  line-height: .86rem
  background: #00bcd4
  color: #fff
  font-size: .28rem
  .header-left
    width: .64rem
    float: left
    text-align: center
  .header-input
    flex: 1
    height: .64rem
    margin-top: .12rem
    margin-left: .2rem
    color: #CCC
    background: #fff
    line-height: .64rem
    border-radius: .1rem
  .header-right
    width: 1.24rem
    float: right
    text-align: center
</style>
