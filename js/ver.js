var num=document.getElementById('version');
var target=document.getElementById('startup');
var load=document.getElementById('loader');
var ads=document.getElementById('ad001');
var menu=document.getElementById('menu-content');
//start
window.onload=function() {
    if(!localStorage.getItem('startMesseges')){
        //load.classList.remove('hide');
        menu.classList.add('hide');
        setTimeout(function(){load.classList.add('logout');},1000);
        setTimeout(function(){target.classList.remove('hide');target.classList.add('startupOn')},1550);
       // setTimeout(function(){load.classList.add('hide');},2000);
        localStorage.setItem("startMesseges", "true");
    }
    num.innerHTML=('081021'); 

    //ads.classList.remove('hide');
    //setTimeout(function(){ads.classList.add('enter-right');},2000);

    var minutes = 10;
    var now = new Date().getTime();
    var setupTime = localStorage.getItem('setupTime');
        if (setupTime == null) {
        localStorage.setItem('setupTime', now)
        } else {
            if(now-setupTime > minutes*60*1000) {
            //localStorage.removeItem('startMesseges');
            localStorage.clear()
            localStorage.setItem('setupTime', now);
            }
        } 
    };

function startCl(){
    setTimeout(function(){load.classList.add('hide');target.classList.remove('startupOn');target.classList.add('startupOff');},0);
    setTimeout(function(){target.classList.add('hide');target.classList.remove('startupOff');},500);
};

function closeAd(){
    ads.classList.remove('enter-right');
    ads.classList.add('exit-right');
    setTimeout(function(){ads.classList.add('hide');ads.classList.remove('exit-right');},3000);
}

//localStorage.removeItem("name of localStorage variable you want to remove");

function splay(){   //songpromotion
    var mainaud=document.getElementById('controlthebeat');
    var audio=document.getElementById('saud');
    var soaud=document.getElementById('songp');
    audio.play();
    mainaud.classList.add('startupOff');
    setTimeout(function(){soaud.classList.add('hide');},500);
}
