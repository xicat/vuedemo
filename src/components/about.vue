<template>
  <div class="tl">
  	<button @click="toggle">test</button>
    <div class="dialog-wrap">

      <transition name="rightIn">
        <div class="dialog-content"  v-show="show">
          <p class="dialog-close" @click="toggle">x</p>
          <div>
					  <el-tabs v-model="activeName">
					    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
					    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
					  </el-tabs>          	
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      isShow: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
				show:this.isShow
      }
    },
    methods: {
    	toggle(){
    		this.show = !this.show
    	}
    }
  }
</script>

<style scoped>
  .drop-enter-active {
    transition: all .5s ease;
  }
  .drop-leave-active {
    transition: all .3s ease;
  }
  .drop-enter {
    transform: translateY(-500px);
  }
  .drop-leave-active {
    transform: translateY(-500px);
  }
  .rightIn-enter-active {
    transition: all .5s ease;
  }
  .rightIn-leave-active {
    transition: all .3s ease;
  }
  .rightIn-enter {
    transform: translateX(50vw);
  }
  .rightIn-leave-active {
    transform: translateX(50vw);
  }


  .dialog-content {
    width: 50vw;
    position: fixed;
    height: calc(100vh - 90px);
    overflow: auto;
    background: #fff;
    top: 45px;
    right: 0px;
    margin-left: -25%;
    z-index: 10;
    border: 2px solid #464068;
    padding: 2%;
    line-height: 1.6;
  }
  .dialog-close {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
  }
  .dialog-close:hover {
    color: #4fc08d;
  }
  .tl{text-align:left ;}
</style>