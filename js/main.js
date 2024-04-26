const renderSearchItems = document.querySelector('#itemList')
const searchItemsData = [
    {
        id: 1,
        img: "../img/recipes/image1.png",
        text: 'Caramel Strawberry Milkshake'
    },
    {
        id: 2,
        img: '../img/recipes/image2.png',
        text: 'Cashew Vegan Rice'
    },
    {
        id: 3,
        img: '../img/recipes/image3.png',
        text: 'Smoked Salmon Salad Sandwich'
    },
    {
        id: 4,
        img: '../img/recipes/image4.png',
        text: 'Salmon in Creamy Sun Dried Tomato Sauce'
    },
    {
        id: 5,
        img: '../img/recipes/image5.png',
        text: 'Healthy Jam Waffle Breakfast'
    },
    {
        id: 6,
        img: '../img/recipes/image6.png',
        text: 'Chocolate and Banana Jar Cake'
    },
    {
        id: 7,
        img: '../img/recipes/image7.png',
        text: 'Caramel Blueberry Scones'
    },
    {
        id: 8,
        img: '../img/recipes/image8.png',
        text: 'Blueberry Carrot Cake'
    },
]


const rendersearch = searchItemsData.map((data) => {
    return `
    <li>
        <a href='/#' class="itemList__content">
        <div class="itemList__content--img">
            <img src=${data.img} alt="">
        </div>
        <div class="itemList__content--text">
            <h5>${data.text}</h5>
            <p>Category</p>
        </div>
        </a>
    </li>
  
    `
})
renderSearchItems.innerHTML = rendersearch.join('');


const navItems = document.querySelectorAll('.nav__bar--item');
const contentContainer = document.getElementById('nav__bar-content-container');

navItems.forEach(navItem => {
    navItem.addEventListener('click', (event) => {
        // Hide all content divs first
        const contentDivs = contentContainer.querySelectorAll('div');
        contentDivs.forEach(contentDiv => contentDiv.style.display = 'none');

        // Get the data-content attribute value
        const contentId = event.target.dataset.content;

        // Show the appropriate content div
        const contentDiv = document.getElementById(contentId);
        contentDiv.style.display = 'block';

        // Optionally, add a visual indicator on the clicked item (e.g., background color change)
        navItems.forEach(item => item.classList.remove('active')); // Remove active class from all items
        event.target.classList.add('active'); // Add active class to the clicked item
    });
});