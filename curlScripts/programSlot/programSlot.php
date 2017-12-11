<?php
/**
 * Created by IntelliJ IDEA.
 * User: thabomoopa
 * Date: 06/12/2017
 * Time: 12:08
 */
if(isset($_GET['action'])) {
    $search = $_GET['search'];
    $time = $_GET['time'];
    $name = $_GET['name'];
    $id = $_GET['id'];
    $link = 'http://192.168.0.104:8443';
    //$time = $_GET['time'];
    //$webAddress = $_GET['website'];
    //$contact = $_GET['contact'];
    //$additionalContact = $_GET['additionalContact'];

    if($_GET['action'] == 'findByName') {
        findByName($link,$search);
    }
    elseif($_GET['action'] == 'addProgramSlot') {
        addProgramSlot($link,$name,$time);
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
    elseif($_GET['action']=='findByIndividualName')
    {
        findByIndividualName($link,$search);
    }
    elseif($_GET['action']=='findByTime')
    {
        findByTime($link,$time);
    }
    elseif($_GET['action']=='findAll')
    {
        findAll($link);
    }
    elseif($_GET['action']=='readProgramSlot')
    {
        readProgramSlot($link,$id);
    }
}
function readProgramSlot($link,$id)
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "8091",
        CURLOPT_URL => "$link/programSlot/readProgramSlot?id=$id",
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
function findAll($link)
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "8091",
        CURLOPT_URL => "$link/programSlot/findAll?",
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
function addProgramSlot($link,$name, $time)
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "8091",
        CURLOPT_URL => "$link/programSlot/addProgramSlot?name=$name&time=$time",
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

function findByTime($link,$time){
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "8091",
        CURLOPT_URL => "$link/programSlot/findByTime?time=$time",
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
function findByIndividualName($link,$search){
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "8091",
        CURLOPT_URL => "$link/programSlot/findByIndividualName?search=$search",
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
        CURLOPT_URL => "$link/programSlot/findByName?search=$search",
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