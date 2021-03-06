/**
 * 
 * @param area 
 * @param interval 
 */
function ScrollAcceleration(area, interval){

    console.log('Listening scroll on:', area);
    console.log('Check scroll interval:', interval);

    var scrollAcceleration = {
        area: area,
        interval: interval,
        currentScroll: 0,
        prevScroll: 0,
        startAcceleration: 0,
        prevAcceleration: 0,
        currentAcceleration: 0
    }

    jQuery(area).on('mousewheel touchmove', function (e) {

        // on scroll start
        jQuery(document).trigger('on_scroll_start');

        // inc scroll step number
        scrollAcceleration.currentScroll++;

        // get current scroll 
        setTimeout(function(){

            scrollAcceleration.prevScroll++; 
            scrollAcceleration.currentAcceleration = scrollAcceleration.currentScroll - scrollAcceleration.prevScroll;

            jQuery(document).trigger( 'on_scroll_check', [scrollAcceleration.prevAcceleration]);
    
            // if nextDelta is  
            if( scrollAcceleration.currentAcceleration == 0 ){
                setTimeout(function(){
                    jQuery(document).trigger( 'on_scroll_stop');
                }, interval);
            }
        }, interval);

    });

}