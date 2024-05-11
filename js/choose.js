const sunnytest = document.querySelectorAll('.recipesblog__second--box');

sunnytest.forEach((element) => {
    const choose = element.querySelector('p');
    const active = element.querySelector('.choose')
    const setactive = element.querySelector('.setchoose')
    element.addEventListener('click', function() {
        choose.classList.toggle('linethrough');
        active.classList.toggle('hidden');
        setactive.classList.toggle('hidden');
    });
});