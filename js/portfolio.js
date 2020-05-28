
  
$(document).ready(function () {

 $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeInLeft');
    }, {
        offset: '40%'
    });

   $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInRight');
    }, {
        offset: '40%'
    });

      $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated rotateInUpRight');
    }, {
        offset: '40%'
    });

         $('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated rotateInUpLeft');
    }, {
        offset: '40%'
    });

     $('.js--wp-5').waypoint(function(direction) {
    $('.js--wp-5').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });

     $('.js--wp-6').waypoint(function(direction) {
    $('.js--wp-6').addClass('animated fadeInRight');
    }, {
        offset: '60%'
    });

     $('.js--wp-7').waypoint(function(direction) {
    $('.js--wp-7').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    });

      $('.js--wp-8').waypoint(function(direction) {
    $('.js--wp-8').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    });

       $('.js--wp-9').waypoint(function(direction) {
    $('.js--wp-9').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    });

        $('.js--wp-10').waypoint(function(direction) {
    $('.js--wp-10').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    });

         $('.js--wp-11').waypoint(function(direction) {
    $('.js--wp-11').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    });

          $('.js--wp-12').waypoint(function(direction) {
    $('.js--wp-12').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    });

});

/*------------------------popup gallerys--------------------------*/
    $(document).ready(function(){
      $('.gallerys').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
           enabled : true 
        }

      });

    });