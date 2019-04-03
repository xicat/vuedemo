<template>
	
  <div id="app">
  	 <myNav v-if='isShomeMenu'/>
	 <router-view @updateIsShowMenu='updateisShowMenuFlag' />
    <myFooter/>
  </div>
</template>

<script>
import myNav from './components/nav'
import myFooter from './components/footer'	
export default {
	name: 'App', 
	components:{
		myNav:myNav,
		myFooter:myFooter
	},
  data () {
    return {
     isShomeMenu: !(window.location.hash==='#/')
     //isShomeMenu:true
    }
  },
	methods:{
		updateisShowMenuFlag:function(flag){

			this.isShomeMenu = flag;
		}
	}
}
</script>

<style>

</style>
