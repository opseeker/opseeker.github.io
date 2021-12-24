function menuOpen(){
    var menuBtn=document.getElementById("_i1");
    if(menuBtn.classList.contains("on")){
        menuBtn.classList.remove("on");
    }
    else{
        menuBtn.classList.add("on");
    }
}