<?php
/**
 * Created by IntelliJ IDEA.
 * User: thabomoopa
 * Date: 01/12/2017
 * Time: 16:54
 */
include("templates/inc_header.html");
?>
    <script src="js/index/homepage.js"></script>
    <script src="js/Organisation/addOrganisation.js"></script>
    <div id="username"></div>

    <ul class="list-group">

        <li class="list-group-item">

            <h1>Add Organisation</h1>
            <?php include("templates/organisation/inc_organisation.html"); ?>

            <div class="form-group">
                <div class="col-sm-7">
                    <button id="AddOrganisation" name="AddOrganisation" class="btn btn-outline-success" value="AddOrganisation">Add Organisation</button>
                </div>
            </div>
        </li>
    </ul>

    <br />
    <br />
    <br />
    <div class="modal"><!-- Place at bottom of page --></div>

<?php  include("templates/inc_footer.html"); ?>