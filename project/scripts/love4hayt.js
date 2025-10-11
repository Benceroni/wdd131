document.getElementById("currentyear").innerHTML = "©" + new Date().getFullYear() + "- Spencer Bell - Idaho, United States"
document.getElementById("lastModified").innerHTML = "last Modification: " + document.lastModified

const emailElement = document.querySelector("#emailSignup");

function userSignedUpEmailBool(){
    if (localStorage.getItem("signedUp")){
        return true
    }
    localStorage.setItem("signedUp",false);
    return false
}

function checkForEmailSignUp(){
    switch(userSignedUpEmailBool()){
        case true:
            showAfterEmailSignUp();
            break;
        default:
            showBeforeEmailSignUp();
    }
}

function showBeforeEmailSignUp(){
    emailElement.innerHTML =
    `<input type="email" placeholder="SteveBolander@monolith.com"><button id="emailSubscribe">Get email updates</button>`
}


function showAfterEmailSignUp(){
    emailElement.innerHTML= `Thank you for joining our mailing list`
}

checkForEmailSignUp();