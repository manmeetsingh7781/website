console.log('connected')
let menuIcon = document.querySelector('.menuIcon');
        let nav = document.querySelector('.overlay-menu');

        menuIcon.addEventListener('click', () => {
            if (nav.style.transform != 'translateX(0%)') {
                nav.style.transform = 'translateX(0%)';
                nav.style.transition = 'transform 0.2s ease-out';
            } else { 
                nav.style.transform = 'translateX(-100%)';
                nav.style.transition = 'transform 0.2s ease-out';
            }
        });

        let toggleIcon = document.querySelector('.menuIcon');

        toggleIcon.addEventListener('click', () => {
            if (toggleIcon.className != 'menuIcon toggle') {
                toggleIcon.className += ' toggle';
            } else {
                toggleIcon.className = 'menuIcon';
            }
        });

////Word change effect for 1s slide
var words = ['Cheap', 'Fair', 'Nominal', 'Reasonable', 'Economical', 'Low'], idx = 0,
  box = document.querySelector('.change_title')
 ///fade in for text 
function fadein() {
  box.classList.add('hide'); ///adds opacity
  setTimeout(function () {  
    box.textContent = words[idx]; /// adds IDX =1 everytime until it eqauls to the lenght 
    idx = (idx + 1) % words.length; 
  }, 500);
  setTimeout(function () {
    box.classList.remove('hide')
  }, 500);
}

setInterval(fadein, 3000)


 //parallax
$(document).ready(function () {
  $('.parallax').parallax();
});


//////Buttons Night
$('.inner_button').on('click',()=>{
    $('.inner_button').toggleClass('inner_button_change')
    $('html, body, .container').toggleClass('change_body')
    $('.outer_button').toggleClass('outer_button_change')
})
