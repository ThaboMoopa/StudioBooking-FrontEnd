/**
 * Created by thabomoopa on 2017/11/17.
 */

$(document).ready(function(){

    var URLlink = "http://localhost:8080";
    var contributorId = 0;
    var programId = 0;
    var organisationId = '';

    //function to handle the first part of booking
    $(function(){
        $("#txtSearch").on('keydown', function(event){
            var search = $.trim($("#txtSearch").val());
            $.ajax({
                type: "GET",
                dataType: "json",
                url: URLlink + "/contributor/Search?",
                data: "search=" + search,
                async: false,
                success: function (response) {
                    $("#table tbody").empty();
                    $.each(response, function(key, value){
                        //console.log(value.organisation.id);
                        var htmlData = '';
                        htmlData += '<tr>';
                        htmlData += '<td>' + value.name + '</td>';
                        htmlData += '<td>' + value.surname + '</td>';
                        htmlData += '<td>' + value.email + '</td>';

                        $.ajax({
                            type: "GET",
                            dataType: "text",
                            url: URLlink + "/organisation/findByOrganisationId?",
                            data: "id=" + value.organisation.id,
                            async: false,
                            success: function (response) {
                                organisationId = response;
                                htmlData += '<td>' + response + '</td>';
                            }
                        });

                        htmlData += '<td>' + value.position + '</td>';
                        htmlData += '<td>' + value.contact + '</td>';
                        htmlData += '<td>' + value.additionalContact + '</td>';
                        htmlData += '<td><a href="addBookingSecondPart.php" class="btn btn-outline-warning" data-value="'+value.id+'" id="selectContributor">Select</a></td>';
                        htmlData += '</tr>';
                        $("#table tbody").append(htmlData);
                    });
                },
                error: function(xhr){
                    alert("Error happend");
                }
            });
            $("a#selectContributor").click(function(){
                contributorId = $(this).data('value');

                sessionStorage.setItem("contributorSelected", contributorId);

            });
            sessionStorage.setItem("organisationId", organisationId);
        });

    });

    //function to handle the second part of the selecting the program
    $(function(){
        $("#programSlot").on('keydown', function(event){
            var search = $.trim($("#programSlot").val());
            $.ajax({
                type: "GET",
                dataType: "json",
                url: URLlink + "/programSlot/findByName?",
                data: "search=" + search,
                async: false,
                success: function (response) {
                    $("#table tbody").empty();
                    //console.log(response);
                    $.each(response, function(key, value){

                        var htmlData = '';
                        htmlData += '<tr>';
                        htmlData += '<td>' + value.name + '</td>';
                        htmlData += '<td>' + value.time + '</td>';
                        htmlData += '<td><a href="addBookingThirdPart.php" class="btn btn-outline-warning" data-value="'+value.id+'" id="selectProgram">Select</a></td>';
                        htmlData += '</tr>';
                        $("#table tbody").append(htmlData);
                    });
                },
                error: function(xhr){
                    console.log("Error happend");
                }
            });
            $("a#selectProgram").click(function(){
                programId = $(this).data('value');

                sessionStorage.setItem("programSelected", programId);

            });
        });
    });

    //function to load the technical to the field
    $(function(){
        $.ajax({
            type: "GET",
            dataType: "json",
            url: URLlink + "/technical/findAll?",
            //data: "search=" + search,
            async: false,
            success: function (response) {
                $.each(response, function(key, value){
                    $('<option/>').val(value.name).html(value.name).appendTo('#items');
                });
            }
        });
    });

    //function to populate the table with the data of the studio
    $( function() {
        $( "#datepicker" ).datepicker({
            onSelect: function(date) {
                var dates = '';
                dates = date;
                $("h4#txtDate").text(dates);
                sessionStorage.setItem("dateOfBooking", dates);
                $.ajax({
                    type: "GET",
                    dataType: "json",
                    url: URLlink + "/studioTimes/findAll?",
                    async: false,
                    success: function (response) {
                        $("#table tbody").empty();
                        var datesArray = [];

                        $.each(response, function(timeKey, timeValue){
                            datesArray.push(timeValue.times);

                       });
                        for (var i = 0; i < datesArray.length; i++) {

                            var htmlData = '';
                            htmlData += '<tr>';
                            htmlData += '<td>' + datesArray[i] + '</td>';

                            $.ajax({
                                type: "GET",
                                dataType: "json",
                                url: URLlink + "/booking/findByBookingDateAndTime?",
                                data: "bookingDate=" + dates + "&bookingTime=" + datesArray[i],
                                async: false,
                                success: function (data) {
                                    if (datesArray[i] == data.bookingTime) {
                                        htmlData += '<td>' + data.user + '</td>';
                                        htmlData += '<td>' + data.contributor.name + '</td>';
                                        htmlData += '<td>' + data.programSlot.name + '</td>';
                                        htmlData += '<td>' + data.technical + '</td>';
                                        htmlData += '<td>' + data.additionalInfo + '</td>';
                                        console.log(data.user == sessionStorage.getItem("username"));
                                    }
                                }
                            });
                            htmlData += '</tr>';
                            $("#table tbody").append(htmlData);
                        }
                    },
                    error: function(xhr){
                        alert("Error happend");
                    }
                });
            },
                minDate: -0,
                beforeShowDay: $.datepicker.noWeekends,
                dateFormat:  'd_MM_y'
            });
    }); //end of the date function to get the bookings for the day

    //populate the dropdown for time
    $.ajax({
        type: "GET",
        dataType: "json",
        url: URLlink + "/studioTimes/findAll?",
        async: false,
        success: function (response) {
            //retrieve the times in a day
            $.each(response, function (key, value) {
                $('<option/>').val(value.times).html(value.times).appendTo('#times');
            });
        }
    });


    //check that the time has not been selected
    $( function() {
        $( "#datepicker" ).datepicker({
            onSelect: function(date) {
                dates = date;
            },
            minDate: -0,
            beforeShowDay: $.datepicker.noWeekends,
            dateFormat:  'd_MM_y'
        });
    });

    var timesArray =[];
    var bookingTimeSelected = '';

    $.ajax({
        type: "GET",
        dataType: "json",
        url: URLlink + "/studioTimes/findAll?",
        async: false,
        success: function (response) {
            timesArray = [];

            $.each(response, function (timeKey, timeValue) {
                timesArray.push(timeValue.times);
            });
        }
    });



    $("#times").on('change',function()
    {
        bookingTimeSelected =  $("#times").val();

        $.ajax({
            type: "GET",
            dataType: "json",
            url: URLlink + "/booking/findByBookingDateAndTime?",
            data: "bookingDate=" +$("#datepicker").val()+ "&bookingTime="+bookingTimeSelected,
            async: false,
            success: function (response) {
                //console.log(response);
                if(response.bookingTime == bookingTimeSelected)
                {
                    $("#errorTimes").text("Booking time already taken.").show();

                    //fade out the error text when the user clicks on the textbox
                    $("#times").on('click',function(event) {
                        $("#errorTimes").fadeOut('slow');
                    });
                    event.preventDefault();
                }
            }
        });

    });


    $("#txtLength").on('change',function(){
        var timesForAbooking = [];
        $.ajax({
            type: "GET",
            dataType: "json",
            url: URLlink + "/booking/findAllByBookingDate?",
            data: "bookingDate=" + $("#datepicker").val(),
            async: false,
            success: function (response) {
                $.each(response, function(key, value){
                    timesForAbooking.push(value.bookingTime);
                });
            }
        });


        var bookingLength = $("#txtLength").val();
        var bookingTime = $("#times").val();

        var nextBookingTime = '';

        for(var i=0; i<bookingLength; i++) {

            nextBookingTime = timesArray[($.inArray(bookingTime, timesArray) + 1) % timesArray.length];
            console.log(nextBookingTime == "16h30");
            if(nextBookingTime == "16h30")
            {
                $("#errorLength").text("You're booking length is greater than the available time. Try another length!").show();
                //fade out the error text when the user clicks on the textbox
                $("#txtLength").on('focus',function(event) {
                    $("#errorLength").fadeOut('slow');
                });
                break;
            }
            else
            {
                for(var j=0; j<timesForAbooking.length; j++)
                {
                    //console.log(nextBookingTime == timesArray[17]);

                    if(nextBookingTime==timesForAbooking[j]){
                        $("#errorLength").text("There's a booking made for " + timesForAbooking[j] + "").show();
                        //fade out the error text when the user clicks on the textbox
                        $("#txtLength").on('click',function(event) {
                            $("#errorLength").fadeOut('slow');
                        });
                    }
                }

            }

            bookingTime = nextBookingTime;



        }
    });
});//closing the main document script



function validateRecordingTime(times)
{
    if(times == 0)
    {
        $("#errorTimes").text("Please select time of pre-recording.").show();

        //fade out the error text when the user clicks on the textbox
        $("#times").on('focus',function(event) {
            $("#errorTimes").fadeOut('slow');
        });
        return false;

    }
    else
    {
        return times;
    }

}
function validateAdditionalInfo(info){
    if(info == '')
    {
        $("#errorAdditionalInformationForTechnical").text("Please type in any additional information for technical.").show();

        //fade out the error text when the user clicks on the textbox
        $("#txtAdditionalInformationForTechnical").on('focus',function(event) {
            $("#errorAdditionalInformationForTechnical").fadeOut('slow');
        });
        return false;
    }
    else
    {
        return info;
    }
}

function validateLength(bookingLength)
{
    if(bookingLength == 0)
    {
        $("#errorLength").text("Please select length of pre-recording.").show();

        //fade out the error text when the user clicks on the textbox
        $("#txtLength").on('focus',function(event) {
            $("#errorLength").fadeOut('slow');
        });
        return false;

    }
    else
    {
        return bookingLength;
    }
}
function validateTechnical(technical)
{
    if(technical == 0)
    {
        $("#errorItems").text("Please select technical assistant.").show();

        //fade out the error text when the user clicks on the textbox
        $("#items").on('focus',function(event) {
            $("#errorItems").fadeOut('slow');
        });
        return false;

    }
    else
    {
        return technical;
    }
}
function validateBookingDate(bookingDate)
{
    if(bookingDate == '')
    {
        $("#errorBookingDate").text("Please select the date of pre-recording.").show();

        //fade out the error text when the user clicks on the textbox
        $("#datepicker").on('focus',function(event) {
            $("#errorBookingDate").fadeOut('slow');
        });
        return false;

    }
    else
    {
        return bookingDate;
    }
}

function validateRCSDates(rcsDates){
    if(rcsDates == '')
    {
        $("#errorDatesForRCS").text("Please insert dates according to example.").show();

        //fade out the error text when the user clicks on the textbox
        $("#txtDatesForRCS").on('focus',function(event) {
            $("#errorDatesForRCS").fadeOut('slow');
        });
        return false;
    }
    else if (/[^0-9TBCtbc,]/.test(rcsDates)) {
        $("#errorDatesForRCS").text("Only numeric characters, comma(,) and TBC or tbc allowed in the field.").show();
        //++errorInput;

        //fade out the error text when the user clicks on the textbox
        $("#txtDatesForRCS").on('focus',function(event) {
            $("#errorDatesForRCS").fadeOut('slow');
        });
        return false;


    }
    else
    {
        return rcsDates;
    }
}


function validateContinue()
{

    var timesArray = [];
    var URLlink = "http://localhost:8080";
    $.ajax({
        type: "GET",
        dataType: "json",
        url: URLlink + "/studioTimes/findAll?",
        async: false,
        success: function (response) {

            timesArray = [];

            $.each(response, function (timeKey, timeValue) {
                timesArray.push(timeValue.times);
            });
        }
    });


    var bookingTime = validateRecordingTime($("#times").val());
    var bookingLength = validateLength($("#txtLength").val());
    var bookingTechnical = validateTechnical($("#items").val());
    var bookingDate = validateBookingDate($("#datepicker").val());
    var additionalInfo = validateAdditionalInfo($("#txtAdditionalInformationForTechnical").val());
    var rcsDates = validateRCSDates($("#txtDatesForRCS").val());
    var data = '';

    if(bookingTime == false || bookingLength == false || bookingTechnical==false || bookingDate == false || rcsDates == false || additionalInfo== false)
    {
        event.preventDefault();
    }
    else {
        data = "user=" + sessionStorage.getItem("username") + "&bookingDate=" + bookingDate + "&bookingTime=" + bookingTime +  "&technical="+bookingTechnical + "&additionalInfo=" + additionalInfo + "&rcsDates=" + rcsDates;

        if(bookingLength == '30 Mins')
         {
             $.ajax({
                 type: "GET",
                 dataType: "json",
                 url: URLlink + "/booking/"+sessionStorage.getItem("programSelected")+"/"+sessionStorage.getItem("contributorSelected")+"/addBooking?",
                 data: data,
                 async: false,
                 success: function (response) {
                     productionSheetPrint();

                 }
             });
         }
         else
         {
             //insert the first transaction
             data = "user=" + sessionStorage.getItem("username") + "&bookingDate=" + bookingDate + "&bookingTime=" + bookingTime +  "&technical="+bookingTechnical + "&additionalInfo="+additionalInfo+ "&rcsDates=" + rcsDates;
             $.ajax({
                 type: "GET",
                 dataType: "json",
                 url: URLlink + "/booking/"+sessionStorage.getItem("programSelected")+"/"+sessionStorage.getItem("contributorSelected")+"/addBooking?",
                 data: data,
                 async: false,
                 success: function (response) {
                     productionSheetPrint();

                 }
             });
             //insert multiple records to the database
             for(var i=0; i<bookingLength; i++)
                 {

                     var startTime = bookingTime;
                     var next = timesArray[($.inArray(startTime, timesArray) + 1) % timesArray.length];
                     data = "user=" + sessionStorage.getItem("username") + "&bookingDate=" + bookingDate + "&bookingTime=" + next +  "&technical="+bookingTechnical + "&additionalInfo="+additionalInfo + "&rcsDates=" + rcsDates;
                     console.log(sessionStorage.getItem("programSelected"));
                     $.ajax({
                         type: "GET",
                         dataType: "json",
                         url: URLlink + "/booking/"+sessionStorage.getItem("programSelected")+"/"+sessionStorage.getItem("contributorSelected")+"/addBooking?",
                         data: data,
                         async: false,
                         success: function (response) {
                             productionSheetPrint();

                         }
                     });
                     if(bookingTime = timesArray[17])
                     {
                         $("#errorLength").text("You're booking length is greater than the available time. Try another length!").show();
                         //fade out the error text when the user clicks on the textbox
                         $("#txtLength").on('focus',function(event) {
                             $("#errorLength").fadeOut('slow');
                         });
                         event.preventDefault();
                     }
                     bookingTime = next;

                 }

         }
        event.preventDefault();
     }
    sessionStorage.setItem("bookingTime", bookingTime);
    sessionStorage.setItem("Technical", bookingTechnical);
    sessionStorage.setItem("bookingLength", bookingLength);
    sessionStorage.setItem("rcsDates", rcsDates);
    sessionStorage.setItem("bookingDate", bookingDate);
    sessionStorage.setItem("AdditionalInfo", additionalInfo);

    event.preventDefault();
}
function productionSheetPrint()
{
    location.href="productionSheet.php";

}


































