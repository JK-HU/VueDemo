<template>
    <div id="home">
        
        <div class="container">
            <div class="card">
                <div class="card-body imgs">
                    <img src="../assets/pizza.jpg" alt="显示披萨">
                    <div class="bgcolor">
                        <h3>欢迎品尝pizaa</h3>
                        <h5>有各式各样的pizaa</h5>
                    </div>
                </div>  

                
            </div>


        </div>
        
    </div>    

</template>

<script>
export default {
    name : "Home",
    data(){
        return {

        }
    },
    methods : {

    },
    components : {

    }
}
</script>

<style scoped>

.imgs{
    max-width : 1280;
    height: 457px;
    overflow: hidden;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center
    
}
.imgs img {
    width: 100%;
    height: 100%;
    display: block
}
.bgcolor{
    position: absolute;
    top: 50%;
    left: 50%;
    width:500px;
    height:200px;
    line-height: 200px;
    transform: translate(-50%,-50%);
    background-color:rgba(207, 203, 203, 0.6);
    text-align: center;

    color:sienna;
     
}
.bgcolor h3{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
}
.bgcolor h5 {
    color:#fff;
    margin-top: 2.8rem;
}


</style>


