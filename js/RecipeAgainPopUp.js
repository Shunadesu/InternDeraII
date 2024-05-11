// Khai bao OBJ RecipeAgain PopUp
const popup_RecipeAgain = document.querySelector(".RecipeAgainPopUp");
// khai báo nút close RecipeAgain PopUp
let CloseRecipeAgainPopUp = document.querySelector(".RecipeAgainPopUpClose");


// Thêm sự kiện click cho phần tử "CloseRecipeAgainPopUp"
CloseRecipeAgainPopUp.addEventListener("click", function() {
    hidePopup(popup_RecipeAgain);
});