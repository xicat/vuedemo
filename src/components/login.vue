<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <button @click='login'> login</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to login'
    }
  },
  methods:{
  	login:function(){
  		
  		window.location.hash ='#/home';
  		this.$emit('updateIsShowMenu',true)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>