/**
 * Created by thabomoopa on 06/12/2017.
 */
$(document).ready(function()
{
    if(sessionStorage.getItem('username') != 'Admin')
    {
        $('#users').hide();
    }

});
