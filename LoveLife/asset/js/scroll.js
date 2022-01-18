window.addEventListener("scroll", reveal);
window.addEventListener("scroll", goLeft);
window.addEventListener("scroll", goRight);

var windowHeight = window.innerHeight;

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var elementTop = reveals[i].getBoundingClientRect().top,
        elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function goLeft() {
    var item=document.querySelectorAll(".goLeft");

    for (var i = 0; i < item.length; i++) {
        var elementTop = item[i].getBoundingClientRect().top,
        elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
            item[i].classList.add("active");
        }
        else {
            item[i].classList.remove("active");
        }
    }
}

function goRight() {
    var item=document.querySelectorAll(".goRight");

    for (var i = 0; i < item.length; i++) {
        var elementTop = item[i].getBoundingClientRect().top,
        elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
            item[i].classList.add("active");
        }
        else {
            item[i].classList.remove("active");
        }
    }
}

var pwd="pokor@123",pwd1="Pokor@123",pwd2="POKOR@123",
pwd3="bobu@123",pwd4="Bobu@123",pwd9="whateverus",pwd10="Whateverus",
pwd5="anime@21",pwd6="otaku@21",pwd7="manisaikia",pwd8="23112021";

function loginSuccess(){
    var input=document.getElementById("t1").value;
    if(input==pwd || input==pwd1 || input==pwd2 || input==pwd3 || input==pwd4 || input==pwd5 || input==pwd6 || input==pwd7 || input==pwd8 || input==pwd9 || input==pwd10){
        document.getElementById("_body0").classList.remove("hide");
        document.getElementById("_passwordE").classList.add("hide");
        tabOnline();
        adminCame();
    }
    else
        error1();   
}

//table hidden conttent secure
function tabOnline(){
    var input=document.getElementById("t1").value;
    if(input==pwd || input==pwd1 || input==pwd2 || input==pwd8){
        document.getElementById("tab8").classList.remove("hide");
        document.getElementById("tab10").classList.remove("hide");
        document.getElementById("tab11").classList.remove("hide");
    }
    else {
        document.getElementById("tab8").classList.add("hide");
        document.getElementById("tab10").classList.add("hide");
        document.getElementById("tab11").classList.add("hide");
    }
}

//empty password error
function error1(){
    var input=document.getElementById("t1").value,
    a="",b=" ",c="   ",d="  ",e="        ";
    if(input==a||input==b||input==c||input==d||input==e)
    swal("MESSEGE","Password is required to login","warning");
    else
    error3();
}

//wrong password
function error2() {
    // var input=document.getElementById("t1").value;
    swal("MESSEGE","Invalid Password","error");
}

//at least 8 char
function error3() {
    var input=document.getElementById("t1").value;
    if(input.length<8)
    swal("MESSEGE","Password must be at least 8 characters","error");
    else
    error2();
}

//admin entry
function adminCame(){
    var input=document.getElementById("t1").value;
    if(input==pwd||input==pwd1||input==pwd2||input==pwd6)
    swal("MESSEGE","You have entered with the main password and all the contents are visible.","success");
}

// e(window).scroll(function(){
//     e(this).scrollTop()>200?e("#scrollTopBtn").stop().fadeIn():e("#scrollTopBtn").stop().fadeOut()
// }),
// e("#scrollTopBtn").click(function(){
//     return e("html, body").animate({scrollTop:0},600),!1});