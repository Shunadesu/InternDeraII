// Khai bao OBJ DeleteAccount PopUp
const popup_DeleteAccount = document.querySelector(".DeleteAccountPopUp");
// khai báo nút SignOut
let SignOutButton = document.querySelector(".ProfilePage__BottomBar--SignOut");
// khai báo nút Delete Account
let DeleteAccountButton = document.querySelector(".ProfilePage__BottomBar--DeleteButton");
// khai báo nút close DeleteAccount PopUp
let CloseDeleteAccountPopup = document.querySelector(".DeleteAccountPopUpClose");


SignOutButton.addEventListener("click", function() {
    deleteCookie("Logged");
    window.location = domain + "index.html";
});
// Thêm sự kiện click cho phần tử "DeleteAccountButton"
DeleteAccountButton.addEventListener("click", function() {
    showPopup(popup_DeleteAccount);
});
// Thêm sự kiện click cho phần tử "CloseDeleteAccountPopup"
CloseDeleteAccountPopup.addEventListener("click", function() {
    hidePopup(popup_DeleteAccount);
});