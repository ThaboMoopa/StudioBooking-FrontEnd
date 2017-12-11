/**
 * Created by thabomoopa on 2017/11/16.
 */
$(document).ready(function(){


    //console.log(URLlink);
    function validateEmail(email) {
            $.ajax({
                type: "GET",
                url: "curlScripts/user/user.php",
                data: {
                    email:email,
                    action: 'findByEmail'
                },
                async: true,
                success: function (response) {
                    console.log(JSON.parse(response));
                    if(JSON.parse(response).email == email)
                    {
                        return email;
                    }
                    else{
                        $("#errorEmail").text("Email not found, try another email address.").show();
                        //fade out the error text when the user clicks on the textbox
                        $("#txtEmail").click(function () {
                            $("#errorEmail").fadeOut('slow');
                        });
                        //prevent the form from being submitted if there is an error
                        event.preventDefault();
                    }
                }
            });
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
            return email.toLowerCase();

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

    $("#login").click(function(){
        var email = validateEmail($("#txtEmail").val());
        var password = validatePassword($("#txtPassword").val());
        if (email == false || password == false) {
            $('#errorPage').html('<div class="alert alert-danger" role="alert">Login details are incorrect. Please try again!</div>');
            $("#txtEmail").click(function () {
                $("#errorPage").fadeOut('slow');
            });
            $("#txtPassword").click(function(){
                $("#errorPage").fadeOut('slow');
            });
        }
        else {
            $.ajax({
                type: "GET",
                url: "curlScripts/user/user.php",
                data: {
                    email:email,
                    password:password,
                    action: 'login'
                },
                async: true,
                success: function (response) {
                    event.preventDefault();

                    if(JSON.parse(response).email == email)
                    {
                        if(JSON.parse(response) == password)
                        {
                            //sessionStorage.setItem("id",results[2]);
                            sessionStorage.setItem("username",results.name);
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
                    console.log(xhr.responseText)
                }
            });
        }
    });
    //function validateLogin() {


    //}

    function homepage()
    {
        location.href="homepage.php";
    }

});
