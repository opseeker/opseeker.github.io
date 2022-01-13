window.onload=function(){
    var 
    a=document.getElementById('_table1'), 
    b=document.getElementById('_aniD'), 
    c=document.getElementById('_maniD');

    a.innerHTML=
        '<table><thead><tr><th scope="col" colspan="3">Detailed Info on our first time things together</th></tr><tr><th></th></tr><tr><th> </th>'
        +'<th scope="col">First</th><th scope="col">Date</th></tr></thead><tbody>'
        +'<tr id="tab1"><th scope="row">1</th><td class="tm">Call</td><td class="tn">09-Oct-2021</td></tr>'
        +'<tr id="tab2"><th scope="row">2</th><td class="tm">Messege</td><td class="tn">09-Oct-2021</td></tr>'
        +'<tr id="tab3"><th scope="row">3</th><td class="tm">Meeting</td><td class="tn">14-Oct-2021</td></tr>'
        +'<tr id="tab4"><th scope="row">4</th><td class="tm">Meal</td><td class="tn">17-Oct-2021</td></tr>'
        +'<tr id="tab5"><th scope="row">5</th><td class="tm">Travel</td><td class="tn">23-Oct-2021</td></tr>'
        +'<tr id="tab6"><th scope="row">6</th><td class="tm">Date (surprise)</td><td class="tn">23-Nov-2021</td></tr>'
        +'<tr id="tab7"><th scope="row">7</th><td class="tm">Date</td><td class="tn">05-Dec-2021</td></tr>'
        +'<tr id="tab8"><th scope="row">8</th><td class="tm">Kiss</td><td class="tn">05-Dec-2021</td></tr>'
        +'<tr id="tab9"><th scope="row">9</th><td class="tm">Hug</td><td class="tn">23-Dec-2021</td></tr>'
        +'<tr id="tab10"><th scope="row">10</th><td class="tm">Mouth Feeding</td><td class="tn">02-Jan-2022</td></tr>'
        +'<tr id="tab11"><th scope="row">11</th><td class="tm">Lick Kiss</td><td class="tn">02-Jan-2021</td></tr>'
        +'</tbody></table>';
   
    b.innerHTML='<p>Ankit Saikia</p><p>D.O.B: 11-May-2002</p><p>BCA</p><p>C.T. College</p><p>Tinsukia</p><p>Home addr: Sadiya, Chapakhowa, Lakhimipather</p>';
    c.innerHTML='<p>Manisha Adhkari</p><p>D.O.B: 28-Mar-2002</p><p>BSC</p><p>Digboi College</p><p>Digboi</p><p>Home addr: Sadiya, Chapakhowa, Marwaripatti</p>';

    document.getElementById('profileAni').src='asset/media/img/me.jpg';
    document.getElementById('profileMani').src='asset/media/img/mani.jpg';
}


