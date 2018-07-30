<template>
  <header class="header">
    <a href="#/search" class="header_search">
    <i class="iconfont icon-sousuo"></i></a>
     <a class="header_title"><span class="header_title_text ellipsis">昌平区北七家修正大厦(北清路北)</span></a> 
     <a href="#/login" class="header_login"><span class="header_login_text">登录|注册</span></a>
     </header>
</template>


<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '顶部的导航'
    }
  }
}
</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .icon-sousuo
        font-size 25px
        color #fff
    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 50%
      color #fff
      text-align center
      margin-left -5%
      .header_title_text
        font-size 20px
        color #fff
        display block
    .header_login
      font-size 14px
      color #fff
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
      .header_login_text
        color #fff
</style>
