/**
 * Created by thabomoopa on 2017/11/20.
 */
$(document).ready(function(){
var URLlink = "http://localhost:8080";
    $.ajax({
        type: "GET",
        dataType: "json",
        url: URLlink + "/programSlot/findAll?",
        //data: "search="+search,
        async: false,
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
        },
        error: function(xhr){
            alert("Error happend");
        }

    });
});
