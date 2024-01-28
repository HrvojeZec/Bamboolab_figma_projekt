let getNavbar = document.querySelector(".drop-menu");
let menuIcon = document.querySelector(".menu--icon");
let toggleNavStatus = false;


function toggleMenu(){
  if(toggleNavStatus === false){
        var displayStatus = getNavbar.style.display = "block";

        toggleNavStatus = true;
  
    }
    else if(toggleNavStatus === true){
        var displayStatus = getNavbar.style.display = "none";
        toggleNavStatus = false
    } 
   
}
var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    rewind : true,
    padding:'6rem',
    gap: '1.5rem',
    pagination: false,
    breakpoints: {
        768:{
            perPage: 2,
            gap: '1.5rem',
            padding:'3rem',
        },
        480:{
            perPage: 1,
            gap: '1.5rem',
            padding:'2rem',
        }
    },
  } );
  
  splide.mount();