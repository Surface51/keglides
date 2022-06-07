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

// function myFunction(x) {
//     x.classList.toggle("change");
//     document.body.classList.toggle("stopscroll");
//   }


// (function ($) { // Begin jQuery
    $(document).ready(function() { // DOM ready
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      // Clicking away from dropdown will remove the dropdown class
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      // Hamburger to X toggle
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); // end DOM ready
//   })
(jQuery); // end jQuery