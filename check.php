<?php
	
        
        if(isset($_POST['team_name']))
        {
            include "config/connect.php";
            $team_name=$_POST['team_name'];
            $sql = "select team_name from corporate where team_name='$team_name'";
            $rsd = mysqli_query($con,$sql);
            $msg = mysqli_num_rows($rsd);
            echo $msg;
        }
        if(isset($_POST['mobile']))
        {
            include "config/connect.php";
            $mobile=$_POST['mobile'];
            $sql = "select mobile from corporate where mobile='$mobile'";
            $rsd = mysqli_query($con,$sql);
            $msg = mysqli_num_rows($rsd);
            echo $msg;
        }
        if(isset($_POST['enroll']))
        {
            include "config/connect.php";
            $enroll=$_POST['enroll'];
            $sql = "select enroll from corporate where enroll='$enroll'";
            $rsd = mysqli_query($con,$sql);
            $msg = mysqli_num_rows($rsd);
            echo $msg;
        }
?>