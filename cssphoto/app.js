 ! function($) {
    "use strict"; 

    // Loader 
    $(window).on('load', function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }); 
    
    //Feather icon
    feather.replace()

 //validation
 document.querySelector('.myform').addEventListener('submit',(event) =>{
     event.defaultPrevented();

    console.log(event.target.email.value);


 })


}(jQuery)