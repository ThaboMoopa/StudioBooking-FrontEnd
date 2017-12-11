<?php
/**
 * Created by IntelliJ IDEA.
 * User: thabomoopa
 * Date: 02/12/2017
 * Time: 11:19
 */

//echo "im in";
if(isset($_GET['action'])) {
    $bookingDate = $_GET['bookingDate'];
    $bookingTime = $_GET['bookingTime'];
    $bookingId = $_GET['bookingId'];
    $name = $_GET['name'];
    $bookingLength = $_GET['bookingLength'];
    $bookingTechnical = $_GET['bookingTechnical'];
    $additionalInfo = $_GET['additionalInfo'];
    $rcsDates = $_GET['rcsDates'];
    $programId = $_GET['programId'];
    $contributorId = $_GET['contributorId'];
    $user = $_GET['user'];
    $link = 'http://192.168.0.104:8443';


    if($_GET['action'] == 'times') {
        times($link);
    } 
    elseif($_GET['action'] == 'findByBookingDate') {
        findByBookingDate($link,$bookingDate);
    }
    elseif($_GET['action'] == 'findByBookingDateAndTime') {
        findByBookingDateAndTime($link,$bookingDate,$bookingTime );
    }
    elseif($_GET['action'] == 'readBooking'){
        readBooking($link,$bookingId);
    }
    elseif($_GET['action'] == 'deleteBooking'){
        deleteBooking($link,$bookingId);
    }
    elseif($_GET['action'] == 'findByName'){
        findByName($link,$name);
    }
    elseif($_GET['action'] == 'addBooking'){
        addBooking($link,$user,$bookingTime,$bookingLength,$bookingTechnical,$bookingDate,$additionalInfo,$rcsDates,$programId,$contributorId);
    }
    
}
function addBooking($link,$user, $bookingTime,$bookingLength,$bookingTechnical,$bookingDate,$additionalInfo,$rcsDates,$programId,$contributorId)
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "1080",
        CURLOPT_URL => "$link/booking/$programId/$contributorId/addBooking?user=$user&bookingDate=$bookingDate&bookingTime=$bookingTime&technical=$bookingTechnical&additionalInfo=$additionalInfo&rcsDates=$rcsDates",
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
function findByName($link,$name)
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "1080",
        CURLOPT_URL => "$link/contributor/Search?search=$name",
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
function times($link)
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "1080",
        CURLOPT_URL => "$link/studioTimes/findAll?",
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
function findByBookingDateAndTime($link,$bookingDate, $bookingTime)
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "1080",
        CURLOPT_URL => "$link/booking/findByBookingDateAndTime?bookingDate=$bookingDate&bookingTime=$bookingTime",
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

   // $results = json_decode($response);

//    echo "".htmlentities($results->bookingTime)."|";
//    echo "".htmlentities($results->user)."|";
//    echo "".htmlentities($results->contributor->name)."|";
//    echo "".htmlentities($results->programSlot->name)."|";
//    echo "".htmlentities($results->technical)."|";
//    echo "".htmlentities($results->additionalInfo)."|";
//    echo "".htmlentities($results->id)."|";

//}
}
function findByBookingDate($link,$bookingDate)
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "1080",
        CURLOPT_URL => "$link/booking/findAllByBookingDate?bookingDate=$bookingDate",
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

//    echo "".htmlentities($results->bookingTime)."|";
//    echo "".htmlentities($results->user)."|";
//    echo "".htmlentities($results->contributor->name)."|";
//    echo "".htmlentities($results->programSlot->name)."|";
//    echo "".htmlentities($results->technical)."|";
//    echo "".htmlentities($results->additionalInfo)."|";
//    echo "".htmlentities($results->id)."|";

//}   
}

function readBooking($link,$id)
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "1080",
        CURLOPT_URL => "$link/booking/readBooking?id=$id",
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
    $response = curl_exec($curl);
    $err = curl_error($curl);
    curl_close($curl);

    $results = json_decode($response);

    echo "".htmlentities($results->contributor->organisation->organisationName)."|";
    echo "".htmlentities($results->contributor->contact)."|";
    echo "".htmlentities($results->contributor->additionalContact)."|";
    echo "".htmlentities($results->bookingTime)."|";
    echo "".htmlentities($results->bookingDate)."|";
    echo "".htmlentities($results->programSlot->name)."|";
    echo "".htmlentities($results->programSlot->time)."|";
    echo "".htmlentities($results->rcsDates)."|";
    echo "".htmlentities($results->contributor->surname)."|";
    echo "".htmlentities($results->contributor->email)."|";
    echo "".htmlentities($results->user)."|";
    echo "".htmlentities($results->technical)."|";
    echo "".htmlentities($results->additionalInfo)."|";
    echo "".htmlentities($results->contributor->name)."|";
    echo "".htmlentities($results->contributor->position)."|";
    echo "".htmlentities($results->id)."|";

}
function deleteBooking($link,$id)
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "1080",
        CURLOPT_URL => "$link/booking/deleteBooking?id=$id",
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
    $response = curl_exec($curl);
    $err = curl_error($curl);
    curl_close($curl);

    $results = json_decode($response);

    echo "deleted";
}