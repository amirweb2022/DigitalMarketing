$(document).ready(function () {
    $(".nav-icon").click(function () { 
        $("body").toggleClass("dark");
        $(".icon").removeClass("fa-moon");
        $(".icon").toggleClass("fa-sun");
        $(".icon").toggleClass("fa-moon");
    });
    $("#form-input").on({
        keyup:function() {
            var but = $("#form-input").val();
            var pass = $("#password").val();
            if (but.length < 5) {
                $("#textdanger").text("Username must be at least 5 characters long");
                $("#textsuccess").text("");
            }else if (but.length >= 5) {
                    $("#textsuccess").text("Username is accepted");
                    $("#textdanger").text("");
            }
            if (but === "") {
                $("#textdanger").text("Please fill out");
                $("#textsuccess").text("");
            }
        }
    });
    $("#password").on({
        keyup:function() {
            var pass = $("#password").val();
            if (pass.length < 5) {
                $("#textpassword").text("Password must be at least 5 characters long");
                $("#textpasswordsuccess").text("");
            }else if (pass.length >= 5) {
                    $("#textpasswordsuccess").text("Password is accepted");
                    $("#textpassword").text("");
            }
            if (pass === "") {
                $("#textpassword").text("Please fill out");
                $("#textpasswordsuccess").text("");
            }
        }
    });
    $("#button-form").on({
        click:function() {
            var but = $("#form-input").val();
            var pass = $("#password").val();
            if (but.length < 5) {
               $("#alert-danger").fadeIn(1000);
            }else if (but.length >= 5) {
                  $("#alert-success").fadeIn(1000);
                  $("#log").text("log out").addClass("text-danger");
            }
            if (but === "") {
                $("#alert-danger").fadeIn(1000).text("Please fill out");
            }else {
                $("#alert-danger").fadeOut(1000);
            }
            if (pass.length < 5) {
               $("#alert-danger").fadeIn(1000);
            }else if (pass.length >= 5) {
                  $("#alert-success").fadeIn(1000);
                  $("#log").text("log out").addClass("text-danger");
            }
            if (pass === "") {
                $("#alert-danger").fadeIn(1000).text("Please fill out");
            }else {
                $(".alert-danger").fadeOut(1000);
            }
        }
    })

    var number = 0;
$(".button-add-cart").on("click" , function() {
    $("#alert-cart").fadeIn(1000);
    number++;
    $(".number").text(number);
});
});