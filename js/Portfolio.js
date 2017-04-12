/* portfolio */

window.onload = function(){
	var bg = document.querySelector('.p_bg');
	bg.style.height = window.innerHeight+'px';
	var wrap = document.getElementById('p_warp');
	var item = document.querySelectorAll('.p_item');
	var num = 0;
	//初始化
	if(change(num)){
		mTween(bg,'left',0,500,'linear',function(){
			wrap.style.opacity = 1;
		});
	}
	
	//文档点击滚动
	document.onclick = function(ev){
		ev.cancelBubble = true;
		num++;
		wrap.style.webkitTransform = 'rotateX('+(-num*45)+'deg)';
		change(num%item.length);
	}	
	//根据鼠标滚动方向旋转
	document.onmousewheel = function(ev){
		if(wheel(ev)<0){
			num++;
		}else{
			num--;
		}
		wrap.style.webkitTransform = 'rotateX('+(-num*45)+'deg)';
		change((num+item.length)%item.length);
	}
	
	//改变当前item层级和大小
	function change(now){
		for(var i=0;i<item.length;i++){
				item[i].style.webkitTransform = 'rotateX('+45*i+'deg) translateZ(1000px) scale(.8)';
				item[i].style.zIndex = '1';
				item[i].style.webkitBoxReflect = 'none';
		}
		item[now].style.webkitTransform = 'rotateX('+45*now+'deg) translateZ(1000px) scale(1.2)';
		item[now].style.zIndex = '999';
		item[now].style.webkitBoxReflect = 'below 10px -webkit-linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.2))';
		return true;
	}
	
	//监测滚轮方向
	function wheel(ev){
		var detail;
		if(ev.wheelDelta){
			detail = ev.wheelDelta;
		}else{
			detail = -ev.detail;
		}
		return detail;
	}
	
	
	for(var i=0;i<item.length;i++){
		item[i].onmouseover = function(){
			var div = this.querySelectorAll('div');
			div[0].style.transition = '5s';
			div[0].style.webkitTransform = 'scale(1.1)';
			div[1].style.opacity = '1';
			var op = div[2].getElementsByTagName('p');
			op[0].style.webkitTransform = 'translateY(0)';
			op[1].style.webkitTransform = 'translateY(0)';
		}
		item[i].onmouseout = function(){
			var div = this.querySelectorAll('div');
			div[0].style.transition = '1s';
			div[0].style.webkitTransform = 'scale(1)';
			div[1].style.opacity = '0';
			var op = div[2].getElementsByTagName('p');
			op[0].style.webkitTransform = 'translateY(200px)';
			op[1].style.webkitTransform = 'translateY(200px)';
		}
	}
	
}