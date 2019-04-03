<template>
    <div class="table-container">
        {{msg}}
    </div>
</template>
<script>
export default{
    name:'myTable',
    props:{
        msg:{
            type:String,
            default:''
        },
        
    },
    data(){
        return{

        }
    },
    methods:{
   
    },
    beforeCreate:function(){
        console.log('beforeCreate')
    },
    created:function(){
        console.log('created')
    }

}
</script>
<style scoped>
.mt20{
    margin-top: 20px;
    text-align: left;
    padding: 0px 20px;
}
</style>