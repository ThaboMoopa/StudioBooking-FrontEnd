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