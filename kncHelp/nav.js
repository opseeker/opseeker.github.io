// self directory onload function..
window.onload = function () {
    var node = document.getElementById("_node");
    node.innerHTML = '<ul><li class = "on" ><a href = "javascript:GoHome()"class = "nav-home" ><i> </i><span> Home </span></a></li><li><a href = "javascript:Device()" class = "nav-device" ><i></i><span> Machine </span></a></li><li><a href = "javascript:Wallet()" class = "nav-wallet" ><i></i><span> Wallet </span></a></li><li><a href = "javascript:Personal()" class = "nav-personal" ><i></i><span> Personal </span></a></li></ul>';
}

function gettingstarted () {
    // var console=document.getElementById("_console");
    // console.innerHTML='<p>alsa</p>';
    var get1=document.getElementById('_console.gettingstarted');

        get1.classList.remove('hide')
}


