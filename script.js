let navEl = document.querySelector('.navbar');
let logoEl = document.querySelector('.logo-header')

window.addEventListener('scroll',()=>{
    if(window.scrollY > 300){
        navEl.classList.add('navbar-scrolled');
        logoEl.classList.remove('logo-header')
    }else{
        navEl.classList.remove('navbar-scrolled');
        logoEl.classList.add('logo-header')
    }
});