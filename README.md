# JS-Scroll-Acceleration    
Requires jQuery and it can be used to check the scrolling acceleration of a mousewheel or touchmove event.

# Example of usage
In this example the js-scroll-acceleration library has been used to close an Elementor Pop-up when the mouse wheel or a touch move event occured on the area of the pop-pup and to prevent the scrolling of the below content area.
```
jQuery(window).load(function () {

  var scroll = new ScrollAcceleration('.home-splash', 125);

  /**
   * on scroll check
   */
  jQuery(window).on('on_scroll_check', function(event, acceleration){
    //console.log('Acceleration: ', acceleration);
  });

  /**
   * on scroll start
   */
  jQuery(window).on('on_scroll_start', function(){   

    // check if splash is still visible
    var splashIsVisible = jQuery('.home-splash').is(':visible');
    if(splashIsVisible) {           
      jQuery('#close-splash > div > span > a').click(); 
      jQuery('body').css('overflow', 'hidden');
    }
  });

  /**
   * on scroll stop
   */
  jQuery(window).on('on_scroll_stop', function(){
    //console.log('scroll stopped');
    setTimeout(function(){
      jQuery('body').css('overflow', 'inherit');
    }, 900);

  });  

});
```