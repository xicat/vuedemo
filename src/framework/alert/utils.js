let zIndex = 20141223

export const getZIndex = function(flag){
	zIndex += 10
	return zIndex
}
export const reduceZIndex = function(num){
	zIndex -= num
}
export const getDOM = function (dom) {
  if (dom.nodeType === 3) {
    dom = dom.nextElementSibling || dom.nextSibling
    getDOM(dom)
  }
  return dom
}
export const delayTask =function(time,handle){
	function timeout(ms) {
	  return new Promise((resolve, reject) => {
	    setTimeout(resolve, ms, handle);
	  });
	}
	
	timeout(time).then((fn) => {
	   if(typeof(fn)=='function'){
	   	fn()
	   }
	});
}
