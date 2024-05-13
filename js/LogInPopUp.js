// Khai bao OBJ Login popup
const popup_LogIn = document.querySelector(".LogInPopUp");
// Khai bao OBJ SignUp popup
const popup_SignUp = document.querySelector(".SignUpPopUp");

// khai báo nút Profile icon click
let ProfileButton = document.querySelector(".nav__search a");
// khai báo nút close Login popup
let CloseLoginPopup = document.querySelector(".LogInPopUpClose");
// khai báo nút SignUp click
let SignUpButton = document.querySelector(".LogInPopUp__Notes");
// khai báo nút close SignUp popup
let CloseSignUpPopup = document.querySelector(".SignUpPopUpClose");
// khai báo nút LogIn
let LoginButton = document.querySelector(".LogInPopUp__LogInButton");




// Thêm sự kiện click cho phần tử "LoginButton"
ProfileButton.addEventListener("click", function(event) {
    event.preventDefault();
    let LoggedCookieValue = getCookie("Logged");
    if(LoggedCookieValue == "true")
    {
        window.location = domain + "pages/profilepage.html";
    }
    else
    {
        showPopup(popup_LogIn); 
    }
});
// Thêm sự kiện click cho phần tử "closeLoginPopup"
CloseLoginPopup.addEventListener("click", function() {
    hidePopup(popup_LogIn); 
});
// Thêm sự kiện click cho phần tử "SignUpButton"
SignUpButton.addEventListener("click", function() {
    hidePopup(popup_LogIn); 
    showPopup(popup_SignUp);
});
// Thêm sự kiện click cho phần tử "CloseSignUpPopup"
CloseSignUpPopup.addEventListener("click", function() {
    hidePopup(popup_SignUp); 
});
LoginButton.addEventListener("click", function() {
    hidePopup(popup_LogIn); 
    setCookie("Logged", "true", 1);
    location.reload();
});


// 