<?php
/**
 * Created by IntelliJ IDEA.
 * User: thabomoopa
 * Date: 2017/11/16
 * Time: 9:33 PM
 */
include("templates/inc_header.html");
?>
<script src="js/index/homepage.js"></script>
    <script src="js/index/clearSessions.js"></script>
<div id="username"></div>
<div id="logout"></div>

        <ul class="list-group">

            <li class="list-group-item">

                <h1>Welcome</h1>

                <div class="form-group row">

                    <!--suppress XmlInvalidId -->
                        <div class="col-sm-5">

                        <a href="bookingCalender.php" class="btn btn-outline-warning btn-lg btn-block" id="bookingCalender">Daily Bookings</a>

                    </div>

                    <div class="col-sm-5">

                        <a href="contributor.php" class="btn btn-outline-warning btn-lg btn-block" id="contributor">Contributors</a>

                    </div>

                </div>

                <div class="form-group row">

                    <div class="col-sm-5">

                        <a href="programSlot.php" class="btn btn-outline-warning btn-lg btn-block" id="programSlot">Program Slot</a>

                    </div>
                    <div class="col-sm-5">

                        <a href="guests.php" class="btn btn-outline-warning btn-lg btn-block" id="guests">Guests</a>

                    </div>


                </div>

                <div class="form-group row">


                </div>

            </li>

        </ul>
    <br />
    <br />
    <br />
    <div class="modal"><!-- Place at bottom of page --></div>
<?php  include("templates/inc_footer.html"); ?>