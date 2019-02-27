<template>
  <div id="app">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <div>
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>
<script>
  import Header from './components/Header'
  import Footer from './components/Footer'
  import Users from './components/Users'

  import Content from './components/Content'
  import HelloWorld from './components/HelloWorld'
  import Sidebar from './components/Sidebar'
  export default {
    name: 'app',
    data () {
      return {}
    },

    components:{
      "users":Users,
      "app-header":Header,
      "app-footer":Footer,

      "app-content":Content,
      "app-hellworld":HelloWorld,
      "app-sidebar":Sidebar
    }
  }
</script>
<style>

</style>
