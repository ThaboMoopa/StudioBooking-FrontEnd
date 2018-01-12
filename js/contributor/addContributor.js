/**
 * Created by thabomoopa on 2017/11/17.
 */
$(document).ready(function(){
	//var link = 'http://10.0.0.159:8080';
	var link = 'http://localhost:8080';
    $("#txtOrganisation").on('keydown focus',function(event){

        $.ajax({
            type: "GET",
            dataType: "json",
            url: link + "/organisation/findAll?",
            async: true,
            success: function (response) {

                var availableTags = [];

                $.each(response, function(key, value)
                {
					console.log(value.organisationName);
                    availableTags.push(value.organisationName);
                });
                populateOrganisation(availableTags);

            },
            error: function(xhr){
                alert("Connection to server unavailable, check your connection to server");
            }

        });
        function populateOrganisation(availableTags)
        {
            $("#txtOrganisation").autocomplete({
                source: availableTags
            });
        }

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

function validateSurname(surname) {
    if (surname === "") {
        $("#errorSurname").text("Please enter a Surname.").show();

        //fade out the error text when the user clicks on the textbox
        $("#txtSurname").on('focus',function(event) {
            $("#errorSurname").fadeOut('slow');
        });

        //prevent the form from being submitted if there is an error
        event.preventDefault();
        return false;
    }
    else if (/[^a-zA-Z-, ]/.test(surname)) {
        $("#errorSurname").text("Only alphabetic characters allowed in the field.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtSurname").on('focus',function(event) {
            $("#errorSurname").fadeOut('slow');
        });
        return false;

        //prevent the form from being submitted if there is an error
        event.preventDefault();
    }
    else
        return surname[0].toUpperCase() + surname.substr(1).toLowerCase();
}
function validateEmail(email) {

    var matchingEmails = "";
    //

    $.ajax({
        type: "GET",
        //dataType: "text",
        url: link + "/contributor/findByEmail?",
        data: "email=" + email,
        async: false,
        success: function(response)
        {
			alert(response.email);
           // var results = response.split("|");
            matchingEmails = response.email;
        }

    });

        if(matchingEmails == "Exists")
        {
            $("#errorEmail").html("The email address already exists, please try again");
            $("#txtEmail").on('focus',function(event){
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
function validateContact(contact) {
    if (contact === "") {
        $("#errorContact").text("Please enter a contact name.").show();

        //fade out the error text when the user clicks on the textbox
        $("#txtContact").on('focus',function(event) {
            $("#errorContact").fadeOut('slow');
        });

        //prevent the form from being submitted if there is an error
        event.preventDefault();
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
        event.preventDefault();
    }
    else if (contact.length > 10 ) {
        $("#errorContact").text("Contact number cannot be more than Ten (10) characters long.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtContact").on('focus',function(event) {
            $("#errorContact").fadeOut('slow');
        });
        return false;

        //prevent the form from being submitted if there is an error
        event.preventDefault();
    }
		else if ( contact.length < 10) {
        $("#errorContact").text("Contact number cannot be less than Ten (10) characters long.").show();
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
        $("#errorAdditionalContact").text("Please enter a additional contact number,if not available use the previous contact number.").show();

        //fade out the error text when the user clicks on the textbox
        $("#txtAdditionalContact").on('focus',function(event) {
            $("#errorAdditionalContact").fadeOut('slow');
        });

        //prevent the form from being submitted if there is an error
        event.preventDefault();
        return false;
    }
    else if (isNaN(additional)) {
        $("#errorAdditionalContact").text("Only numbers are allowed in the field.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtAdditionalContact").on('focus',function(event) {
            $("#errorAdditionalContact").fadeOut('slow');
        });
        return false;

        //prevent the form from being submitted if there is an error
        event.preventDefault();
    }
    else if (additional.length  > 10 ) {
        $("#errorAdditionalContact").text("Contact numbers cannot be more than Ten (10) characters long.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtAdditionalContact").on('focus',function(event) {
            $("#errorAdditionalContact").fadeOut('slow');
        });
        return false;

        //prevent the form from being submitted if there is an error
        event.preventDefault();
    }
    else if (additional.length  < 10) {
        $("#errorAdditionalContact").text("Contact numbers cannot be less than Ten (10) characters long.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtAdditionalContact").on('focus',function(event) {
            $("#errorAdditionalContact").fadeOut('slow');
        });
        return false;

        //prevent the form from being submitted if there is an error
        event.preventDefault();
    }
    else
        return additional;
}

function validateOrganisation(organisation) {

    //var responseValue = '';
        //var search = "name="+organisation;
        $.ajax({
            type: "GET",
            dataType: "json",
            url: link + "/organisation/findByName?",
            data: "name=" + organisation,
            async: true,
            success: function (response) {
                //var results = response.split("|");
                validateName(organisation, response.organisationName)
            }

        });

    function validateName(organisation, replyFromServer)
    {
        if(organisation != replyFromServer)
        {
            $("#errorOrganisation").text("Organisation does not exist, please register the organisation").show();
            //++errorInput;

            //fade out the error text when the user clicks on the textbox
            $("#txtOrganisation").on('focus',function(event) {
                $("#errorOrganisation").fadeOut('slow');
            });
            return false;

            //prevent the form from being submitted if there is an error
            event.preventDefault();
        }

    }

    if (organisation === "") {
        $("#errorOrganisation").text("Please enter an organisation name.").show();

        //fade out the error text when the user clicks on the textbox
        $("#txtOrganisation").on('focus',function(event) {
            $("#errorOrganisation").fadeOut('slow');
        });

        //prevent the form from being submitted if there is an error
        event.preventDefault();
        return false;
    }
    else if (/[^A-Za-z0-9-!@#%' ]/.test(organisation)) {
        $("#errorOrganisation").text("Characters allowed in this field are NUMBERS, LETTERS, !, -, @, #, %.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtOrganisation").on('focus',function(event) {
            $("#errorOrganisation").fadeOut('slow');
        });
        return false;

        //prevent the form from being submitted if there is an error
        event.preventDefault();
    }
    else
    {
        return organisation[0].toUpperCase() + organisation.slice(1);
    }

}


function validatePosition(position) {
    if (position === "") {
        $("#errorPosition").text("Please enter the position of contributor.").show();

        //fade out the error text when the user clicks on the textbox
        $("#txtPosition").on('focus',function(event) {
            $("#errorPosition").fadeOut('slow');
        });

        //prevent the form from being submitted if there is an error
        event.preventDefault();
        return false;
    }
    else if (/[^a-zA-Z ]/.test(position)) {
        $("#errorPosition").text("Only alphabetic characters and space are allowed in the field.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtPosition").on('focus',function(event) {
            $("#errorPosition").fadeOut('slow');
        });
        return false;

        //prevent the form from being submitted if there is an error
        event.preventDefault();
    }
    else
        return position[0].toUpperCase() + position.slice(1);
}

    $("#AddContributor").click(function(event){
    var name = validateName($.trim($("#txtName").val()));
    var surname = validateSurname($.trim($("#txtSurname").val()));
    var email = validateEmail($.trim($("#txtEmail").val()));
    var contact = validateContact($.trim($("#txtContact").val()));
    var additionalContact = validateAdditional($.trim($("#txtAdditionalContact").val()));
    var organisation = validateOrganisation($.trim($("#txtOrganisation").val()));
    var position = validatePosition($.trim($("#txtPosition").val()));

    if (name == false || surname == false || email == false || contact == false
        || additionalContact == false || organisation == false || position == false)
    {
        event.preventDefault();
    }
    else {

        $.ajax({
            type: "GET",
            dataType: "json",
            url: link + "/organisation/findByName?",
            data: "name=" + organisation,
            async: true,
            success: function (response) {
                //var results = response.split("|");
                $.ajax({
                    type: "GET",
                    dataType: "json",
                    url: link + "/contributor/"+response.id+"/addContributor?",
                    data: "name="+name+"&surname="+surname+"&email="+email+"&position="+position+"&contact="+contact+"&additionalContact="+additionalContact,
                    async: true,
                    success: function (response) {
                        location.href="contributor.php";
                    },
                    error: function(xhr){
                        alert("Adding Contributor Failed");
                    }
                });
            }
        });
    }
    event.preventDefault();
});
});
