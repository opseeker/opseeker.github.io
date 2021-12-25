function menuOpen(){
    var menuBtn=document.getElementById("_i1");
    var body=document.getElementById("_mains");
    var table=document.getElementById("_table1");
    var gallery=document.getElementById("_gallery");
    if(menuBtn.classList.contains("on")){
        menuBtn.classList.remove("on");
        body.classList.remove("hide");
        table.classList.remove("hide");
        gallery.classList.add("hide");
    }
    else{
        menuBtn.classList.add("on");
        body.classList.add("hide");
        table.classList.add("hide");
        gallery.classList.remove("hide");
    }
}