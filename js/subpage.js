//最大的div
var bConter = document.querySelector('.b_conter');
//第一屏
var b_os_indicate = document.querySelector('.b_os_indicate');
var b_os_chara = document.querySelector('.b_os_chara');
var bOscreen = document.querySelector('.b_oscreen');
var bOsCon = document.querySelector('.b_os_con');
var timer = '';
//第二屏
var b_tcon = document.querySelector('.b_tcon');
var b_ts_indicate = document.querySelector('.b_ts_indicate');
var bTconImg = document.querySelector('.b_tcon_img');
var bTscreen = document.querySelector('.b_tscreen');
//第三屏
var b_tit = document.querySelector('.b_tit');
var bCscreen = document.querySelector('.b_cscreen');
var bPic = document.querySelector('.b_pic');
var BCover = document.querySelectorAll('.B_cover');
var bPicLis = document.querySelectorAll('.b_pic li');
var bBg = document.querySelectorAll('.b_pic li .b_bg');
var bSpans = document.querySelectorAll('.b_pic li span');
var bBgImg = document.querySelectorAll('.b_bg img');
//第四屏
var  bFscreen = document.querySelector('.b_fscreen');
var  bShow = document.querySelector('.b_show');
var  bShowConO = document.querySelector('.b_show_con_1');
var  bShowCon = document.querySelector('.b_show_con');
//第五屏
var  bImgLe = document.querySelector('.b_img_le');
var  bImgRi = document.querySelector('.b_img_ri');
var  bChaLe = document.querySelector('.b_cha_le');
var  bChaRi = document.querySelector('.b_cha_ri');
console.log(bChaLe);
console.log(bChaRi);
//第六屏
var  bGscreen = document.querySelector('.b_gscreen');

//子链接
var  bLeafT = document.querySelector('.b_leaf_t');
var  bLeafB = document.querySelector('.b_leaf_b');
var  bDoorbell = document.querySelector('.b_doorbell');
var  b_ctier = document.querySelector('.b_ctier');
//运动函数 若隐若现感觉
timer = setInterval(function(){
	mTween(b_os_indicate,'opacity',0,800,function(){
		mTween(b_os_indicate,'opacity',100,1000,function(){});
	});
},2000)

//第二屏
//窗口滚动条监听事件
var tops = 0;
document.onscroll = function(ev){
	var scrollTop = document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffsetdocument.body.scrollTop;
	//控制第二屏的内容
	//控制第二屏的背景
	if(scrollTop > 1300){
		b_os_chara.style.display = 'none';
		b_os_indicate.style.display = 'none';
	}else{
		b_os_chara.style.display = '';
		b_os_indicate.style.display = '';
	};
	if(scrollTop > 700){
		var value = scrollTop-700-550;
		var valuePo = (2976-scrollTop);
		if(value <30){
			value = 30;
		}else if(value > 1190){
			value = 1190;
		}
		bTconImg.style.backgroundPositionX = '-'+valuePo+'px';
		b_tcon.style.top = value+'px';
		b_ts_indicate.style.top = value+200+'px';
	}
	//控制第4屏的内容
	//控制背景图片
	var position = (scrollTop-5333)/3;
	if(scrollTop>5365){
		bFscreen.style.backgroundPositionY = position+'px';
		
	}
	//显示隐藏
	if(scrollTop>6100){
		bShow.style.opacity = 1;
	}else{
		bShow.style.opacity = 0;
	}
	//控制旋转
	if(scrollTop>6400&&scrollTop<6720){
		bShowOpa(1,100,'#8eb0cb')
	}else if(scrollTop>6720&&scrollTop<7220){
		bShowOpa(1,0,'#8eb0cb')
	}else if(scrollTop>7200&&scrollTop<7620){
		bShowOpa(1,120,'#8eb0cb')
	}else if(scrollTop>7620&&scrollTop<8050){
		bShowOpa(1,30,'#8eb0cb')
	}else if(scrollTop>8050&&scrollTop<8380){
		bShowOpa(1,155,'#8eb0cb')
	}else if(scrollTop>8380&&scrollTop<8750){
		bShowOpa(1,20,'#8eb0cb')
	}else{
		bShowOpa(0,0,'#fff')
	}
	//控制4屏的圆圈超出范围 隐藏
	if(scrollTop>8811){
		bShow.style.display = 'none';
	}else{
		bShow.style.display = 'block';
	}
	//控制第五屏背景图片
	var bar = scrollTop-8900-540;
	var bara = 130-(scrollTop-9200)/2;
	var barb = (scrollTop-9200)/2;
	if(bar <= 0){
		bar = 0;
	}
	if(scrollTop > 9200){
		bImgLe.style.backgroundPosition = bara+'px'+' '+bar+'px';
		bImgRi.style.backgroundPosition = barb+'px'+' '+bar+'px';
	}
}
//第四屏背景图的函数封装
function bShowOpa(attr,rotate,color){
	bShowConO.style.opacity = attr;	
	bShowCon.style.opacity = attr;	
	bShowCon.style.background = color;
	bShowConO.style.background = color;
	bShowCon.style.transform = 'rotate('+rotate+'deg)';
}
//事件委托 ul的移入事件
bPic.addEventListener('mouseover',mouseover);	
function mouseover(ev){
	var target = ev.target||ev.srcElement;
	//li标签的border颜色
	for(var i=0;i<bPicLis.length;i++){
			bPicLis[i].style.borderBottomColor = '#381e18';
		}
	b_tit.style.borderBottomColor = '#381e18';
	//判断目标是哪个从而判断背景图片为什么
	switch(target){
		case BCover[0]:bg(0,5,6);
		break;
		case BCover[1]:bg(1,7,8);
		break;
		case BCover[2]:bg(2,9,10);
		break;
		case BCover[3]:bg(3,35,36);
		break;
		case BCover[4]:bg(4,37,38);
		break;
		case BCover[5]:bg(5,39,40);
		break;
		case BCover[6]:bg(6,11,12);
		break;
		case BCover[7]:bg(7,13,14);
		break;
		case BCover[8]:bg(8,15,16);
		break;
		case BCover[9]:bg(9,17,18);
		break;
		case BCover[10]:bg(10,19,20);
		break;
		case BCover[11]:bg(11,21,22);
		break;
		case BCover[12]:bg(12,23,24);
		break;
		case BCover[13]:bg(13,25,26);
		break;
		case BCover[14]:bg(14,27,28);
		break;
		case BCover[15]:bg(15,29,30);
		break;
		case BCover[16]:bg(16,31,32);
		break;
		case BCover[17]:bg(17,33,34);
		break;
	}
}
function bg(num,place1,place2){
	bCscreen.style.backgroundImage = 'url("../img/blog/img/img-'+place1+'.jpg")';
	bBg[num].style.backgroundImage = 'url("../img/blog/img/img-'+place2+'.jpg")';
	bSpans[num].style.color = '#fff';
}
//鼠标移出时的 清除所有效果
bPic.addEventListener('mouseout',mouseout);	
function mouseout(ev){
		b_tit.style.borderBottomColor = '';
		bCscreen.style.backgroundImage = '';
		for(var i=0;i<bBg.length;i++){
			bBg[i].style.backgroundImage = '';
			bSpans[i].style.color = '';
			bPicLis[i].style.borderBottomColor = '';
		}
}

//第五屏的点击连接到子页面
var onOff = true;
bChaLe.addEventListener('click',bImgLeclick)
function bImgLeclick(){
	if(onOff != onOff)return;
	if(onOff){
		bLeafT.style.transform = 'rotateY(0deg)';
		bLeafB.style.transform = 'rotateY(0deg)';
		document.addEventListener('mousewheel',function(){
			return false;
		});
		bDoorbell.style.display = 'block';
		setTimeout(function(){
			b_ctier.style.opacity = 1;
			bDoorbell.style.opacity = 1;
		},3000)
	}else{
		bLeafT.style.transform = '';
		bLeafB.style.transform = '';
		bDoorbell.style.display = '';
		bDoorbell.style.opacity = 0;
		b_ctier.style.opacity = 0;
		document.addEventListener('mousewheel',function(){
		});
	}
	onOff = !onOff;
	console.log(onOff)
}

bDoorbell.addEventListener('click',function(){
	console.log(onOff)
	bLeafT.style.transform = '';
	bLeafB.style.transform = '';
	bDoorbell.style.display = '';
	b_ctier.style.opacity = 1;
	bDoorbell.style.opacity = 0;
	document.addEventListener('mousewheel',function(){
	});
})

