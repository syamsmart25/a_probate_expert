$(document).ready(function () {
    $('.testi-blk').owlCarousel({
      loop: true,
      margin: 40,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      items: 2,
      navText: [
        '<span class="owl-prev">&#10094;</span>',
        '<span class="owl-next">&#10095;</span>'
      ],
      responsive: {
        0: {
          items: 1,
          margin: 10,
        },
        992: {
          items: 2,
          margin: 20,
        },
        1241: {
          items: 2,
          margin: 40,
        },
        1441: {
          items: 2,
          margin: 40,
        },        

      }
    });
  });

  /* Mobile Slider */
jQuery(document).ready(function () {
    mobilesliders();
    jQuery(window).resize(function () { mobilesliders(); });
    function mobilesliders() {
        if (jQuery(window).width() <= 991) {
            jQuery('.prct-blk, .case-list, .choose-blk ').addClass('owl-carousel').owlCarousel({
                loop: true,
                autoplay: true,
                autoplayTimeout: 6000,
                autoplayHoverPause: true,
                touchDrag: true,
                mouseDrag: true,
                nav: false,
                dote: true,
                items: 1, 
                autoHeight: true,
            });
        } else {
            jQuery('.dctrs-list, .ps-list').trigger('destroy.owl.carousel').removeClass('owl-carousel');
        }
    }
});     

