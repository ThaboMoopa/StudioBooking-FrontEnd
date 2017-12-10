<?php
/**
 * Created by IntelliJ IDEA.
 * User: thabomoopa
 * Date: 01/12/2017
 * Time: 16:50
 */
include("templates/inc_header.html");
?>
    <script src="js/index/homepage.js"></script>
    <script src="js/Organisation/Organisation.js"></script>
    <div id="username"></div>

    <ul class="list-group">

        <li class="list-group-item">

            <h1>Organisations</h1>

            <div class="form-group row">
                <!--suppress XmlInvalidId -->
                <table class="table" id="table">
                    <thead>
                    <tr>
                        <th>Name</th><th>Website</th><th>Contact</th><th>Alternative Contact</th><th>Action</th>
                    </tr>
                    <thead>
                    <tbody>
                    <div id="editAndDeleteButtons"></div>
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