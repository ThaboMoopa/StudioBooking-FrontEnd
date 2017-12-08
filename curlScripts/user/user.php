<?php
/**
 * Created by IntelliJ IDEA.
 * User: thabomoopa
 * Date: 08/12/2017
 * Time: 15:22
 */
if(isset($_GET['action'])) {
    $name = $_GET['name'];
    $password = $_GET['pasword'];
    $email = $_GET['email'];
//    $name = $_GET['name'];
//    $bookingLength = $_GET['bookingLength'];
//    $bookingTechnical = $_GET['bookingTechnical'];
//    $additionalInfo = $_GET['additionalInfo'];
//    $rcsDates = $_GET['rcsDates'];
//    $programId = $_GET['programId'];
//    $contributorId = $_GET['contributorId'];
//    $user = $_GET['user'];


    if($_GET['action'] == 'times') {
        times();
    }
//    elseif($_GET['action'] == 'findByBookingDate') {
//        findByBookingDate($bookingDate);
//    }
//    elseif($_GET['action'] == 'findByBookingDateAndTime') {
//        findByBookingDateAndTime($bookingDate,$bookingTime );
//    }
//    elseif($_GET['action'] == 'readBooking'){
//        readBooking($bookingId);
//    }
//    elseif($_GET['action'] == 'deleteBooking'){
//        deleteBooking($bookingId);
//    }
//    elseif($_GET['action'] == 'findByName'){
//        findByName($name);
//    }
    elseif($_GET['action'] == 'addUser'){
        addUser($name, $password, $email);
    }

}
function addUser($name, $password, $email)
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_PORT => "1080",
        CURLOPT_URL => "http://localhost:8091/user/addUser?email=$email&password=$password&name=$name",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
            "authorization: Basic dXNlcjpwYXNzd29yZA==",
            "cache-control: no-cache"
        ),
    ));
//,"postman-token: 6b0d34a9-8fb9-13c4-28fe-e81d41bef709"
    echo $response = curl_exec($curl);
    $err = curl_error($curl);
    curl_close($curl);
    $results = json_decode($response);
//    for($i =0; $i<18; $i++)
//    {
//        echo "".htmlentities($results[$i]->times)."|";
//
//    }
}