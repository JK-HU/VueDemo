<template>
    
<div id="header">

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" to="/">Navbar</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
          <router-link class="nav-link" to="/">首页</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/Menu">菜单</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/Admin">管理</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/About">关于我们</router-link>
      </li>
    </ul>
   
  </div>

    <ul class="navbar-nav ml-auto">
        <li><router-link :to="{name:'LoginLink'}" v-show="!isLogin" class="nav-link">登录</router-link></li>

        <li class="nav-link">
          {{currenUser}}
        </li>

        <li><router-link :to="{name:'LoginLink'}" v-show="isLogin" class="nav-link">[退出]</router-link></li>

        <li><router-link :to="{name:'RegisterLink'}" v-show="!isLogin" class="nav-link">注册</router-link></li>
    </ul>


</nav>



</div>

</template>

<script>
export default {
    name : "Header",
    data(){
        return {

        }
    },
    components : { },
    computed : {
      currenUser(){
        return this.$store.getters.currenUser
      },
      isLogin(){
        return this.$store.getters.isLogin
      }



    },


}

</script>

<style scoped>

</style>


