<?php
/**
 * Created by IntelliJ IDEA.
 * User: thabomoopa
 * Date: 2017/11/18
 * Time: 2:08 AM
 */
include("templates/inc_header.html");
?>
    <script src="js/index/homepage.js"></script>
    <script src="js/booking/addBooking.js"></script>

    <div id="username"></div>

    <ul class="list-group">

        <li class="list-group-item">

            <h1>Adding a Booking</h1>

            <h5>Select program slot</h5>

            <form>

            <div class="form-group">
             <label for="programSlot" class="col-sm-7 col-form-label" >Program Slot</label>
                <div class="col-sm-7">
                <input type="text" id="programSlot" class="form-control">
                <small id="errorName" class="form-text text-muted">Type the name of program slot</small>
                <small id="errorBookingDate" class="text-danger"></small>
             </div>
                </div>
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
        </li>

    </ul>

    <br />
    <br />
    <br />
    <div class="modal"><!-- Place at bottom of page --></div>
<?php  include("templates/inc_footer.html"); ?>