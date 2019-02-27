<!--
<template>
  <div class="users">
    <ul>
      <li v-for="user in users" v-on:click="user.show=!user.show">
        <h2>{{user.name}}</h2>
        <h3 v-show="user.show">{{user.position}}</h3>
      </li>
    </ul>
    <h>我是Users组件中的内容</h>
    <button v-on:click="deleteUser">删除</button>
  </div>
</template>

<script>
export default {
  name: 'users',
  props:{
    users:{
      type:Array,
      required:true
    }
  },
  data () {
    return {

    }
  },
  methods:{
    deleteUser:function () {
      this.users.pop();
    }
  }
}
</script>

<style scoped>
.users{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 1px  20px;
  box-sizing: border-box;
}
  ul{
    display:flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }
  li{
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
    padding: 30px;
    border:  1px solid #222;
    margin: 10px;
  }
</style>
-->
<template>
  <div class="dashboard" style=" width: 68%;float: right;">
    <h2>User组件中的内容</h2>
    <div class="statistics">
      <el-row v-if="!isLab">
        <el-col :span="8">
          <div class="item">
            User组件中用户总人数<br>
            <span class="number">{{ assetCount }}</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="item">
            User组件中用户管理<br>
            <span class="number">{{ unCheckAssetCount }}</span>
          </div>
        </el-col>

      </el-row>
      <el-row v-if="isLab">
        <el-col :span="8">
          <div class="item">
            User组件中删除用户<br>
            <span class="number">{{ callAssetCount }}</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <h2>User组件中VIP申请</h2>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="申请时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="资产名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="type"
        label="型号">
      </el-table-column>
      <el-table-column
        prop="state"
        label="申请状态">
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        small
        v-if="totalCount > 5"
        layout="prev, pager, next"
        :total="totalCount"
        :current-page="currentPage"
        :page-sizes="pageSizeChange"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>
    <div class="hello-foot">
      <button @click="goFirst_3">点击返回首页</button>
      <button @click="goSecond_3">点击返回HelloWorld组件页面</button>
    </div>
  </div>

</template>

<script>

  export default {
    data () {
      return {
        assetCount: '0',
        unCheckAssetCount: '0',
        callAssetCount: '0',
        right: 1,
        isLab: false, // 是否是实验室人员
        tableData: [],
        pageSizeChange: [2,3,4],
        currentPage: 1,
        totalCount: 0,
      };
    },
    created() {
      this.right = JSON.parse(localStorage.user).right_id
      if (this.right === 0) { // 管理员
        this.queryAllDoing()
        this.queryAllAssetCount()

      } else if (this.right === 1) { // 普通教师
        this.queryPersonAssetCount()
        this.queryDoing()
      } else if (this.right === 2) { // 实验室
        this.isLab = true
        this.queryLabAssetCount()
      }
    },
    methods: {
      goFirst_3:function() {
        this.$router.push({path:'/content'})
      },
      goSecond_3:function() {
        this.$router.push({path:'/content/helloWorld'})
      },
      formatDate(date) {
        return date.substring(0, 10)
      },
      queryAllAssetCount() {
        this.$http.get('/api/asset/query-all-asset-count')
          .then((res) => {
            if (res.status === 200) {
              this.assetCount = res.data[0][0].assetCount
              this.unCheckAssetCount = res.data[1][0].unCheckAssetCount
              this.callAssetCount = res.data[2][0].callAssetCount
            }
          }).catch((err) => {
          console.log(err)
        })
      },
      queryPersonAssetCount() {
        this.$http.get('/api/asset/query-person-asset-count')
          .then((res) => {
            if (res.status === 200) {
              this.assetCount = res.data[0][0].assetCount
              this.unCheckAssetCount = res.data[1][0].unCheckAssetCount
              this.callAssetCount = res.data[2][0].callAssetCount
            }
          }).catch((err) => {
          console.log(err)
        })
      },
      queryLabAssetCount() {

      },
      handleCurrentChange(val) {
        this.currentPage = val
        if (this.right === 0) {
          this.queryAllDoing()
        } else if (this.right === 1) {
          this.queryDoing()
        }
      },
      queryDoing() {
        this.$http.post('/api/asset/query-doing', {
          page: (this.currentPage - 1) * 10,
          size: 10
        }).then((res) => {
          if (res.status === 200) {
            this.totalCount = res.data[0][0].totalCount
            this.tableData = []
            res.data[1].forEach((item) => {
              let obj = {
                date: this.formatDate(item.asset_submitdate),
                name: item.asset_name,
                type: item.asset_type,
                state: item.asset_state === 0 ? '申报审核中' : '调用审核中'
              }
              this.tableData.push(obj)
            })
          }
        })
      },
      queryAllDoing() {
        this.$http.post('/api/asset/query-all-doing', {
          page: (this.currentPage - 1) * 10,
          size: 10
        }).then((res) => {
          if (res.status === 200) {
            this.totalCount = res.data[0][0].totalCount
            this.tableData = []
            res.data[1].forEach((item) => {
              let obj = {
                date: this.formatDate(item.asset_submitdate),
                name: item.asset_name,
                type: item.asset_type,
                state: item.asset_state === 0 ? '申报审核中' : '调用审核中'
              }
              this.tableData.push(obj)
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
  .statistics .item{
    box-shadow: 0px 0px 50px #eee;
    border-radius: 5px;
    margin: 30px;
    padding: 20px;
    font-size: 18px;
    line-height: 30px;
    background-color: lightblue;
  }
  .number {
    color: #20a0ff;
    font-size: 28px;
  }
</style>




