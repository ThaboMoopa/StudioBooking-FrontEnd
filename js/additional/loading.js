/**
 * Created by thabomoopa on 2017/12/10.
 */

$(document).ready(function(){

    $body = $("body");

    $(document).on({
        ajaxStart: function() { $body.addClass("loading");    },
        ajaxStop: function() { $body.removeClass("loading"); }
    });

});