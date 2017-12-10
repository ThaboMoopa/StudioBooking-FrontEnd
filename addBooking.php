<?php
/**
 * Created by IntelliJ IDEA.
 * User: thabomoopa
 * Date: 2017/11/17
 * Time: 4:20 PM
 */
include("templates/inc_header.html");
?>
    <script src="js/index/homepage.js"></script>
    <script src="js/booking/addBooking.js"></script>
    <div id="username"></div>

    <ul class="list-group">

        <li class="list-group-item">

            <h1>Adding a Booking</h1>

            <h5>Select the contributor</h5>

            <form>
                <div class="form-group">
                    <!--suppress XmlInvalidId -->
                    <label for="search" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-7">
                        <input type="text" id="txtSearch" class="form-control">
                        <small id="errorName" class="form-text text-muted">Type the name of contributor</small>
                    </div>

                </div>
                <div class="form-group">
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