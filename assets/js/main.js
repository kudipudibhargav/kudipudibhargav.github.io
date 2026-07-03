$(document).ready(function(){
    $(window).scroll(function(){
        var height = $(window).scrollTop();
        if (height>100) {
            $("#navBar").addClass("shadow navbar-blur");
        } else {
            $("#navBar").removeClass("shadow navbar-blur");
        }
    });

    $("#navBar").on("show.bs.collapse",function(){
        $(this).addClass("shadow navbar-blur");
        $("#navIcon").html('<i class="fa-solid fa-xmark"></i>');
    });

    $(window).on("load",function(){
        $("#preLoader").fadeOut();
    });

    $("#navBar").on("hide.bs.collapse",function(){
        var height = $(window).scrollTop();
        if(height<250) $(this).removeClass("shadow navbar-blur")
        $("#navIcon").html('<i class="fa-solid fa-bars-staggered"></i>');
    });

});