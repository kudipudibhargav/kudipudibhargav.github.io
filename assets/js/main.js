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

    $('#contact_form').on('submit', function(e) {
        e.preventDefault();
        var form = $(this);
        var submitButton = $("#contact_form_submit");
        var statusDiv = $("#contact_form_status");

        submitButton.addClass("disabled").prop("disabled", true);
        submitButton.html("Sending...");
        statusDiv.html("");

        $.ajax({
            method: 'POST',
            url: form.attr('action'),
            data: form.serialize(),
            dataType: 'json',
            headers: {
                'Accept': 'application/json'
            },
            success: function(data) {
                statusDiv.html("<p class='alert alert-success'>Thank you! Your message has been sent successfully. Formspree will request email activation on the first submission.</p>");
                form.trigger("reset");
                submitButton.removeClass("disabled").prop("disabled", false);
                submitButton.html("Send message");
            },
            error: function(err) {
                statusDiv.html("<p class='alert alert-danger'>Oops! There was a problem sending your message. Please try again.</p>");
                submitButton.removeClass("disabled").prop("disabled", false);
                submitButton.html("Send message");
            }
        });
    });
});