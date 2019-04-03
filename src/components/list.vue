<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <Modal v-if="showModal" @close="showModal = false"></Modal>
    <button id="show-modal" @click="showModal = true">Show Modal</button>
		<v-panel show='true' title="title">
			<div slot="body">标题带图标</div>
		</v-panel>
  </div>
</template>

<script>
import Modal from '../framework/modal/index.vue';	
export default {
  name: 'list',
  data () {
    return {
      msg: 'Welcome to List',
      showModal: false
    }
  },
  components: { // 声明子组件
		Modal
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>