<template>
    <div class="about">

            <div class="row">
                <div class="col md-8">
                    <div class="list-group">
                        <router-link to="/contact" class="list-group-item list-group-item-action active mb-3 text-center">
                            Contact
                        </router-link>
                        <router-link to="/delivery" class="list-group-item list-group-item-action active mb-3 text-center">
                            Delivery
                        </router-link>
                        <router-link to="/historys" class="list-group-item list-group-item-action active mb-3 text-center">
                            History
                        </router-link>
                        
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>


      


    </div>
</template>

<script>
export default {
    name : "About",
    data(){
        return {

        }
    },
    methods : {

    },
}
</script>

<style scoped>

</style>
