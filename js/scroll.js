window.addEventListener('scroll', function() {
    var logo = document.querySelector('.nav__logo');
    console.log(logo)
    if (window.scrollY > 0) {
        logo.classList.add('shrink');
    } else {
        logo.classList.remove('shrink');
    }
});