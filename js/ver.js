var num=document.getElementById('version');
var target=document.getElementById('startup');
var load=document.getElementById('loader');
onload=function() {
    num.innerHTML=('080521');
    load.classList.remove('hide');
    load.classList.add('login');
    setTimeout(function(){load.classList.add('logout');load.classList.add('hide');},900);
    setTimeout(function(){target.classList.remove('hide');target.classList.add('startupOn')},4000);
};

function startCl(){
    setTimeout(function(){target.classList.add('startupOff');},0);
    setTimeout(function(){target.classList.add('hide');},4000);
}

