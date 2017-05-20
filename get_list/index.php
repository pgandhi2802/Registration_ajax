<!DOCTYPE html>
<html>
    <head>
        <title>REGISTER</title>
        <link rel="stylesheet" type="text/css" href="../css/style.css" />
    </head>
    <body>
        <header>
            <img src="../img/isf_logo.png" alt="isf" id="isf_logo" />
            <img src="../img/juet.png" alt="JUET" id="juet_logo" />
        </header>
        <div id="title"><h1>CORPORATE</h1></div>
        <div id="container">
            <div id="message">
                <?php
                if(isset($_POST['submit'])&&isset($_POST['user'])&&isset($_POST['pass']))
                {
                    if($_POST['user']==="ayan" && $_POST['pass']==="ayan&piyush")
                    {
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
                            <a href="file.csv">CLICK TO GET LIST</a>
                        <?php
                    }
                    else
                    {
                        ?>
                <form action="index.php" method="post">
                    <input type="text" name="user" placeholder="user_name" /><br />
                    <input type="password" name="pass" placeholder="password" /><br />
                    <input type="submit" name="submit" value="Get List" />
                </form>
                <?php
                    }
                }
                else
                {
                ?>
                <form action="index.php" method="post">
                    <input type="text" name="user" placeholder="user_name" /><br />
                    <input type="password" name="pass" placeholder="password" /><br />
                    <input type="submit" name="submit" value="Get List" />
                </form>
                <?php
                }
                ?>
            </div>
        </div>
    </body>
</html>