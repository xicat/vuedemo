import Vue from 'vue'
import overlayOpt from './overlay'
import {getDOM, getZIndex,reduceZIndex,delayTask} from './utils'
const Overlay = Vue.extend(overlayOpt);
const defaultOpt ={
	color:'#000',
	opacity:0.5,
	count:0,
	zIndex:''
}
class PopupManager {

	 constructor(){
	 	//arguments 
	 	let opt = arguments[0];
		let type = opt.type;
		if(type==undefined){
			return;
		}
	 	this.init(type,opt);
	 }
	 init(type,opt){
	 	this.opt =  Object.assign(defaultOpt, opt);
		this.create()
	 }
	create(){
	    let overlay = this.overlay = new Overlay({
	      el: document.createElement('div'),
	    })

	    overlay.$data.fixed = true
	    overlay.$data.color = this.opt.color
	    overlay.$data.opacity = this.opt.opacity;
	    overlay.$data.zIndex =  getZIndex();
	    
	    overlay.onClick = this.remove.bind(this)
	    
	    
	    overlay.msg = this.opt.msg
	    
		document.body.appendChild(overlay.$el)
		

	    // body 操作
	    this.bodyOverflow = document.body.style.overflow
	    document.body.style.overflow = 'hidden' 
	    
	    if(this.opt.autoClose){
			delayTask(this.opt.showTime||3000,function(){
				overlay.remove()
			})      	
	    }
 	
	}
	remove(){
	    if (!this.overlay) return
	    document.body.style.overflow = this.bodyOverflow
	    let overlay = this.overlay
	    this.overlay = null
	    overlay.$el.remove()
	    reduceZIndex()
	 	
	}
	
}
export {PopupManager}