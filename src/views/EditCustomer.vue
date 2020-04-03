<template>
  <div class="add container">
    <Alert v-if='alert' :alert="alert"></Alert>
    <h1 class="page-header">编辑用户</h1>
    <form v-on:submit.prevent="editCustomer">
      <div class="well">
        <h2>用户信息</h2>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="请输入用户名" v-model="customer.name">
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control" placeholder="请输入电话" v-model="customer.phone">
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control" placeholder="请输入邮箱" v-model="customer.email">
        </div>
        <button type="submit" class="btn btn-primary">修改</button>
      </div>
    </form>
  </div>
</template>

<script>
  import Alert from "../components/Alert.vue"
  export default {
    name: "EditCustomer",
    components: {Alert},
    data() {
      return {
        customer: {

        },
        alert:''
      }
    },
    methods: {
      getCustomerById(id){
        axios.get("http://localhost:3000/users/" + id).then(resp => {
          this.customer = resp.data
        })
      },
      editCustomer(){
        if(!this.customer.name || !this.customer.phone || !this.customer.email) {
          this.alert = "请添加对应的信息"
        }else{
          axios.put("http://localhost:3000/users/"+this.$route.params.id, this.customer).then(resp=>{
            this.$router.push({
                  path: "/",
                  query: {
                    alert: "更新用户成功"
                  }
                }
            )
          })
        }
      }
    },
    created(){
      this.getCustomerById(this.$route.params.id)
    }
  }
</script>

<style scoped>

</style>