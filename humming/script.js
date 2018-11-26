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

//Word change effect for 1s slide
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
setInterval(fadein, 1*30*100)


 //parallax
 $('.img-parallax').each(function(){
   var img = $(this);
   var imgParent = $(this).parent();
   function parallaxImg () {
     var speed = img.data('speed');
     var imgY = imgParent.offset().top;
     var winY = $(this).scrollTop();
     var winH = $(this).height();
     var parentH = imgParent.innerHeight();


     // The next pixel to show on screen
     var winBottom = winY + winH;

     // If block is shown on screen
     if (winBottom > imgY && winY < imgY + parentH) {
       // Number of pixels shown after block appear
       var imgBottom = ((winBottom - imgY) * speed);
       // Max number of pixels until block disappear
       var imgTop = winH + parentH;
       // Porcentage between start showing until disappearing
       var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
     }
     img.css({
       top: imgPercent + '%',
       transform: 'translate(-50%, -' + imgPercent + '%)'
     });
   }
     parallaxImg();
   $(document).on('scroll', function(){
       parallaxImg();
     })
    })
////////////////////////////////////Scroll
$(function () {
$(document).scroll(function () {
var $nav = $("#navbar");
$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});
});


//draggable
var video = document.getElementById('video_player')
var close = document.getElementById('close_btn')
var play_btn = document.getElementById('video_btn')
var remover = document.getElementById('setup_class_remove')
$(play_btn).click(function(){
    $('body, html').css('overflow-y','hidden')
    close.style.display = 'Block';
    remover.style.display = 'Block'
    video.style.display = 'Block'
    $(video).addClass('video_player_add')
    $(video).css('opacity','1')
})
$(close).on('click',function close(){
  video.style.display = 'none'
  remover.style.display = 'none'
  $('body, html').css('overflow-y','auto')
  this.style.display = 'none'
  $(video).css('opacity','0')
  $(video).removeClass('video_player_add')
})

////Scroll Down
var arrow_down = $('.arrow_down')
$(arrow_down).click(()=>{
var top_val = 840
  $('body, html').animate({'scrollTop': top_val},300)
})

$('#service_scroller').click(()=>{
      $('body, html').animate({'scrollTop': 1500},300)
})

$('.btn-6').click(()=>{
  window.location.href = 'https://itunes.apple.com/us/app/hummingbiird-college-services/id1406536427?mt=8'
})
