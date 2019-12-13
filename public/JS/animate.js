$(document).ready(function() {

    $(#down).mouseEnter(function() {
        $('.fas fa-caret-down').animate({
            opacity: '0.8';
            height: '+=50px';
            width: '+=50px';
        }, 1000, function (){
            animate({
                height: '-=50px';
                width: '-=50px';
            })
        })    
       });
    $(#down).click(function() {
        $('.fa-caret-down').css("opacity", "1.0");
    })

    $("body::-webkit-scrollbar").mouseEnter(function(){
        if(true) {
           $(this).css("width", "15px");
           $('body::-webkit-scrollbar-thumb').css("border-radius", "10px");
        }
    })

});



