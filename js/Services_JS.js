/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-28 11:46:13
 * @version $Id$
 */
(function(){
    // 页面加载时（初始化）
    // Services_content 居中
    var Services_content = document.getElementById('Services_content');
    var Services_content_bg = document.getElementById('Services_content_bg');
    Services_content.style.marginTop = (Services_content_bg.offsetHeight/2)-(Services_content.offsetHeight/2)+'px';
    // 可视区域宽高发生变化时
    window.onresize = function(){
        var Services_content = document.getElementById('Services_content');
        var Services_content_bg = document.getElementById('Services_content_bg')
        Services_content.style.marginTop = (Services_content_bg.offsetHeight/2)-(Services_content.offsetHeight/2)+'px';
        // Services——列表页面处于缩小状态跟随S_c_btn的位置
        var S_c_btn = document.getElementById('S_c_btn');
        var Services_list_wrap = document.getElementById('Services_list_wrap');
        Services_list_wrap.style.left = S_c_btn.getBoundingClientRect().left+'px';
        Services_list_wrap.style.top = S_c_btn.getBoundingClientRect().top+'px';
        // Services——列表页面处于最大状态跟随可视窗口的宽高变化而变化
        Services_list_wrap.style.left = '0px';
        Services_list_wrap.style.top = '0px';
        Services_list_wrap.style.width = '100%';
        Services_list_wrap.style.height = '100%';
    }
    // 鼠标在Services_content_bg上移动时发生微弱的景深效果
    Services_content_bg.onmousemove = function(ev){
        var x = (window.innerWidth/2 - ev.clientX)/100;
        var y = (window.innerHeight/2 - ev.clientY)/100;
        this.style.transform = 'matrix3d(1, 0, 0, '+(-x/500000)+', 0, 1, 0, '+(-y/100000)+', 0, 0, 1, 0, 0, 0, 0, 1)';
    }
    // Services——列表页面处于缩小状态跟随S_c_btn的位置
    var S_c_btn = document.getElementById('S_c_btn');
    var Services_list_wrap = document.getElementById('Services_list_wrap');
    var S_l_c_wrap = document.getElementById('S_l_c_wrap');
    Services_list_wrap.style.left = S_c_btn.getBoundingClientRect().left+'px';
    Services_list_wrap.style.top = S_c_btn.getBoundingClientRect().top+'px';
    // 列表页外壳处于缩小状态时 点击变大充满屏幕
    Services_list_wrap.onclick = function(){
        this.style.opacity = '1';
        var timer1 = null;
        clearTimeout(timer1);
        timer1 = setTimeout(function(){
            Services_list_wrap.style.left = '0px';
            Services_list_wrap.style.top = '0px';
            Services_list_wrap.style.width = '100%';
            Services_list_wrap.style.height = '100%';
            Services_list_wrap.style.cursor = 'default';
            setTimeout(function(){
                Services_list_wrap.style.borderRadius = '0px';
                S_l_c_wrap.style.display = 'block';
                S_l_c_btnX.style.display = 'block';
            }, 100)
        }, 300)
    }
    var S_l_content_bg = document.getElementById('S_l_content_bg');
    // 鼠标在S_l_content_bg上移动时发生微弱的景深效果
    S_l_content_bg.onmousemove = function(ev){
        var x = (window.innerWidth/2 - ev.clientX)/100;
        var y = (window.innerHeight/2 - ev.clientY)/100;
        this.style.transform = 'matrix3d(1, 0, 0, '+(-x/500000)+', 0, 1, 0, '+(-y/100000)+', 0, 0, 1, 0, 0, 0, 0, 1)';
    }
    var S_l_c_btnX = document.getElementById('S_l_c_btnX');
    // 点击叉号收起列表
    S_l_c_btnX.onclick = function(ev){
        Services_list_wrap.style.top = '-100%';
        setTimeout(function(){
            Services_list_wrap.style.opacity = '0';
            setTimeout(function(){
                S_l_c_wrap.style.display = 'none';
                S_l_c_btnX.style.display = 'none';
                Services_list_wrap.style.borderRadius = '100px';
                Services_list_wrap.style.cursor = 'pointer';
                Services_list_wrap.style.width = '225px';
                Services_list_wrap.style.height = '83px';
                Services_list_wrap.style.left = S_c_btn.getBoundingClientRect().left+'px';
                Services_list_wrap.style.top = S_c_btn.getBoundingClientRect().top+'px';
            }, 300)     
        }, 300)
        ev.cancelBubble = true;
    }
    var S_l_c_list = document.getElementById('S_l_c_list');
    var Pocket_Monster = document.getElementById('Pocket_Monster');
    var lis = S_l_c_list.getElementsByTagName('li');
    lis[0].onclick = function(){
        Services_list_wrap.style.transform = 'rotateY(90deg)';
        setTimeout(function(){
            Pocket_Monster.style.transform = 'rotateY(0deg)';
        }, 300)
    }
    var PM_btn = document.getElementById('PM_btn');
    var PM_btn = document.getElementById('PM_btn');
    PM_btn.onclick = function(){
        Pocket_Monster.style.transform = 'rotateY(90deg)';
        setTimeout(function(){
            Services_list_wrap.style.transform = 'rotateY(0deg)';
        }, 300)
    }



})();