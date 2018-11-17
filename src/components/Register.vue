<template>
    <div class="login">
        <div class="container">
            <!-- 取消表单默认事件 -->
            <form @submit.prevent="btnSubmit">
            <div class="form-group">
                <label for="exampleInputEmail1">邮箱</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword">密码</label>
                <input type="password" class="form-control" id="exampleInputPassword" placeholder="密码"  v-model="password">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">确认密码</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="密码"  v-model="confirmpassword">
            </div>
            <button type="submit" class="btn btn-primary">注册</button>
            </form>
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
            password : '',
            confirmpassword : ''
        }
    },
    methods : {
        btnSubmit(){
            
            if ( this.password === this.confirmpassword ){
                let formData = {
                    email : this.email,
                    password : this.password,
                    confirmpassword : this.confirmpassword
                }
                axios.post('/user.json',formData)
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }else{
                alert('密码测试错误')
            }

            
        }
    }
}
</script>

<style scoped>

</style>

