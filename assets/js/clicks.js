// click javascript
var menu=document.getElementById('menu-content');
var menubtn=document.getElementById('menu-nav');
var i1=document.getElementById('ico1');
var i2=document.getElementById('ico2');
var s1=document.getElementById('vlink4');
var hm=document.getElementById('_manhwa');
var hmc=document.getElementById('_manhwa-c');
var scr=document.getElementById('_mains');
var y=document.getElementById('body');

function manhwa() {
    s1.classList.add('hide');
    hm.classList.add('hide');
    //hmc.classList.remove('hide');
}

/*------------------------------------------------------MENU-EXIT*/
function menuH(){
    i1.classList.remove('hide');
    i2.classList.add('hide');
    menu.classList.remove('menu-enter');
    menu.classList.add('menu-exit');
    y.classList.remove('hide');
    y.classList.remove('startupOff');
    setTimeout(function(){menu.classList.add('hide');},500);
};
/*----------------------------------------------------MENU-TOGGLE */
function menut(){
    i1.classList.add('hide');
    i2.classList.remove('hide');
    y.classList.add('startupOff');
    setTimeout(function(){y.classList.add('hide');},300);
    menu.classList.remove('hide');
    menu.classList.add('menu-enter');
    menu.classList.remove('menu-exit');
};

/*-----------------------------------------------DARK-MODE-TOGGLE */
function mode(){y.classList.toggle('dark-mode');}

/*-----------------------BROESER-HISTORY-GO-BACK-TO-PREVIOUS-PAGE */
function goBack(){
    window.history.back();
};