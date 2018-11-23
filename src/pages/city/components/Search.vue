<template>
<div class="search">
  <input class="search-input" type="text" placeholder="输入城市名或拼音" />
</div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
.search
  height: .72rem
  padding: .1rem
  background: $bgColor
  .search-input
    width: 100%
    height: .6rem
    padding: 0 .1rem
    line-height: .6rem
    text-align: center
    box-sizing: border-box
    border-radius: .06rem
    color: #666
</style>
