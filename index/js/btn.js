var menu=document.getElementById('_menuL');
var menu_icon1 = document.getElementById('_menu-btn1');
var menu_icon2 = document.getElementById('_menu-btn2');
var musicico1= document.getElementById('_musicBtn1');
var musicico2= document.getElementById('_musicBtn2');
var aud_btn= document.getElementById('_audio_prompt');
var music= document.getElementById('_startup_audio');
var ani= document.getElementById('_anime');
var gallery=document.getElementById('_gallery');

// menu1 = sit ... menu2 = stand
window.onload = function() {
    menu_icon1.classList.add('hide');
    menu.classList.add('hide');
    musicico2.classList.add('hide');
    ani.classList.add('hide');
    gallery.classList.add('hide');
}

function menu_close(){
    menu.classList.add('hide');
    menu_icon1.classList.add('hide');
    menu_icon2.classList.remove('hide');
}

// initial menu button
function click1(){
    menu_icon1.classList.add('hide');
    menu.classList.add('hide');
    // ani.classList.add('hide'); 
    menu_icon2.classList.remove('hide');
};

// menu after click button
function click2(){
    menu_icon1.classList.remove('hide');
    // ani.classList.add('hide'); 
    menu.classList.remove('hide');
    menu_icon2.classList.add('hide');
};

// music play button
function click3(){
    music.play();
    setTimeout(function(){musicico1.classList.add('hide');},500);
    musicico2.classList.remove('hide');
}

// music pause button
function click4(){
    music.pause();
    setTimeout(function(){musicico2.classList.add('hide');},500);
    musicico1.classList.remove('hide');
}

// home button clicks... closes all windows and goes back to the homepage
function click5(){
    ani.classList.add('hide');
    gallery.classList.add('hide');
    click1();
}

// gallery btn
function click6(){
    ani.classList.add('hide');
    click1();
    gallery.classList.remove('hide');
}

// anime list page opening button
function anime(){
    ani.classList.remove('hide');
    gallery.classList.add('hide');
    menu_close();
}
