var menu_icon1 = document.getElementById('_menu-btn1');
var menu_icon2 = document.getElementById('_menu-btn2');
var menu=document.getElementById('_menuL');

// menu1 = sit ... menu2 = stand

window.onload = function() {
    menu_icon1.classList.add('hide');
    menu.classList.add('hide');
}

function click1(){
    menu_icon1.classList.add('hide');
    menu.classList.add('hide');
    menu_icon2.classList.remove('hide');
};

function click2(){
    menu_icon1.classList.remove('hide');
    menu.classList.remove('hide');
    menu_icon2.classList.add('hide');
};