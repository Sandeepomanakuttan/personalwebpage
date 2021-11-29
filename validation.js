function validate(){

    if(namevalidate()==true && lastnamevalidate()==true && emailvalidate()==true && Phonevalidate()==true && tellvalidate()==true){
        
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxk4qnsTuy4hNH34ox0-BFOpRAh_vaZW-x5hEz4V_EmQGNo_Yq3SNQI8Cbyjxv4u73w/exec",
        data:$("#submit-form").serialize(),
        method:"post",

        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })

    }

}

function tellvalidate(){
        var vartell= $('#tell').val();
        if(vartell==""){
        $('#tellbox').html("Enter Something....");
            return false
        }else{
            $('#tellbox').html("");
            return true;
        }
    }

    function Phonevalidate(){
        var no= $('#phNumber').val();
        var phPattern= /^[0-9]+$/
        if(no==""){
        $('#phfield').html("Enter Phone number");
            return false
        }else if(no.match(phPattern)){
            if(no.length<10){
                $('#phfield').html("Enter 10 digit Phone number");
                return false
            } else{
          $('#phfield').html("");
            return true
            }
        }
        else{
        $('#phfield').html("Enter Correct Phone number");
            return false
        }
    }
    
    function emailvalidate(){
        var email = $('#email').val();
        var pattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
        if(email==""){
            $('#emailfield').html("Enter the Email");
                return false
            }else if(email.match(pattern)){
            $('#emailfield').html("");
                return true
            }else{
            $('#emailfield').html("Enter Correct Email");
                return false
            }
        }

function namevalidate(){
    var name = $('#Name').val();
    var latterpat=/^[A-Za-z]+$/
    
    if(name==""){
        $('#namefield').html("Enter the Name");
            return false
        }else if(name.match(latterpat)){
            if(name.length<3){
            
                $('#namefield').html("Enter atleast Three latter");
                    return false
                }else{
        $('#namefield').html("");
            return true
                }
        }
        else{
        $('#namefield').html("Enter Correct Name");
            return false
        }
    }

function lastnamevalidate(){
    var lname= $('#lName').val();
    var latterpat=/^[A-Za-z]+$/
    if(lname==""){
        $('#lnamefield').html("Enter the Name");
            return false
        }else if(lname.match(latterpat)){
        $('#lnamefield').html("");
            return true
        }else{
        $('#lnamefield').html("Enter Correct Name");
            return false
        }

    }

    function testname(event) {
        var value = String.fromCharCode(event.which);
        var pattern = new RegExp(/^[A-Za-z]+$/);
        return pattern.test(value);
        
     }
     $('#Name').bind('keypress', testname);
     $('#lName').bind('keypress', testname);



     
    
     function testPh(event) {
        var value = String.fromCharCode(event.which);
        var pattern = new RegExp(/^[0-9]+$/);
        return pattern.test(value);
     }
     
     $('#phNumber').bind('keypress', testPh);

     function testemail(event) {
        var value = String.fromCharCode(event.which);
        var pattern = new RegExp(/^[a-z@.\.w{2,3}]+$/);
        return pattern.test(value);
     }
     
     $('#email').bind('keypress', testemail);

