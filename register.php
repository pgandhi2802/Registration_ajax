<?php
    if(isset($_POST["register"]))
    {
        if(isset($_POST["team_name"])&&isset($_POST["first_preferred_product"])&&isset($_POST["second_preferred_product"])&&isset($_POST["part1_name"])&&isset($_POST["part1_branch"])&&isset($_POST["part1_enroll"])&&isset($_POST["part1_mobile"])&&isset($_POST["part1_department"])&&isset($_POST["part2_name"])&&isset($_POST["part2_branch"])&&isset($_POST["part2_enroll"])&&isset($_POST["part2_mobile"])&&isset($_POST["part2_department"])&&isset($_POST["part3_name"])&&isset($_POST["part3_branch"])&&isset($_POST["part3_enroll"])&&isset($_POST["part3_mobile"])&&isset($_POST["part3_department"]))
        {
            include 'config/connect.php';
            /************************************TEAM NAME**********************************/
            $team_name=$_POST["team_name"];
            /************************************PREFERENCES**********************************/
            $first_preferred_product=$_POST["first_preferred_product"];
            $second_preferred_product=$_POST["second_preferred_product"];
            /************************************PARTICIPANT 1**********************************/
            $part1_name=$_POST["part1_name"];
            $part1_branch=$_POST["part1_branch"];
            $part1_enroll=$_POST["part1_enroll"];
            $part1_mobile=$_POST["part1_mobile"];
            $part1_department=$_POST["part1_department"];
            $query="INSERT INTO `corporate`(`team_name`,`product1`,`product2`,`name`,`branch`,`enroll`,`mobile`,`dept`) VALUES ('$team_name','$first_preferred_product','$second_preferred_product','$part1_name','$part1_branch','$part1_enroll','$part1_mobile','$part1_department')";
            $result1=mysqli_query($con,$query);
            /************************************PARTICIPANT 2**********************************/
            $part2_name=$_POST["part2_name"];
            $part2_branch=$_POST["part2_branch"];
            $part2_enroll=$_POST["part2_enroll"];
            $part2_mobile=$_POST["part2_mobile"];
            $part2_department=$_POST["part2_department"];
            $query="INSERT INTO `corporate`(`team_name`,`product1`,`product2`,`name`,`branch`,`enroll`,`mobile`,`dept`) VALUES ('$team_name','$first_preferred_product','$second_preferred_product','$part2_name','$part2_branch','$part2_enroll','$part2_mobile','$part2_department')";
            $result2=mysqli_query($con,$query);
            /************************************PARTICIPANT 3**********************************/
            $part3_name=$_POST["part3_name"];
            $part3_branch=$_POST["part3_branch"];
            $part3_enroll=$_POST["part3_enroll"];
            $part3_mobile=$_POST["part3_mobile"];
            $part3_department=$_POST["part3_department"];
            $query="INSERT INTO `corporate`(`team_name`,`product1`,`product2`,`name`,`branch`,`enroll`,`mobile`,`dept`) VALUES ('$team_name','$first_preferred_product','$second_preferred_product','$part3_name','$part3_branch','$part3_enroll','$part3_mobile','$part3_department')";
            $result3=mysqli_query($con,$query);
        }
        else
        {
            header("location:index.php");
        }
        ?>
<!DOCTYPE html>
<html>
    <head>
        <title>REGISTER</title>
        <link rel="stylesheet" type="text/css" href="css/style.css" />
    </head>
    <body>
        <header>
            <img src="img/isf_logo.png" alt="isf" id="isf_logo" />
            <img src="img/juet.png" alt="JUET" id="juet_logo" />
        </header>
        <div id="title"><h1>TECH-CORPORATE</h1></div>
        <div id="container">
            <div id="message">
                you have registered!!!!
            </div>
        </div>
    </body>
</html>
        <?php
    }
    else
    {
        header('location:index.php');
    }
?>
