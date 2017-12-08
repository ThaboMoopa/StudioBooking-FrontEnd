<?php
/**
 * Created by IntelliJ IDEA.
 * User: thabomoopa
 * Date: 2017/11/20
 * Time: 5:09 PM
 */
include("templates/inc_header.html");
?>
    <script src="js/index/homepage.js"></script>

    <div id="username"></div>

    <ul class="list-group">

        <li class="list-group-item">

            <h1>Edit Programs slot</h1>
            <?php include("templates/contributor/inc_programSlot.html"); ?>

            <div class="form-group">
                <div class="col-sm-7">
                    <button id="AddProgramSlot" name="AddProgramSlot" class="btn btn-outline-success" value="AddProgramSlot">Edit Program Slot</button>
                </div>
            </div>
            </form>
        </li>
    </ul>
    <br />
    <br />
    <br />
<?php  include("templates/inc_footer.html"); ?>