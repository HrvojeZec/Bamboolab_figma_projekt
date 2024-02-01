let getNavbar = document.querySelector(".drop-menu");
let menuIcon = document.querySelector(".menu--icon");
let toggleNavStatus = false;

AOS.init();

const toggleMenu = () => document.body.classList.toggle("open");

var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
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