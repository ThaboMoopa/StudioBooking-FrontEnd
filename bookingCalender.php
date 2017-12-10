<?php
/**
 * Created by IntelliJ IDEA.
 * User: thabomoopa
 * Date: 2017/11/16
 * Time: 11:25 PM
 */
include("templates/inc_header.html");
?>
<script src="js/index/homepage.js"></script>
    <script src="js/booking/bookingCalender.js"></script>
    <div id="username"></div>
    <ul class="list-group">

        <li class="list-group-item">

            <h1>Studio Bookings</h1>
            <div class="form-group row">
                <div class="col-sm-7">
                    <input type="text" id="datepicker" class="form-control">
                    <small id="errorMessage" class="form-text text-muted">Click to select a date</small>
                    <small id="errorBookingDate" class="text-danger"></small>
                </div>
            </div>

            <div class="form-group row">
                <table class="table" id="table">
                    <thead>
                    <tr>
                        <th>Time</th><th>Program Organiser</th><th>Name of Contributor</th><th>Program</th><th>Technical</th><th>Additional Information</th><th>Action</th>
                    </tr>
                    <thead>
                    <tbody>
<!--                    <div id="editAndDeleteButtons"></div>-->
                    </tbody>
                </table>
            </div>

            <!--suppress XmlInvalidId -->

                <div class="col-sm-5">


                </div>


            </div>

        </li>

    </ul>

    <br />
    <br />
    <br />
    <div class="modal"><!-- Place at bottom of page --></div>
<?php  include("templates/inc_footer.html"); ?>