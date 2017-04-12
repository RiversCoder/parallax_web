window.onload = function(){
	var bg = document.getElementById('bg');
	bg.style.height = window.innerHeight+'px';
	document.documentElement.style.height = window.innerHeight+'px';
	bg.style.webkitTransform = 'scale(1)';
	
	var title = document.querySelector('.H_section1');
	var h1 = title.getElementsByTagName('h1')[0];
	var p = title.getElementsByTagName('p')[0];
	h1.style.opacity = '1';
	p.style.opacity = '1';
	var move_bg = document.querySelectorAll('.H_move');
	var arr = [];
	
	for(var i=0;i<move_bg.length;i++){
		arr.push(60);
	}
	document.onmousewheel = function(ev){
		//判断鼠标滚轮的方向
		//遍历所有在可视区的元素
		for(var i=0;i<move_bg.length;i++){
			var top = move_bg[i].getBoundingClientRect().top;
			var img = move_bg[i].getElementsByTagName('img')[0];
			if(wheel(ev)<0){ //向下
				if(top<700){	
					if(arr[i]>-60){
						arr[i] -=20;
					}
				}
			}else{  //向上
				if(top>-700){	
					if(arr[i]<60){
						arr[i] +=20;
					}
				}
			}
			img.style.webkitTransform = 'translateY('+arr[i]+'px)';
		}
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

}
