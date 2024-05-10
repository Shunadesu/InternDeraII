const renderDessert = document.querySelector('.dessert__container--content')
const dessertData = [
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

    {
        id: 9,
        img: '../img/recipes/image9.png',
        text: 'Vegan Cauliflower Salad'
    },
    {
        id: 10,
        img: '../img/recipes/image10.png',
        text: 'Roasted Red Pepper Soup'
    },
    {
        id: 11,
        img: '../img/recipes/image11.png',
        text: 'Eggs and Avocado Toast'
    },
    {
        id: 12,
        img: '../img/recipes/image12.png',
        text: 'Pork Shoulder Cashew Noodles'
    },
    {
        id: 13,
        img: '../img/recipes/image13.png',
        text: 'Toasted Farfalle In Pesto Sauce'
    },
    {
        id: 14,
        img: '../img/recipes/image14.png',
        text: 'Cheesy Bacon Burger Sliders'
    },
    {
        id: 15,
        img: '../img/recipes/image15.png',
        text: 'Fig and Raisins Oatmeal'
    },
    {
        id: 16,
        img: '../img/recipes/image16.png',
        text: 'Silky Smooth Panacotta'
    },

    {
        id: 17,
        img: '../img/recipes/image17.png',
        text: 'Tripple Decker Cranberry'
    },
    {
        id: 18,
        img: '../img/recipes/image18.png',
        text: 'Very Berry Healthy Summer Smoothie'
    },
    {
        id: 19,
        img: '../img/recipes/image19.png',
        text: 'Crispy Orange Chips'
    },
    {
        id: 20,
        img: '../img/recipes/image20.png',
        text: 'Tumeric Lavendar Tea'
    },
    {
        id: 21,
        img: '../img/recipes/image21.png',
        text: 'Blue Velvet Brownies'
    },
    {
        id: 22,
        img: '../img/recipes/image22.png',
        text: 'Birthday Cupcakes'
    },
    {
        id: 23,
        img: '../img/recipes/image23.png',
        text: 'Gourmet Fillet in Roasted Almond Sauce'
    },
    {
        id: 24,
        img: '../img/recipes/image24.png',
        text: 'Four Ingredient Oatmeal Pancakes'
    },
]


const renderdessert = dessertData.map((data) => {
    return `
    <div class="dessert__content">
        <div class="dessert__content--img">
        <img src=${data.img} alt="">
        </div>
        <div class="dessert__content--text">
            ${data.text}
        </div>
    </div>
  
  `
})
renderDessert.innerHTML = renderdessert.join('');