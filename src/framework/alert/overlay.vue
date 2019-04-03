<template>
	<div class="overlay">
			<Popwin></Popwin>
			<maskDiv  @hide='remove'></maskDiv>
			
	</div>
</template>
<script>
// 引入子组件
import maskDiv from './mask';
import Popwin from './popwin';
export default {
 name: 'overlay',
 data () {
  return {

  };
 },
 components: { // 声明子组件
	maskDiv,
	Popwin
 },
 methods: {
		remove(){
			this.$el.remove();
		}
 }
}

</script>
<style lang="css">


</style>
