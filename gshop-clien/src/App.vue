<template>
  <div id="app">
    
         <router-view></router-view>   
         <v-footerGuide  v-show="$route.meta.showFooter"></v-footerGuide>
  </div>
</template>

<script>
import   FooterGuide  from  './component/FooterGuide/FooterGuide.vue' 
export default {
  name: 'app',
  data () {
    return {
      msg: 'App.vue'
    }
  },
  components:{            //引入组件
    'v-footerGuide':FooterGuide
  }
}
</script>
