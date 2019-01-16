$(document).ready(function () {
  var counter=1;
  var interval;

  var $slider = $('.slider');
  var $slides = $slider.find('.slides');
  var $slide= $slides.find('.slide');
  function startSlider() {
    interval= setInterval(function () {

      $slides.animate({'margin-left':'-=1000px'},1000,function () {
        counter++;
        if(counter>=$slide.length){
          counter=1;
          setTimeout(function () {
              $slides.css('margin-left',0);
            },1000);
          }
      });
    },3000);
  }

  function pauseSlider(){
    clearInterval(interval);
  }

  $slides.mouseover(pauseSlider).mouseout(startSlider);
  startSlider();

  function assign(n){
    
  }
});
