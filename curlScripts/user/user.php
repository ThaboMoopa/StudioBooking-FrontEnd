<?php
/**
 * Created by IntelliJ IDEA.
 * User: thabomoopa
 * Date: 08/12/2017
 * Time: 15:22
 */
if(isset($_GET['action'])) {
    $name = $_GET['name'];
    $password = $_GET['password'];
    $email = $_GET['email'];
    $link = 'http://10.0.0.159:8080';

    if($_GET['action'] == 'findAll') {
        findAll($link);
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
    elseif($_GET['action'] == 'findByEmail'){
        findByEmail($link, $email);
    }
    elseif($_GET['action'] == 'login'){
        login($email, $link, $password);
    }
    elseif($_GET['action'] == 'addUser'){
        addUser($link, $name, $password, $email);
    }

}
function findByEmail($link, $email)
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "8091",
        CURLOPT_URL => "$link/user/findByEmail?email=$email",
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
    echo $results = json_decode($response);
}

function login($email, $link, $password)
{
    $curl = curl_init();

    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "8091",
        CURLOPT_URL => "$link/user/login?email=$email&password=$password",
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

}




function addUser($link, $name, $password, $email)
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "1080",
        CURLOPT_URL => "$link/user/addUser?email=$email&password=$password&name=$name",
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
function findAll($link)
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "1080",
        CURLOPT_URL => "$link/user/findAll?",
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