//app-ui
//jquery
$(document).ready(function(){
    //toggle function
    $('.tag-1').on('click', function() {
        $('.hide-description-1').toggle();
    });
    $('.tag-2').on('click', function() {
        $('.hide-description-2').toggle();
    });
    $('.tag-3').on('click', function() {
        $('.hide-description-3').toggle();
    });

    //hover
    $(".img-thumbnail").hover(function(){
        
        $(this).addClass("hover");
    }, function(){
        $(this).removeClass("hover");
    });
})
