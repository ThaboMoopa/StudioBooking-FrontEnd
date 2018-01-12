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
            <h1>Add Program slot</h1>
            <?php include('templates/programSlot/inc_programSlot.html'); ?>
            <div class="form-group">
                <div class="col-sm-7">
                    <button id="AddProgram" name="AddProgram" class="btn btn-outline-success">Add Program slot</button>
                </div>
            </div>
        </li>
    </ul>
<br>
<br>
<br>
    <div class="modal"><!-- Place at bottom of page --></div>
<?php  include("templates/inc_footer.html"); ?>
