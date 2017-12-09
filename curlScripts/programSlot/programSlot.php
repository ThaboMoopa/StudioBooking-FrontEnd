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
    //$time = $_GET['time'];
    //$webAddress = $_GET['website'];
    //$contact = $_GET['contact'];
    //$additionalContact = $_GET['additionalContact'];

    if($_GET['action'] == 'findByName') {
        findByName($search);
    }
    elseif($_GET['action'] == 'addProgramSlot') {
        addProgramSlot($name,$time);
    }
    elseif($_GET['action'] == 'editOrganisation') {
        editContributor($bookingDate,$bookingTime);
    }
    elseif($_GET['action'] == 'deleteOrganisation'){
        deleteContributor($bookingId);
    }
    elseif($_GET['action'] == 'readOrganisation'){
        readContributor($bookingId);
    }
    elseif($_GET['action']=='findByIndividualName')
    {
        findByIndividualName($search);
    }
    elseif($_GET['action']=='findByTime')
    {
        findByTime($time);
    }
    elseif($_GET['action']=='findAll')
    {
        findAll();
    }
    elseif($_GET['action']=='readProgramSlot')
    {
        readProgramSlot($id);
    }
}
function readProgramSlot($id)
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_PORT => "8091",
        CURLOPT_URL => "http://localhost:8091/programSlot/readProgramSlot?id=$id",
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
function findAll()
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_PORT => "8091",
        CURLOPT_URL => "http://localhost:8091/programSlot/findAll?",
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
function addProgramSlot($name, $time)
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "8091",
        CURLOPT_URL => "http://localhost:8091/programSlot/addProgramSlot?name=$name&time=$time",
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

function findByTime($time){
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_PORT => "8091",
        CURLOPT_URL => "http://localhost:8091/programSlot/findByTime?time=$time",
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
function findByIndividualName($search){
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_PORT => "8091",
        CURLOPT_URL => "http://localhost:8091/programSlot/findByIndividualName?search=$search",
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
function findByName($search)
{
    //echo "im in";
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_PORT => "8091",
        CURLOPT_URL => "http://localhost:8091/programSlot/findByName?search=$search",
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