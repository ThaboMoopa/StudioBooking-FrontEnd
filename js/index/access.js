/**
 * Created by thabomoopa on 06/12/2017.
 */
$(document).ready(function()
{
   //console.log( sessionStorage.getItem('username') != 'admin');
    if(sessionStorage.getItem('username') != 'admin')
    {
        $('#users').hide();
        $('#dropdownMenu7').hide();
        $('#dropdownMenu5').hide();
    }
});
