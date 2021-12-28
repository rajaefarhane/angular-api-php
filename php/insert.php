<?php
require 'connect.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);
//sanitize
$fName = mysqli_real_escape_string($con, trim($request->fName));
$lName = mysqli_real_escape_string($con, trim($request->lName));
$email = mysqli_real_escape_string($con, $request->email);

//store
$sql = "INSERT INTO `students` (
    `fName`,
    `lName`,
    `email`
)VALUES
('{$fName}',
'{$lName}',
'{$email}')
";
if(mysqli_query($con,$sql))
{
    http_response_code(201);
}
else
{
    return http_response_code(422);
}
}
?>