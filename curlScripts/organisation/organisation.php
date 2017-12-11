<?php
/**
 * Created by IntelliJ IDEA.
 * User: thabomoopa
 * Date: 03/12/2017
 * Time: 16:48
 */
if(isset($_GET['action'])) {
    $search = $_GET['search'];
    $name = $_GET['name'];
    $webAddress = $_GET['website'];
    $contact = $_GET['contact'];
    $additionalContact = $_GET['additionalContact'];
    $link = 'http://192.168.0.104:8443';

    if($_GET['action'] == 'findByName') {
        findByName($link,$search);
    }
    elseif($_GET['action'] == 'addOrganisation') {
        addOrganisation($link,$name,$webAddress,$contact,$additionalContact);
    }
    elseif($_GET['action'] == 'editOrganisation') {
        editContributor($link,$bookingDate,$bookingTime);
    }
    elseif($_GET['action'] == 'deleteOrganisation'){
        deleteContributor($link,$bookingId);
    }
    elseif($_GET['action'] == 'readOrganisation'){
        readContributor($link,$bookingId);
    }
    elseif($_GET['action']=='findAll')
    {
        findAll($link);
    }
}
function findById($link,$id)
{
    //echo "im in";
//    $curl = curl_init();
//    curl_setopt_array($curl, array(
//        //CURLOPT_PORT => "8091",
//        CURLOPT_URL => "$link/organisation/addOrganisation?organisationName=$name&contactDetails=$contact&contactPerson=$additionalContact&webAddress=$webAddress",
//        CURLOPT_RETURNTRANSFER => true,
//        CURLOPT_ENCODING => "",
//        CURLOPT_MAXREDIRS => 10,
//        CURLOPT_TIMEOUT => 30,
//        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//        CURLOPT_CUSTOMREQUEST => "GET",
//        CURLOPT_HTTPHEADER => array(
//            "authorization: Basic dXNlcjpwYXNzd29yZA==",
//            "cache-control: no-cache"
//        ),
//    ));
////,"postman-token: 6b0d34a9-8fb9-13c4-28fe-e81d41bef709"
//    echo $response = curl_exec($curl);
//    $err = curl_error($curl);
//    curl_close($curl);
//    $results = json_decode($response);
}
function addOrganisation($link,$name,$webAddress,$contact,$additionalContact)
{
    //echo "im in";
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "8091",
        CURLOPT_URL => "$link/organisation/addOrganisation?organisationName=$name&contactDetails=$contact&contactPerson=$additionalContact&webAddress=$webAddress",
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
}

function findByName($link,$search)
{
    //echo "im in";
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "8091",
        CURLOPT_URL => "$link/organisation/findByName?name=$search",
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

    echo "".htmlentities($results->organisationName)."|";
    echo "".htmlentities($results->id)."|";
    
    //echo $response;
    //echo $results;

}
function findAll($link)
{
    //echo "im in";
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "8091",
        CURLOPT_URL => "$link/organisation/findAll?",
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
}