<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="../assets/icon.png" alt="">
          <form @submit.prevent="btnSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input 
                type="email"
                class="form-control"
                v-model="email"
                >
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input 
                type="password"
                class="form-control"
                v-model="password"
                >
            </div>
            <button type="submit" class="btn btn-block btn-success">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name : "Login",
    data(){
        return {
            email : '',
            password : ''
        }
    },
    beforeRouteEnter : (to , from , next) => {
        next(vm => vm.$store.dispatch("setUser",null))
    },
    methods : {
        btnSubmit(){
                axios.get('/user.json')
                    .then(res => {
                        const data = res.data
                        const users = []
                      
                        for (let key in data) {
                            const user = data[key]
                            users.push(user)
                        }
                       
                        //实现过滤
                        let result = users.filter((user) => {
                            return this.email === user.email && this.password === user.password
                        })

                        if (result != null && result.length > 0) {
                            
                            this.$store.dispatch("setUser",result[0].email)
                            this.$router.push({name:"HomeLink"})
                        }else {
                            alert('测试失败')
                            this.$store.dispatch("setUser",null)
                        }
                    })
            
        }
    }
}
</script>

<style scoped>

</style>

