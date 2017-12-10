/**
 * Created by thabomoopa on 2017/11/17.
 */
$(document).ready(function(){
    //var URLlink = "http://localhost:8080";
    //var edit_button = 0;
   $('#txtName').on('keydown keyup', function(){


        $.ajax({
            type: "GET",
            //dataType: "json",
            url: "curlScripts/contributor/contributor.php?",
            data: {
                name: $('#txtName').val(),
                action: 'findByNameOrderName'
            },
            async: true,
            success: function (response) {

                var htmlData = '';
                $.each(JSON.parse(response), function(key, value){
                    $("#table tbody").empty();
                    htmlData += '<tr>';
                    htmlData += '<td>' + value.name+ '</td>';
                    htmlData += '<td>' + value.surname + '</td>';
                    htmlData += '<td>' + value.email + '</td>';
                    htmlData += '<td>' + value.organisation.organisationName + '</td>';
                    htmlData += '<td>' + value.position + '</td>';
                    htmlData += '<td>' + value.contact + '</td>';
                    htmlData += '<td>' + value.additionalContact + '</td>';

                    htmlData += '<td><a href="editContributor.php" class="btn btn-outline-warning" data-value="'+value.id+'" id="edit">Edit</a><br /></td>';
                });
                htmlData += '</tr>';
                $("#table tbody").append(htmlData);

                //function to make sure the edit href above are triggered
                $("a#edit").click(function(){

                    var edit_button = $(this).data('value');
                    alert(edit_button);
                    //load id into session variable
                    sessionStorage.setItem("contributorId", edit_button);


                });
            },
            error: function(xhr){
                alert("Connection to database unavailable, make sure you connected to the server!");
            }

        });

   });


    $.ajax({
        type: "GET",
        //dataType: "json",
        url: "curlScripts/contributor/contributor.php?",
        data: {
            action: 'findAllContributors'
        },
        async: true,
        success: function (response) {

            var htmlData = '';
            $.each(JSON.parse(response), function(key, value){
                htmlData += '<tr>';
                htmlData += '<td>' + value.name+ '</td>';
                htmlData += '<td>' + value.surname + '</td>';
                htmlData += '<td>' + value.email + '</td>';
                htmlData += '<td>' + value.organisation.organisationName + '</td>';
                htmlData += '<td>' + value.position + '</td>';
                htmlData += '<td>' + value.contact + '</td>';
                htmlData += '<td>' + value.additionalContact + '</td>';

                htmlData += '<td><a href="editContributor.php" class="btn btn-outline-warning" data-value="'+value.id+'" id="edit">Edit</a><br /></td>';
            });
            htmlData += '</tr>';
            $("#table tbody").append(htmlData);

            //function to make sure the edit href above are triggered
            $("a#edit").click(function(){

                var edit_button = $(this).data('value');
                alert(edit_button);
                //load id into session variable
                sessionStorage.setItem("contributorId", edit_button);


            });
        },
        error: function(xhr){
            alert("Connection to database unavailable, make sure you connected to the server!");
        }
    });


});
