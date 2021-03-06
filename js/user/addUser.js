/**
 * Created by thabomoopa on 08/12/2017.
 */
$(document).ready(function(){
    var link = 'http://localhost:8080';
    $("#txtEmail").on('keydown', function(){
      console.log('im in');
      $.ajax({
          type: "GET",
          dataType: "json",
          url: link + "/user/findByEmail?",
          data: "email="+$('#txtEmail').val() ,
          async: false,
          success: function(response)
          {
            $.each(response, function(key, value){
              if(value.email == $('#txtEmail').val()){
                $("#errorEmail").text("The email address already exists, try again please.").show();

                //fade out the error text when the user clicks on the textbox
                $("#txtEmail").on('focus',function(event) {
                    $("#errorEmail").fadeOut('slow');
              });
              }
            });
          }

      });
    });


    function validateName(name) {
        if (name === "") {
            $("#errorName").text("Please enter a name.").show();

            //fade out the error text when the user clicks on the textbox
            $("#txtName").on('focus',function(event) {
                $("#errorName").fadeOut('slow');
            });

            //prevent the form from being submitted if there is an error
            event.preventDefault();
            return false;
        }
        else if (/[^a-zA-Z]/.test(name)) {
            $("#errorName").text("Only alphabetic characters allowed in the field.").show();
            //++errorInput;

            //fade out the error text when the user clicks on the textbox
            $("#txtName").on('focus',function(event) {
                $("#errorName").fadeOut('slow');
            });
            return false;

            //prevent the form from being submitted if there is an error
            event.preventDefault();
        }
        else
            return name[0].toUpperCase() + name.substr(1).toLowerCase();
    }
    function validateEmail(email) {

        var matchingEmails = "";
        $.ajax({
            type: "GET",
            dataType: "json",
            url: link + "/user/findByEmail?",
            data: "email="+$('#txtEmail').val() ,
            async: false,
            success: function(response)
            {
              $.each(response, function(key, value){
                matchingEmails == value.email;
              });
            }

        });

        if(matchingEmails == email)
        {
            $("#errorEmail").text("The email address already exists, try again please.").show();

            //fade out the error text when the user clicks on the textbox
            $("#txtEmail").on('focus',function(event) {
                $("#errorEmail").fadeOut('slow');
          });
          event.preventDefault();
          return false;
          }

        else if (email === "") {
            $("#errorEmail").text("Please enter a email address.").show();

            //fade out the error text when the user clicks on the textbox
            $("#txtEmail").on('focus',function(event) {
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
            $("#txtEmail").on('focus',function(event) {
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
        //return false;
    }

    function validatePassword(password)
    {

        if(password == '')
        {
            $("#errorPassword").text("Please enter a password.").show();
            //++errorInput;
            //fade out the error text when the user clicks on the textbox
            $("#txtPassword").on('focus',function(event) {
                $("#errorPassword").fadeOut('slow');
            });
            return false;
        }
        // else if(validPassword(password)==false){
        //     $("#errorPassword").text("Password does not match criteria.").show();
        //     //++errorInput;
        //     //fade out the error text when the user clicks on the textbox
        //     $("#txtPassword").on('focus',function(event) {
        //         $("#errorPassword").fadeOut('slow');
        //     });
        // }
        else{
            return password;
        }
        // function validPassword(ePassword){
        //     var filter = /^[A-Za-z0-9!@$%^&* ,]$/;
        //     if(filter.test(ePassword))
        //         return true;
        //     else
        //         return false;
        // }
    }
    function validateConfirm(password)
    {

        if(password == '')
        {
            $("#errorConfirmPassword").text("Please enter a password.").show();
            //++errorInput;
            //fade out the error text when the user clicks on the textbox
            $("#txtConfirmPassword").on('focus',function(event) {
                $("#errorConfirmPassword").fadeOut('slow');
            });
            return false;
        }
        else{
            return password;
        }
        // else if(validPassword(password)==false){
        //     $("#errorConfirmPassword").text("Password does not match criteria.").show();
        //     //++errorInput;
        //     //fade out the error text when the user clicks on the textbox
        //     $("#txtPasswordConfirm").on('focus',function(event) {
        //         $("#errorConfirmPassword").fadeOut('slow');
        //     });
        //     return false;
        // }
        // function validPassword(ePassword){
        //     var filter = /^[A-Za-z0-9!@$%^&* ,]$/;
        //     if(filter.test(ePassword))
        //         return true;
        //     else
        //         return false;
        // }
    }

    $('#AddUser').on('click', function() {

        var name = validateName($.trim($('#txtName').val()));
        var password = validatePassword($.trim($('#txtPassword').val()))
        var email = validateEmail($.trim($('#txtEmail').val()));
        var confirm = validateConfirm($.trim($('#txtConfirmPassword').val()));
        var data = "email=" + email + "&password="+password+"&name="+name;
        if (name == false || password == false || email == false || confirm == false) {
            event.preventDefault();
        }
        else {
            if (password == confirm) {
                $.ajax({
                    type: "GET",
                    dataType: "json",
                    url: link + "/user/addUser?",
                    data: data,
                    async: true,
                    success: function (response) {
                      alert(response);
                        location.href = 'user.php';
                    }
                });
            }
            else{
                $("#errorConfirmPassword").text("Password does not match.").show();
                //++errorInput;
                //fade out the error text when the user clicks on the textbox
                $("#txtConfirmPassword").on('focus',function(event) {
                    $("#errorConfirmPassword").fadeOut('slow');
                });
                return false;
            }
        }
    });
});
