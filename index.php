<?php
/**
 * Created by IntelliJIDEA.
 * User: thabomoopa
 * Date: 2017/11/16
 * Time: 5:56 PM
 */
include('templates/inc_login.html');
?>
<div id="result"></div>

<div id="container" class="container-fluid">
    <span id="errorPage"></span>
    <ul class="list-group">
        <li class="list-group-item">
            <h1>Login</h1>
            <hr />
                <!-- Username input textfield -->
                <div class="form-group row">
                    <!--suppress XmlInvalidId -->
                    <label for="username" class="col-sm-1 col-form-label">Email</label>
                    <div class="col-sm-5">
                        <input type="text" id="txtEmail"  class="form-control">
                        <small id="errorEmail" class="text-danger"></small>
                    </div>
                </div>
                <!-- End of Username text field  -->

                <!-- Password input textfield -->
                <div class="form-group row">
                    <!--suppress XmlInvalidId -->
                    <label for="password" class="col-sm-1 col-form-label">Password</label>
                    <div class="col-sm-5">
                        <input type="password" id="txtPassword" class="form-control">
                        <small id="errorPassword" class="text-danger"></small>
                    </div>
                </div>
                <!--Button to submit the form -->
                <div class="form-group row">
                    <button name="submitAddCar" id="login" class="btn btn-outline-success" value="Login">Login</button>
                </div>
        </li>
    </ul>
    <br />
    <br />
    <br />
    <div class="modal"><!-- Place at bottom of page --></div>
    <script src="js/index/login.js"></script>
<?php include('templates/inc_footer.html'); ?>
