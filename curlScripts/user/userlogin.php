<?php
/**
 * Created by IntelliJ IDEA.
 * User: thabomoopa
 * Date: 01/12/2017
 * Time: 20:22
 */

$email = $_GET['email'];
$password = $_GET['password'];

$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_PORT => "8091",
    CURLOPT_URL => "http://localhost:8091/user/login?email=$email&password=$password",
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

if($email == $results->email)
{
    echo "email correct|";
}
else{
    echo "email incorrect";
}
if($password == $results->password)
{
    echo "password correct|";
}
else{
    echo "password incorrect";
}
echo $results->name;

