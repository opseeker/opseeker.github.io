var num=document.getElementById('version');
var target=document.getElementById('startup');
var load=document.getElementById('loader');

window.onload=function() {
    if(!localStorage.getItem('startMesseges')){
        load.classList.remove('hide');
        setTimeout(function(){load.classList.add('logout');},1000);
        setTimeout(function(){target.classList.remove('hide');target.classList.add('startupOn')},1550);
        setTimeout(function(){load.classList.add('hide');},2000);
        localStorage.setItem("startMesseges", "true");
    }
    num.innerHTML=('080521');   
    
    var hours = 1; // to clear the localStorage after 1 hour(if someone want to clear after 8hrs simply change hours=8)
    var now = new Date().getTime();
    var setupTime = localStorage.getItem('setupTime');
        if (setupTime == null) {
        localStorage.setItem('setupTime', now)
        } else {
            if(now-setupTime > hours*60*60*1000) {
            localStorage.clear()
            localStorage.setItem('setupTime', now);
            }
        } 
    };

function startCl(){
    setTimeout(function(){load.classList.add('hide');target.classList.remove('startupOn');target.classList.add('startupOff');},0);
    setTimeout(function(){target.classList.add('hide');target.classList.remove('startupOff');},500);
};

//localStorage.removeItem("name of localStorage variable you want to remove");

