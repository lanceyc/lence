/*
  路由器对象模块
*/

import Vue from 'vue';
//1： 引入路由组件
import VueRouter from 'vue-router';

import  Msite      from  '../pages/Msite/Msite.vue';
import  Order      from  '../pages/Order/Order.vue';
import  Profile    from  '../pages/Profile/Profile.vue';
import  Search     from  '../pages/Search/Search.vue';
import  Login     from  '../pages/Login/Login.vue';

//注册组件
Vue.use(VueRouter);

/*
路由嵌套的使用：
1：配置路由
     //自组件，嵌套组件
  { 
    path: '/user', 
    component: User,
    children:[
      { path: '/useradd', component: UserAdd },
      { path: '/userlist', component: UserList }
    ]
  }

  2： 父路由里面配置子路由显示的地方 :    <router-view></router-view>       


*/

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const  routes=[
        {
          path:'*',redirect:'/msite',  //设置默认跳到 msite组件页面
          meta:{showFooter:true}       //默认值是否显示组件路由
         },    
        {
          path:'/msite',component:Msite,
           meta:{showFooter:true}
        },
        {
          path:'/order',component:Order,
          meta:{showFooter:true}
        },
        {
          path:'/profile',component:Profile,
          meta:{showFooter:true}
        },
        {
          path:'/search',component:Search,
          meta:{showFooter:true}
        },
        {
          path:'/login',component:Login
        }
]

  //3、实例化VueRouter
    const router = new VueRouter({
        mode:"history",  //hash 模式改成 history模式 ，  改成 history模式  服务器后台需要该一些东西
        routes          // （缩写）相当于 routes: routes
      })


 //5 、根组件的模板里面放上这句话   <router-view></router-view>   
 
//6、路由跳转,放跟组件里       类似导航条一样的
//<router-link to="/foo">Go to Foo</router-link>
 //<router-link to="/bar">Go to Bar</router-link>
 export  default  router;