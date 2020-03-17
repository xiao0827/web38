/**
 * Created by Administrator on 2020/3/2.
 */
;
//我的节目单 最顶部
$(".vidmunm").mouseover(function(){
    $(".vidmunm").css("background","url('img/type/0.jpg')");
    $(".vidmunm").click(function(){
        $(".hibox").css("display","block")
    })
});
$(".vidmunm").mouseleave(function(){
    $(".vidmunm").css("background","url('img/type/NBA.jpg')")
});
var a=0;
$(".hibox>span:nth-of-type(2)").click(function(){
    a=a-150;
    $(".hibox>div:last-of-type>div").css("transform","translateX("+a+"px)");
    $(".hibox>span:first-of-type").css("display","block");
    if(a<=-450){
        $(".hibox>span:nth-of-type(2)").css("display","none")
    }
});
$(".hibox>span:first-of-type").click(function(){
    a=a+150;
    $(".hibox>div:last-of-type>div").css("transform","translateX("+a+"px)");
    $(".hibox>span:nth-of-type(2)").css("display","block");
    if(a>=0){
        $(".hibox>span:first-of-type").css("display","none")
    }
});
$(".hibox>span:last-of-type").click(function(){
    $(".hibox").css("display","none")
});
//图片展示区
var pic=["img/video/1.jpg","img/video/2.jpg","img/video/3.jpg","img/video/4.jpg","img/video/5.jpeg","img/video/6.jpg","img/video/7.png","img/video/8.jpg","img/video/9.jpg","img/video/10.jpg"];
var lis=document.querySelectorAll(".list>ul li");
var index = 0;
fn1();
var time=setInterval(fn1,2000);
$(".list").mouseleave(function(){
    time=setInterval(fn1,2000);
});
$(".list").mouseenter(function(){
    clearInterval(time);
});
for(var j=0;j<lis.length;j++){
    lis[j].index = j;
    lis[j].onmouseover=function(){
        index = this.index;
        changeCss();
    };

}
function fn1(){
    if(index>=pic.length){
        index=0
    };
    changeCss();
    $(".pictop").css("background","url("+pic[index]+")");
    index++;
}
function changeCss(){
    $(".list>ul li").html("西游降魔:师徒四人相爱相杀");
    $(".pictop").css("background","url("+pic[index]+")");
    lis[index].innerHTML="<h3>西游降魔</h3><p>师徒四人相爱相杀</p>";
}
//今日热点
$(".hotlis>div:last-of-type").mouseover(function(){
    $(this).css("background","#fff")
    $(this).find("p").css("color","red");
    $(this).find("img").attr("src","./img/video/hover.png")
});
$(".hotlis>div:last-of-type").mouseleave(function(){
    $(this).css("background","#cdcdcd")
    $(this).find("p").css("color","black");
    $(this).find("img").attr("src","./img/video/播放-默认.png")
});
var hotlis=document.getElementsByClassName("hotlis");
$(".hotresou2>span:last-of-type").click(function(){hotright()});
$(".hotresou2>span:first-of-type").click(function(){hotleft()});
function hotright(){
    $(".hotresou2>span:first-of-type").css("display","block");
    for(var i=0;i<hotlis.length;i++){
        hotlis[i].style.left=hotlis[i].offsetLeft-235+"px"
    }
    if(hotlis[6].offsetLeft==940){
        $(".hotresou2>span:last-of-type").css("display","none");
    }
}
function hotleft(){
    $(".hotresou2>span:last-of-type").css("display","block");
    for(var i=0;i<hotlis.length;i++){
        hotlis[i].style.left=hotlis[i].offsetLeft+235+"px"
    }
    if(hotlis[0].offsetLeft==0){
        $(".hotresou2>span:first-of-type").css("display","none");
    }
}
$(".hotlis>div:first-of-type").mouseover(function(){
    $(this).find("div").css("display","block");
    $(".hotlis>div:first-of-type div").click(function(e){
        var X = e.offsetX;
        $(this).find("div").css("width",X);
        if(X>50||X<80){
            $(this).parent().css("background","url('img/video/yuanchuang1.png')")
        }
    })
});
$(".hotlis>div:first-of-type").mouseleave(function(){
    $(this).find("div").css("display","none");
    $(this).find("div").children().css("width",0);
    $(this).css("background","url('img/video/hot1.png')")
});
//原创精选
$(".yclis p").mouseover(function(){
    $(this).css("background","#fff")
    $(this).css("color","red");
});
$(".yclis p").mouseleave(function(){
    $(this).css("background","#cdcdcd")
    $(this).css("color","black");
});
var yclis=document.getElementsByClassName("yclis");
$(".yuanchuang2>span:last-of-type").click(function(){ycright()});
$(".yuanchuang2>span:first-of-type").click(function(){ycleft()});
function ycright(){
    $(".yuanchuang2>span:first-of-type").css("display","block");
    for(var i=0;i<yclis.length;i++){
        yclis[i].style.left=yclis[i].offsetLeft-235+"px"
    }
    if(yclis[6].offsetLeft==940){
        $(".yuanchuang2>span:last-of-type").css("display","none");
    }
}
function ycleft(){
    $(".yuanchuang2>span:last-of-type").css("display","block");
    for(var i=0;i<yclis.length;i++){
        yclis[i].style.left=yclis[i].offsetLeft+235+"px"
    }
    if(yclis[0].offsetLeft==0){
        $(".yuanchuang2>span:first-of-type").css("display","none");
    }
}
//你的专属频道
$(".zslis>p:first-of-type").mouseover(function(){
    $(this).css("color","red");
});
$(".zslis>p:first-of-type").mouseleave(function(){
    $(this).css("color","black");
});
var zslis=document.getElementsByClassName("zslis");
$(".zhuanshu2>span:last-of-type").click(function(){zsright()});
$(".zhuanshu2>span:first-of-type").click(function(){zsleft()});
function zsright(){
    $(".zhuanshu2>span:first-of-type").css("display","block");
    for(var i=0;i<zslis.length;i++){
        zslis[i].style.left=zslis[i].offsetLeft-253+"px"
    }
    if(zslis[6].offsetLeft==771){
        $(".zhuanshu2>span:last-of-type").css("display","none");
    }
}
function zsleft(){
    $(".zhuanshu2>span:last-of-type").css("display","block");
    for(var i=0;i<zslis.length;i++){
        zslis[i].style.left=zslis[i].offsetLeft+253+"px"
    }
    if(zslis[0].offsetLeft==5){
        $(".zhuanshu2>span:first-of-type").css("display","none");
    }
}
$(".zslis div").mouseover(function(){
    $(this).find("div").css("display","block");
});
$(".zslis div").mouseleave(function(){
    $(this).find("div").css("display","none");
});
//强势接档
$(".qslis>p:first-of-type").mouseover(function(){
    $(this).css("color","red");
});
$(".qslis>p:first-of-type").mouseleave(function(){
    $(this).css("color","black");
});
$(".qslis>img").mouseover(function(){
    if($(this).attr("src")=="img/video/收藏-已收藏.png"){
         $(this).attr("src","img/video/收藏-已收藏.png");
         $(this).mouseleave(function(){
             $(this).attr("src","img/video/收藏-已收藏.png");
         });
     }else{
         $(this).attr("src","img/video/收藏-hover.png");
         $(this).mouseleave(function(){
             $(this).attr("src","img/video/收藏-默认.png");
         });
     }

});
$(".qslis>img").click(function(){
    if($(this).attr("src")=="img/video/收藏-已收藏.png"){
        $(this).attr("src","img/video/收藏-hover.png");
        $(this).mouseleave(function(){
            $(this).attr("src","img/video/收藏-默认.png");
        });
    }else{
        $(this).attr("src","img/video/收藏-已收藏.png");
        $(this).mouseleave(function(){
            $(this).attr("src","img/video/收藏-已收藏.png");
        });
    }
});
$(".qiangshi3 div").mouseover(function(){
    $(this).find("h5").css("color","red");
    $(this).find("p").css("color","red");
});
$(".qiangshi3 div").mouseleave(function(){
    $(this).find("h5").css("color","black");
    $(this).find("p").css("color","black");
});
$(".qiangshi3 div").click(function(){
    $(".qiangshi3 div").find("div>div").css("background","#ffffff");
    $(this).find("div>div").css("background","orange");

});
var b=0;
var qsdiv=document.querySelectorAll(".qiangshi3>div");
for(var j=0;j<qsdiv.length;j++){
    qsdiv[j].index = j;
    qsdiv[j].onclick=function(){
        b = this.index;
        qscss();
    };
}
function qscss(){
    $(".qiangshi2 ul").css("zIndex","5")
    $(".qiangshi2 ul").eq(b).css("zIndex","10");
}
