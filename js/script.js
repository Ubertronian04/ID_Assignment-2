$(document).ready(function () {
    $("#login-btn").on("click", function(e){
        e.preventDefault();

        $.ajax({
            url: 'login.html',
            dataType: 'text',
            success: function(data) {
                $(".modal-body").html(data);
                $(".modal").modal("show");
            } 
        });
    });
    $("#signup-btn").on("click", function(e){
        e.preventDefault();

        $.ajax({
            url: 'signup.html',
            dataType: 'text',
            success: function(data) {
                $(".modal-body").html(data);
                $("#modal-title").text("Register");
                $(".modal").modal("show");
            } 
        });
    });
});
