<template>
  <div id="app">
   <header-app></header-app>
   

   <div class="card">
     <div class="card-body">
       <router-view></router-view>
     </div>
   </div>

   
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  data () {
    return {
      
    }
  },
  components : {
    'header-app' : Header

  }
}
</script>

<style>


</style>
