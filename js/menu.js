//nav
var nav = document.getElementById('nav');
var menu = document.getElementById('menu');
var menupanel = document.querySelector('.menu_panel');
var infor = document.querySelector('.infor');
var li = menu.getElementsByTagName('li');
var close = document.getElementById('close');
nav.onclick = function(ev){
	ev.cancelBubble = true;
	this.style.left = '-230px';
	this.style.opacity = 0;
	mTween(menu,'left',0,300,'easeIn',function(){
		menupanel.style.opacity = 1;
		for(var i =0;i<li.length;i++){
			li[i].style.webkitTransform = 'translateY(0px)';
		}
		infor.style.webkitTransform = 'translateY(0px)';
	});
}

//close
close.onclick = function(ev){
	ev.cancelBubble = true;
	nav.style.left = '50px';
	nav.style.opacity = 1;
	menupanel.style.opacity = 0;
	for(var i =0;i<li.length;i++){
		li[i].style.webkitTransform = 'translateY(50px)';
	}
	infor.style.webkitTransform = 'translateY(50px)';
	mTween(menu,'left',-1400,300,'easeIn');
}
