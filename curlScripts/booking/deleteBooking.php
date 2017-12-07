<?php
/**
 * Created by IntelliJ IDEA.
 * User: thabomoopa
 * Date: 02/12/2017
 * Time: 13:15
 */
$id = $_GET['id'];

$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_PORT => "8091",
    CURLOPT_URL => "http://localhost:8091/booking/deleteBooking?id=$id",
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

