var num=document.getElementById('version');
var target=document.getElementById('startup');

onload=function() {
    num.innerHTML=('080421')
    setTimeout(function(){target.classList.remove('hide');target.classList.add('startupOn')},4000);
};

function startCl(){
    setTimeout(function(){target.classList.add('startupOff');},0);
    setTimeout(function(){target.classList.add('hide');},4000);
}
