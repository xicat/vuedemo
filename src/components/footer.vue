<template>
	<footer>
	<nav class="nav2">
		<router-link to="/">Home</router-link>
		<router-link to="/list">list</router-link>
		<router-link to="/information">Information</router-link>
		<router-link to="/about">About</router-link>
	</nav>
	</footer>
</template>

<script>
export default {
  name: 'myfooter',
  data () {
    return {
      msg: 'footer'
    }
  }
}
</script>

<style>
</style>