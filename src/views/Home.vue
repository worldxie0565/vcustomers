<template>
  <div class="home container">
      <Alert v-if='message' v-bind:alert="message"></Alert>
      <h1 class="page-header">用户管理系统</h1>
      <input type="text" class="form-control" placeholder="搜索" v-model="keyword"/>
    <br>
        <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>姓名</th>
            <th>电话</th>
            <th>邮箱</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filterCustomer">
            <td>{{item.name}}</td>
            <td>{{item.phone}}</td>
            <td>{{item.email}}</td>
            <td><router-link class="btn btn-default" :to="/customer/+ item.id">详情</router-link></td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import Alert from "../components/Alert"

export default {
  name: 'Home',
  data() {
    return {
      customers: [
      ],
      message: '',
      keyword: ''
    }
  },
  components: {
    Alert
  },
  methods: {
    getCus(){
      axios.get("http://localhost:3000/users").then(resp => {
        this.customers = resp.data
      })
    }
  },
  computed: {
    // 放在methods中该方法无效
    filterCustomer(){
      return this.customers.filter(customer => {
        return customer.name.match(this.keyword)
      })
    }
  },
  created() {
      this.message = this.$route.query.alert
      this.getCus()
  },
  //如果添加如下语句，将会循环调用方法，原因未知
  // updated() {
  //   this.message = this.$route.query.alert
  //   this.getCus()
  // }

}
</script>

<style scoped>

</style>
