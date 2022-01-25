<?php    
include 'conn.php';

if(isset($_POST['button'])){
$name = $_POST['mobile_number'];

$sql = "INSERT INTO contactform VALUES ('$name')";
$res = mysqli_query($con,$sql);
if ($res) {
      unset($_POST);
      echo "New record created successfully";
}
}
?>
