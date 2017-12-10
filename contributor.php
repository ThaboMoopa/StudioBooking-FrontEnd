<?php
/**
 * Created by IntelliJ IDEA.
 * User: thabomoopa
 * Date: 2017/11/16
 * Time: 11:32 PM
 */
include("templates/inc_header.html");
?>
    <script src="js/index/homepage.js"></script>
    <script src="js/contributor/contributors.js"></script>
    <div id="username"></div>
<style>
    /** Start by setting display:none to make this hidden.*/
    /*Then we position it in relation to the viewport window*/
    /*with position:fixed. Width, height, top and left speak*/
    /*for themselves. Background we set to 80% white with*/
                                             /*our animation centered, and no-repeating *!*/
    .modal {
        display:    none;
        position:   fixed;
        z-index:    1000;
        top:        0;
        left:       0;
        height:     100%;
        width:      100%;
        background: rgba( 255, 255, 255, .8 )
        url('http://i.stack.imgur.com/FhHRx.gif')
        50% 50%
        no-repeat;
    }

    /* When the body has the loading class, we turn
       the scrollbar off with overflow:hidden */
    body.loading {
        overflow: hidden;
    }

    /* Anytime the body has the loading class, our
       modal element will be visible */
    body.loading .modal {
        display: block;
    }
</style>
<script>
    $body = $("body");

    $(document).on({
        ajaxStart: function() { $body.addClass("loading");    },
        ajaxStop: function() { $body.removeClass("loading"); }
    });
</script>

    <ul class="list-group">

        <li class="list-group-item">

            <h1>Contributors</h1>
            <hr>
            <div class="form-group">
                <!--suppress XmlInvalidId -->
                <label for="Name" class="col-sm-7 col-form-label"></label>
                <div class="col-sm-7">
                    <input type="text" id="txtName" class="form-control">
                    <small id="timeStandalone" class="form-text text-muted">Type the name of contributor</small>
                    <small id="errorName" class="text-danger"></small>
                </div>
            </div>

            <div class="form-group row">
                <!--suppress XmlInvalidId -->
                <table class="table" id="table">
                    <thead>
                    <tr>
                        <th>Name</th><th>Surname</th><th>Email</th><th>Organisation</th><th>Position</th><th>Contact</th><th>Additional Contact</th><th>Action</th>
                    </tr>
                    <thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </li>

    </ul>

    <br />
    <br />
    <br />
    <div class="modal"><!-- Place at bottom of page --></div>
<?php  include("templates/inc_footer.html"); ?>