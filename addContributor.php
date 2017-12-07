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
    <script src="js/contributor/addContributor.js"></script>
    <div id="username"></div>

    <ul class="list-group">

        <li class="list-group-item">

            <h1>Add Contributors</h1>
            <?php include("templates/contributor/inc_contributor.html"); ?>

            <div class="form-group">
                <div class="col-sm-7">
                <button id="AddContributor" name="AddContributor" class="btn btn-outline-success" value="Add Contributor">Add Contributor</button>
                </div>
            </div>
            </form>
        </li>
    </ul>

    <br />
    <br />
    <br />


<?php  include("templates/inc_footer.html"); ?>