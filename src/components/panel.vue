<template>
<div class="panel">
    <div class="panel-header">
    	<i v-bind:class="['icon','fa',showFlag?'fa-angle-down':'fa-angle-right']" @click='toggle'></i><span>{{title}}</span>
    </div>
    <div class="panel-body" >
        <slot name="body"></slot>
    </div>
</div>
</template>

<script>
import velocity from 'velocity-animate';
import Vue from 'vue'
export default {
	name:'v-panel',
	props: {
		title:{
			type:String,
			default:''
		},
		show:{
			type:String,
			default:''
		}
    },
    data(){
    	return{
    		showFlag:this.show=='true'
      	}
    },
    methods:{
		toggle(ev){
			this.showFlag = !this.showFlag;

		},
		collapse() {
            let body = this.$el.querySelector('.panel-body');
            velocity(body, 'slideUp', {
                duration: 1400,
                easing: 'easeInOutQuad'
            });
        },
        expand() {
            let body = this.$el.querySelector('.panel-body');
            velocity(body, 'slideDown', {
                duration: 1400,
                easing: 'easeInOutQuad'
            });
        }

   },
   watch:{
   		showFlag:function(val,oldVal){
   			this.$nextTick(function () {
   				let icon = this.$el.querySelector('.icon');
				let className = icon.className;
				if(this.showFlag){
					className = className.replace(' a-rotateR90','');
					className +=' a-rotateL90'
					this.expand();
				}else{
					className = className.replace(' a-rotateL90','');
					className +=' a-rotateR90'
					this.collapse();
				}
				icon.className = className 
				icon = null;
			})
   			//debugger
   		}
   }

}
</script>
<style scoped>
.panel{
	text-align: left;
}

.panel-header i{cursor: pointer;width: 40px;height: 40px;display: -webkit-inline-box;
-webkit-box-pack: center;
-webkit-box-align:center;
font-size:20px;
}
</style>