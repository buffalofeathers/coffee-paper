$(document).ready(function(){
    
        "use strict";
        
        // Nav Sticky
        
        $(window).scroll(function(){
            if($(window).scrollTop() > 500 && !$('.mobile-toggle').is(":visible")){
                $('.top-bar').addClass('nav-sticky');
            }else{
                $('.top-bar').removeClass('nav-sticky');
            }
        });
    });