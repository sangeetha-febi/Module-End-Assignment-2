document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function(e){
        e.preventDefault();//to prevent page reload

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const emailPattern = /^[a-z0-9_-]+@[a-z]+\.[a-z]{2,}$/;
        const passwordPattern = /^[a-zA-Z0-9!@#$*]{6,}$/;
        const Newpassword = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();
        
        let valid = true;
        // to show the error if  value in email does not match emailPattern 
        if(!emailPattern.test(email)){
            document.getElementById("emailError").innerText = "Invalid email format";
            valid = false;
        }//if emailPattern and value in the variable email matches no error message will be shown in the div
        else{
            document.getElementById("emailError").innerText = "";
        }
          //to show the error if  value in password does not match passwordattern   
        if(!passwordPattern.test(password)){
            document.getElementById("passwordError").innerText = 
            "Password must be above 6 characters with letters, numbers or special characters";
            valid = false;
        }// if it is matches each other no error message will be displayed in the div tag
        else{
            document.getElementById("passwordError").innerText = "";
        }
        //it checks the values in the variables Newpassword and confirmPassword . If the both matches no error or error message will be shown
        if(Newpassword===confirmPassword){
            document.getElementById("confirmPasswordError").innerText = " ";
            
        
        } else{
            document.getElementById("confirmPasswordError").innerText = "Password does not match";
            valid = false;
        }
        // it displays login succeeful message ,if all the fields are entered correctly (valid=true)
        if(valid){
            document.getElementById("loginOutput").innerHTML = `Login successful, Welcome ${email}`
            //it resets all the fields to give new values
            form.reset();
        }
    })
})