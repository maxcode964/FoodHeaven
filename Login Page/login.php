<?php
	session_start();
  if(isset($_POST['login'])){
    include('../Dashboard/includes/connection.php');
    $query = "select * from users where email = '$_POST[email]' AND password = '$_POST[password]'";
  	$query_run = mysqli_query($connection,$query);
    if(mysqli_num_rows($query_run)){
			$_SESSION['email'] = $_POST['email'];
			while($row = mysqli_fetch_assoc($query_run)){
				$_SESSION['fname'] = $row['fname'];
				$_SESSION['lname'] = $row['lname'];
				$_SESSION['uid'] = $row['sno'];
			}
      echo "<script type='text/javascript'>
      	window.location.href = '../Dashboard/user_dashboard.php';
      </script>";
    }
    else{
      echo "<script type='text/javascript'>
      	alert('Please enter correct email and password.');
      	window.location.href = 'login.html';
      </script>";
    }
  }
?>