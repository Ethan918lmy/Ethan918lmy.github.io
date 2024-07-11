/*
* @Author: Marte
* @Date:   2017-08-02 16:07:27
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-03 14:47:56
*/

var ipt = document.getElementById('ipt'),
    list = document.getElementById('list'),
    imgs = list.getElementsByTagName('img'),
    btn = document.getElementById('btn'),
    text = document.getElementById('text'),
    sp = document.getElementById('sp'),
    cons = document.getElementById('cons'),
    dls = cons.getElementsByTagName('dl');
var lis = imgs[0].src;


//图片显示
for(var i=0;i<imgs.length;i++){
    imgs[i].onclick = function(){
        for(var j=0;j<imgs.length;j++){
            imgs[j].style.opacity = 0.3;
        }
        this.style.opacity=1;
        lis=this.src;
        console.log(lis)
    }
}

//字数
text.onkeyup = function(){
    var val = this.value;
    sp.innerHTML = 140-val.length;
    if(sp.innerHTML<=0){
        alert('您输入的字数上限了');
    }
}

//广播
btn.onclick = function(){
    if(ipt.value == '' || text.value == ''){
        alert('用户名不存在或没有输入留言');
    }else{
        var dl = document.createElement('dl');
        dl.innerHTML = '<dt><img src='+lis+'></dt><dd><h4>'+ipt.value+':'+text.value+'</h4><h5>'+getDay()+'</h5></dd><em>删除</em>';

        cons.insertBefore(dl,dls[0]);
        ipt.value = '';
        text.value = '';
        sp.innerHTML = 140;
        var ems = dl.getElementsByTagName('em');

        dl.onmouseover = function(){
            this.style.background = '#f5f5f5';
            ems[0].style.display = 'block';
        }
        dl.onmouseout = function(){
            this.style.background = '';
            ems[0].style.display = 'none';
        }

        ems[0].onclick = function(){
            cons.removeChild(dl)
        }
    }
}

//获取日期
function getDay(){
    var day = new Date(),
        month = day.getMonth()+1,
        dat = day.getDate(),
        hours = Zero(day.getHours()),
        minu = Zero(day.getMinutes());

    return month + '月' + dat + '日' + hours + ':' + minu;
}
function Zero(n){
    if(n<10){
        return '0'+n;
    }else{
        return n;
    }
}