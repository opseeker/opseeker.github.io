// click js

// global variables
var ho = document.getElementById('_home');
var pb = document.getElementById('_postbox');

//onload function @start
onload = function() {
    pb.style.display = 'none';
}

function pbox_show(){    
    if(pb.style.display == 'none'){
        pb.style.display = 'block';
        ho.style.display = 'none';
    }
    else {
        pb.style.display = 'none';
        ho.style.display = 'block';

    }
}