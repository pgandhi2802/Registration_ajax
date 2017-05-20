function add_pref2(){
                $("#pref2").empty();
                $("#pref2").append('<option value="">----------</option>');
                var myElement = document.getElementById("pref1").value;
                var array=["mobiles","laptops","cars","pc_games","camera"];
                var array2=["Mobiles","Laptops","Cars","PC Games","Camera"];
                var i=0;
                for(i=0;i<5;i++)
                {
                    if(array[i]!==myElement)
                    {
                        $("#pref2").append('<option value="'+array[i]+'">'+array2[i]+'</option>');
                    }
                }
                check_product1();
            }
            function add_dep2(){
                $("#dep2").empty();
                $("#dep2").append('<option value="">--------------------------------------</option>');
                var myElement = document.getElementById("dep1").value;
                var array=["research_development","marketing","finance"];
                var array2=["Research & Development","Marketing","Finance"];
                var i=0;
                for(i=0;i<3;i++)
                {
                    if(array[i]!==myElement)
                    {
                        $("#dep2").append('<option value="'+array[i]+'">'+array2[i]+'</option>');
                    }
                }
                check_part1_dept();
            }
            function add_dep3(){
                $("#dep3").empty();
                var myElement = document.getElementById("dep1").value;
                var myElement2 = document.getElementById("dep2").value;
                var array=["research_development","marketing","finance"];
                var array2=["Research & Development","Marketing","Finance"];
                var i=0;
                for(i=0;i<3;i++)
                {
                    if(array[i]!==myElement&&array[i]!==myElement2)
                    {
                        $("#dep3").append('<option value="'+array[i]+'">'+array2[i]+'</option>');
                    }
                }
                check_part2_dept();
                check_part3_dept();
            }
            function check_team_name(){
                if(document.getElementById("team_name").value.length===0)
                {
                    $("#team_name").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                var check=!/[<>]/g.test(document.getElementById("team_name").value);
                if(!check)
                {
                    $("#team_name").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                else
                {
                    $.ajax({
                        type: "POST",
                        data: "team_name="+document.getElementById("team_name").value,
                        url: "check.php",
                        success: function(data){
                            if(data !== "0")
                            {
                                $("#team_name").css({"border-bottom":"3px solid #AD3333"});
                                result=false;
                            }
                            else
                            {
                                $("#team_name").css({"border-bottom":"3px solid #00FF00"});
                                result=true;
                            }
                        }
                    });
                    return result
                }
            }
            function check_part1_name(){
                if(document.getElementById("part1_name").value.length===0)
                {
                    $("#part1_name").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                var check=!/[~`@!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\\0-9]/g.test(document.getElementById("part1_name").value);
                if(!check)
                {
                    $("#part1_name").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                else
                {
                    $("#part1_name").css({"border-bottom":"3px solid #00FF00"});
                    return true;
                }
            }
            function check_part1_enroll(){
                if(document.getElementById("part1_enroll").value.length===0)
                {
                    $("#part1_enroll").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                var check=!/[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\\a-z]/g.test(document.getElementById("part1_enroll").value);
                if(!check)
                {
                    $("#part1_enroll").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                else
                {
                    $.ajax({
                        type: "POST",
                        data: "enroll="+document.getElementById("part1_enroll").value,
                        url: "check.php",
                        success: function(data){
                            if(data !== "0")
                            {
                                $("#part1_enroll").css({"border-bottom":"3px solid #AD3333"});
                                result=false;
                            }
                            else
                            {
                                if(document.getElementById("part1_enroll").value===document.getElementById("part2_enroll").value||document.getElementById("part1_enroll").value===document.getElementById("part3_enroll").value)
                                {
                                    $("#part1_enroll").css({"border-bottom":"3px solid #AD3333"});
                                    if(document.getElementById("part1_enroll").value===document.getElementById("part2_enroll").value)
                                        $("#part2_enroll").css({"border-bottom":"3px solid #AD3333"});
                                    if(document.getElementById("part1_enroll").value===document.getElementById("part3_enroll").value)
                                        $("#part3_enroll").css({"border-bottom":"3px solid #AD3333"});
                                    result= false;
                                }
                                else
                                {
                                    $("#part1_enroll").css({"border-bottom":"3px solid #00FF00"});
                                    result=true;
                                }
                            }
                        }
                    });
                    return result;
                }
            }
            function check_part1_mobile(){
                if(document.getElementById("part1_mobile").value.length===0)
                {
                    $("#part1_mobile").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                var hello=document.getElementById("part1_mobile").value;
                var check=!/[~`!#@$%\^&*+=\-\[\]\\';,/{}|\\":<>\\a-z]/g.test(hello);
                var result;
                if(!check)
                    result=false;
                else
                {
                    var check1=hello.length;
                    if(check1===10)
                    {
                        var check2=hello.charAt(0);
                        if(!/[0-6]/g.test(check2))
                            result=true;
                        else
                            result=false;
                    }
                    else
                        result=false;
                }
                if(result)
                {
                    $.ajax({
                        type: "POST",
                        data: "mobile="+document.getElementById("part1_mobile").value,
                        url: "check.php",
                        success: function(data){
                            if(data !== "0")
                            {
                                $("#part1_mobile").css({"border-bottom":"3px solid #AD3333"});
                                result1= false;
                            }
                            else
                            {
                                if(document.getElementById("part1_mobile").value===document.getElementById("part2_mobile").value||document.getElementById("part1_mobile").value===document.getElementById("part3_mobile").value)
                                {
                                    $("#part1_mobile").css({"border-bottom":"3px solid #AD3333"});
                                    if(document.getElementById("part1_mobile").value===document.getElementById("part2_mobile").value)
                                        $("#part2_mobile").css({"border-bottom":"3px solid #AD3333"});
                                    if(document.getElementById("part1_mobile").value===document.getElementById("part3_mobile").value)
                                        $("#part3_mobile").css({"border-bottom":"3px solid #AD3333"});
                                    result1= false;
                                }
                                else
                                {
                                    $("#part1_mobile").css({"border-bottom":"3px solid #00FF00"});
                                    result1=true;
                                }
                            }
                        }
                    });
                    return result1;
                }
                else
                {
                    $("#part1_mobile").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
            }
            function check_part2_name(){
                if(document.getElementById("part2_name").value.length===0)
                {
                    $("#part2_name").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                var check=!/[~`!#$@%\^&*+=\-\[\]\\';,/{}|\\":<>\\1234567890]/g.test(document.getElementById("part2_name").value);
                if(!check)
                {
                    $("#part2_name").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                else
                {
                    $("#part2_name").css({"border-bottom":"3px solid #00FF00"});
                    return true;
                }
            }
            function check_part2_enroll(){
                if(document.getElementById("part2_enroll").value.length===0)
                {
                    $("#part2_enroll").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                var check=!/[~`!#$%@\^&*+=\-\[\]\\';,/{}|\\":<>\\a-z]/g.test(document.getElementById("part2_enroll").value);
                if(!check)
                {
                    $("#part2_enroll").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                else
                {
                    $.ajax({
                        type: "POST",
                        data: "enroll="+document.getElementById("part2_enroll").value,
                        url: "check.php",
                        success: function(data){
                            if(data !== "0")
                            {
                                $("#part2_enroll").css({"border-bottom":"3px solid #AD3333"});
                                result= false;
                            }
                            else
                            {
                                if(document.getElementById("part2_enroll").value===document.getElementById("part1_enroll").value||document.getElementById("part2_enroll").value===document.getElementById("part3_enroll").value)
                                {
                                    $("#part2_enroll").css({"border-bottom":"3px solid #AD3333"});
                                    if(document.getElementById("part2_enroll").value===document.getElementById("part1_enroll").value)
                                        $("#part1_enroll").css({"border-bottom":"3px solid #AD3333"});
                                    if(document.getElementById("part2_enroll").value===document.getElementById("part3_enroll").value)
                                        $("#part3_enroll").css({"border-bottom":"3px solid #AD3333"});
                                    result= false;
                                }
                                else
                                {
                                    $("#part2_enroll").css({"border-bottom":"3px solid #00FF00"});
                                    result=true;
                                }
                            }
                        }
                    });
                    return result;
                }
            }
            function check_part2_mobile(){
                if(document.getElementById("part2_mobile").value.length===0)
                {
                    $("#part2_mobile").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                var hello=document.getElementById("part2_mobile").value;
                var check=!/[~`!#$%\@^&*+=\-\[\]\\';,/{}|\\":<>\\a-z]/g.test(hello);
                var result;
                if(!check)
                    result=false;
                else
                {
                    var check1=hello.length;
                    if(check1===10)
                    {
                        var check2=hello.charAt(0);
                        if(!/[0-6]/g.test(check2))
                            result=true;
                        else
                            result=false;
                    }
                    else
                        result=false;
                }
                if(result)
                {
                    $.ajax({
                        type: "POST",
                        data: "mobile="+document.getElementById("part2_mobile").value,
                        url: "check.php",
                        success: function(data){
                            if(data !== "0")
                            {
                                $("#part2_mobile").css({"border-bottom":"3px solid #AD3333"});
                                result1= false;
                            }
                            else
                            {
                                if(document.getElementById("part2_mobile").value===document.getElementById("part1_mobile").value||document.getElementById("part2_mobile").value===document.getElementById("part3_mobile").value)
                                {
                                    $("#part2_mobile").css({"border-bottom":"3px solid #AD3333"});
                                    if(document.getElementById("part2_mobile").value===document.getElementById("part1_mobile").value)
                                        $("#part1_mobile").css({"border-bottom":"3px solid #AD3333"});
                                    if(document.getElementById("part2_mobile").value===document.getElementById("part3_mobile").value)
                                        $("#part3_mobile").css({"border-bottom":"3px solid #AD3333"});
                                    result1= false;
                                }
                                else
                                {
                                    $("#part2_mobile").css({"border-bottom":"3px solid #00FF00"});
                                    result1=true;
                                }
                            }
                        }
                    });
                    return result1;
                }
                else
                {
                    $("#part2_mobile").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
            }
            function check_part3_name(){
                if(document.getElementById("part3_name").value.length===0)
                {
                    $("#part3_name").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                var check=!/[~`!#$%\^@&*+=\-\[\]\\';,/{}|\\":<>\\1234567890]/g.test(document.getElementById("part3_name").value);
                if(!check)
                {
                    $("#part3_name").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                else
                {
                    $("#part3_name").css({"border-bottom":"3px solid #00FF00"});
                    return true;
                }
            }
            function check_part3_enroll(){
                if(document.getElementById("part3_enroll").value.length===0)
                {
                    $("#part3_enroll").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                var check=!/[~`!#$%\^&@*+=\-\[\]\\';,/{}|\\":<>\\a-z]/g.test(document.getElementById("part3_enroll").value);
                if(!check)
                {
                    $("#part3_enroll").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                else
                {
                    $.ajax({
                        type: "POST",
                        data: "enroll="+document.getElementById("part3_enroll").value,
                        url: "check.php",
                        success: function(data){
                            if(data !== "0")
                            {
                                $("#part3_enroll").css({"border-bottom":"3px solid #AD3333"});
                                result= false;
                            }
                            else
                            {
                                if(document.getElementById("part3_enroll").value===document.getElementById("part1_enroll").value||document.getElementById("part3_enroll").value===document.getElementById("part2_enroll").value)
                                {
                                    $("#part3_enroll").css({"border-bottom":"3px solid #AD3333"});
                                    if(document.getElementById("part3_enroll").value===document.getElementById("part1_enroll").value)
                                        $("#part1_enroll").css({"border-bottom":"3px solid #AD3333"});
                                    if(document.getElementById("part3_enroll").value===document.getElementById("part2_enroll").value)
                                        $("#part2_enroll").css({"border-bottom":"3px solid #AD3333"});
                                    result= false;
                                }
                                else
                                {
                                    $("#part3_enroll").css({"border-bottom":"3px solid #00FF00"});
                                    result=true;
                                }
                            }
                        }
                    });
                    return result;
                }
            }
            function check_part3_mobile(){
                if(document.getElementById("part3_mobile").value.length===0)
                {
                    $("#part3_mobile").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                var hello=document.getElementById("part3_mobile").value;
                var check=!/[~`!#$%\^&*@+=\-\[\]\\';,/{}|\\":<>\\a-z]/g.test(hello);
                var result;
                if(!check)
                    result=false;
                else
                {
                    var check1=hello.length;
                    if(check1===10)
                    {
                        var check2=hello.charAt(0);
                        if(!/[0-6]/g.test(check2))
                            result=true;
                        else
                            result=false;
                    }
                    else
                        result=false;
                }
                if(result)
                {
                    $.ajax({
                        type: "POST",
                        data: "mobile="+document.getElementById("part3_mobile").value,
                        url: "check.php",
                        success: function(data){
                            if(data !== "0")
                            {
                                $("#part3_mobile").css({"border-bottom":"3px solid #AD3333"});
                                result1= false;
                            }
                            else
                            {
                                if(document.getElementById("part3_mobile").value===document.getElementById("part1_mobile").value||document.getElementById("part3_mobile").value===document.getElementById("part2_mobile").value)
                                {
                                    $("#part3_mobile").css({"border-bottom":"3px solid #AD3333"});
                                    if(document.getElementById("part3_mobile").value===document.getElementById("part1_mobile").value)
                                        $("#part1_mobile").css({"border-bottom":"3px solid #AD3333"});
                                    if(document.getElementById("part3_mobile").value===document.getElementById("part2_mobile").value)
                                        $("#part2_mobile").css({"border-bottom":"3px solid #AD3333"});
                                    result1= false;
                                }
                                else
                                {
                                    $("#part3_mobile").css({"border-bottom":"3px solid #00FF00"});
                                    result1=true;
                                }
                            }
                        }
                    });
                    return result1;
                }
                else
                {
                    $("#part3_mobile").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
            }
            function check_product1(){
                if(document.getElementById("pref1").value.length===0)
                {
                    $("#pref1").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                else
                {
                    $("#pref1").css({"border-bottom":"3px solid #00FF00"});
                    return true;
                }
            }
            function check_product2(){
                if(document.getElementById("pref2").value.length===0)
                {
                    $("#pref2").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                else
                {
                    $("#pref2").css({"border-bottom":"3px solid #00FF00"});
                    return true;
                }
            }
            function check_part1_branch(){
                if(document.getElementById("part1_branch").value.length===0)
                {
                    $("#part1_branch").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                else
                {
                    $("#part1_branch").css({"border-bottom":"3px solid #00FF00"});
                    return true;
                }
            }
            function check_part1_dept(){
                if(document.getElementById("dep1").value.length===0)
                {
                    $("#dep1").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                else
                {
                    $("#dep1").css({"border-bottom":"3px solid #00FF00"});
                    return true;
                }
            }
            function check_part2_branch(){
                if(document.getElementById("part2_branch").value.length===0)
                {
                    $("#part2_branch").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                else
                {
                    $("#part2_branch").css({"border-bottom":"3px solid #00FF00"});
                    return true;
                }
            }
            function check_part2_dept(){
                if(document.getElementById("dep2").value.length===0)
                {
                    $("#dep2").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                else
                {
                    $("#dep2").css({"border-bottom":"3px solid #00FF00"});
                    return true;
                }
            }
            function check_part3_branch(){
                if(document.getElementById("part3_branch").value.length===0)
                {
                    $("#part3_branch").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                else
                {
                    $("#part3_branch").css({"border-bottom":"3px solid #00FF00"});
                    return true;
                }
            }
            function check_part3_dept(){
                if(document.getElementById("dep3").value.length===0)
                {
                    $("#dep3").css({"border-bottom":"3px solid #AD3333"});
                    return false;
                }
                else
                {
                    $("#dep3").css({"border-bottom":"3px solid #00FF00"});
                    return true;
                }
            }
            function check_all(){
                var result_team_name=check_team_name();
                alert("team_name"+result_team_name);
                
                var result_product1=check_product1();
                alert("product1"+result_product1);
                
                var result_product2=check_product2();
                alert("product2"+result_product2);
                
                var result_part1_name=check_part1_name();
                alert("part1_name"+result_part1_name);
                
                var result_part1_branch=check_part1_branch();
                alert("part1_branch"+result_part1_branch);
                
                var result_part1_enroll=check_part1_enroll();
                alert("part1_enroll"+result_part1_enroll);
                
                var result_part1_mobile=check_part1_mobile();
                alert("part1_mobile"+result_part1_mobile);
                
                var result_part1_dept=check_part1_dept();
                alert("part1_dept"+result_part1_dept);
                
                var result_part2_name=check_part2_name();
                alert("part2_name"+result_part2_name);
                
                var result_part2_branch=check_part2_branch();
                alert("part2_branch"+result_part2_branch);
                
                var result_part2_enroll=check_part2_enroll();
                alert("part2_enroll"+result_part2_enroll);
                
                var result_part2_mobile=check_part2_mobile();
                alert("part2_mobile"+result_part2_mobile);
                
                var result_part2_dept=check_part2_dept();
                alert("part2_dept"+result_part2_dept);
                
                var result_part3_name=check_part3_name();
                alert("part3_name"+result_part3_name);
                
                var result_part3_branch=check_part3_branch();
                alert("part3_branch"+result_part3_branch);
                
                var result_part3_enroll=check_part3_enroll();
                alert("part3_enroll"+result_part3_enroll);
                
                var result_part3_mobile=check_part3_mobile();
                alert("part3_mobile"+result_part3_mobile);
                
                var result_part3_dept=check_part3_dept();                
                alert("part3_dept"+result_part3_dept);
                
                if(result_team_name&&result_product1&&result_product2&&result_part1_name&&result_part1_branch&&result_part1_enroll&&result_part1_mobile&&result_part1_dept&&result_part2_name&&result_part2_branch&&result_part2_enroll&&result_part2_mobile&&result_part2_dept&&result_part3_name&&result_part3_branch&&result_part3_enroll&&result_part3_mobile&&result_part3_dept)
                    return true;
                else
                    return false;
            }
