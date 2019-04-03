import  {PopupManager} from './popup-manager'
import {delayTask} from './utils'
export const Alert = function(msg){

  new PopupManager({
		type:'alert',
		msg:msg,
		autoClose:false,
		showTime:2000
		
		
	})

}

export const Confirm = function(msg,btnList){

	new PopupManager({
		type:'confirm',
		msg:msg,
		mask:true,
		btnList:btnList
		
	})
}
export const Prompt =function(msg,form,cbFun){
	new PopupManager({
		type:'prompt',
		msg:msg,
		mask:true,
		form:form,
		cbFun:cbFun
		
	})
}
export const Dialog = function(msg,form,cbFun){
	new PopupManager({
		type:'Dialog',
		msg:msg,
		mask:true,
		form:form,
		cbFun:cbFun,
		btnList:btnList
		
	})
}
export const showWarnning = function(msg){
	new PopupManager({
		type:'warnning',
		msg:msg,
		mask:false,
		form:form,
		cbFun:cbFun,
		btnList:btnList
		
	})
}
