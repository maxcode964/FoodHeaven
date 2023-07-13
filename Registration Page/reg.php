<?php

        include('../Dashboard/includes/connection.php');
        $query = "insert into users values(null,'$_POST[fname]','$_POST[lname]','$_POST[email]','$_POST[password]',$_POST[mobile],'$_POST[address]',0)";
        $query_run = mysqli_query($connection,$query);
        if($query_run){
        echo "<script type='text/javascript'>
            alert('Registeration successfully...');
            window.location.href = '../index.html';
        </script>";
        }
        else{
        echo "<script type='text/javascript'>
            alert('Registeration failed...Plz try again.');
            window.location.href = '../index.html';
        </script>";
        }

?>