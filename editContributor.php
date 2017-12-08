<?php
/**
 * Created by IntelliJ IDEA.
 * User: thabomoopa
 * Date: 2017/11/17
 * Time: 10:10 PM
 */
include("templates/inc_header.html");
?>
    <script src="js/index/homepage.js"></script>
    <script src="js/contributor/editContributor.js"></script>
    <div id="username"></div>

    <ul class="list-group">

        <li class="list-group-item">

            <h1>Edit Contributor</h1>

            <?php include("templates/contributor/inc_contributor.html"); ?>

            <div class="form-group">
                <div class="col-sm-7">
                    <button id="EditContributor" name="AddContributor" class="btn btn-outline-success" value="Edit Contributor">Edit Contributor</button>
                </div>
            </div>
            </form>
        </li>

    </ul>

    <br />
    <br />
    <br />
<?php  include("templates/inc_footer.html"); ?>