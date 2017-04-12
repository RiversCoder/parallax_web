/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-01 23:06:18
 * @version $Id$
 */
(function(){
    var A_EASY_img = document.getElementById('A_EASY_img');
    var A_EASY_title = document.getElementById('A_EASY_title');
    A_EASY_title.style.top = (A_EASY_img.offsetHeight - A_EASY_title.offsetHeight)/2+'px';
    A_EASY_title.style.left = (A_EASY_img.offsetWidth - A_EASY_title.offsetWidth)/2+'px';
    window.onresize = function(){
        A_EASY_title.style.top = (A_EASY_img.offsetHeight - A_EASY_title.offsetHeight)/2+'px';
        A_EASY_title.style.left = (A_EASY_img.offsetWidth - A_EASY_title.offsetWidth)/2+'px';
        var awards_content2 = document.getElementById('awards_content2');
        var items = awards_content2.getElementsByClassName('item');
        for(var i=0;i<items.length;i++){
            items[i].style.height = (awards_content2.offsetWidth/5)+'px';
        }
    }
    var awards_content2 = document.getElementById('awards_content2');
    var items = awards_content2.getElementsByClassName('item');
    for(var i=0;i<items.length;i++){
        items[i].style.height = (awards_content2.offsetWidth/5)+'px';
    }
    // var About = document.getElementById('About');
    // About.onscroll = function(e){
        
    //     var e =e || About.event;
    //     var scrolltop=About.documentElement.scrollTop||About.scrollTop;
    //     console.log(scrolltop);
    // }
    var awards_wrap = document.getElementById('awards_wrap');
    var awards_content2_wrap = document.getElementById('awards_content2_wrap');
    var block_clients = document.getElementById('block_clients');
    var num = 0;
    document.onmousewheel = fn;
    document.addEventListener('DOMMouseScroll', fn);
    function fn(ev){
        var detail;
        if(ev.wheelDelta){
            detail = ev.wheelDelta;
        }else{
            detail = -ev.detail;
        }
        if(detail<0){
            num-=10
        }else{
            num+=10;
        }
        // if(num < -40)num = -40;
        
        console.log(num);
        awards_wrap.style.transform = 'matrix(1, 0, 0, 1, 0, '+(num)+')';
        awards_content2_wrap.style.transform = 'matrix(1, 0, 0, 1, 0, '+(num)+')';
        block_clients.style.marginTop = (num)+'px';
    }
    













})();
