let getNavbar = document.querySelector(".menu--nav--links");
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
