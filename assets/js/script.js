

let cookieBar = document.getElementById("cookies");

let acceptCookies = document.getElementById("accept");

const value = `; ${document.cookie}`;
const parts = value.split(`; cookieAccepted=`);
if (parts.length !== 2) { cookieBar.style.display = "flex:"}

acceptCookies.addEventListener("click", function () {
    //document.cookie = "cookieAccepted=true;";
    cookieBar.style.display = "none";
});