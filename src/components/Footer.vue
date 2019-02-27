<template>
  <footer>
    <p>{{copyright}}{{title}}</p>
  </footer>
</template>

<script>
  export default {
    name: 'app-footer',
    props:{
      title:{
        type:String
      }
    },
    data () {
      return {
        copyright:" vue.js demo copyright@TanLiu 2018 10.25 "
      }
    }
  }
</script>


<style scoped>
  footer{
    background:darkseagreen ;
    padding: 6px;
    margin-top: 35%;
  }
  footer p{
    color: #000;
    text-align: center;
  }
</style>
