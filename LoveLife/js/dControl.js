const
d1=document.getElementsByClassName('d1')[0],
d2=document.getElementsByClassName('d2')[0],
d3=document.getElementsByClassName('d3')[0],
d4=document.getElementsByClassName('d4')[0],
nextButton=document.getElementById('nextBtn'),
prevButton=document.getElementById('prevBtn');
let maximumLimit=4; //maximum limit...

//current page variable
var page = 1;

//increment
const handleIncrement=()=>{
    page++;
    logic();
}

//decrement
const handleDecrement=()=>{
    page--;
    logic();
}

prevButton.addEventListener("click",handleDecrement);
nextButton.addEventListener("click",handleIncrement);

//logical calc
const logic=()=>{
    if(page>maximumLimit){
        page=maximumLimit;
        swal("Coming sOOn","More contents coming soon, wait for the upload.")
    }
    if(page<1){
        page=1;
        swal("❄No content...❄","No more content available before this date.")
    }

    if(page==1){
        d1.classList.add("active")
        d2.classList.remove("active")
        d3.classList.remove("active")
        d4.classList.remove("active")
    } 
    if(page==2){
        d1.classList.remove("active")
        d2.classList.add('active')
        d3.classList.remove("active")
        d4.classList.remove("active")
    }
    if(page==3){
        d1.classList.remove("active")
        d2.classList.remove("active")
        d3.classList.add('active')
        d4.classList.remove("active")
    }
    if(page==4){
        d1.classList.remove("active")
        d2.classList.remove("active")
        d3.classList.remove("active")
        d4.classList.add('active')
    }
    n();
}

const p=document.getElementById('pgNum');
const n=()=>{
    p.innerHTML=(page + "/" + maximumLimit);
}

const sm=document.getElementsByClassName('short-menu')[0];
const d=()=>{
    sm.classList.toggle('hide');
}

p.addEventListener('click',()=>{
    d();
})

window.onload=()=>{n();}

const p1=()=>{page=1;logic();d()}
const p2=()=>{page=2;logic();d()}
const p3=()=>{page=3;logic();d()}
const p4=()=>{page=4;logic();d()}