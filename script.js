let navEl = document.querySelector('.navbar');
let logoEl = document.querySelector('.logo-header')
let navlinkEl = document.querySelectorAll('.nav-link');
let menuLength = navlinkEl.length;
let activePage = location.href;
let images = document.querySelectorAll('#gallery img');
let filters= document.querySelectorAll('#filters button');

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

/* filtre galerie*/
window.addEventListener('load',()=>{
    
    for(let filter of filters){
        filter.addEventListener('click', function(){
            let tag = this.id;
            for(let image of images){
                image.classList.replace('active', 'inactive');
                if(tag in image.dataset || tag === 'all'){
                    image.classList.replace('inactive', 'active');
                }
            }
        })
    }
});
