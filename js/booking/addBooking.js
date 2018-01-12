/**
 * Created by thabomoopa on 2017/11/17.
 */

$(document).ready(function(){
  //var link = 'http://10.0.0.159:8080';
  var link = 'http://localhost:8080';

    //function to handle the first part of booking
    $(function(){
        $("#txtSearch").on('keydown', function(event){
            var search = $.trim($("#txtSearch").val());
            $.ajax({
                type: "GET",
                dataType: "json",
                url: link + "/contributor/Search?",
                data: 'search='+search,
                async: true,
                success: function (response) {
                    $("#table tbody").empty();
                    $.each(response, function(key, value){
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
                        sessionStorage.setItem("organisationId", organisationId);

                        $("a#selectContributor").click(function(){
                            var contributorId = $(this).data('value');
                            sessionStorage.setItem("contributorSelected", contributorId);

                        });
                    });
                },
                error: function(xhr){
                    console.log("Error happend");
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
                dataType: "json",
                url: link + "/programSlot/findByName?",
                data: 'search=' + search,
                async: true,
                success: function (response) {
                    $("#table tbody").empty();

                    $.each(response, function(key, value){

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
            dataType: "json",
            url: link + "/technical/findAll?",
            async: true,
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
                    url: link + "/studioTimes/findAll?",
                    async: true,
                    success: function (response) {
                        $("#table tbody").empty();
                        $('#times')
                            .find('option')
                            .remove()
                            .end()
                            .append('<option value="whatever">Select time</option>')
                            .val('whatever')
                        ;
                        var datesArray = [];

                        $.each(response, function(timeKey, timeValue){
                            datesArray.push(timeValue.times);
                            $('<option/>').val(timeValue.times).html(timeValue.times).appendTo('#times');

                       });

                            $.ajax({
                                type: "GET",
								dataType: "json",
                                url: link + "/booking/findAllByBookingDate?",
                                data: "bookingDate="+dates,
                                async: true,
                                success: function (data) {
                                    //console.log(JSON.parse(data.id));
                                    var arrayToholdFromServer = [];

                                    $.each(data, function(key, values){
                                        arrayToholdFromServer.push(values);

                                    });

                                    displayTable(arrayToholdFromServer, datesArray);
                                }
                            });
                    },
                    error: function(xhr){
                        alert("Cannot find all bookings by date");
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
	    var bookingDates = $("#datepicker").val() ;
        $.ajax({
            type: "GET",
            dataType: "json",
            url: link + "/booking/findByBookingDateAndTime?",
            data:"bookingDate=" + bookingDates + "&bookingTime="+ bookingTimeSelected,
            async: true,
            success: function (response) {
                if(response == ''){
                    alert('empty');
                }
                else
                {
                    $.each(response,function (key,value){
                        if(value == bookingTimeSelected)
                        {
                            $("#errorTimes").text("Booking time already taken.").show();

                            //fade out the error text when the user clicks on the textbox
                            $("#times").on('click',function(event) {
                                $("#errorTimes").fadeOut('slow');
                            });
                        }
                    });
                }
            },
				error: function(xhr){
					//alert("Error happend");
			}
        });

    });


    $("#txtLength").on('change',function(){
        var timesForAbooking = [];
        $.ajax({
            type: "GET",
            dataType: "json",
            url: link + "/booking/findAllByBookingDate?",
            data: "bookingDate=" + $("#datepicker").val(),

            async: false,
            success: function (response) {
                $.each(response, function(key, value){
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
                url: link + '/studioTimes/findAll?',
                async: true,
                success: function (response) {
                    $("#table tbody").empty();
                    var timesArray = [];

                    $.each(response, function (timeKey, timeValue) {
                        timesArray.push(timeValue.times);

                    });

                    var nextBookingTime = '';

                    for(var i=0; i<bookingLength; i++) {

                        nextBookingTime = timesArray[($.inArray(bookingTime, timesArray) + 1) % timesArray.length];
                        if(nextBookingTime == '16h30')
                        {
                            $("#errorLength").text("You're booking length is greater than the available time. Try another length!").show();
                            //fade out the error text when the user clicks on the textbox
                            $("#txtLength").on('focus click',function(event) {
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
    else if (/[^0-9TBCtbc, ]/.test(rcsDates)) {
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


$('#book').click(function(){

	var bookingTime = validateRecordingTime($("#times").val());
    var bookingLength = validateLength($("#txtLength").val());
    var bookingTechnical = validateTechnical($("#items").val());
    var bookingDate = validateBookingDate($("#datepicker").val());
    var additionalInfo = validateAdditionalInfo($("#txtAdditionalInformationForTechnical").val());
    var rcsDates = validateRCSDates($("#txtDatesForRCS").val());

    if (bookingTime == false || bookingLength == false || bookingTechnical == false || bookingDate == false || rcsDates == false || additionalInfo == false) {
        event.preventDefault();

    }
    else {
        var data = "user="+sessionStorage.getItem("username")+"&bookingDate=" +bookingDate+ "&bookingTime=" + bookingTime + "&technical=" +bookingTechnical + "&additionalInfo=" + additionalInfo + "&rcsDates=" + rcsDates;
        sessionStorage.setItem("bookingTime", bookingTime);
        sessionStorage.setItem("Technical", bookingTechnical);
        sessionStorage.setItem("bookingLength", bookingLength);
        sessionStorage.setItem("rcsDates", rcsDates);
        sessionStorage.setItem("bookingDate", bookingDate);
        sessionStorage.setItem("AdditionalInfo", additionalInfo);
            if(bookingLength == '30 Mins')
            {
				var data = "user="+sessionStorage.getItem("username")+"&bookingDate=" +bookingDate+ "&bookingTime=" + bookingTime + "&technical=" +bookingTechnical + "&additionalInfo=" + additionalInfo + "&rcsDates=" + rcsDates;

                $.ajax({
                    type: "GET",
                    dataType: "json",
                    url: link + '/booking/'+sessionStorage.getItem("programSelected")+'/'+sessionStorage.getItem("contributorSelected")+'/addBooking?',
                    data: data,
                    async: true,
                    success: function (response) {
                        productionSheetPrint();
						event.preventDefault();
                    }
                });
            }
            else
            {

                //insert the first transaction
                $.ajax({
                    type: "GET",
					          dataType: "json",
                    url: link + '/studioTimes/findAll?',
                    async: true,
                    success: function (response) {

                        $("#table tbody").empty();
                        var timesArray = [];

                        $.each(response, function (timeKey, timeValue) {
                            timesArray.push(timeValue.times);
                        });

                        //var nextBookingTime = '';

                        for(var i=0; i<bookingLength; i++)
                        {
							var data = "user="+sessionStorage.getItem("username")+"&bookingDate=" +bookingDate+ "&bookingTime=" + bookingTime + "&technical=" +bookingTechnical + "&additionalInfo=" + additionalInfo + "&rcsDates=" + rcsDates;
              console.log(data);
                            var startTime = bookingTime;
                            var next = timesArray[($.inArray(startTime, timesArray) + 1) % timesArray.length];
                            $.ajax({
                                type: "GET",
                                dataType: "json",
								url: link + '/booking/'+sessionStorage.getItem("programSelected")+'/'+sessionStorage.getItem("contributorSelected")+'/addBooking?',
								data: "user="+sessionStorage.getItem("username")+"&bookingDate=" +bookingDate+ "&bookingTime=" + bookingTime + "&technical=" +bookingTechnical + "&additionalInfo=" + additionalInfo + "&rcsDates=" + rcsDates,
                                async: true,
                                success: function (response) {

                                    productionSheetPrint();

                                }
                            });
                            if(bookingTime == '16h30')
                            {
                                $("#errorLength").text("You're booking length is greater than the available time. Try another length!").show();
                                //fade out the error text when the user clicks on the textbox
                                $("#txtLength").on('focus click',function(event) {
                                    $("#errorLength").fadeOut('slow');
                                });
                                event.preventDefault();
                            }
                            bookingTime = next;

                        }

                    }

                });
				event.preventDefault();
            }
            event.preventDefault();
    }

    $.ajax({
        type: "GET",
        url: link + '/studioTimes/findAll?',
        async: true,
        success: function (response) {
            $("#table tbody").empty();
            var timesArray = [];

            $.each(response, function (timeKey, timeValue) {
                timesArray.push(timeValue.times);
            });
        }
    });

});
    function productionSheetPrint() {
        location.href = "productionSheet.php";
    }
});//closing the main document script
