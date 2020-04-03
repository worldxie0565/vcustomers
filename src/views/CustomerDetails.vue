<template>
  <div class="details container">
    <router-link to="/" class="btn btn-default">返回</router-link>
    <h1 class="page-header">
      {{customer.name}}
      <span class="pull-right">
        <router-link :to="/edit/ + customer.id" style="margin-right: 5px" class="btn btn-primary">编辑</router-link>
        <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
      </span>

    </h1>
    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-asterisk"> {{customer.phone}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-plus"> {{customer.email}}</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "CustomerDetails",
    data() {
      return {
        customer:{}
      }
    },
    methods: {
      getCustomerById(id) {
        axios.get("http://localhost:3000/users/" + id).then(resp=>{
          this.customer = resp.data
        })
      },
      deleteCustomer(id) {
        axios.delete("http://localhost:3000/users/" + id).then(resp=>{
          this.$router.push({
            path:'/',
            query: {
              alert: "删除用户成功"
            }
          })
        })
      }
    },
    created(){
        this.getCustomerById(this.$route.params.id)
    }
  }
</script>

<style scoped>

</style>