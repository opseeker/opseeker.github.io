// <!DOCTYPE html>
// <head>
//     <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
//     <meta lang="en" />
//     <meta property="og:title" content="Love"/>
//     <meta property="og:description" content=""/>
//     <meta property="og:site" content=""/>
//     <meta http-equiv="x-ua-compatible" content="ie=edge">
//     <meta name="mobile-web-app-capable" content="yes">
//     <meta name="apple-mobile-web-app-capable" content="yes">
//     <meta name="apple-mobile-web-app-title" content="Ankit Saikia">
//     <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
//     <meta name="application-name" content="Ankit Saikia">
//     <meta name='theme-color' content="white" />
//     <!-- link relations -->
//     <script src='asset/js/detail.js' preload="true"></script>
//     <link rel="manifest" href="manifest.json"/>
//     <link rel="shortcut icon" href="asset/icon/heart.png" />
//     <link rel='stylesheet' href='asset/css/user.css' />
//     <link rel='stylesheet' href='asset/css/table.css' />
//     <link rel='stylesheet' href='asset/css/base.css' />
//     <script src='asset/js/control.js'></script>
//     <script src='asset/js/scroll.js'></script>
//     <title>Love you Mani | updated: 08/01/2022</title>
//     <script src="asset/js/swAl.js"></script>
//     <style>html{overflow:hidden}</style>
// </head>
// <div id="scroller" style="height:100%;width:100%;overflow-Y:scroll;position:fixed;-webkit-overflow-scrolling:touch;">
// <!-- <section id="_passwordE"><div class="bg-cover"></div><form action="javascript:loginSuccess()"><label>PASSWORD</label><input type="password" placeholder="Enter your password" id="t1"><button type="button" onclick="loginSuccess()">ENTER</button></form></section> -->
// <section id="_body0" class="hide">
//     <div class='navigation top'>
//         <div class='menu-btn'>
//         </div>
//     </div>

//     <div class='top-po'>
//         <div class='top'>
//             <p>Since 23-Nov-2021</p>
//             <span></span>
//         </div>
//     </div>
//     <div class='clearfix'></div>
//     <div class='s1' id="_mains">
//         <div class='profile-1 reveal-l'>
//             <!--ankit saikia-->
//             <div class='profile-img rotate_right polaroid'>
//                 <img id='profileAni'>
//                 <div id='_aniD'></div>
//             </div>
//         </div>
//         <div class='profile-2 reveal-r'>
//             <!--manisha adhikari-->
//             <div class='profile-img rotate_left polaroid'>
//                 <img id='profileMani'>
//                 <div id='_maniD'></div>
//             </div>
//         </div>
//     </div>
//     <div><a href='javascript:menuOpen()' id='_i1' class=""><i></i><span></span></a></div>
//     <div class='detail-date' id='_table1'></div>

//     <div class="gallery hide" id="_gallery"></div>
// </section>
// </div>
// <!-- <button id="scrollTopBtn" title="Scroll to Top" type=button class="btn btn-success">&#9650;</button> -->

// <!-- <div class="not-supported-orientation not-supported-orientation--visible">
//     <div class="not-supported-orientation__content">
//         <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTEuMjk0IiBoZWlnaHQ9Ijg2LjI2OSIgdmlld0JveD0iMCAwIDExMS4yOTQgODYuMjY5Ij48ZGVmcz48c3R5bGU+LmEsLmMsLmksLmosLmx7ZmlsbDpub25lO30uYSwuYiwuZiwuaSwuantzdHJva2U6I2Y4ZmFmYjt9LmEsLmJ7c3Ryb2tlLWRhc2hhcnJheToyIDI7fS5he29wYWNpdHk6MC41O30uYntmaWxsOiM3MDc0N2U7fS5je3N0cm9rZTojZmZmO30uYywuantzdHJva2UtbGluZWNhcDpyb3VuZDt9LmR7ZmlsbDojZmZmO30uZXtmaWxsOiMzOTQwNTA7fS5me2ZpbGw6IzRkNTI1ZTt9Lmd7ZmlsbDojYTBhNWI4O29wYWNpdHk6MC4yNzU7fS5oe2ZpbGw6I2Y4ZmFmYjt9Lmt7c3Ryb2tlOm5vbmU7fTwvc3R5bGU+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zODkgLTk0LjIzMSkiPjxnIGNsYXNzPSJhIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcxOSwgMC42OTUsIC0wLjY5NSwgMC43MTksIDQxOS4zMTQsIDEyMS45OTYpIj48cmVjdCBjbGFzcz0iayIgd2lkdGg9IjUxIiBoZWlnaHQ9IjMwIiByeD0iNSIvPjxyZWN0IGNsYXNzPSJsIiB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjI5IiByeD0iNC41Ii8+PC9nPjxnIGNsYXNzPSJiIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzODkgMTQ2KSI+PHJlY3QgY2xhc3M9ImsiIHdpZHRoPSI1MSIgaGVpZ2h0PSIzMCIgcng9IjUiLz48cmVjdCBjbGFzcz0ibCIgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI1MCIgaGVpZ2h0PSIyOSIgcng9IjQuNSIvPjwvZz48cGF0aCBjbGFzcz0iYyIgZD0iTTEwNzIuNzc0LDExODEuNzczcy0uNjQ2LTEwLjk1NiwxMC45NTYtMTAuOTU2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjQ5IC0xMDM5KSIvPjxwYXRoIGNsYXNzPSJkIiBkPSJNNCwwLDgsNS42SDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MzguNjAzIDEyNy41KSByb3RhdGUoOTApIi8+PHJlY3QgY2xhc3M9ImUiIHdpZHRoPSI2Ni4zMTIiIGhlaWdodD0iMzkuMDA3IiByeD0iMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDg4LjQwOCAxMTQuMTg4KSByb3RhdGUoOTApIi8+PGcgY2xhc3M9ImYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ4NC41MDcgMTA4LjMzNykgcm90YXRlKDkwKSI+PHJlY3QgY2xhc3M9ImsiIHdpZHRoPSI2Ni4zMTIiIGhlaWdodD0iMzkuMDA3IiByeD0iMyIvPjxyZWN0IGNsYXNzPSJsIiB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjY1LjMxMiIgaGVpZ2h0PSIzOC4wMDciIHJ4PSIyLjUiLz48L2c+PHJlY3QgY2xhc3M9ImciIHdpZHRoPSI1Mi41MjIiIGhlaWdodD0iMzEuMjA2IiByeD0iMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDgwLjYwNyAxMTIuNTIxKSByb3RhdGUoOTApIi8+PHJlY3QgY2xhc3M9ImgiIHdpZHRoPSIxMS43MDIiIGhlaWdodD0iMi42IiByeD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDU5LjE1MyAxNjguMTQ4KSIvPjxnIGNsYXNzPSJpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0ODAuNjA3IDExMi41MjEpIHJvdGF0ZSg5MCkiPjxyZWN0IGNsYXNzPSJrIiB3aWR0aD0iNTIuNTIyIiBoZWlnaHQ9IjMxLjIwNiIgcng9IjIiLz48cmVjdCBjbGFzcz0ibCIgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI1MS41MjIiIGhlaWdodD0iMzAuMjA2IiByeD0iMS41Ii8+PC9nPjxyZWN0IGNsYXNzPSJkIiB3aWR0aD0iMi42IiBoZWlnaHQ9IjMuOTAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NTUuMjUyIDEyOS4xNCkiLz48cmVjdCBjbGFzcz0iZCIgd2lkdGg9IjIuNiIgaGVpZ2h0PSIzLjkwMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDcyLjE1NSAxMjkuMTQpIi8+PHBhdGggY2xhc3M9ImMiIGQ9Ik0uMDA2LDEwLjdTLS42MjUsMCwxMC43LDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ2NS4wMDUgMTQ3LjM0NCkgcm90YXRlKC0xMzUpIi8+PHBhdGggY2xhc3M9ImoiIGQ9Ik0xMTM0LjEzMiwxMTU5LjM2MnYtNi44MjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTAuMTAzIC0xMDU3LjgwNSkiLz48cGF0aCBjbGFzcz0iaiIgZD0iTTAsNi44MjVWMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDkyLjk2OSAxMTAuNDk2KSByb3RhdGUoLTkwKSIvPjxwYXRoIGNsYXNzPSJqIiBkPSJNMCw2LjgyNVYwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0OTUuMTc3IDk5LjM0OSkgcm90YXRlKDQ1KSIvPjxwYXRoIGNsYXNzPSJpIiBkPSJNMTA3OC43ODcsMTIwOS45NjNsOC4xLDguMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY2OC44NzIgLTEwNTMuNzMyKSIvPjxwYXRoIGNsYXNzPSJpIiBkPSJNMTA3OC43ODcsMTIwOS45NjNsOC4xLDguMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgwMC4wNDcgMTI0My4xMTYpIHJvdGF0ZSgtOTApIi8+PC9nPjwvc3ZnPg==">
//         <div class="not-supported-orientation__text">
//             For an optimal experience use your mobile in Portrait (vertical) Mode.
//         </div>
//     </div>
// </div> -->
// <section id="orientJS" class=""></section>
