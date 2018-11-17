<template>
    <div id="admin">

        <div class="row">
            <div class="col-md-8">
               <div class="container">
                   <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">品种</span>
                    </div>
                    <input type="text" class="form-control" placeholder="新增品种" aria-label="Username" aria-describedby="basic-addon1" v-model="newPizza.name">
                    </div>
                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">描述</span>
                    </div>
                    <textarea class="form-control" aria-label="With textarea" v-model="newPizza.description"></textarea>
                    </div>
                    <p>选项1</p>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">尺寸</span>
                        </div>
                        <input type="text" class="form-control" placeholder="尺寸1" aria-label="Username" aria-describedby="basic-addon1" v-model="newPizza.size1">
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">价格</span>
                        </div>
                        <input type="text" class="form-control" placeholder="价格" aria-label="Username" aria-describedby="basic-addon1" v-model="newPizza.price1">
                    </div>

                    <p>选项2</p>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">尺寸2</span>
                        </div>
                        <input type="text" class="form-control" placeholder="新增品种" aria-label="Username" aria-describedby="basic-addon1" v-model="newPizza.size2">
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">价格</span>
                        </div>
                        <input type="text" class="form-control" placeholder="新增品种" aria-label="Username" aria-describedby="basic-addon1" v-model="newPizza.price2">
                    </div>
                    <button type="button" class="btn btn-outline-primary btn-lg btn-block" @click="addMenuItem">
                        确认增加</button>
               </div>
            </div>

            <div class="col-md-4">
                <div class="container">
                    <table class="table">   
                        <thead>
                            <tr>
                                <th>品种</th>
                                <th>删除</th>
                            </tr>
                        </thead>
                        <tbody v-for="item in getMenuItems">
                            <tr>
                                <td>{{item.name}}</td>
                                <td><button type="button" class="btn btn-outline-danger" @click="deleteData(item)">x</button></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>


    </div>
</template>


<script>
export default {
    name : "Admin",
    data(){
        return {
            newPizza : {},
            // getMenuItems:[]
        }
    },
    created(){
        fetch("https://wd5064150493qxwlim.wilddogio.com/menu.json")
            .then(res => {
                return res.json()
            })
            .then(datas => {
                
                let menuArray = []
                for (let key in datas){
                    datas[key].id = key
                    menuArray.push(datas[key])
                }
                //数据同步到vuex
                this.$store.commit('setMenuItems',menuArray)
                // this.getMenuItems = menuArray
            })
            .catch(err => {
                console.log(err)
            })


    },
    computed : {
        getMenuItems : {
            get(){
                // return this.$store.state.menuItems
                return this.$store.getters.getMenuItems
            },
            set(){

            }
        }
    },
    methods : {
        addMenuItem(){
            let data = {
               name:this.newPizza.name,
               description:this.newPizza.description,
               options : [
                   {
                       size : this.newPizza.size1,
                       price : this.newPizza.price1
                   },
                   {
                       size : this.newPizza.size2,
                       price : this.newPizza.price2
                   }
               ]
            }

            this.http.post("menu.json",data)
            .then(res => {
                // this.$router.push({name : "MenuLink"})
                this.$store.commit("pushToMenuItems",data)
            })
            .catch(err => {
                console.log(err)
            })


        

        },
        deleteData(item){
            
            fetch('https://wd5064150493qxwlim.wilddogio.com/menu/'+item.id+"/.json",{
                method : "DELETE",
                headers : {
                    'Content-type':'application/json'
                }
            })
              .then(res => { return res.json() })
            //   .then(data => this.$router.push({name:"MenuLink"}))
                .then(data => this.$store.commit('removeMenuItem',item))
              .catch(err => {
                  console.log(err)
              })   
        }
    },

}
</script>

<style scoped>

</style>
