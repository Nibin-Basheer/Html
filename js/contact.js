function validateEmail() {
    let emailInput = document.getElementById("email");
    let emailValue = emailInput.value.trim();
    let emailError = document.getElementById("erroremail");
    let emailExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    if (emailValue === "") {
        emailError.textContent="*please enter your email";
        emailError.style.fontSize="13px";
        emailError.style.color="red";
        
    }
    else if(!emailExp.test(emailValue)){
        emailError.textContent="*please enter a valid email";
    }
    else{
        emailError.textContent="";
    }
}