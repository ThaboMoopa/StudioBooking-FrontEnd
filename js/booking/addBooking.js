/**
 * Created by thabomoopa on 2017/11/17.
 */

$(document).ready(function(){
    
    //function to handle the first part of booking
    $(function(){
        $("#txtSearch").on('keydown', function(event){
            var search = $.trim($("#txtSearch").val());
            $.ajax({
                type: "GET",
                //dataType: "json",
                url: "curlScripts/booking/bookingCalender.php?",
                data: {
                    name: search,
                    action: 'findByName'
                },
                async: true,
                success: function (response) {
                    $("#table tbody").empty();
                    $.each(JSON.parse(response), function(key, value){
                        var organisationId = value.organisation.id;
                        var htmlData = '';
                        htmlData += '<tr>';
                        htmlData += '<td>' + value.name + '</td>';
                        htmlData += '<td>' + value.surname + '</td>';
                        htmlData += '<td>' + value.email + '</td>';
                        htmlData += '<td>' + value.organisation.organisationName + '</td>';
                        htmlData += '<td>' + value.position + '</td>';
                        htmlData += '<td>' + value.contact + '</td>';
                        htmlData += '<td>' + value.additionalContact + '</td>';
                        htmlData += '<td><a href="addBookingSecondPart.php" class="btn btn-outline-warning" data-value="'+value.id+'" id="selectContributor">Select</a></td>';
                        htmlData += '</tr>';
                        $("#table tbody").append(htmlData);
                        console.log(sessionStorage.setItem("organisationId", organisationId));

                        $("a#selectContributor").click(function(){
                            var contributorId = $(this).data('value');
                            console.log(sessionStorage.setItem("contributorSelected", contributorId));

                        });
                    });
                },
                error: function(xhr){
                    alert("Error happend");
                }
            });
        });

    });

    //function to handle the second part of the selecting the program
    $(function(){
        $("#programSlot").on('keydown', function(event){
            var search = $.trim($("#programSlot").val());
            $.ajax({
                type: "GET",
                //dataType: "json",
                url: "curlScripts/programSlot/programSlot.php?",
                data: {
                    search: search,
                    action: 'findByName'
                },
                async: true,
                success: function (response) {
                    $("#table tbody").empty();
                    //console.log(response);
                    $.each(JSON.parse(response), function(key, value){

                        var htmlData = '';
                        htmlData += '<tr>';
                        htmlData += '<td>' + value.name + '</td>';
                        htmlData += '<td>' + value.time + '</td>';
                        htmlData += '<td><a href="addBookingThirdPart.php" class="btn btn-outline-warning" data-value="'+value.id+'" id="selectProgram">Select</a></td>';
                        htmlData += '</tr>';
                        $("#table tbody").append(htmlData);
                    });
                    $("a#selectProgram").click(function(){
                        var programId = $(this).data('value');
                        alert("im in");
                        sessionStorage.setItem("programSelected", programId);

                    });
                },
                error: function(xhr){
                    console.log("Error happend");
                }
            });

        });
    });

    //function to load the technical to the field
    $(function(){
        $.ajax({
            type: "GET",
           // dataType: "json",
            url: "curlScripts/technical/technical.php?",
            data: {
                action: 'findAll'
            },
            async: true,
            success: function (response) {
                $.each(JSON.parse(response), function(key, value){
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
                    ///dataType: "json",
                    url: 'curlScripts/booking/bookingCalender.php?',
                    data: {
                       action: 'times'
                    },
                    async: true,
                    success: function (response) {
                        $("#table tbody").empty();
                        var datesArray = [];

                        $.each(JSON.parse(response), function(timeKey, timeValue){
                            datesArray.push(timeValue.times);
                            $('<option/>').val(timeValue.times).html(timeValue.times).appendTo('#times');

                       });
                        // for (var i = 0; i < datesArray.length; i++) {
                        //
                        //     var htmlData = '';
                        //     htmlData += '<tr>';
                        //     htmlData += '<td>' + datesArray[i] + '</td>';

                            $.ajax({
                                type: "GET",
                                url: "curlScripts/booking/bookingCalender.php?",
                                data: {
                                    bookingDate: dates,
                                    //bookingTime: value,
                                    action: 'findByBookingDate'
                                },
                                async: true,
                                success: function (data) {
                                    //console.log(JSON.parse(data.id));
                                    var arrayToholdFromServer = [];
                                    //htmlData += '<td>' + JSON.parse(data) + '</td>';

                                    $.each(JSON.parse(data), function(key, values){
                                        arrayToholdFromServer.push(values);

                                    });

                                    displayTable(arrayToholdFromServer, datesArray);
                                    // // if (datesArray[i] == data.bookingTime) {
                                    // //     htmlData += '<td>' + data.user + '</td>';
                                    // //     htmlData += '<td>' + data.contributor.name + '</td>';
                                    // //     htmlData += '<td>' + data.programSlot.name + '</td>';
                                    // //     htmlData += '<td>' + data.technical + '</td>';
                                    // //     htmlData += '<td>' + data.additionalInfo + '</td>';
                                    //     data.user == sessionStorage.getItem("username"));
                                    // // }
                                }
                            });
                            //htmlData += '</tr>';
                            //$("#table tbody").append(htmlData);
                        //}
                    },
                    error: function(xhr){
                        alert("Error happend");
                    }
                });
                function displayTable(arrayDetails,arrayTime)
                {

                    var htmlData = '';
                    htmlData += '<tr>';
                    $.each(arrayTime, function(key, value)
                    {
                        htmlData += '<td>'+value+'</td>';


                        $.each(arrayDetails, function(keys, values)
                        {
                            if(value == values.bookingTime)
                            {
                                htmlData += '<td>'+values.user+'</td>';
                                htmlData += '<td>'+values.contributor.name+'</td>';
                                htmlData += '<td>'+values.programSlot.name+'</td>';
                                htmlData += '<td>'+values.technical+'</td>';
                                htmlData += '<td>'+values.additionalInfo+'</td>';
                            }
                        });
                        htmlData += '</tr>';
                    });

                    $("#table tbody").append(htmlData);
                }
            },
                minDate: -0,
                beforeShowDay: $.datepicker.noWeekends,
                dateFormat:  'd_MM_y'
            });
    }); //end of the date function to get the bookings for the day
    
    $("#times").on('change',function()
    {
       var bookingTimeSelected = $("#times").val() ;

        $.ajax({
            type: "GET",
            //dataType: "json",
            url: "curlScripts/booking/bookingCalender.php?",
            data:{
                bookingDate:$("#datepicker").val() ,
                bookingTime: bookingTimeSelected,
                action: 'findByBookingDateAndTime'
                
            },
            async: true,
            success: function (response) {
                var results = JSON.parse(response);
                if(results.bookingTime == bookingTimeSelected)
                {
                    $("#errorTimes").text("Booking time already taken.").show();

                    //fade out the error text when the user clicks on the textbox
                    $("#times").on('click',function(event) {
                        $("#errorTimes").fadeOut('slow');
                    });
                }
            }
        });

    });


    $("#txtLength").on('change',function(){
        var timesForAbooking = [];
        $.ajax({
            type: "GET",
            //dataType: "json",
            url: "curlScripts/booking/bookingCalender.php?",
            data: {
                bookingDate: $("#datepicker").val(),
                action:'findByBookingDate'
            },
            async: false,
            success: function (response) {
                $.each(JSON.parse(response), function(key, value){
                    timesForAbooking.push(value.bookingTime);
                    verifyTime(value.bookingTime);
                });
            }
        });


        function verifyTime(data)
        {
            var bookingLength = $("#txtLength").val();
            var bookingTime = $("#times").val();

            $.ajax({
                type: "GET",
                url: 'curlScripts/booking/bookingCalender.php?',
                data: {
                    action: 'times'
                },
                async: true,
                success: function (response) {
                    $("#table tbody").empty();
                    var timesArray = [];

                    $.each(JSON.parse(response), function (timeKey, timeValue) {
                        timesArray.push(timeValue.times);
                    });

                    var nextBookingTime = '';

                    for(var i=0; i<bookingLength; i++) {

                        nextBookingTime = timesArray[($.inArray(bookingTime, timesArray) + 1) % timesArray.length];
                        //console.log(nextBookingTime);
                        //console.log(nextBookingTime == "16h30");
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

                }

            });
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


function validateContinue() {
    var bookingTime = validateRecordingTime($("#times").val());
    var bookingLength = validateLength($("#txtLength").val());
    var bookingTechnical = validateTechnical($("#items").val());
    var bookingDate = validateBookingDate($("#datepicker").val());
    var additionalInfo = validateAdditionalInfo($("#txtAdditionalInformationForTechnical").val());
    var rcsDates = validateRCSDates($("#txtDatesForRCS").val());
    console.log(sessionStorage.getItem("contributorSelected"));
    console.log(sessionStorage.getItem("programSelected"));

    if (bookingTime == false || bookingLength == false || bookingTechnical == false || bookingDate == false || rcsDates == false || additionalInfo == false) {
        event.preventDefault();

    }
    else {
        
        sessionStorage.setItem("bookingTime", bookingTime);
        sessionStorage.setItem("Technical", bookingTechnical);
        sessionStorage.setItem("bookingLength", bookingLength);
        sessionStorage.setItem("rcsDates", rcsDates);
        sessionStorage.setItem("bookingDate", bookingDate);
        sessionStorage.setItem("AdditionalInfo", additionalInfo);
            if(bookingLength == '30 Mins')
            {

                $.ajax({
                    type: "GET",
                    //dataType: "json",
                    url: 'curlScripts/booking/bookingCalender.php?',
                    data: {
                        bookingTime: bookingTime,
                        bookingTechnical: bookingTechnical,
                        bookingDate: bookingDate,
                        additionalInfo: additionalInfo,
                        programId : sessionStorage.getItem("programSelected"),
                        contributorId: sessionStorage.getItem("contributorSelected"),
                        rcsDates: rcsDates,
                        user: sessionStorage.getItem("username"),
                        action:'addBooking'
                    },
                    async: true,
                    success: function (response) {
                        //productionSheetPrint();
                        console.log(JSON.parse(response));

                    }
                });
            }
            else
            {
                //insert the first transaction
                $.ajax({
                    type: "GET",
                    url: 'curlScripts/booking/bookingCalender.php?',
                    data: {
                        action: 'times'
                    },
                    async: true,
                    success: function (response) {
                        $("#table tbody").empty();
                        var timesArray = [];

                        $.each(JSON.parse(response), function (timeKey, timeValue) {
                            timesArray.push(timeValue.times);
                        });

                        var nextBookingTime = '';

                        for(var i=0; i<bookingLength; i++)
                        {

                            var startTime = bookingTime;
                            var next = timesArray[($.inArray(startTime, timesArray) + 1) % timesArray.length];
                            $.ajax({
                                type: "GET",
                                //dataType: "json",
                                url: 'curlScripts/booking/bookingCalender.php?',
                                data: {
                                    bookingTime: next,
                                    bookingTechnical: bookingTechnical,
                                    bookingDate: bookingDate,
                                    additionalInfo: additionalInfo,
                                    programId : sessionStorage.getItem("programSelected"),
                                    contributorId: sessionStorage.getItem("contributorSelected"),
                                    rcsDates: rcsDates,
                                    user: sessionStorage.getItem("username"),
                                    action:'addBooking'
                                },
                                async: true,
                                success: function (response) {
                                    //productionSheetPrint();
                                    console.log(JSON.parse(response));

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

                });
            }
            event.preventDefault();
    }

    $.ajax({
        type: "GET",
        url: 'curlScripts/booking/bookingCalender.php?',
        data: {
            action: 'times'
        },
        async: true,
        success: function (response) {
            $("#table tbody").empty();
            var timesArray = [];

            $.each(JSON.parse(response), function (timeKey, timeValue) {
                timesArray.push(timeValue.times);
            });
        }
    });
    }
    function productionSheetPrint() {
        location.href = "productionSheet.php";

    }









































