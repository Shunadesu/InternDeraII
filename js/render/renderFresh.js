const renderFresh = document.querySelector('.fresh__container')
const FreshData = [
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
]


const renderfresh = FreshData.map((data) => {
    return `
    <div class="fresh__content">
        <div class="fresh__content--img">
            <img src=${data.img} alt="">
        </div>
        <div class="fresh__content--text">
            <h4>${data.text}</h4> 
        </div>
    </div>
  
  `
})
renderFresh.innerHTML = renderfresh.join('');