<template>
<div>
  <div class="search">
    <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
  <div class="search-content" ref="search" v-show="keyword">
    <ul>
      <li
        class="search-item border-bottom"
        v-for="item of list"
        :key="item.id"
        @click="handleCityClick(item.name)"
      >
        {{ item.name }}
      </li>
      <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
    </ul>
  </div>
</div>
</template>

<script>
import BetterScroll from 'better-scroll'
import { mapMutations } from 'vuex'
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
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
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
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.search, {
      click: true
    })
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
  background: #eee
  .search-item
    line-height: .62rem
    padding-left: .2rem
    background: #fff
    color: #666
</style>
