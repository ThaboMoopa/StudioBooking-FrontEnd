<?php
/**
 * Created by IntelliJ IDEA.
 * User: thabomoopa
 * Date: 2017/11/16
 * Time: 11:35 PM
 */
include("templates/inc_header.html");
?>
    <script src="js/index/homepage.js"></script>
    <script src="js/program/viewProgramSlot.js"></script>
    <div id="username"></div>
<form>
    <div class="form-group">
        <table class="table" id="table">
            <thead>
            <tr>
                <th>Name</th><th>Time Slot</th><th>Action</th>
            </tr>
            <thead>
            <tbody>
            <div id="editAndDeleteButtons"></div>
            </tbody>
        </table>
    </div>
</form>
    <br />
    <br />
    <br />
<?php  include("templates/inc_footer.html"); ?>