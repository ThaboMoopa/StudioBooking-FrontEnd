/**
 * Created by thabomoopa on 01/12/2017.
 */
/**
 * Created by thabomoopa on 2017/11/17.
 */
$(document).ready(function(){
var link = 'http://localhost:8080';
//var link = 'http://10.0.0.159:8080';

var organisationName = $('#txtName').val();
    $("#txtOrganisation").on('focus keydown',function(event){

        var availableTags = [];
        $.ajax({
            type: "GET",
            dataType: "json",
            url: link + "/organisation/findAll?",
            async: false,
            success: function (response) {
                $.each(response, function(key, value)
                {
                    availableTags.push(value.organisationName);
                });
            },
            error: function(xhr){
                alert("Connection to server unavailable, check your connection to server");
            }
        });
        $( "#txtOrganisation" ).autocomplete({
            source: availableTags
        });
    });

    $("#txtName").on('keydown',function(event){
    $.ajax({
        type: "GET",
        dataType: "json",
        url: link + "/organisation/findByNameContainingIgnoreCase?",
        data: "name=" + $('#txtName').val(),
        async: true,
        success: function(response)
        {
          $.each(response, function(key, value){
            console.log(value.organisationName);
              if($('#txtName').val() == value.organisationName)
              {
                $("#errorName").text("Organisation already exists.").show();

                //fade out the error text when the user clicks on the textbox
                $("#txtName").on('focus keydown',function(event) {
                    $("#errorName").fadeOut('slow');
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
        //event.preventDefault();
        return false;
    }
    else if (/[^A-Za-z0-9 !#']/.test(name)) {
        $("#errorName").text("Only alphabetic characters allowed in the field.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtName").on('focus',function(event) {
            $("#errorName").fadeOut('slow');
        });
        return false;

        //prevent the form from being submitted if there is an error
        //event.preventDefault();
    }
    else
        return name[0].toUpperCase() + name.substr(1).toLowerCase();
}

function validateWebAddress(website) {
    //return website;

    if (website === "") {
        $("#errorWebAddress").text("Please enter a web address.").show();

        //fade out the error text when the user clicks on the textbox
        $("#txtWebAddress").on('focus',function(event) {
            $("#errorWebAddress").fadeOut('slow');
        });

        //prevent the form from being submitted if there is an error
       // event.preventDefault();
        return false;
    }
    else if(website == 'n/a')
    {
      website = 'n/a';
       return website;
    }
    else
    {
      return website;
    }
    //var matchingEmails = "";



    // alert(matchingEmails);
    // if(matchingEmails == "Exists")
    // {
    //     $("#errorWebAddress").html("The email address already exists, please try again");
    //     $("#txtWebAddress").on('focus',function(event){
    //         $("#errorWebAddress").fadeOut('slow');
    //     });
    //    // event.preventDefault();
    //     return false;
    // }

    // else if(validEmail(website) === false) {
    //     $("#errorWebAddress").text("Web address is invalid! Please try again.").show();
    //     //++errorInput;
    //     //fade out the error text when the user clicks on the textbox
    //     $("#txtWebAddress").on('focus',function(event) {
    //         $("#errorWebAddress").fadeOut('slow');
    //     });
    // }
    // else
    //     return website;
    //
    // function validEmail(eWebsite)
    // {
    //     var filter = /^[a-zA-Z0-9-\.]+\.[a-z]{2,4}/;
    //     if(filter.test(eWebsite))
    //         return true;
    //     else
    //         return false;
    // }

}
function validateContact(contact) {
    if (contact === "") {
        $("#errorContact").text("Please enter a contact name.").show();

        //fade out the error text when the user clicks on the textbox
        $("#txtContact").on('focus',function(event) {
            $("#errorContact").fadeOut('slow');
        });

        //prevent the form from being submitted if there is an error
        //event.preventDefault();
        return false;
    }
    else if (isNaN(contact)) {
        $("#errorContact").text("Only numbers are allowed in the field.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtContact").on('focus',function(event) {
            $("#errorContact").fadeOut('slow');
        });
        return false;

        //prevent the form from being submitted if there is an error
        //event.preventDefault();
    }
    else if (contact.length > 10) {
        $("#errorContact").text("Contact numbers cannot be more than Ten (10) characters long.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtContact").on('focus',function(event) {
            $("#errorContact").fadeOut('slow');
        });
        return false;

        //prevent the form from being submitted if there is an error
        event.preventDefault();
    }
    else if (contact.length < 10) {
        $("#errorContact").text("Contact numbers cannot be less than Ten (10) characters long.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtContact").on('focus',function(event) {
            $("#errorContact").fadeOut('slow');
        });
        return false;

        //prevent the form from being submitted if there is an error
        event.preventDefault();
    }
    else
        return contact;
}

function validateAdditional(additional) {
    if (additional === "") {
        $("#errorAlternativeContact").text("Please enter a additional contact number,if not available use the previous contact number.").show();

        //fade out the error text when the user clicks on the textbox
        $("#txtAlternativeContact").on('focus click',function(event) {
            $("#errorAlternativeContact").fadeOut('slow');
        });

        //prevent the form from being submitted if there is an error
        //event.preventDefault();
        return false;
    }
    else if (isNaN(additional)) {
        $("#errorAlternativeContact").text("Only numbers are allowed in the field.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtAlternativeContact").on('focus',function(event) {
            $("#errorAlternativeContact").fadeOut('slow');
        });
        return false;

        //prevent the form from being submitted if there is an error
        //event.preventDefault();
    }
    else if (additional.length  > 10) {
        $("#errorAlternativeContact").text("Contact numbers cannot be more than Ten (10) characters long.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtAlternativeContact").on('focus',function(event) {
            $("#errorAlternativeContact").fadeOut('slow');
        });
        return false;

        //prevent the form from being submitted if there is an error
        //event.preventDefault();
    }
    else if (additional.length  < 10) {
        $("#errorAlternativeContact").text("Numbers cannot be less than Ten (10) characters long.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtAlternativeContact").on('focus',function(event) {
            $("#errorAlternativeContact").fadeOut('slow');
        });
        return false;

        //prevent the form from being submitted if there is an error
        //event.preventDefault();
    }
    else
        return additional;
}


$("#AddOrganisation").click(function(){


    var name = validateName($.trim($("#txtName").val()));
    var website = validateWebAddress($.trim($("#txtWebAddress").val()));
    var contact = validateContact($.trim($("#txtContact").val()));
    var additionalContact = validateAdditional($.trim($("#txtAlternativeContact").val()));

    if (name == false || website == false || contact == false
        || additionalContact == false )
    {
        event.preventDefault();
    }
    else {
        $.ajax({
            type: "GET",
            dataType: "json",
            //url: 'http://10.0.0.159:8080/organisation/addOrganisation?',
            url: link + '/organisation/addOrganisation?',
            data: "organisationName="+name+"&contactDetails="+contact+"&contactPerson="+additionalContact+"&webAddress="+website,
            async: true,
            success: function (response) {
                location.href='Organisation.php'
            }
        });
    }
    event.preventDefault();
  });
});
