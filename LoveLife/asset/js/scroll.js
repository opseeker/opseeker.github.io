window.addEventListener("scroll", reveal);
window.addEventListener("scroll", goLeft);
window.addEventListener("scroll", goRight);

var windowHeight = window.innerHeight;

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;

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
        var elementTop = item[i].getBoundingClientRect().top;
        var elementVisible = 50;

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
        var elementTop = item[i].getBoundingClientRect().top;
        var elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
            item[i].classList.add("active");
        }
        else {
            item[i].classList.remove("active");
        }
    }
}

function loginSuccess(){
    var res;
    var pwd="pass@123";
    var input=document.getElementById("t1").value;
    // if (str.match(/[a-z]/g) && str.match(/[A-Z]/g) && str.match(/[0-9]/g) && str.match(/[^a-zA-Z\d]/g) && str.length >= 3)
    //     res = "TRUE";
    // else
    //     res = "FALSE";
    if(input==pwd){
        document.getElementById("_body0").classList.remove("hide");
        document.getElementById("_passwordE").classList.add("hide")
    }
    else
        void(0);
    // document.getElementById("t2").value = res;
}

