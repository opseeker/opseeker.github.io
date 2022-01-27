const password= document.getElementsByClassName('passwordManager')[0],
body= document.getElementsByTagName('body')[0],
passForm= document.getElementsByClassName('form')[0],
navBar=document.getElementsByClassName('navbar')[0],
lightdark= document.getElementsByClassName('LightToggle-btn')[0],
menuButton= document.getElementsByClassName('menu-toggle')[0],
navLinks= document.getElementsByClassName('navbar-links')[0],
home =document.getElementsByClassName('home')[0],
dairy=document.getElementsByClassName('dairy')[0],
theme = document.getElementById('metaTheme')

function Login(){
    const a = ["pokor@123","Pokor@123","POKOR@123","BOBU@123","Bobu@123","bobu@123","whateverus","Whateverus","anime@21","otaku@21","manisaikia","23112021"]
    const e = [""," ","  ","    "]
    const i= document.getElementById('input').value;
    if (i==a[0]||i==a[1]||i==a[2]||i==a[3]||i==a[4]||i==a[5]||i==a[6]||i==a[7]||i==a[8]||i==a[9]||i==[10]||i==a[11]){
        body.classList.remove('passwordManager')
        passForm.classList.add('hide')
        navBar.classList.remove('hide')
        home.classList.remove('hide')
        if(i==a[0]||i==a[1]||i==a[2]){
            swal("Admin privilleges obtained!",";)","success")
            // unhide table contents and reserialize them
        }
    }
    else swal("error 003","Invalid password key!","error")
    if(i==e[0]||i==e[1]||i==e[2]||i==e[3]){
        swal("error 001","A password is required to access the contents of this page","warning")
    }
    if(i.length<8){
        swal("error 002","Password must be at least 8 characters!","warning")
    }
}

function clearField(){
    let i= document.getElementById('input');
    i.value=""
}

menuButton.addEventListener('click',()=>{
    navLinks.classList.toggle('active')
    themeChange()
})

function themeChange() {
    let color1='#333' //grey
    let color2='#cc0066' //pink
    home.classList.toggle('blurTheme')
    dairy.classList.toggle('blurTheme')
    if(theme.content==color1){
        if(Th==0){
         theme.content=color2
        }
        // home.classList.remove('blurTheme')
        // dairy.classList.remove('blurTheme')
     }
     else {
         theme.content=color1
        // home.classList.add('blurTheme')
        // dairy.classList.add('blurTheme')
         return Th=0
     }  
}

function logout() {
    window.location.reload()
}

function LightChange() {    
    if(lightdark.classList.contains('active')){
        lightdark.classList.remove('active')
        home.classList.remove('darkTheme')
        dairy.classList.remove('darkTheme')
        return Th=0
    }
    else {
        theme.content=='#333'
        lightdark.classList.add('active')
        home.classList.add('darkTheme')
        dairy.classList.add('darkTheme')
        return Th=1
    }
}