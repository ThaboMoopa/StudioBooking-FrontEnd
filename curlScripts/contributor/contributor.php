<?php
/**
 * Created by IntelliJ IDEA.
 * User: thabomoopa
 * Date: 03/12/2017
 * Time: 16:05
 */
if(isset($_GET['action'])) {
    $bookingDate = $_GET['bookingDate'];
    $bookingTime = $_GET['bookingTime'];
    $bookingId = $_GET['bookingId'];

    $name = $_GET['name'];
    $surname = $_GET['surname'];
    $email = $_GET['email'];
    $position= $_GET['position'];
    $contact = $_GET['contact'];
    $additionalContact = $_GET['additionalContact'];
    $organisation = $_GET['organisation'];

    $id = $_GET['id'];

    if($_GET['action'] == 'addContributor') {
        addContributor($name,$surname,$email,$position,$contact,$additionalContact,$organisation);
    }
    elseif($_GET['action'] == 'editContributor') {
        editContributor($id, $name,$surname,$email,$position,$contact,$additionalContact,$organisation);
    }
    elseif($_GET['action'] == 'deleteContributor'){
        deleteContributor($id);
    }
    elseif($_GET['action'] == 'readContributor'){
        readContributor($id);
    }
    elseif($_GET['action'] == 'readCont'){
        readCont($id);
    }
    elseif($_GET['action']=='findAll')
    {
        findAll();
    }
    elseif($_GET['action']=='findByEmail')
    {
        findByEmail($email);
    }
    elseif($_GET['action']=='findAllContributors')
    {
        findAllContributors();
    }
}
function readCont($id)
{

    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "8091",
        CURLOPT_URL => "http://localhost:8091/contributor/readContributor?id=$id",
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

    //echo $response;
    //echo $results;
//    foreach($results as $key => $value) {
//        echo "".htmlentities($results[$key]->organisationName)."|";
//    }
}
function deleteContributor($id)
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "8091",
        CURLOPT_URL => "http://localhost:8091/contributor/deleteContributor?id=$id",
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

    //echo $response;
    //echo $results;
//    foreach($results as $key => $value) {
//        echo "".htmlentities($results[$key]->organisationName)."|";
//    }
}
function readContributor($id)
{

    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "8091",
        CURLOPT_URL => "http://localhost:8091/contributor/readContributor?id=$id",
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

    //echo $response;
    //echo $results;
    foreach($results as $key => $value) {
        echo "".htmlentities($results[$key]->organisationName)."|";
    }
}
function editContributor($id, $name,$surname,$email,$position,$contact,$additionalContact,$organisation)
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "8091",
        CURLOPT_URL => "http://localhost:8091/contributor/$organisation/updateContributor?id=$id&name=$name&surname=$surname&email=$email&position=$position&contact=$contact&additionalContact=$additionalContact",
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

function addContributor($name,$surname,$email,$position,$contact,$additionalContact,$organisation)
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "8091",
        CURLOPT_URL => "http://localhost:8091/contributor/$organisation/addContributor?name=$name&surname=$surname&email=$email&position=$position&contact=$contact&additionalContact=$additionalContact",
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
function findAll()
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "8091",
        CURLOPT_URL => "http://localhost:8091/organisation/findAll?",
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

    //echo $response;
    //echo $results;
    foreach($results as $key => $value) {
       echo "".htmlentities($results[$key]->organisationName)."|";
    }
}
function findByEmail($email)
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "8091",
        CURLOPT_URL => "http://localhost:8091/contributor/findByEmail?email=$email",
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

    //echo $response;
    //echo $results;
    echo "".htmlentities($response)."|";
}
function findAllContributors()
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        //CURLOPT_PORT => "8091",
        CURLOPT_URL => "http://localhost:8091/contributor/findAll?",
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
    //$results = json_encode($response);
    //echo $response;
    //$sendToAjax['contributor'] = $results;

    foreach($results as $key => $value) {
        $valuesOfArray = array();
        $valuesOfArray = array(
                htmlentities($results[$key]->name),
                htmlentities($results[$key]->surname),
                htmlentities($results[$key]->email),
                htmlentities($results[$key]->organisation->organisationName),
                htmlentities($results[$key]->position),
                htmlentities($results[$key]->contact),
                htmlentities($results[$key]->additionalContact)
            //array("daisy", 0.75 , 25),
            //array("orchid", 1.15 , 7)
        );
        //echo json_encode($valuesOfArray);
        //echo $valuesOfArray;
        //print_r($valuesOfArray);
    }


}