var hamburger = document.querySelector('.burger');
var navLinks = document.querySelector('.nav2');

hamburger.addEventListener('click', () =>{
    navLinks.classList.toggle('nav-active');
    
    
    // hamburger verandert in kruisje
    hamburger.classList.toggle('kruisje');
});





// link naar hamburger menu: https://www.youtube.com/watch?v=gXkqy0b4M5g // 
// uitleg function https://www.w3schools.com/js/js_arrow_function.asp //