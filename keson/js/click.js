var menu = document.getElementById('_menu');
var btn1 = document.getElementById('_ico1');
var btn2 = document.getElementById('_ico2');

function menuEn(){
    btn1.classList.add('hide');
    btn2.classList.remove('hide');
    menu.classList.remove('hide');
    menu.classList.remove('menu-exit');
    menu.classList.add('menu-enter');
}

function menuEx () {
    btn1.classList.remove('hide');
    btn2.classList.add('hide');
    menu.classList.remove('menu-enter');
    menu.classList.add('menu-exit');
    setTimeout(function(){menu.classList.add('hide');},600);
}