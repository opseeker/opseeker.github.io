const 
toggleButton = document.getElementsByClassName('toggle-button')[0],
navbarLinks = document.getElementsByClassName('navbar-links')[0],
homeButton= document.getElementById('home-btn'),
home= document.getElementsByClassName('home')[0],
friendButton= document.getElementById('friend-btn'),
friendOptions= document.getElementsByClassName('dropdown')[0],
lc0="white",
lc1 = "rgb(22, 122, 189)",
lf1="1.4em",
lf0="1em"

addEventListener('click',()=>{
    // home
    if(home.classList.contains('active')){
        homeButton.style.color=lc1
        homeButton.style.fontSize=lf1
    }
    else {
        homeButton.style.color=lc0
        homeButton.style.fontSize=lf0
    }
})

homeButton.addEventListener('click',()=>{
    home.classList.add('active')
    friendOptions.classList.remove('active')
    navbarLinks.classList.remove('active')
    favList.classList.remove('active')
    resetListFav()
})

friendButton.addEventListener('click',()=>{
    friendOptions.classList.toggle('active')
    favList.classList.remove('active')  
    resetListFav()
})

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  resetListMenu()
  resetListFav()
})

const favButton=document.getElementById('fav-btn')
const mediaButton=document.getElementById('media-btn')
const otakuButton=document.getElementById('otaku-btn')
const favList=document.getElementsByClassName('dropdown-fav')[0]
const favMedia=document.getElementsByClassName('dropdown-favMedia')[0]
const favOtaku=document.getElementsByClassName('dropdown-webNovel')[0]

favButton.addEventListener('click',()=>{
    favList.classList.toggle('active')
    friendOptions.classList.remove('active')
    resetListFav()
})

mediaButton.addEventListener('click',()=>{
    favMedia.classList.toggle('active')
    favOtaku.classList.remove('active')
})

otakuButton.addEventListener('click',()=>{
    favOtaku.classList.toggle('active')
    favMedia.classList.remove('active')
})

function resetListFav(){
    if(!favList.classList.contains('active')){
        favMedia.classList.remove('active')
        favOtaku.classList.remove('active')
    }
}

function resetListMenu(){
    if(!navbarLinks.classList.contains('active')){
        friendOptions.classList.remove('active')
        favList.classList.remove('active')
    }
}

function outClick(){
    if(!window.onclick.classList.includes('navbar')){
        navbarLinks.classList.remove('active')
    }
}
