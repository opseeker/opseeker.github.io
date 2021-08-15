var menu=document.getElementById('menu-content');
var menubtn=document.getElementById('menu-nav');
var i1=document.getElementById('ico1');
var i2=document.getElementById('ico2');
var s1=document.getElementById('vlink4');
var hm=document.getElementById('_manhwa');
var hmc=document.getElementById('_manhwa-c');

function manhwa() {
    s1.classList.add('hide');
    hm.classList.add('hide');
    //hmc.classList.remove('hide');
}

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
};

function mode(){document.body.classList.toggle('dark-mode');}

function goBack(){
    window.history.back();
};