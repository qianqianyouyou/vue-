import Content from './components/Content.vue'
import User from './components/Users.vue'
import HelloWorld from './components/HelloWorld.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
const routers = [
  { path: '/content/helloWorld', component: HelloWorld },
  { path: '/content/user', component: User },
  {
    path: '/',
    component:Content ,
    children: [
      {
        path: '/',
        component: User
      }
    ]
  },
  {
    path: '/content',
    name: 'content',
    component: Content,
    children: [
      {
        path: '/',
        name: 'helloWorld',
        component: HelloWorld
      },
    ]
  },
]
export default routers

