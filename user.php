<?php
/**
 * Created by IntelliJ IDEA.
 * User: thabomoopa
 * Date: 08/12/2017
 * Time: 14:58
 */
include("templates/inc_header.html");
?>
    <script src="js/index/homepage.js"></script>
    <script src="js/user/user.js"></script>
    <div id="username"></div>

    <ul class="list-group">

        <li class="list-group-item">

            <h1>Users</h1>

            <div class="form-group row">
                <!--suppress XmlInvalidId -->
                <table class="table" id="table">
                    <thead>
                    <tr>
                        <th>Name</th><th>Email</th><th>Password</th><th>Action</th>
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

<?php  include("templates/inc_footer.html"); ?>