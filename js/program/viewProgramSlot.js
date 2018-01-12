/**
 * Created by thabomoopa on 2017/11/20.
 */
$(document).ready(function(){
  //var link = 'http://10.0.0.159:8080';
  var link = 'http://localhost:8080';
    $.ajax({
        type: "GET",
        dataType: "json",
        url: link + '/programSlot/findAll?',
        async: true,
        success: function (response) {

            $.each(response, function(key, value){
                var htmlData = '';
                htmlData += '<tr>';
                htmlData += '<td>' + value.name + '</td>';
                htmlData += '<td>' + value.time + '</td>';
                htmlData += '<td><a href="editProgramSlot.php" class="btn btn-outline-warning" data-value="'+value.id+'" id="edit">Edit</a><br /></td>';
                htmlData += '</tr>';
                $("#table tbody").append(htmlData);
            });

            //function to make sure the edit href above are triggered
            $("a#edit").click(function(){
                var edit_button = $(this).data('value');

                //load id into session variable
                sessionStorage.setItem("programId", edit_button);
            });

        },
        error: function(xhr){
            alert("Error happend");
        }

    });
});
