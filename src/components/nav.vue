<template>
	<nav class="nav">
		<router-link to="/">Home</router-link>
		<router-link to="/list">list</router-link>
		<router-link to="/information">Information</router-link>
		<router-link to="/about">About</router-link>
	</nav>
</template>

<script>
export default {
  name: 'myNav',
  data () {
    return {
      msg: 'nav'
    }
  }
}
</script>

<style>
</style>