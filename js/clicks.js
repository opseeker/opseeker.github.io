/* javascriptt author ankit*/

var menu=document.getElementById('menu-content');
var menubtn=document.getElementById('menu-nav');
var i1=document.getElementById('ico1');
var i2=document.getElementById('ico2');


function menuH(){
    i1.classList.remove('hide');
    i2.classList.add('hide');
    menu.classList.remove('menu-enter');
    menu.classList.add('menu-exit');
    setTimeout(function(){menu.classList.add('hide');},300);
};
function menut(){
    i1.classList.add('hide');
    i2.classList.remove('hide');
    menu.classList.remove('hide');
    menu.classList.add('menu-enter');
    menu.classList.remove('menu-exit');
    //menu.classList.toggle('hide');
    //setTimeout(function(){menuH();},5000);
};

function mode(){document.body.classList.toggle('dark-mode');}

function goBack(){
    window.history.back();
};