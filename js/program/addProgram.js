/**
 * Created by thabomoopa on 2017/11/19.
 */
var ajaxResponse = "";
$(document).ready(function(){
    var URLlink = "http://localhost:8080";
    $("#programSlot").on('keydown',function(event){
        var search = $.trim($("#programSlot").val());
        search = search.replace(/ /g, "_").toLowerCase();
        //search = search[0].toUpperCase() + name.substr(1).toLowerCase();
       // $("#errorProgramSlot").text(search);
        $.ajax({
            type: "GET",
            dataType: "json",
            url: URLlink + "/programSlot/findByName?",
            data: "search="+search,
            async: false,
            success: function (response) {
                console.log(response);
                ajaxResponse = response;
                if("Exists" == response)
                {
                    $("#errorProgramSlot").text("Program already exists. Try another program");
                    //fade out the error text when the user clicks on the textbox
                    $("#programSlot").on('keydown',function(event) {
                        $("#errorProgramSlot").fadeOut('slow');
                        event.preventDefault();
                    });

                }

            }
        });
    });

    $("#txtTime").on('keydown', function(event){
        var time = $("#txtTime").val();
        console.log(time);
        var finaltime = /^([01]\d|2[0-3])h?([0-5]\d)$/.test(time);
        console.log(finaltime);
    });

});

function validateName(name) {
            if (name === "") {
                $("#errorProgramSlot").text("Please enter a program name.").show();

                //fade out the error text when the user clicks on the textbox
                $("#programSlot").on('focus',function(event) {
                    $("#errorProgramSlot").fadeOut('slow');
                });

                //prevent the form from being submitted if there is an error
                event.preventDefault();
                return false;
            }
            else if (/[^a-zA-Z_ ]/.test(name)) {
                $("#errorProgramSlot").text("Only alphabetic characters allowed in the field.").show();
                //++errorInput;

                //fade out the error text when the user clicks on the textbox
                $("#programSlot").on('focus',function(event) {
                    $("#errorProgramSlot").fadeOut('slow');
                });
                return false;

                //prevent the form from being submitted if there is an error
                event.preventDefault();
            }
            else if("Exists" == ajaxResponse)
                {
                    $("#errorProgramSlot").text("Program already exists. Try another program");
                    //fade out the error text when the user clicks on the textbox
                    $("#programSlot").on('keydown',function(event) {
                        $("#errorProgramSlot").fadeOut('slow');
                        event.preventDefault();
                    });

                }
            else
                return name.toLowerCase();
}

function validateTime(time)
{
    var finalTime = /^([01]\d|2[0-3])h?([0-5]\d)$/.test(time);
    if(time == "")
    {

            $("#errorTime").text("Please enter a program time slot.").show();

            //fade out the error text when the user clicks on the textbox
            $("#txtTime").on('focus',function(event) {
                $("#errorTime").fadeOut('slow');
            });

            //prevent the form from being submitted if there is an error
            event.preventDefault();
            return false;
    }
    else if (finalTime == false) {
        $("#errorTime").text("The time format is 00h00 (Example 12h00)").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtTime").on('focus',function(event) {
            $("#errorTime").fadeOut('slow');
        });
        return false;

        //prevent the form from being submitted if there is an error
        event.preventDefault();
    }
    else if(time.length > 5){
        $("#errorTime").text("The length of time cannot be longer than 5 characters. Check your time and try again.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtTime").on('focus',function(event) {
            $("#errorTime").fadeOut('slow');
        });
        return false;

        //prevent the form from being submitted if there is an error
        event.preventDefault();
    }
    else if(time < "07h00")
    {
        $("#errorTime").text("Time slot is not allowed, programs start 07h00.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtTime").on('focus',function(event) {
            $("#errorTime").fadeOut('slow');
        });
        return false;

        //prevent the form from being submitted if there is an error
        event.preventDefault();
    }
    else if(time > "21h00")
    {
        $("#errorTime").text("Time slot not allowed, programs end at 21h00.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtTime").on('focus',function(event) {
            $("#errorTime").fadeOut('slow');
        });
        return false;

        //prevent the form from being submitted if there is an error
        event.preventDefault();
    }
    else
        return time;
    }


function addProgram(){

    var name = validateName($.trim($("#programSlot").val().replace(/ /g, "_").toLowerCase()));
    var times = validateTime($.trim($("#txtTime").val()));

    if(name == false || times == false){
        $("#errorForm").html('<div class="alert alert-danger" role="alert">Your details are incorrect, try again!.</div>').show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtTime").on('focus',function(event) {
            $("#errorForm").fadeOut('slow');
        });
        $("#errorForm").html('<div class="alert alert-danger" role="alert">Your details are incorrect, try again!.</div>').show();

        //fade out the error text when the user clicks on the textbox
        $("#programSlot").on('focus',function(event) {
            $("#errorForm").fadeOut('slow');
        });
    }
}
