
var btn = document.getElementById('btn');


//滚动条滚动时
window.onscroll = function(){
    //获取滚动条的距离
    var tops = document.documentElement.scrollTop || document.body.scrollTop;
    //获取可视区的高
    var vieW = document.documentElement.clientHeight || document.body.clientHeight;
    //获取一半的高
    tops = parseInt(vieW/2)+tops;

    //滚动条距离大于500的时候显示
    if(tops>=500){
        btn.style.display = 'block';
    }else{
        btn.style.display = 'none';
    }

    //点击返回顶部返回最顶部
    btn.onclick = function(){
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }
}