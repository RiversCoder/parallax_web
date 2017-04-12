function mTween(obj,attr,target,duration,fx,callback){
	//获取起始位置
	var begin = css(obj,attr);
	//获取运动总距离
	var count = target - begin;
	//获取运动开始时间
	var date = +new Date();
	var timer = setInterval(function(){
		//获取时间差
		var t = (+new Date()) - date;
		//判断时间到了之后停止定时器。
		if(t>=duration){
			clearInterval(timer);
			t = duration;
		}
		//得出当前元素应该在的位置。
		var value = Tween[fx](t,begin,count,duration);
		obj.style[attr] = value+'px';
		if(t==duration){
			callback&&callback();
		}
	}, 30);
}
function css(obj,attr){
	return parseFloat(obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr]);
}