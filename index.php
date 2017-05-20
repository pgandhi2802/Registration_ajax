<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>TECH-CORPORATE</title>
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <script src="js/jquery.js"></script>
        <script src="js/cstm.js"></script>
    </head>
    <body>
        <header>
            <img src="img/isf_logo.png" alt="isf" id="isf_logo" />
            <img src="img/juet.png" alt="JUET" id="juet_logo" />
        </header>
        <div id="title"><h1>TECH-CORPORATE</h1></div>
        <div id="container">
            <div id="left_bar">
                <div class="content">
                    <div id="show_tech_corporate" class="bar">Tech-Corporate</div>
                    <div id="show_introduction" class="bar">Introduction</div>
                    <div id="show_event_description" class="bar">Event Description</div>
                    <div id="show_rounds" class="bar">Rounds</div>
                    <div id="show_judging_criteria" class="bar">Judging Criteria</div>
                    <div id="show_register" class="bar">Register</div>
                    <div id="show_contact" class="bar">Contact Us</div>
                </div>
            </div>
            <div id="right_bar">
                <div id="tech_corporate" class="slide">
                    <div class="content">
                        <p>HURRY UP!!! LIMITED SEATS AVAILABLE!!!</p>
                        <P>Only the first 25 registered teams can participate in the event.</p>
                    </div>
                </div>
                <div id="introduction" class="slide">
                    <div class="content">
                        <h2>Introduction</h2>
                        <p>
                            ISF brings you the event "Tech-Corporate" which gives you an insight on the corporate firms, the functioning of different departments of a company in this competitive era.
                        </p>
                    </div>
                </div>
                <div id="event_description" class="slide">
                    <div class="content">
                        <h2>Event Description</h2>
                        <ul>
                            <li>This is a team event in which team should consists of 3 members</li>
                            <li>
                                each member of a team will represent anyone of the following.
                                <ul>
                                    <li><h3>research development :-</h3><p>the member representing this department will illustrate the technical specifications of the product.</p></li>
                                    <li><h3>marketing :-</h3><p>The member representing this department will illustrate its marketting strategies, i.e. how will that product survive in the market,how will they launch it etc.</p></li>
                                    <li><h3>finance:-</h3><p>the member representing this department will give light on how they will rise the capital required for the product,its revenue generation and its effect on stock market</p></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="rounds" class="slide">
                    <div class="content">
                        <h2>Rounds</h2>
                        <ul>
                            <li><h3>Round - 1 :-</h3>
                                <ul>
                                    <li>A certain number of teams will get the same category of product but each individual team will get a different product.</p><p>e.g. :-If 3 to 4 teams are in the category of laptops then each team will have.a laptop of a different company (eg. hp, dell, lenovo, asus etc) but all in the same price range</p></li>
                                    <li>Now Each team has to present their views (verbally)  on how good their product is, what is its financial and marketing plan and why should the customers prefer it.</li>
                                    <li>after all the teams of a specific category have spoken teams can cross question each other via host</li>
                                </ul>
                            </li>
                            <li><h3>Round - 2 :-</h3>
                                <ul>
                                    <li>the best team of each category will move on to compete each other in the second round which would be held a few days later.<br />Details will be provided to you.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="judging_criteria" class="slide">
                    <div class="content">
                        <h2>Judging Criteria</h2>
                        <ul>
                            <li>teams will be judged on the basis of presentation of the speakers,precision of their facts,and how good their financial and marketing strategies are.</li>
                            <li>the cross questioning round will also play an important role for the points you score</li>
                        </ul>
                    </div>
                </div>
                <div id="register" class="slide">
                    <div class="content">
                        <h2>Register</h2>
                        <form action="register.php" method="post" onsubmit="return check_all()">
                            <table>
                                <tr><td><h3><u>Team Name</u> :-</h3></td><td><input type="text" name="team_name" id="team_name" onkeyup="check_team_name()"/></td></tr>
                                <tr><td><h3><u>Preferred Products</u> :-</h3></td><td></td></tr>
                                <tr><td>Preference 1</td><td><select name="first_preferred_product" id="pref1" onchange="add_pref2()" onkeyup="check_product1()">
                                                                        <option value=""></option>
                                                                        <option value="mobiles">Mobiles</option>
                                                                        <option value="laptops">Laptops</option>
                                                                        <option value="cars">Cars</option>
                                                                        <option value="pc_games">PC Games</option>
                                                                        <option value="camera">Camera</option>
                                                                    </select></td></tr>
                                <tr><td>Preference 2</td><td><select name="second_preferred_product" id="pref2" onchange="check_product2()" onkeyup="check_product2()"><option value=""></option></select></td></tr>

                                
                                <tr><td><h3><u>Participant Details</u> :-</h3></td><td></td></tr>
                                
                                <tr><td><h3><u><i>Participant 1</i></u> :-</h3></td><td></td></tr>
                                <tr><td>Name</td><td><input type="text" name="part1_name" onkeyup="check_part1_name()" id="part1_name"/></td></tr>
                                <tr><td>Branch</td><td><select name="part1_branch" id="part1_branch" onkeyup="check_part1_branch()">
                                        <option value=""></option>
                                        <option value="cse">CSE</option>
                                        <option value="ece">ECE</option>
                                        <option value="mech">MECH</option>
                                        <option value="civil">CIVIL</option>
                                        <option value="che">CHE</option>
                                    </select></td></tr>
                                <tr><td>Enrollment No.</td><td><input type="text" name="part1_enroll" onkeyup="check_part1_enroll()" id="part1_enroll"/></td></tr>
                                <tr><td>Mobile No.</td><td><input type="text" name="part1_mobile" onkeyup="check_part1_mobile()" id="part1_mobile"/></td></tr>
                                <tr><td>Preferred department</td><td><select name="part1_department" id="dep1" onchange="add_dep2()" onkeyup="check_part1_dept()">
                                        <option value=""></option>
                                        <option value="research_development">Research & Development</option>
                                        <option value="marketing">Marketing</option>
                                        <option value="finance">Finance</option>
                                    </select></td></tr>
                                

                                <tr><td><h3><u><i>Participant 2</i></u> :-</h3></td><td></td></tr>
                                <tr><td>Name</td><td><input type="text" name="part2_name" onkeyup="check_part2_name()" id="part2_name"/></td></tr>
                                <tr><td>Branch</td><td><select name="part2_branch" id="part2_branch" onkeyup="check_part2_branch()">
                                        <option value=""></option>
                                        <option value="cse">CSE</option>
                                        <option value="ece">ECE</option>
                                        <option value="mech">MECH</option>
                                        <option value="civil">CIVIL</option>
                                        <option value="che">CHE</option>
                                    </select></td></tr>
                                <tr><td>Enrollment No.</td><td><input type="text" name="part2_enroll" onkeyup="check_part2_enroll()" id="part2_enroll"/></td></tr>
                                <tr><td>Mobile No.</td><td><input type="text" name="part2_mobile" onkeyup="check_part2_mobile()" id="part2_mobile"/></td></tr>
                                <tr><td>Preferred department</td><td><select name="part2_department" id="dep2" onchange="add_dep3()" onkeyup="check_part2_dept()"><option value=""></option></select></td></tr>
                                



                                <tr><td><h3><u><i>Participant 3</i></u> :-</h3></td><td></td></tr>
                                <tr><td>Name</td><td><input type="text" name="part3_name" onkeyup="check_part3_name()" id="part3_name"/></td></tr>
                                <tr><td>Branch</td><td><select name="part3_branch" id="part3_branch" onkeyup="check_part3_branch()">
                                        <option value=""></option>
                                        <option value="cse">CSE</option>
                                        <option value="ece">ECE</option>
                                        <option value="mech">MECH</option>
                                        <option value="civil">CIVIL</option>
                                        <option value="che">CHE</option>
                                    </select></td></tr>
                                <tr><td>Enrollment No.</td><td><input type="text" name="part3_enroll" onkeyup="check_part3_enroll()" id="part3_enroll"/></td></tr>
                                <tr><td>Mobile No.</td><td><input type="text" name="part3_mobile" onkeyup="check_part3_mobile()" id="part3_mobile"/></td></tr>
                                <tr><td>Preferred department</td><td><select name="part3_department" id="dep3" onchange="check_part3_department()" onkeyup="check_part3_dept()"><option value=""></option></select></td></tr>
                                <tr><td></td><td><input type="submit" name="register" value="register" /></td></tr>
                                </table>
                        </form>
                        <ul>
                            <li>*teams will be informed about the product on which they have to speak upon, via sms, 3 days prior to the event.</li>
                            <li>*teams are advised to gather some information about the product, namely its specifications, and how can it be marketed and how can the investment be financed.</li>
                        </ul>
                    </div>
                </div>
                <div id="contact" class="slide">
                    <div class="content">
                        <div id="left">
                            <h4><u>Event Manager</u></h4>
                            <p><a href="https://www.facebook.com/ayan.mondal.395" target="_blank">Ayan Mondal</a> (+91-9425606546)</p>
                            <p><a href="https://www.facebook.com/EngineerASHISH" target="_blank">Ashish Soni</a> (+91-9165978707)</p>
                            <p><a href="https://www.facebook.com/shubhi.agarwal.92167" target="_blank">Shubhi Agarwal</a></p>
                        </div>
                        <div id="right">
                            <h4><u>Co-ordinator</u></h4>
                            <p><a href="https://www.facebook.com/ohhyaaaa" target="_blank">Kartik Shrivastava</a> (+91-9479404375)</p>
                            <p><a href="https://www.facebook.com/rijul.jain.18" target="_blank">Rijul Jain</a> (+91-8435962435)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <p>Designed By <a href="" target="_blank">PIYUSH GANDHI</a></p>
        </footer>
    </body>
    <script src="js/check.js"></script>
</html>