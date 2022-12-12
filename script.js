let navEl = document.querySelector('.navbar');
let logoEl = document.querySelector('.logo-header')
let navlinkEl = document.querySelectorAll('.nav-link');
let menuLength = navlinkEl.length;
let activePage = location.href;


window.addEventListener('scroll',()=>{
    if(window.scrollY > 300){
        navEl.classList.add('navbar-scrolled');
        logoEl.classList.remove('logo-header');
    }else{
        navEl.classList.remove('navbar-scrolled');
        logoEl.classList.add('logo-header');
    }
});

/* quand on est sur la page accueil navlink active
quand on sort de la page accueil navlink remove active*/
for(let i = 0; i< menuLength; i++){
    if(navlinkEl[i].href === activePage){
        navlinkEl[i].classList.add('active');
    }else{
        navlinkEl[i].classList.remove('active');
    }
}