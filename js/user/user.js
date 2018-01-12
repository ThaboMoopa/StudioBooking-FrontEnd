/**
 * Created by thabomoopa on 2017/12/08.
 */
$(document).ready(function(){
  var link = 'http://localhost:8080';
    $.ajax({
        type: "GET",
        dataType: "json",
        url: link + "/user/findAll?",
        //url: "http://10.0.0.159:8080/user/findAll?",
        async: true,
        success: function (response) {
            var htmlData = '';
            $.each(response, function(key, value){
                htmlData += '<tr>';
                htmlData += '<td>' + value.name+ '</td>';
                htmlData += '<td>' + value.email + '</td>';
                htmlData += '<td>' + value.password + '</td>';
                htmlData += '<td><a href="editUser.php" class="btn btn-outline-warning" data-value="'+value.id+'" id="edit">Edit</a><a href="user.php" class="btn btn-outline-danger" data-value="'+value.id+'" id="delete">Delete</a><br /></td>';
            });
            htmlData += '</tr>';
            $("#table tbody").append(htmlData);
        }
    });
});
