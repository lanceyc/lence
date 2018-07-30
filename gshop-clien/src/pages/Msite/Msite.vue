<template>
  <div class="msite">
       <v-HeaderTop></v-HeaderTop>

  
 <div class="miste-content-wrapper">
      <div class="miste-content">
        <!--首页导航-->
        <nav class="msite_nav border-1px">
   
 
                <a>
                   <div class="food_container">
                    <img src="https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg">
                  </div>
                  <span >商超便利</span>
                </a>
                 <a>
                   <div class="food_container">
                    <img src="https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg">
                  </div>
                  <span>商超便利</span>
                </a>

                 <a>
                   <div class="food_container">
                    <img src="https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg">
                  </div>
                  <span >商超便利</span>
                </a>

                 <a>
                   <div class="food_container">
                    <img src="https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg">
                  </div>
                  <span >商超便利</span>
                </a>

                   <a>
                   <div class="food_container">
                    <img src="https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg">
                  </div>
                  <span>商超便利</span>
                </a>
                 <a>
                   <div class="food_container">
                    <img src="https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg">
                  </div>
                  <span >商超便利</span>
                </a>

                 <a>
                   <div class="food_container">
                    <img src="https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg">
                  </div>
                  <span >商超便利</span>
                </a>

                 <a>
                   <div class="food_container">
                    <img src="https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg">
                  </div>
                  <span>商超便利</span>
                </a>
        </nav>

 
         <!--首页附近商家-->
        <div class="msite_shop_list border-1px">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title" >附近商家</span>
          </div>
           <v-ShopList></v-ShopList>
        </div>

      </div>
     </div>
  </div>
</template>

<script>

  //引入顶部组件
  import  HeaderTop   from '../../component/HeaderTop/HeaderTop.vue';
  import  ShopList   from  '../../component/ShopList/ShopList.vue';
  
  export default {
  data () {
    return {
      msg: '商品列表'
    }
  },
  components:{
    'v-HeaderTop':HeaderTop,
    'v-ShopList':ShopList       
  }
}
</script>


<style lang="stylus" rel="stylesheet/stylus">

.food_container{
    display: block;
    width: 100%;
    text-align: center;
    padding-bottom: 10px;
    font-size: 0;
}

a {
    flex-grow: 0;
    align-self: auto;
     width: 23%;

}
.food_container img{
    display: inline-block;
    width: 50px;
    height: 70px;
}

.msite_nav a span{

   margin-left:10% !important;
 }



  @import "../../common/stylus/mixins.styl"
  .msite
    width 100%
    height: 100%
    .miste-content-wrapper
      position fixed
      top: 45px
      bottom: 46px
      width: 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      height 250px
      background #fff
      display flex;
      justify-content space-between;
      flex-direction row;
      flex-wrap wrap;
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0 10px
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px


</style>
