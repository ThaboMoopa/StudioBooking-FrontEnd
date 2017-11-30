/**
 * Created by thabomoopa on 2017/11/16.
 */
$(document).ready(function(){


    var id = sessionStorage.getItem("id");
    $("#username").html('<div class="alert alert-secondary" role="alert"> Logged in: <strong>' + sessionStorage.getItem("username") + '</strong><button onclick="logout()" id="loggout" class="float-lg-right btn-warning">Logout</button></div>');


});

function logout()
{
    sessionStorage.clear();
    location.href="index.php";
}