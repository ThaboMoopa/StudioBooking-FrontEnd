/**
 * Created by thabomoopa on 2017/11/19.
 */
$(document).ready(function(){
  //var link = 'http://10.0.0.159:8080';
  var link = 'http://localhost:8080';
            $('#programSlot').on('keydown focus', function(event){
                var search = $('#programSlot').val();
                search = search.replace(/ /g, "_").toLowerCase();

                $.ajax({
                    type: "GET",
                    dataType: "json",
                    url: link + '/programSlot/findByName?',
                    data: "search=" + search,
                    async: true,
                    success: function (response) {
                        //var results = response;
                        var substrSearch = search.substr(0, 3);

                         $.each(response, function(key, value)
                         {
                             var searchResults = value.name;
                             var substrSearchResults = searchResults.substr(0, 3);
                             if(substrSearch == substrSearchResults)
                             {
                                 $("#errorProgramSlot").text("Program already exists. Try another program before you continue!");
                                 //fade out the error text when the user clicks on the textbox
                                 $("#programSlot").on('click focus',function(event) {
                                     $("#errorProgramSlot").fadeOut('slow');
                                     validateName();
                                 });
                             }
                         });
                    }
                });
            });

            $('#txtTime').on('keydown', function(event) {
                var time = $('#txtTime').val();
                $.ajax({
                    type: "GET",
                    dataType: "json",
                    url: link + '/programSlot/findByTime?',
                    data: "time="+time,
                    async: true,
                    success: function (data) {
                        //ajaxResponse = response;

                        $.each(data, function(key, value){
                            //console.log(time == value.time);
                            if (time == value.time) {
                                $("#errorTime").text("The time is not available, try another time slot");
                                //fade out the error text when the user clicks on the textbox
                                $("#txtTime").on('keydown', function (event) {
                                    $("#errorTime").fadeOut('slow');
                                    validateTime();
                                });
                            }
                        });
                    }
                });
            });

            function validateName()
            {
                return false;
            }
            function validateTime()
            {
                return false;
            }

        function validateName(name) {

                // if(validateName() == false){
                //     return false;
                // }
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
                    else if (/[^a-zA-Z_, ]/.test(name)) {
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
                    // else if("Exists" == ajaxResponse)
                    //     {
                    //         $("#errorProgramSlot").text("Program already exists. Try another program");
                    //         //fade out the error text when the user clicks on the textbox
                    //         $("#programSlot").on('keydown',function(event) {
                    //             $("#errorProgramSlot").fadeOut('slow');
                    //             event.preventDefault();
                    //         });
                    //
                    //     }
                    else
                        return name;
        }

        function validateTime(time)
        {


            //var finalTime = /^([01]\d|2[0-3])h?([0-5]\d)$/.test(time);
            //if(validateTime() == false)
            //{
            //    return false;
            //}
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
            else if (!time.match(/^\d{2,}h\d{2}$/)) {
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
            else if(time < "05h00")
            {
                $("#errorTime").text("Time slot is not allowed, programs start 05h00.").show();
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


                    $('#AddProgram').click(function(){

                        var name = validateName($.trim($("#programSlot").val()));
                        var times = validateTime($.trim($("#txtTime").val()));
                        event.preventDefault();

                        if (name == false || times == false) {
                            $("#errorForm").html('<div class="alert alert-danger" role="alert">Your details are incorrect, try again!.</div>').show();
                            //++errorInput;

                            //fade out the error text when the user clicks on the textbox
                            $("#txtTime").on('focus', function (event) {
                                $("#errorForm").fadeOut('slow');
                            });
                            $("#errorForm").html('<div class="alert alert-danger" role="alert">Your details are incorrect, try again!.</div>').show();

                            //fade out the error text when the user clicks on the textbox
                            $("#programSlot").on('focus', function (event) {
                                $("#errorForm").fadeOut('slow');
                            });
                            event.preventDefault();
                        }
                        else {
                            $.ajax({
                                type: "GET",
                                dataType: "json",
                                //url: 'http://10.0.0.159:8080/programSlot/addProgramSlot?',
                                url: link + '/programSlot/addProgramSlot?',
                                data: "name=" + name + "&time=" + times,
                                async: true,
                                success: function (response) {
                                   location.href = 'programSlot.php';
                                }
                            });

                        }
                        event.preventDefault();
                    });
});
