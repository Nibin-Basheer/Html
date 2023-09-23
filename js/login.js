function validateUname() {
    var userInput = document.getElementById("uemail");
    var userValue = userInput.value.trim();
    var userError = document.getElementById("errormsg");
    var emailExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    if (userValue === "") {
        userError.textContent="*please enter your email";
        userError.style.fontSize="13px";
        
    }
    else if(!emailExp.test(userValue)){
        userError.textContent="*please enter a valid email";
    }
    else{
        userError.textContent="";
    }
}
function validatePwd() {
    var pwdInput = document.getElementById("upwd");
    var pwdValue = pwdInput.value.trim();
    var pwdError = document.getElementById("errormsg1");

    if (pwdValue === "") {
        pwdError.textContent="*please enter your password";
        pwdError.style.fontSize="13px";
        
    }
    else{
        pwdError.textContent="";
    }
}