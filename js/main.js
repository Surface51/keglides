$(document).ready(function(){
    $('.hero-slider').slick({
        slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    dots:true,
   nav:false,
   prevArrow: '<span class="prev-arrow3" ><i class="fal fa-chevron-left"></i></span>',
     nextArrow: '<span class="next-arrow3" ><i class="fal fa-chevron-right"></i></span>' 
    });
})


$(document).ready(function(){
    $('.media-slider').slick({
    
        slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    dots:true,  
    });
})


$(document).ready(function(){
    $('.award-slider').slick({
        slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:false,
    dots:false,
    prevArrow: '<span class="prev-arrow3" ><i class="fa fa-chevron-left"></i></span>',
     nextArrow: '<span class="next-arrow3" ><i class="fa fa-chevron-right"></i></span>' 
    });
})

function myFunction(x) {
    x.classList.toggle("change");
    document.body.classList.toggle("stopscroll");
  }