const navButton = document.querySelector('.fa-bars');
const navBar = document.querySelector('.navBar');
const navCloseButton = document.querySelector('.closeNav')

navButton.addEventListener('click', function() {
    // Toggle the 'active' class
    navBar.classList.toggle('navshow');
});

navCloseButton.addEventListener('click', function() {
    // Toggle the 'active' class
    navBar.classList.toggle('navshow');
});