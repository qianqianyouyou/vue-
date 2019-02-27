<template>
<div class="hello"  style=" width: 68%;float: right;">
  <h1>{{ msg }}</h1>
  <form>
    <label>姓名：</label><input type="text" name="username" v-model="userName"> <br>
    <label>年龄：</label><input type="text" name="age" v-model="age"> <br>
    <a href="javascript:;" @click="addUser">提交</a>
  </form>
  <button @click="goFirst">跳转到HelloWord页面</button>
  <button @click="goSecond">跳转到Users页面</button>
</div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        userName: '',
        age: ''
      }
    },
    methods: {
      goFirst:function() {
        this.$router.push({path:'/content/helloWorld'})
      },
      goSecond:function() {
        this.$router.push({path:'/content/user'})
      },
      addUser() {
        var name = this.userName;
        var age = this.age;
        this.$http.post('/api/user/addUser', {
          username: name,
          age: age
        },{}).then((response) => {
          console.log(response);
        }),
        alert("提交成功，请到数据库查看！");
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>






