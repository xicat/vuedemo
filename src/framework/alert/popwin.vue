<template>
  <div class="popwin"  transition="popwin-fade" v-show='flag'>{{zIndex}}</div>
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
    	default:1001
    }
  },
  data () {
    return {
    	flag:true,
      msg:'hello world!'
    }
  },
  computed: {
    style () {
      return {
        'opacity': this.opacity,
        'background-color': this.color,
        'position': this.fixed ? 'fixed' : '',
        'z-index': this.zIndex + 1
      }
    }
  },
  methods: {

  }
}
</script>
<style lang="css">
.popwin {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 200px;
  height: 50px;
  margin-top:-25px;
  margin-left: -100px;
  background-color: #fff;
  
  z-index: 1001;
  border-radius: 6px;
}


.popwin-fade-transition {
  transition: all 10s linear;
  opacity: 1;
}

.popwin-fade-transition.popwin-fade-enter,
.popwin-fade-transition.popwin-fade-leave {
  opacity: 0 !important;
}
</style>
