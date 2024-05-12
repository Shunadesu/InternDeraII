// Khai bao OBJ UndoDelete PopUp
const popup_UndoDelete = document.querySelector(".UndoDeletePopUp");
var timeoutUndoDelete;
var AllowUndo = "false";
var array = new Array();


// khai báo nút All button in Favorites page
let AllIconButton = document.querySelector(".MenuControl__All");
// khai báo nút Select button in Favorites page
let SelectIconButton = document.querySelector(".MenuControl__Select");
// khai báo nút Delete button in Favorites page
let DeleteIconButton = document.querySelector(".MenuControl__Delete");
// khai báo list item favorites
let FavoritesItems_Initial = document.querySelectorAll(".FavoritesPage__ResutlsContent--Item");
// khai báo nút Undo in UndoDelete popup
let UndoButton = popup_UndoDelete.querySelector(".UndoDeletePopUp__UndoButton");


// Function to display the UndoDelete popup
function showUndoDeletePopup(popup,message) {
    let messageText = popup_UndoDelete.querySelector(".UndoDeletePopUp__text");
    messageText.innerHTML=message;
    popup_z_index++;
    popup.style.zIndex = popup_z_index.toString();
    popup.style.display = "flex";
}

// Function xóa mảng các đối tượng 
function deleteArrayOBJ(arr){
    for(let i = 0; i<arr.length ; i++){
        arr[i].remove();
    }
}
// Function khôi mảng các đối tượng 
function restoreArrayOBJ(arr){
    for(let i = 0; i<arr.length ; i++){
        arr[i].style.display = "flex";
    }
}


// Thêm sự kiện click cho phần tử "AllIconButton"
AllIconButton.addEventListener("click", function() {
    let FavoritesItems = document.querySelectorAll(".FavoritesPage__ResutlsContent--Item");// khai báo list item favorites 
    if(AllIconButton.dataset.checkbox == "false")
    {
        AllIconButton.dataset.checkbox = "true";
        AllIconButton.innerHTML='<i class="fa-regular fa-circle-dot"></i><span>All</span>';
        SelectIconButton.dataset.checkbox = "true";
        for(let i = 0; i<FavoritesItems.length ; i++){
            let ItemCheckBox = FavoritesItems[i].querySelector("i");
            FavoritesItems[i].dataset.checkbox = "true";ItemCheckBox.setAttribute("class", "fa-regular fa-circle-check");//check all item
            ItemCheckBox.style.display = "block";
        }
    }
    else if(AllIconButton.dataset.checkbox == "true")
    {
        AllIconButton.dataset.checkbox = "false";
        AllIconButton.innerHTML='<i class="fa-regular fa-circle"></i><span>All</span>';
        SelectIconButton.dataset.checkbox = "true";
        for(let i = 0; i<FavoritesItems.length ; i++){
            let ItemCheckBox = FavoritesItems[i].querySelector("i");
            FavoritesItems[i].dataset.checkbox = "false";ItemCheckBox.setAttribute("class", "fa-regular fa-circle");//Bỏ check all item
            ItemCheckBox.style.display = "block";
        }
    }
});
// Thêm sự kiện click cho phần tử "SelectIconButton"
SelectIconButton.addEventListener("click", function() {
    let FavoritesItems = document.querySelectorAll(".FavoritesPage__ResutlsContent--Item");// khai báo list item favorites
    if(SelectIconButton.dataset.checkbox == "false")
    {
        SelectIconButton.dataset.checkbox = "true";
        for(let i = 0; i<FavoritesItems.length ; i++){
            let ItemCheckBox = FavoritesItems[i].querySelector("i");
            ItemCheckBox.style.display = "block";
        }
    }
    else if(SelectIconButton.dataset.checkbox == "true")
    {
        SelectIconButton.dataset.checkbox = "false";
        for(let i = 0; i<FavoritesItems.length ; i++){
            let ItemCheckBox = FavoritesItems[i].querySelector("i");
            ItemCheckBox.style.display = "none";
        }
    }
});

// Thêm sự kiện click cho phần tử "DeleteIconButton"
DeleteIconButton.addEventListener("click", function() {
    let FavoritesItems = document.querySelectorAll(".FavoritesPage__ResutlsContent--Item");// khai báo list item favorites
    let quantityCheck = 0;
    for(let i = 0; i<FavoritesItems.length ; i++){
        if(FavoritesItems[i].dataset.checkbox == "true")
        {
            quantityCheck++;
            array.push(FavoritesItems[i]);
            FavoritesItems[i].style.display="none";
        }
    }
    if(quantityCheck > 0)
    {
        showUndoDeletePopup(popup_UndoDelete,quantityCheck.toString() + " items deleted");
        timeoutUndoDelete = setTimeout(function() {
            AllowUndo = "false";
            deleteArrayOBJ(array);
            hidePopup(popup_UndoDelete);//sau 5 giây popup Undo sẽ biến mất.
            array = new Array();
        }, 5000);
        AllowUndo = "true";
    }
    else
        alert("Bạn chưa chọn một mục nào cả!");
});

// Thêm sự kiện click cho phần tử "UndoButton"
UndoButton.addEventListener("click", function() {
    if(AllowUndo == "true")
    {
        AllowUndo = "false";
        clearTimeout(timeoutUndoDelete);
        restoreArrayOBJ(array);
        hidePopup(popup_UndoDelete);
        array = new Array();
    }
});

// Thêm sự kiện click cho mỗi phần tử "FavoritesItems" trong danh sách
for(let i = 0; i<FavoritesItems_Initial.length ; i++){
    FavoritesItems_Initial[i].addEventListener("click", function() {
        if(SelectIconButton.dataset.checkbox == "true")
        {
            let ItemCheckBox = FavoritesItems_Initial[i].querySelector("i");
            if(FavoritesItems_Initial[i].dataset.checkbox == "false")
            {
                FavoritesItems_Initial[i].dataset.checkbox = "true";
                ItemCheckBox.setAttribute("class", "fa-regular fa-circle-check");
            }
            else if(FavoritesItems_Initial[i].dataset.checkbox == "true")
            {
                FavoritesItems_Initial[i].dataset.checkbox = "false";
                ItemCheckBox.setAttribute("class", "fa-regular fa-circle");
            }
        }
    });
}
