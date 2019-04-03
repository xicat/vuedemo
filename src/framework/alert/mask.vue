<template>
  <div class="mask"  transition="mask-fade" @click="handlerClick"></div>
</template>
<script>
export default {
  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function
    },
    opacity: {
      type: Number,
      default: 0.4
    },
    color: {
      type: String,
      default: '#000'
    },
    zIndex:{
    	type:Number,
    	default:1000
    }
  },
  data () {
    return {
      msg:'mask !'
    }
  },
  computed: {
    style () {
    	console.log('enter style')
      return {
        'opacity': this.opacity,
        'background-color': this.color,
        'position': this.fixed ? 'fixed' : '',
        'z-index': this.zIndex
      }
    }
  },
  methods: {
		handlerClick:function(){
			this.$emit('hide')
		}
  }
}
</script>
<style lang="css">
.mask {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
  opacity: .4;
  z-index: 1000;
}


.mask-fade-transition {
  transition: all .3s linear;
}

.mask-fade-transition.overlay-fade-enter,
.mask-fade-transition.overlay-fade-leave {
  opacity: 0 !important;
}
</style>
