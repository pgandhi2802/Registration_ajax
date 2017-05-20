<?php
    include '../config/connect.php';
    $fp = fopen('file.csv', 'w');
    $fields=["Sr. No.","Team Name","Product1","Product2","Participant Name","Branch","Enrollment No.","Mobile No.","Preferred Department"];
    fputcsv($fp, $fields);
    /************************************TEAM NAME**********************************/
    $query="select distinct team_name,product1,product2 from corporate";
    $result=mysqli_query($con,$query);
    $team_count=0;
    while($row=mysqli_fetch_array($result))
    {
        $team_count++;
        $fields=["","","","","","","","",""];
        fputcsv($fp, $fields);
        $team_name=$row['team_name'];
        $product1=$row['product1'];
        $product2=$row['product2'];
        $query2="select name,mobile,enroll,dept,branch from corporate where team_name='$team_name'";
        $count=0;
        $result2=mysqli_query($con,$query2);
        while($row2=mysqli_fetch_array($result2))
        {
            if($count==0)
            {
                $fields=[$team_count,$team_name,$product1,$product2,$row2['name'],$row2['branch'],$row2['enroll'],$row2['mobile'],$row2['dept']];
                $count++;
            }
            else
                $fields=["","","","",$row2['name'],$row2['branch'],$row2['enroll'],$row2['mobile'],$row2['dept']];
            fputcsv($fp, $fields);
        }
    }
?>