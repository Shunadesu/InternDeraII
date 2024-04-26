const renderImg = document.querySelector('.insta__image')
const ImgData = [
    {
        id: 1,
        img: "../img/recipes/image1.png",
    },
    {
        id: 2,
        img: '../img/recipes/image2.png',
    },
    {
        id: 3,
        img: '../img/recipes/image3.png',
    },
    {
        id: 4,
        img: '../img/recipes/image4.png',
    },
    {
        id: 5,
        img: '../img/recipes/image5.png',
    },
    {
        id: 6,
        img: '../img/recipes/image6.png',
    },
]


const renderimg = ImgData.map((data) => {
    return `
        <div class="imgDiv">
            <img src=${data.img} alt="">
        </div>
  `
})
renderImg.innerHTML = renderimg.join('');