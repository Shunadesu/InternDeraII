const renderAnother = document.querySelector('.another__container')
const anotherData = [
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


const renderanother = anotherData.map((data) => {
    return `
    <a href='/#' class="another__content">
        <div class="another__content--img">
        <img src=${data.img} alt="">
        </div>
        <div class="another__content--text font-bold">
            ${data.text}
        </div>
    </a>
  
  `
})
renderAnother.innerHTML = renderanother.join('');