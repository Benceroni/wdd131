document.getElementById("currentyear").innerHTML = "©" + new Date().getFullYear() + "- Spencer Bell - Idaho, United States"
document.getElementById("lastModified").innerHTML = "last Modification: " + document.lastModified

// ~~~EMAIL FOOTER~~~
const emailElement = document.querySelector("#emailSignup");

function userSignedUpEmailBool(){
    if (localStorage.getItem("signedUp")=="true"){
        return true
    }
    localStorage.setItem("signedUp","false");
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
    `<input type="email" name = "email" id="emailInput" placeholder="SteveBolander@monolith.com"><button onclick="addEmailToSignUp()" id="emailSubscribe">Sign Up For Email Updates</button>`
    
}


function showAfterEmailSignUp(){
    emailElement.innerHTML= `Thank you for joining our mailing list`
}



function addEmailToSignUp(){
    let email = document.querySelector("#emailInput").value
    console.log(`input value is ${email}`);
    if (email!=""){
        localStorage.setItem("signedUp",true)
        showAfterEmailSignUp();
        console.log("email added")
    }
    console.log("user tying to sign up")
}

checkForEmailSignUp();
document.querySelector("#emailSubscribe").addEventListener("click",addEmailToSignUp());
//~~~EMAIL FOOTER~~~