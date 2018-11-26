<template>
<div>
  <div class="search">
    <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
  <div class="search-content">
    <ul>
      <li v-for="item of list" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  wacth: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
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
.search-content
  z-index: 1
  overflow: hidden
  position: absolute
  top: 1.78rem
  bottom: 0
  left: 0
  right: 0
  background: red
</style>
