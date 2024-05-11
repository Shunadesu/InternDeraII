var popup_z_index = 99;
var domain =  window.location.origin.toString() + "/";
// Function to display the popup
function showPopup(popup) {
    popup_z_index++;
    popup.style.zIndex = popup_z_index.toString();
    popup.style.display = "block";
}


// Function to display the popup no back ground (dialog)
function showPopupNoBackground(popup) {
    popup_z_index++;
    popup.style.zIndex = popup_z_index.toString();
    popup.style.display = "flex";
}

// Function to hide the popup
function hidePopup(popup) {
    popup_z_index--;
    popup.style.display = "none";
}

// hàm add một cookie
function setCookie(cookieName, cookieValue, expirationDays) {
    // Tính toán ngày hết hạn của cookie
    var d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();

    // Thiết lập cookie
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}
// Hàm để xóa một cookie đã thiết lập
function deleteCookie(cookieName) {
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
// Hàm để lấy giá trị của một cookie
function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}
