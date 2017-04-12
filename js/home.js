window.onload=function(){
	(function(){
		var oBg1=document.getElementsByClassName('h_bg1')[0];
		var oBg2=document.getElementsByClassName('h_bg2')[0];
		var timer=setInterval(function(){
			var oTop1=parseInt(getStyle(oBg1,'top'));
			var oTop2=parseInt(getStyle(oBg2,'top'));
			oBg1.style['top']=oTop1+1+'px';
			oBg2.style['top']=oTop2+3+'px';
			if(parseInt(getStyle(oBg1,'top'))>oBg1.offsetHeight){
				oBg1.style.top=-oBg1.offsetHeight+'px';
			}
			if(parseInt(getStyle(oBg2,'top'))>oBg2.offsetHeight){
				oBg2.style.top=-oBg2.offsetHeight+'px';
			}
		},30)
	})();
//	var data=[]
	(function(){
		var arr1=['','img/p1.jpg','img/p3.jpg','img/p5.jpg','img/p7.jpg','img/home_bg2.jpg'];
		var arr2=['','img/p2.jpg','img/p4.jpg','img/p6.jpg','img/p8.jpg','img/home_bg2.jpg'];
		var oHbody=document.getElementsByClassName('h_body')[0];
		var oCont=document.getElementsByClassName('h_cont')[0];
		var oH_t1=document.getElementsByClassName('h_w_t1')[0];
		var oH_t2=document.getElementsByClassName('h_w_t2')[0];
		var oH_b1=document.getElementsByClassName('h_w_b1')[0];
		var oH_b2=document.getElementsByClassName('h_w_b2')[0];
		var ohwarp1_c=document.getElementsByClassName('hwarp1_c')[0];
		var ohwarp2_c=document.getElementsByClassName('hwarp2_c')[0];
		var oText1=document.getElementsByClassName('htText');
		var oText2=document.getElementsByClassName('hbText');
		var htText=document.getElementsByClassName('h_t_text')[0];
		var hbText=document.getElementsByClassName('h_b_text')[0];
		var aPoint=document.querySelectorAll('.h_locate li');
		var s;//当前所在焦点序号暂存变量
		var num=0;
		var onOff=true;
		//首页背景初始化
		oH_t1.style['background-image']='url('+arr1[0]+')';
		oH_b1.style['background-image']='url('+arr2[0]+')';
		//首页文字初始化
		wordShow(num);
		
		
		//焦点 移入 点击 移出 事件
		for(var i=0;i<aPoint.length;i++){
			aPoint[i].index=i;
			aPoint[i].onclick=function(){
				console.log(onOff)
				if(onOff){
					onOff=false;
					num=this.index;
					for(var j=0;j<aPoint.length;j++){
						if(aPoint[j].className=='active'){
							s=aPoint[j].index;
						}
					}
					point(num);
					if(num<s){
						prev(num);
					}else{
						next(num);
					}
				}
			};
			
			aPoint[i].onmouseover=function(){
				if(this.className==''){
					for(var j=0;j<aPoint.length;j++){
						if(aPoint[j].className!='active'){
							aPoint[j].className='';
						}
					}
					this.className='active2';
				}
			};
			aPoint[i].onmouseout=function(){
				if(this.className!='active'){
					this.className='';
				}
			};
		}
		
		//焦点切换函数
		function point(n){
			for(var j=0;j<aPoint.length;j++){
				aPoint[j].className='';
			}
			aPoint[n].className='active';
		}
		
		//页面偏移
		oHbody.onmousemove=function(ev){
			var disX=ev.clientX;
			var disY=ev.clientY;
			oCont.style.transform='rotateY('+(-((disX-oHbody.clientWidth/2)/oHbody.clientWidth)*3)+'deg) rotateX('+(-((disY-oHbody.clientHeight/3)/oHbody.clientHeight)*4)+'deg)'
		};
		
		//滚轮滚动
		oCont.onmousewheel=function(ev){
			if(onOff){
				if(ev.wheelDelta<0){
					if(num+1<arr1.length){
						s=num;
						num++;
						onOff=false;
						next(num);
					}
				}else{
					if(num-1>=0){
						s=num;
						num--;
						onOff=false;
						prev(num);
					}
				}
			}
		};
		
		//下一张	
		function next(num){
			point(num);
			if(num!=0){
				var tTop1=getStyle(oText1[s],'top');
				var tTop2=getStyle(oText2[s],'top');
				mTween2(oText1[s],'top',(-hbText.offsetHeight*2),1700,'easeBothStrong',function(){
					oText1[s].style.display='none';
					oText1[s].style.top=tTop1;
				});
				
				mTween2(oText2[s],'top',(-hbText.offsetHeight*2),1800,'easeBothStrong',function(){
					oText2[s].style.display='none';
					oText2[s].style.top=tTop2;
				});
			}else{
				setTimeout(function(){
					for(var i=0;i<oText1.length;i++){
						oText1[i].style.display=oText2[i].style.display='none';
					}
				},2100);
			}
			wordShow(num);
			oH_t2.style['background-image']='url('+arr1[num]+')';
			oH_b2.style['background-image']='url('+arr2[num]+')';
			bgChange1(ohwarp1_c,oH_t1,oH_t2,-1,arr1);
			bgChange1(ohwarp2_c,oH_b1,oH_b2,-1,arr2);
			setTimeout(function(){
				onOff=true;
			},2400);

		}
		
		//上一张
		function prev(num){
			point(num);
			var tTop1=getStyle(oText1[s],'top');
			var tTop2=getStyle(oText2[s],'top');
			if(num!=0){
				htText.style.zIndex=hbText.style.zIndex=1000;
				mTween2(oText1[s],'top',(hbText.offsetHeight*2),1220,'easeBothStrong',function(){
					oText1[s].style.display='none';
					oText1[s].style.top=tTop1;
				});
				mTween2(oText2[s],'top',(hbText.offsetHeight*2),1100,'easeBothStrong',function(){
					oText2[s].style.display='none';
					oText2[s].style.top=tTop2;
					htText.style.zIndex=hbText.style.zIndex=10;
				});
			}else{
				oText1[s].style.opacity=oText2[s].style.opacity=0;
				oText1[s].style.display=oText2[s].style.display='none';
				oText1[s].style.top=tTop1;
			}
			wordShow(num);
			ohwarp1_c.style.top=-oH_t1.offsetHeight+'px';
			ohwarp2_c.style.top=-oH_b1.offsetHeight+'px';
			oH_t1.style['background-image']='url('+arr1[num]+')';
			oH_b1.style['background-image']='url('+arr2[num]+')';
			oH_t2.style['background-image']='url('+arr1[s]+')';
			oH_b2.style['background-image']='url('+arr2[s]+')';
			bgChange2(ohwarp1_c,oH_t1,oH_t2,2,arr1);
			bgChange2(ohwarp2_c,oH_b1,oH_b2,2,arr2);
			setTimeout(function(){
				onOff=true;
			},2800);
		}
		
		//上半部分 背景切换
		function bgChange1(obj,obj1,obj2,t,arr,callback){
			mTween2(obj,'top',t*obj1.offsetHeight,1600,'easeBothStrong',function(){
				obj.style.top=0+'px';
				obj1.style['background-image']='url('+arr[num]+')';
				if(num+1>arr.length-1){
					num=arr.length-1;
					obj2.style['background-image']='url('+arr[num]+')';
				}else{
				obj2.style['background-image']='url('+arr[num-1]+')';
				}
			});
			if(parseInt(getStyle(obj,top))==0){
				callback&&callback();
			}
		}
		//下半部分 背景切换
		function bgChange2(obj,obj1,obj2,t,arr,callback){
			mTween2(obj,'top',t*obj1.offsetHeight/2,1600,'easeBothStrong',function(){
				obj.style.top=0+'px';
				obj1.style['background-image']='url('+arr[num]+')';
				obj2.style['background-image']='url('+arr[num+1]+')';
			});
			if(parseInt(getStyle(obj,top))==0){
				callback&&callback();
			}
		}
		
		//下一张 文字切换
		function wordShow(n){
			if(n==0){
				oText1[n].style.display=oText2[n].style.display='block';
				setTimeout(function(){
					oText1[n].style.opacity=oText2[n].style.opacity=1;
				},200);
				htText.style.top=htText.offsetHeight/4+'px';
				hbText.style.top=-hbText.offsetHeight+'px';
				mTween2(hbText,'top',(hbText.offsetHeight),1300,'easeBothStrong');
				mTween2(htText,'top',(-htText.offsetHeight/4),800,'easeBothStrong');
			}else{
				setTimeout(function(){
					oText1[n].style.display=oText2[n].style.display='block';
					oText1[n].style.opacity=oText2[n].style.opacity=1;
					htText.style.top=htText.offsetHeight+'px';
					hbText.style.top=-hbText.offsetHeight+'px';
					mTween2(htText,'top',(-htText.offsetHeight),2000,'easeBothStrong');
					mTween2(hbText,'top',(hbText.offsetHeight),2000,'easeBothStrong');
				},900);
			}
		}
	})();
};


function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}