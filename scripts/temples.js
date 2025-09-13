document.getElementById("currentyear").innerHTML = "©" + new Date().getFullYear() + "- Spencer Bell - Idaho, United States"
document.getElementById("lastModified").innerHTML = "last Modification: " + document.lastModified

const navId = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', function() {
    navId.classList.toggle('show');
    hambutton.classList.toggle('show');
});

firstList = document.querySelector("li");

firstList.style.fontWeight = 700;