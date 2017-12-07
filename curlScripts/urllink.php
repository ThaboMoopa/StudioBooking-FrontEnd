<?php
/**
 * Created by IntelliJ IDEA.
 * User: thabomoopa
 * Date: 01/12/2017
 * Time: 20:22
 */


//$url = "http://www.google.com";
//echo readHTML($url);
//
//function readHTML($url) {
//    if(!function_exists("curl_init")) return "cURL extension is not installed";
//    if (trim($url) == "") die("@ERROR@");
//    $curl = curl_init($url);
//    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
//    curl_setopt($curl, CURLOPT_USERPWD, 'username:password');
//    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
//    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
//    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
//    $response = curl_exec($curl);
//    $resultStatus = curl_getinfo($curl);
//    if($resultStatus['http_code'] == 200) {
//        // All Ok
//    } else {
//        echo 'Call Failed '.print_r($resultStatus);
//    }
//    $curl = null;
//    return utf8_encode($response);
//} //* readHTML */