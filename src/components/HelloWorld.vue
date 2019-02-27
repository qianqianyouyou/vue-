<template>
  <div class="header" style=" width: 68%;float: right;">
    <el-row>
      <el-col :span="4">
        <span class="logo" style="background-color: lightblue"><img class="logo-img" src="/static/images/logo.png" alt="">Vue单页框架演示系统</span>
      </el-col>
      <el-col :span="4">
        <span class="logo"  style="background-color: aquamarine"><img class="logo-img" src="/static/images/logo.png" alt="">Helloworld页面中的内容</span>
      </el-col>
      <el-col :span="4">
        <span class="logo" style="background-color: gainsboro"><img class="logo-img" src="/static/images/logo.png" alt="">Helloworld个人设置</span>
      </el-col>
      <el-col :span="4">
        <ul>
          <li index="/dashboard" >Helloworld页面中的内容</li>
          <li index="/callasset" >资产调用</li>
          <li index="/callasset-check" >调用审核</li>
          <li index="/user" >用户管理</li>
          <li index="/resource" >字典管理</li>
          <li index="/personal" >个人设置</li>
        </ul>
      </el-col>
      <el-col :span="4">
        <ul mode="horizontal">

          <button class="logout" :plain="true" type="danger" @click="logout">退出系统</button>
        </ul>
      </el-col>
    </el-row>
    <div class="hello-foot">
      <button @click="goFirst_1">点击返回首页</button>
      <button @click="goSecond_2">点击返回Users组件页面</button>
    </div>
  </div>

</template>

<script>
  export default {
    data () {
      return {

      }
    },
    created() {
      // isAdmin = localStorage.getItem('right')
    },
    methods: {
      goFirst_1:function() {
        this.$router.push({path:'/content'})
      },
      goSecond_2:function() {
        this.$router.push({path:'/content/user'})
      },
      handleSelect(key, keyPath) {
      },
      logout() {
        this.$http.get('/api/user/logout')
          .then ((res) => {
            if (res.status === 200) {
              // this.delCookie('hellocookie')
              localStorage.removeItem('user')
              this.$router.push({ path: '/login' })
              this.$message({
                type: 'success',
                message: '登出成功，祝您工作愉快！'
              })
            }
          })
      },

    }
  }
</script>

<style scoped>
  .hello-foot{
    margin-top: 30px;
    background-color: burlywood;
    line-height: 30px;
    text-align: center;
  }
  .vue-test-hello{
    width: 100%;
    background-color: coral;
    line-height: 50px;
    height: 30px;
  }
  .header {
    box-shadow: 0px 1px 10px #eee;
  }
  .el-menu {
    background: #fff;
  }
  .el-menu-item {
    font-size: 16px;
  }
  .logo {
    display: block;
    height: 60px;
    text-align: center;
    font-size: 18px;
    line-height: 60px;
    background: #fff;
    vertical-align: center;
    position: relative;
  }
  .logo-img {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 26px;
    top: 13px;
  }
  .logout {
    margin-top: 10px;
  }
  .hell-vue{
    background-color: lightgreen;
    line-height: 30px;
    height: 30px;
  }
</style>
