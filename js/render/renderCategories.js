const renderCategories = document.querySelector('.categories__container')
const categoriesData = [
    {
        id: 1,
        img: "../img/categories/Seafood.png",
        text: 'See Food'
    },
    {
        id: 2,
        img: '../img/categories/Soup.png',
        text: 'Soup'
    },
    {
        id: 3,
        img: '../img/categories/Pancake.png',
        text: 'Pancakes'
    },
    {
        id: 4,
        img: '../img/categories/Meat.png',
        text: 'Meat'
    },
    {
        id: 5,
        img: '../img/categories/Chicken.png',
        text: 'Chicken'
    },
    {
        id: 6,
        img: '../img/categories/Less30.png',
        text: 'Less than 30 min'
    },
    {
        id: 7,
        img: '../img/categories/Pasta.png',
        text: 'Pasta'
    },
    {
        id: 8,
        img: '../img/categories/pizza.png',
        text: 'Pizza'
    },

    {
        id: 9,
        img: '../img/categories/Cake.png',
        text: 'Cake'
    },
    {
        id: 10,
        img: '../img/categories/Pastries.png',
        text: 'Pastries'
    },
    {
        id: 11,
        img: '../img/categories/Burger.png',
        text: 'Burger'
    },
    {
        id: 12,
        img: '../img/categories/Vegan.png',
        text: 'Vegan'
    },
    {
        id: 13,
        img: '../img/categories/Dessert.png',
        text: 'Desserts'
    },
    {
        id: 14,
        img: '../img/categories/Smoothies.png',
        text: 'Smoothies'
    },
    {
        id: 15,
        img: '../img/categories/Breakfast.png',
        text: 'Breakfast'
    },
    {
        id: 16,
        img: '../img/categories/Salad.png',
        text: 'Salad'
    },

    {
        id: 17,
        img: '../img/categories/Sandwich.png',
        text: 'Sandwiches'
    },
    {
        id: 18,
        img: '../img/categories/Waffles.png',
        text: 'Waffles'
    },
    {
        id: 19,
        img: '../img/categories/Ramen.png',
        text: 'Ramen'
    },
    {
        id: 20,
        img: '../img/categories/Dips.png',
        text: 'Dips'
    },
]


const rendercategories = categoriesData.map((data) => {
    return `
    <a href="../pages/dessert.html" class="categories__container--content">
        <div class="imgDiv">
            <img src=${data.img} alt="">
        </div>
        <p>${data.text}</p>
    </a>
  `
})
renderCategories.innerHTML = rendercategories.join('');