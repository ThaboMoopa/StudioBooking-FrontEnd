/**
 * Created by thabomoopa on 01/12/2017.
 */
/**
 * Created by thabomoopa on 2017/11/17.
 */
$(document).ready(function(){
    //var URLlink = "http://localhost:8080";
    var edit_button = 0;

    $.ajax({
        type: "GET",
        //dataType: "json",
        url: "curlScripts/organisation/organisation.php?",
        data: {
            action: 'findAll'
        },
        async: true,
        success: function (response) {

            //var results = response.split("[");
            var htmlData = '';
            $.each(JSON.parse(response), function(key, value){
                htmlData += '<tr>';
                htmlData += '<td>' + value.organisationName+ '</td>';
                htmlData += '<td>' + value.webAddress + '</td>';
                htmlData += '<td>' + value.contactDetails + '</td>';
                htmlData += '<td>' + value.contactPerson + '</td>';

                htmlData += '<td><a href="editOrganisation.php" class="btn btn-outline-warning" data-value="'+value.id+'" id="edit">Edit</a><br /></td>';
            });
            htmlData += '</tr>';
            $("#table tbody").append(htmlData);
        },
        error: function(xhr){
            alert("Connection to database unavailable, make sure you connected to the server!");
        }
    });

    //function to make sure the edit href above are triggered
    $("a#edit").click(function(){
        edit_button = $(this).data('value');

        //load id into session variable
        sessionStorage.setItem("contributorId", edit_button);


    });
    //function to make sure the edit href above are triggered
    $("a#delete").click(function(){
        edit_button = $(this).data('value');
        //load id into session variable
        $.ajax({
            type: "GET",
            dataType: "json",
            url: URLlink + "/contributor/deleteContributor?",
            data:"id=" + edit_button,
            async: false,
            success: function (response) {
                console.log("successfully deleted a contributor");
                event.preventDefault();
            }
        });

        event.preventDefault();
    });

});

