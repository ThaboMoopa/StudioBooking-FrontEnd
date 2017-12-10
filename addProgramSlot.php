<?php
/**
 * Created by IntelliJ IDEA.
 * User: thabomoopa
 * Date: 2017/11/19
 * Time: 3:28 PM
 */
include("templates/inc_header.html");
?>
    <script src="js/index/homepage.js"></script>
    <script src="js/program/addProgram.js"></script>
    <div id="username"></div>
    <ul class="list-group">
        <li class="list-group-item">
            <h1>Program slot</h1>
            <form>
                <div id="errorForm"></div>
                <div class="form-group">

                    <!--suppress XmlInvalidId -->
                    <label for="program" class="col-sm-7 col-form-label" >Name of Program Slot</label>
                    <div class="col-sm-4">
                        <input type="text" id="programSlot" class="form-control">
                        <small id="errorProgramSlot" class="text-danger"></small>
                    </div>

                    <br />
                </div>
                    <div class="form-group">
                        <label for="programSlot" class="col-sm-7 col-form-label">Time of slot</label>
                        <div class="col-sm-4">
                            <input type="text" id="txtTime" class="form-control">
                            <small id="timeStandalone" class="form-text text-muted">Time format is 00h00 (For Example: 09h30)</small>
                            <small id="errorTime" class="text-danger"></small>
                        </div>
                    </div>
                    <br />
                    <div class="form-group">
                        <div class="col-sm-7">
                            <button id="AddProgram" name="AddProgram" class="btn btn-outline-success">Add Program slot</button>
                        </div>
                    </div>
            </form>
        </li>
    </ul>
<br>
<br>
<br>
    <div class="modal"><!-- Place at bottom of page --></div>
<?php  include("templates/inc_footer.html"); ?>