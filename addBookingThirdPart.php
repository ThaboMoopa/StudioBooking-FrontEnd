<?php
/**
 * Created by IntelliJ IDEA.
 * User: thabomoopa
 * Date: 2017/11/20
 * Time: 8:41 PM
 */
include("templates/inc_header.html");
?>
<script src="js/index/homepage.js"></script>
<script src="js/booking/addBooking.js"></script>
<div id="errorFormDates"></div>
<div id="username"></div>
    <ul class="list-group">

        <li class="list-group-item">

            <h1>Adding a Booking</h1>

            <form>
                <div class="row">
                    <div class="col-sm-3">
                        <label for="bathroom">Recording date</label>
                    </div>
                    <div class="col-sm-3">
                        <label for="booking">Time of recording</label>
                    </div>
                    <div class="col-sm-3">
                        <label for="lengthOfRecording" >How long is the booking?</label>
                    </div>
                    <div class="col-sm-3">
                        <label for="technical">Technical Assistant?</label>
                    </div>
                </div>


                <div class="row">
                    <div class="col-sm-3">
                        <input type="text" id="datepicker" class="form-control">
                        <small id="sampleDates" class="form-text text-muted">Click to select a date</small>
                        <small id="errorBookingDate" class="text-danger"></small>
                    </div>

                    <div class="col-sm-3">
                        <select class="form-control" id="times">
                            <option value="0">Select time</option>
                        </select>
                        <small id="errorTimes" class="text-danger"></small>
                    </div>

                    <div class="col-sm-3">
                        <select class="form-control" id="txtLength">
                            <option value = "0">Select length of recording</option>
                            <option>30 Mins</option>
                            <option value = "1">1 Hour</option>
                            <option value = "2">2 Hours</option>
                            <option value = "5">3 Hours</option>
                            <option value = "7">4 Hours</option>
                            <option value = "9">5 Hours</option>
                            <option value = "11">6 Hours</option>
                            <option value = "13">7 Hours</option>
                            <option value = "15">8 Hours</option>
                            <option value = "17">Whole Day</option>
                        </select>
                        <small id="errorLength" class="text-danger"></small>
                    </div>
                    <div class="col-sm-3">
                        <select class="form-control" id="items">
                            <option value="0">Select technical</option>
                        </select>
                        <small id="errorItems" class="text-danger"></small>
                    </div>

                </div>
            <br />
                <hr />
                <div class="row">
                    <div class="col-sm-3">
                        <label for="bathroom">Dates for RCS</label>
                    </div>
                    <div class="col-sm-6">
                        <label for="booking">Additional Info for Technical</label>
                    </div>
<!--                    <div class="col-sm-3">-->
<!--                        <label for="colours">Background Colour</label>-->
<!--                    </div>-->
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <input type="text" id="txtDatesForRCS" class="form-control">
                        <small id="errorMessage" class="form-text text-muted">Type in the dates for RCS files. (Example: 02,09,16,23 || Example: TBC or tbc)</small>
                        <small id="errorDatesForRCS" class="text-danger"></small>
                    </div>

                <div class="col-sm-6">
                    <input type="text" id="txtAdditionalInformationForTechnical" class="form-control">
                    <small id="errorMessage" class="form-text text-muted">Type in additional information that you think is important. If you do not have any just type "None".</small>
                    <small id="errorAdditionalInformationForTechnical" class="text-danger"></small>
                </div>
<!--                    <div class="col-sm-3">-->
<!--                        <select class="form-control" id="colours">-->
<!--                            <option value="0">Select Colour</option>-->
<!--                        </select>-->
<!--                        <small id="sampleColours" class="form-text text-muted"></small>-->
<!--                        <small id="errorColours" class="text-danger"></small>-->
<!--                    </div>-->
                </div>

                <hr />
                <div class="form-group row">
                    <table class="table" id="table">
                    <h4>Bookings for <span id="txtDate"></span></h4>
                        <thead>
                        <tr>
                            <th>Time</th><th>Program Organiser</th><th>Name of Contributor</th><th>Program</th><th>Technical</th><th>Additional Information</th>
                        </tr>
                        <thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div class="form-group">
                    <div class="col-sm-7">
                        <button id="book" name="book" class="btn btn-outline-success" value="Make a booking" onclick="validateContinue()" return false;>Continue </button>
                    </div>

            </form>

        </li>

    </ul>
    <br />
    <br />
    <br />
<div class="modal"><!-- Place at bottom of page --></div>
<?php include("templates/inc_footer.html"); ?>
