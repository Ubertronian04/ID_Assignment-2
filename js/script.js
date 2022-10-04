$(document).ready(function(){
    // When user is logged in
    if(sessionStorage.getItem("username") != null) {
        $(".login-signup-btns").empty();
        // Profile pic and username in all navbar
        $(".login-signup-btns").html(`
        <li class="nav-item">
            <p style="padding-top: 0.8rem;">Welcome <span id="currentUser"></span>
        </li>
        <li class="nav-item p-0 m-0">
            <div class="dropdown">
                <button type="button" class="btn btn-primary text-muted" data-bs-toggle="dropdown" style="background-color:transparent;">
                    <img src="./assets/user_display_picture/profile.jpg" style="height: 4rem; border-radius: 75%;">
                </button>
                <div class="dropdown-menu class-dropdown-options">
                    <a class="dropdown-item-text text-decoration-none logout-btn">Log Out</a>
                </div>
            </div>
        </li>`);
        $(".login-signup-btns").addClass("d-flex align-items-center");
        $(".dropdown-item-text").hover(function(){
            $(this).css("cursor", "pointer");
        });
        $("#currentUser").text(sessionStorage.getItem("username"));

        $(document).on("click", ".logout-btn", function(){
            sessionStorage.removeItem("username");
            location.reload();
        });
    }
    // Displaying locked features modal on game pages
    else if(location.href.includes("quizgame") || location.href.includes("wordle") || location.href.includes("science") || location.href.includes("Science")){
        $(".modal").attr("id", "lockedModal");
        $(".modal-header button").remove();
        $(".modal-body").html(`
        <p class="text-center" style="font-family:Verdana, Geneva, Tahoma, sans-serif;">Please <a class="login-link-btn">Login</a> to access this feature. If you don't have an existing account, <a class="register-link-btn">Register</a> yourself now!</p>
        <p class="text-center" style="font-family:Verdana, Geneva, Tahoma, sans-serif;">Click <a class="home-link-btn" href="index.html">here</a> to return to the home page</p>`);
        $("#modal-title").text("! Locked Feature !");
        $(".modal").modal({backdrop: "static", keyboard: false});
        $(".modal").modal("toggle");
    }
});


// Enabling login button
$("#loginBtn, .login-link-btn").on("click", function (e) {
    e.preventDefault();

    $.ajax({
        url: 'login.html',
        dataType: 'text',
        success: function (data) {
            $(".modal-body").html(data);
            $("#modal-title").text("Login");
            if ($(".modal").attr("id") == "lockedModal"){
                $("form").append(`
                <div class="my-4 text-center form__input-group">
                    <p class="form__text ">
                        <a class="form__link" href="index.html" style="float:right;"><- Return to home</a>
                    </p>
                </div>`);
            }
            $(".modal").modal("show");
            if (location.href.includes("biology") || location.href.includes("english") || location.href.includes("classes") || location.href.includes("mathematics")){
                $(".other-pgs-styles").attr("href", "css/classes.css");
            }
            if (location.href.includes("wordle")){
                $(".other-pgs-styles").attr("href", "css/wordle.css");
            }
        }
    });
});

// Enabling Register button
$("#registerBtn, .register-link-btn").on("click", function (e) {
    e.preventDefault();

    $.ajax({
        url: 'register.html',
        dataType: 'text',
        success: function (data) {
            $(".modal-body").html(data);
            $("#modal-title").text("Register");
            if ($(".modal").attr("id") == "lockedModal"){
                $("form").append(`
                <div class="my-4 text-center form__input-group">
                    <p class="form__text ">
                        <a class="form__link" href="index.html" style="float:right;"><- Return to home</a>
                    </p>
                </div>`);
            }
            $(".modal").modal("show");
            if (location.href.includes("biology") || location.href.includes("english") || location.href.includes("classes") || location.href.includes("mathematics")){
                $(".other-pgs-styles").attr("href", "css/classes.css");
            }
            if (location.href.includes("wordle")){
                $(".other-pgs-styles").attr("href", "css/wordle.css");
            }
        }
    });
});

// Enabling navigation in classes page and its related pages

if (document.getElementById("biologyBtn") != null){
    document.getElementById("biologyBtn").onclick = function(){
        location.href = "biology.html";
    };
}

if (document.getElementById("englishBtn") != null){
    document.getElementById("englishBtn").onclick = function(){
        location.href = "english.html";
    };
}

if (document.getElementById("mathBtn") != null){
    document.getElementById("mathBtn").onclick = function(){
        location.href = "mathematics.html";
    };
}

if (document.getElementById("mathPracticeBtn") != null){
    document.getElementById("mathPracticeBtn").onclick = function() {
        location.href = "quizgame.html";
    };
}

if (document.getElementById("wordleGameBtn") != null){
    document.getElementById("wordleGameBtn").onclick = function() {
        location.href = "wordle.html";
    };
}

if (document.getElementById("scienceGameBtn") != null){
    document.getElementById("scienceGameBtn").onclick = function() {
        location.href = "sciencegame.html";
    };
}
if (document.getElementById("getStartedBtn") != null){
    document.getElementById("getStartedBtn").onclick = function() {
        location.href = "classes.html";
    };
}
