var UserLogged = getCookie("Logged");
if(UserLogged == "true")
{
    document.querySelector(".nav__search a").innerHTML='<img src="../img/profilepage/avatar-account.jpg" alt="avatar-account">';
}