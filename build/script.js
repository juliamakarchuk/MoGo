let menu = document.querySelector('.menu');
let statusMenuBlock = document.querySelector('.status-menu');
console.log(statusMenuBlock);
let showBtn = document.querySelector('.status-menu__icon--hidden');
let hideBtn = document.querySelector('.status-menu__icon--show');

function toggleMenu(){
   menu.classList.toggle('menu--show');
   if(menu.classList.contains('menu--show')){
       hideBtn.style.display = 'block';
       showBtn.style.display= 'none';
   } else{
    hideBtn.style.display = 'none';
    showBtn.style.display= 'block';
   }
}
statusMenuBlock.addEventListener('click' ,toggleMenu);


////////FIXED MENU/////////////
let navigation = document.querySelector('.navigation');
let header = document.querySelector('.header');
const navCoords = header.getBoundingClientRect();
let aboutBlock = document.querySelector('.about');
console.log(navigation.getBoundingClientRect());
function fixedMenu(){
    if(pageYOffset>=navCoords.bottom-navigation.offsetHeight&&navigation.getBoundingClientRect().width>=768){
         navigation.classList.add('navigation-fixed');
         header.classList.remove('container');
         aboutBlock.style.paddingTop = 8+ 'rem';
    }
    else{
        navigation.classList.remove('navigation-fixed');
        header.classList.add('container');
        aboutBlock.style.paddingTop = 3+'rem';
    }
}

window.addEventListener('scroll',fixedMenu);

////////////NAVIGATION////////////
function navigationMenu(e){
    if(e.target.nodeName='A'){
        e.preventDefault();
        let href= e.target.getAttribute('href');
        let el = document.querySelector(href);
        let top= el.getBoundingClientRect().top+window.pageYOffset-navigation.offsetHeight;
        setTimeout(()=>{
            window.scrollTo({ top: top, behavior: "smooth" });
        }, 400)
    }
}
navigation.addEventListener('click', navigationMenu);

