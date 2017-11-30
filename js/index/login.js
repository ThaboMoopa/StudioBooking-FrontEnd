/**
 * Created by thabomoopa on 2017/11/16.
 */
//$(document).ready(function(){
    var URLlink = "http://localhost:8080";
    function validateEmail(email) {
        if (email === "") {
            $("#errorEmail").text("Please enter a Email address.").show();
            //fade out the error text when the user clicks on the textbox
            $("#txtEmail").click(function () {
                $("#errorEmail").fadeOut('slow');
            });
            //prevent the form from being submitted if there is an error
            event.preventDefault();
            return false;
        }
        else if(validEmail(email) === false) {
            $("#errorEmail").text("Email is invalid! Please try again.").show();
            //++errorInput;
            //fade out the error text when the user clicks on the textbox
            $("#txtEmail").click(function () {
                $("#errorEmail").fadeOut('slow');
            });
        }
        else
            return email;
        function validEmail(eEmail)
        {
            var filter = /^([0-9a-zA-Z]+[-._+&amp;])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$/;
            if(filter.test(eEmail))
                return true;
            else
                return false;
        }
    }
    function validatePassword(password) {
        if (password === "") {
            $("#errorPassword").text("Please enter a password.").show();
            //fade out the error text when the user clicks on the textbox
            $("#txtPassword").click(function () {
                $("#errorPassword").fadeOut('slow');
            });
            //prevent the form from being submitted if there is an error
            event.preventDefault();
            return false;
        }
        else if (/[^a-zA-Z0-9!@#]/.test(password)) {
            $("#errorPassword").text("Only alphabetic characters allowed in the field.").show();
            //++errorInput;
            //fade out the error text when the user clicks on the textbox
            $("#txtPassword").click(function () {
                $("#errorPassword").fadeOut('slow');
            });
            //prevent the form from being submitted if there is an error
            event.preventDefault();
            return false;
        }
        else if(password.length <6)
        {
            $("#errorPassword").text("Password is too short, length of password must be greater than 6 characters.").show();
            //++errorInput;
            //fade out the error text when the user clicks on the textbox
            $("#txtPassword").click(function(){
                $("#errorPassword").fadeOut('slow');
            });
            //prevent the form from being submitted if there is an error
            event.preventDefault();
            return 0;
        }
        else
            return password;
    }
    function validateLogin() {

       var email = validateEmail($("#txtEmail").val());
       var password = validatePassword($("#txtPassword").val());
        var data = "email=" + email + "&password="+password;
        //var hash = CryptoJS.MD5(password);
       // alert(hash);
        if (email == false || password == false) {
            event.preventDefault();
            //return;
        }
       else {
            var correctEmail = '';
            var correctPassword = '';
            $.ajax({
                type: "GET",
                dataType: "json",
                url: URLlink + "/user/login?",
                data: data,
                async: false,
                success: function (response) {
                        event.preventDefault();
                        console.log(response.email);
                        if(email.toLowerCase() == response.email)
                        {
                            if(password == response.password)
                            {
                                sessionStorage.setItem("id",response.id);
                                sessionStorage.setItem("username",response.name);
                                homepage();
                                event.preventDefault();
                            }
                            else
                            {
                                $('#errorPage').html('<div class="alert alert-danger" role="alert">Password is incorrect. Please try again!</div>');
                                event.preventDefault();
                            }
                        }
                        else
                        {
                            $('#errorPage').html('<div class="alert alert-danger" role="alert">Email is incorrect. Please try again!</div>');
                            event.preventDefault();
                        }
                },
                error:function(xhr, ajaxOptions, thrownError){
                    alert(xhr.responseText)
                }
            });
       }
    }

    function homepage()
    {
        location.href="homepage.php";
    }

//});
