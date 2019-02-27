<template>
  <div class="sidebar">
    <img  class="pic" src="../../static/pic.gif"/>
    <ul>
      <li index="/dashboard" class="vue-test-hello">目录</li>
      <li index="/resource" class="vue-test-hello">字典管理</li>
      <li index="/callasset-check" class="vue-test-hello">调用审核</li>
      <li index="/user" class="vue-test-hello">用户管理</li>
      <li index="/resource" class="vue-test-hello">字典管理</li>
      <li index="/personal" class="vue-test-hello">个人设置</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  .vue-test-hello{
    width: 28%;
    background-color: paleturquoise;
    line-height: 50px;
    height: 30px;
  }
.pic{
  width: 30%;
}
  .sidebar{
    width: 100%;
    height: 1px;
    float: right;
  }
</style>
