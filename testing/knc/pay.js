window.onload = function(){
    var old_recharge_wallet= 0; //old amount -----------OLD------------

    var recharge_amount= 6600; //new req. amount---------RECHARGE Wallet--------------

    var old_recharge_total= 84090; //==============RECHARGE TOTAL====================

    var balance_wallet= 12055.56; //==============BALANCE WALLET======================

    var withdraw_total= 143050; //===========WITHDRAW TOTAL=========================
    
    var new_recharge_total=recharge_amount+old_recharge_wallet+old_recharge_total;
    document.getElementById("rechargeTotal").innerHTML= new_recharge_total;
    document.getElementById("rechargeWallet").innerHTML= recharge_amount;	
    document.getElementById("withdrawTotal").innerHTML= withdraw_total;
    document.getElementById("balanceWallet").innerHTML= balance_wallet;
}