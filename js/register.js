function validateFname() {
    var fnameInput = document.getElementById("firstName");
    var fnameValue = fnameInput.value.trim();
    var Errorfname = document.getElementById("Errorfname");

    if (fnameValue === "") {
        Errorfname.textContent="*please enter your first name";
        Errorfname.style.fontSize="13px";
        Errorfname.style.color="red";
    }
    else{
        Errorfname.textContent="";
    }
}
function validateLname() {
    var lnameInput = document.getElementById("lastName");
    var lnameValue = lnameInput.value.trim();
    var Errorlname = document.getElementById("Errorlname");

    if (lnameValue === "") {
        Errorlname.textContent="*please enter your second name";
        Errorlname.style.fontSize="13px";
        Errorlname.style.color="red";
    }
    else{
        Errorlname.textContent="";
    }
}
function validatePhone() {
    var phoneInput = document.getElementById("phone");
    var phoneValue = phoneInput.value.trim();
    var phoneError = document.getElementById("Errorphone");
    var phoneExp = /^\d{10}$/;

    if (phoneValue === "") {
        phoneError.textContent = "*Please enter your phone number";
        phoneNumberError.style.fontSize = "13px";
        phoneNumberError.style.color = "red";
    } else if (!phoneExp.test(phoneValue)) {
        phoneError.textContent = "*please enter a valid phone number";
        phoneError.style.fontSize = "13px";
        phoneError.style.color = "red";
    } else {
        phoneError.textContent = "";
    }
}

function validateEmail() {
    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value.trim();
    var emailError = document.getElementById("Erroremail");
    var emailExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    if (emailValue === "") {
        emailError.textContent = "*Please enter your email address";
        emailError.style.fontSize = "13px";
        emailError.style.color = "red";
    } else if (!emailExp.test(emailValue)) {
        emailError.textContent = "*please enter a valid email";
        emailError.style.fontSize = "13px";
        emailError.style.color = "red";
    } else {
        emailError.textContent = "";
    }
}
function comparePasswords() {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const passwordError = document.getElementById("passwordError");

    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password === confirmPassword) {
        passwordError.textContent = "";
    } else {
        passwordError.textContent = "Passwords do not match!";
        passwordError.style.color = "red";
        passwordError.style.fontSize="13px";
    }
}
        