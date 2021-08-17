var menu=document.getElementById('menu-content');
var nav=document.getElementById('navigation');


function goBack(){
    window.history.back();
};

function mode(){
    document.classList.toggle('dark-mode');
};

function menuH(){
    menu.classList.add('hide');
};

function menut(){
    menu.classList.toggle('hide');
};