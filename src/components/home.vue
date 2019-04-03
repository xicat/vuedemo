<template>
  <div class="container">
  <button @click="showAlert" id="test">showAlert</button>
	<button @click="showConfirm">showConfirm</button>
	<button @click="showPrompt">showPrompt</button>
	<button @click="showWarnning">showWarnning</button>
	<button @click="logout">logout</button>
  </div>
</template>

<script>

import {Alert,Confirm,showWarnning} from '../framework/alert/'

export default {
  name: 'app',
  data () {
    return {
      show: false
    }
  },
  methods:{
  	showAlert:function(){
  		Alert('hello world!')
  		
  	},
  	showConfirm:function(){
  		Confirm('Are you sure?',
  		[
  			{	text:'Yes',
  				handle:function(){
  				alert('yes')
  				}
  			},
   			{	text:'No',
  				handle:function(){
  				alert('no')
  				}
  			} 			
  		]
  		)
  		
  	},
  	showPrompt:function(){
  	
  		
  	},
  	showWarnning:function(){
  	
  		showWarnning('error!')
  	},
  	logout:function(){
  		  		window.location.hash ='#/';
  			this.$emit('updateIsShowMenu',false)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>