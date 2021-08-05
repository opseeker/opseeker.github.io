var num=document.getElementById('version');
var target=document.getElementById('startup');
var load=document.getElementById('loader');

onload=function() {
    num.innerHTML=('080521');
    load.classList.remove('hide');
    setTimeout(function(){load.classList.add('logout');},1000);
    setTimeout(function(){target.classList.remove('hide');target.classList.add('startupOn')},1550);
    setTimeout(function(){load.classList.add('hide');},2000);
};

function startCl(){
    setTimeout(function(){load.classList.add('hide');target.classList.remove('startupOn');target.classList.add('startupOff');},0);
    setTimeout(function(){target.classList.add('hide');target.classList.remove('startupOff');},500);
};