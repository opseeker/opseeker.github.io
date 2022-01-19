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

    var scr=document.getElementById('orientJS');
    scr.innerHTML='<div class="not-supported-orientation not-supported-orientation--visible">'+
    '<div class="not-supported-orientation__content">'+
                '<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTEuMjk0IiBoZWlnaHQ9Ijg2LjI2OSIgdmlld0JveD0iMCAwIDExMS4yOTQgODYuMjY5Ij48ZGVmcz48c3R5bGU+LmEsLmMsLmksLmosLmx7ZmlsbDpub25lO30uYSwuYiwuZiwuaSwuantzdHJva2U6I2Y4ZmFmYjt9LmEsLmJ7c3Ryb2tlLWRhc2hhcnJheToyIDI7fS5he29wYWNpdHk6MC41O30uYntmaWxsOiM3MDc0N2U7fS5je3N0cm9rZTojZmZmO30uYywuantzdHJva2UtbGluZWNhcDpyb3VuZDt9LmR7ZmlsbDojZmZmO30uZXtmaWxsOiMzOTQwNTA7fS5me2ZpbGw6IzRkNTI1ZTt9Lmd7ZmlsbDojYTBhNWI4O29wYWNpdHk6MC4yNzU7fS5oe2ZpbGw6I2Y4ZmFmYjt9Lmt7c3Ryb2tlOm5vbmU7fTwvc3R5bGU+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zODkgLTk0LjIzMSkiPjxnIGNsYXNzPSJhIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcxOSwgMC42OTUsIC0wLjY5NSwgMC43MTksIDQxOS4zMTQsIDEyMS45OTYpIj48cmVjdCBjbGFzcz0iayIgd2lkdGg9IjUxIiBoZWlnaHQ9IjMwIiByeD0iNSIvPjxyZWN0IGNsYXNzPSJsIiB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjI5IiByeD0iNC41Ii8+PC9nPjxnIGNsYXNzPSJiIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzODkgMTQ2KSI+PHJlY3QgY2xhc3M9ImsiIHdpZHRoPSI1MSIgaGVpZ2h0PSIzMCIgcng9IjUiLz48cmVjdCBjbGFzcz0ibCIgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI1MCIgaGVpZ2h0PSIyOSIgcng9IjQuNSIvPjwvZz48cGF0aCBjbGFzcz0iYyIgZD0iTTEwNzIuNzc0LDExODEuNzczcy0uNjQ2LTEwLjk1NiwxMC45NTYtMTAuOTU2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjQ5IC0xMDM5KSIvPjxwYXRoIGNsYXNzPSJkIiBkPSJNNCwwLDgsNS42SDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MzguNjAzIDEyNy41KSByb3RhdGUoOTApIi8+PHJlY3QgY2xhc3M9ImUiIHdpZHRoPSI2Ni4zMTIiIGhlaWdodD0iMzkuMDA3IiByeD0iMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDg4LjQwOCAxMTQuMTg4KSByb3RhdGUoOTApIi8+PGcgY2xhc3M9ImYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ4NC41MDcgMTA4LjMzNykgcm90YXRlKDkwKSI+PHJlY3QgY2xhc3M9ImsiIHdpZHRoPSI2Ni4zMTIiIGhlaWdodD0iMzkuMDA3IiByeD0iMyIvPjxyZWN0IGNsYXNzPSJsIiB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjY1LjMxMiIgaGVpZ2h0PSIzOC4wMDciIHJ4PSIyLjUiLz48L2c+PHJlY3QgY2xhc3M9ImciIHdpZHRoPSI1Mi41MjIiIGhlaWdodD0iMzEuMjA2IiByeD0iMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDgwLjYwNyAxMTIuNTIxKSByb3RhdGUoOTApIi8+PHJlY3QgY2xhc3M9ImgiIHdpZHRoPSIxMS43MDIiIGhlaWdodD0iMi42IiByeD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDU5LjE1MyAxNjguMTQ4KSIvPjxnIGNsYXNzPSJpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0ODAuNjA3IDExMi41MjEpIHJvdGF0ZSg5MCkiPjxyZWN0IGNsYXNzPSJrIiB3aWR0aD0iNTIuNTIyIiBoZWlnaHQ9IjMxLjIwNiIgcng9IjIiLz48cmVjdCBjbGFzcz0ibCIgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI1MS41MjIiIGhlaWdodD0iMzAuMjA2IiByeD0iMS41Ii8+PC9nPjxyZWN0IGNsYXNzPSJkIiB3aWR0aD0iMi42IiBoZWlnaHQ9IjMuOTAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NTUuMjUyIDEyOS4xNCkiLz48cmVjdCBjbGFzcz0iZCIgd2lkdGg9IjIuNiIgaGVpZ2h0PSIzLjkwMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDcyLjE1NSAxMjkuMTQpIi8+PHBhdGggY2xhc3M9ImMiIGQ9Ik0uMDA2LDEwLjdTLS42MjUsMCwxMC43LDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ2NS4wMDUgMTQ3LjM0NCkgcm90YXRlKC0xMzUpIi8+PHBhdGggY2xhc3M9ImoiIGQ9Ik0xMTM0LjEzMiwxMTU5LjM2MnYtNi44MjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTAuMTAzIC0xMDU3LjgwNSkiLz48cGF0aCBjbGFzcz0iaiIgZD0iTTAsNi44MjVWMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDkyLjk2OSAxMTAuNDk2KSByb3RhdGUoLTkwKSIvPjxwYXRoIGNsYXNzPSJqIiBkPSJNMCw2LjgyNVYwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0OTUuMTc3IDk5LjM0OSkgcm90YXRlKDQ1KSIvPjxwYXRoIGNsYXNzPSJpIiBkPSJNMTA3OC43ODcsMTIwOS45NjNsOC4xLDguMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY2OC44NzIgLTEwNTMuNzMyKSIvPjxwYXRoIGNsYXNzPSJpIiBkPSJNMTA3OC43ODcsMTIwOS45NjNsOC4xLDguMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgwMC4wNDcgMTI0My4xMTYpIHJvdGF0ZSgtOTApIi8+PC9nPjwvc3ZnPg==">'+
            '<div class="not-supported-orientation__text">'+
                'For an optimal experience use your mobile in Portrait (vertical) Mode.'+
            '</div>'+
        '</div>'+
    '</div>';

    orient();
};



