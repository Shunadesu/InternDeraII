// Khai bao OBJ CookieNotice PopUp
const popup_CookieNotice = document.querySelector(".CookieNoticePopUp");
// khai báo nút GotIt in CookieNotice PopUp
let GotItButton = document.querySelector(".CookieNoticePopUp__GotItButton");

// chỉ định thời gian sau bao nhiêu giây thì popup_CookieNotice xuất hiện vd: 3 giây
setTimeout(function(){showPopupNoBackground(popup_CookieNotice);}, 3000);
// Thêm sự kiện click cho phần tử "GotItButton"
GotItButton.addEventListener("click", function() {
    hidePopup(popup_CookieNotice);
});