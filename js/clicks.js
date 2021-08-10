/* javascriptt author ankit*/

var menu=document.getElementById('menu-content');
var menubtn=document.getElementById('menu-nav');

function menuH(){
    menu.classList.remove('menu-enter');
    menu.classList.add('menu-exit');
    setTimeout(function(){menu.classList.add('hide');},300);
};
function menut(){
    menu.classList.remove('hide');
    menu.classList.add('menu-enter');
    menu.classList.remove('menu-exit');
    //menu.classList.toggle('hide');
    //setTimeout(function(){menuH();},5000);
};

function mode(){document.body.classList.toggle('dark-mode');}
/*
    var menu=document.getElementById('menu-content');
    var l0=document.getElementById('home');
    var l1=document.getElementById('vlink1');
    var l2=document.getElementById('vlink2');
    var l3=document.getElementById('vlink3');
    var l4=document.getElementById('vlink4');
    var l5=document.getElementById('vlink5');
    var table=document.getElementById('detailed');
    var ic=document.getElementById('comingsoon');
    function menuH(){
        menu.classList.add('hide');
    };
    function menut(){
        menu.classList.toggle('hide');
        setTimeout(function(){menuH();},4000);
    };
    function home() {
        menu.classList.add('hide');
        l0.style.display="block";
        l1.style.display="none";
        l2.style.display="none";
        l3.style.display="none";
        l4.style.display="none";
        l5.style.display="none";
        table.style.display="none"
        ic.style.display="none";
    };
    function vlink1(){
        menu.classList.add('hide');
        l0.style.display="none";
        l1.style.display="block";
        l2.style.display="none";
        l3.style.display="none";
        l4.style.display="none";
        l5.style.display="none";
        table.style.display="none";
        ic.style.display="block";
    };
    function vlink2(){
        menu.classList.add('hide');
        l0.style.display="none";
        l1.style.display="none";
        l2.style.display="block";
        l3.style.display="none";
        l4.style.display="none";
        l5.style.display="none";
        table.style.display="none";
        ic.style.display="none";
    };
    function vlink3(){
        menu.classList.add('hide');
        l0.style.display="none";
        l1.style.display="none";
        l2.style.display="none";
        l3.style.display="block";
        l4.style.display="none";
        l5.style.display="none";
        table.style.display="none";
        ic.style.display="none";
    };
    function vlink4(){
        menu.classList.add('hide');
        l0.style.display="none";
        l1.style.display="none";
        l2.style.display="none";
        l3.style.display="none";
        l4.style.display="block";
        l5.style.display="none";
        table.style.display="none";
        ic.style.display="block";
    };
    function vlink5(){
        menu.classList.add('hide');
        l0.style.display="none";
        l1.style.display="none";
        l2.style.display="none";
        l3.style.display="none";
        l4.style.display="none";
        l5.style.display="block";
        table.style.display="none";
        ic.style.display="block";
    };
    function tablelink(){
        menu.classList.add('hide');
        l0.style.display="none";
        l1.style.display="none";
        l2.style.display="none";
        l3.style.display="none";
        l4.style.display="none";
        l5.style.display="none";
        table.style.display="block";
        ic.style.display="none";
    };

    function showall(){
        d1();
        d2();
    }
    function showallt2(){
        d3();
        d4();
    }
    function tablejuly(){
        var head = document.getElementById("tablejulyh");
        var content = document.getElementById("tablejuly");
        head.classList.toggle('hide');
        content.classList.toggle('hide');
    }
*/    
/*
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
*/

function goBack(){
    window.history.back();
};