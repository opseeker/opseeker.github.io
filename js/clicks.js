/* javascriptt author ankit*/

var menu=document.getElementById('menu-content');
var menubtn=document.getElementById('menu-nav');

function menuH(){
    menu.classList.remove('menu-enter');
    menu.classList.add('menu-exit');
    setTimeout(function(){menu.classList.add('hide');},300);
};
function menut(){
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