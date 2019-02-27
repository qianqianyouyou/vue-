<template>
<div class="head">
  <div class="head_1">
    <ul class="head_ul head_ul1">
      <li><span class="head_span1">欢迎您:</span><span class="head_span2">柳柳</span></li>
      <li><span class="headerTime"> {{datatime}}</span></li>
      <li><a href="index.html" title="返回主页" class="home"></a></li>
      <li><a href="login.html" title="关闭程序" class="headerClose"></a></li>
    </ul>
  </div>
<div class="head_2">
  <h4 class="headTitle">基于MySQL，VUE的单页应用框架搭建</h4>
  <ul class="head_ul head_ul2" >
    <li class="head_li1" v-for="(pic,index) in headpic" v-on:click="navChange(index)" >
      <input type="checkbox" >
      <img  :src="'../../static/'+ pic.addr + pic.add2 ">
      <p class="navWords" v-bind:class="pic.num">{{pic.name_pic}}</p>
    </li>
  </ul>
</div>

</div>
</template>

<script>
  export default {
    name: 'app-header',
    data () {
      return {
     headpic:[
       {name_pic:"动态事件",num:"navWords1",addr:"white/",add2:"0.png",in:0},
       {name_pic:"时时交通",num:"navWords2",addr:"white/",add2:"1.png",in:1},
       {name_pic:"资产维护",num:"navWords3",addr:"white/",add2:"2.png",in:2},
       {name_pic:"管理部署",num:"navWords4",addr:"white/",add2:"3.png",in:3},
     ],
        datatime:''
      }
    },
    methods: {
      showtime: function () {
        var date = new Date();
        var yy = date.getFullYear();
        var yue = date.getMonth()+1;
        var ri = date.getDate();
        var hh =date.getHours();
        var mm = date.getMinutes();
        var ss = date.getSeconds();
        var day =date.getDay();
        switch (day) {
          case 0:
            day = "星期日";
            break;
          case 1:
            day = "星期一";
            break;
          case 2:
            day = "星期二";
            break;
          case 3:
            day = "星期三";
            break;
          case 4:
            day = "星期四";
            break;
          case 5:
            day = "星期五";
            break;
          case 6:
            day = "星期六";
            break;
        }
        mm = this.checkTime(mm);
        ss = this.checkTime(ss);
        this.datatime=(yy + "年" + yue + "月" + ri + "日" + "  " + hh + ":" + mm + ":" + ss + "  " + day);

      },
      checkTime: function (i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      },
      beforeDestroy () {
         if(this.timer) {
            clearInterval(this.timer);//在vue实例销毁钱，清除我们的定时器
         }
       },
      navChange: function (index) {
        var i;
        for(i=0;i<=this.headpic.length;i++){
          if(i!=index){
            this.headpic[i].addr="white/";
          }
          else{
            this.headpic[i].addr="red/";
          }
        }
       }
    },
      mounted:function () {
      this.timer = setInterval(this.showtime,500);
    },
  }
</script>


<style scoped>
  /***header***/
  *{
    margin: 0;
    padding: 0;
  }
  header{
    width: 100%;
    height: 80px;
    position: relative;
    z-index: 10000;
  }
  .head{
    width: 100%;
    height: 80px;
    position: relative;
  }
  .head_1{
    width: 100%;
    height: 30px;
    background-color: darkseagreen;
    opacity: .9;
    filter: alpha(opacity=90);
  }
  .headLogo{
    width: 260px;
    height: 40px;
    position: absolute;
    top: 10px;
    left: 30px;
  }
  .head_2{
    width:100%;
    height:50px;
    margin-top: -1px;
    background-color: darkseagreen;
    background-size: 100% 100%;
  }
  .head_ul li{
    float: left;
    list-style-type: none;
  }
  .head_ul1{
    float: right;
  }
  .head a{
    width: 18px;
    height: 21px;
    display: inline-block;
    margin-top: 5px;
    margin-right: 14px;
  }
  .head a img{max-width: 100%}
  .head span{
    color:#000;
    font-size: 14px;
    line-height: 30px;
  }
  .headerTime,.head_span2{
    margin-right: 14px;
  }
  .home{
   /*// background: url(../../images/home.png) no-repeat 50% 50%;*/
    background-size:100% 80%;
  }
  .headerClose{
    /*//background: url(../../images/close.png) no-repeat 50% 50%;*/
    background-size:100% 80%;
  }
  .headTitle{
    width: 28%;
    float: left;
    margin-left: 27px;
    height: 50px;
    line-height: 60px;
    color: #000;
    font-size: 20px;
    letter-spacing: 3px;
  }
  .head_ul2{
    width: 60%;
    height: 50px;
    margin-left: 40%;
  }
  .head_ul2 li input{
    display: none;
  }
  .head_ul2 li{
    width: 40px;
    height: 40px;
    margin-top: 5px;
    margin-right: 12%;
    position: relative;
  }
  .head_ul2 li img{
    width: 40px;
    height: 40px;
    display: block;
  }
  .head_ul2 li p{
    display: none;
    font-size: 13px;
    line-height: 16px;
    width: 68px;
    position: absolute;
    top: 50px;
    left: -12px;
    color: red;
    font-weight: 600;
    text-align: center;
  }
  .head_li1:hover .navWords1,
  .head_li1:hover .navWords2,
  .head_li1:hover .navWords3,
  .head_li1:hover .navWords4,
  .head_li1:hover .navWords5{
    display: block;
  }
</style>
