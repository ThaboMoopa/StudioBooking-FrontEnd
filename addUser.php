<?php
/**
 * Created by IntelliJ IDEA.
 * User: thabomoopa
 * Date: 08/12/2017
 * Time: 15:04
 */
include("templates/inc_header.html");
?>
    <script src="js/index/homepage.js"></script>
    <script src="js/user/user.js"></script>
    <div id="username"></div>

    <ul class="list-group">

        <li class="list-group-item">

            <h1>Users</h1>

            <form>
                <div class="form-group">
                    <!--suppress XmlInvalidId -->
                    <label for="Name" class="col-sm-7 col-form-label">Name</label>
                    <div class="col-sm-7">
                        <input type="text" id="txtName" class="form-control">
                        <small id="errorName" class="text-danger"></small>
                    </div>

                </div>

                <div class="form-group">
                    <!--suppress XmlInvalidId -->
                    <label for="email" class="col-sm-7 col-form-label">Email Address</label>
                    <div class="col-sm-7">
                        <input type="email" id="txtEmail" class="form-control">
                        <small id="errorEmail" class="text-danger"></small>
                    </div>
                </div>

                <div class="form-group">
                    <!--suppress XmlInvalidId -->
                    <label for="Position" class="col-sm-7 col-form-label">Password</label>
                    <div class="col-sm-7">
                        <input type="password" id="txtPassword" class="form-control">
                        <small id="timeStandalone" class="form-text text-muted">Your password can have the following symbols !, @, $, %, ^, &, * ,</small>
                        <small id="errorPassword" class="text-danger"></small>
                    </div>
                </div>
                <div class="form-group">
                    <!--suppress XmlInvalidId -->
                    <label for="Position" class="col-sm-7 col-form-label">Confirm Password</label>
                    <div class="col-sm-7">
                        <input type="password" id="txtConfirmPassword" class="form-control">
                        <small id="timeStandalone" class="form-text text-muted">Your password can have the following symbols !, @, $, %, ^, &, * ,</small>
                        <small id="errorConfirmPassword" class="text-danger"></small>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-7">
                        <button id="AddUser" name="AddUser" class="btn btn-outline-success">Add User</button>
                    </div>
                </div>
        </li>
    </ul>

    <br />
    <br />
    <br />

<?php  include("templates/inc_footer.html"); ?>