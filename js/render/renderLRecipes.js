const renderLRecipes = document.querySelector('.items__container')
console.log(renderLRecipes);
const recipesLData = [
    {
        id: 1,
        userimg: "../img/user.jpg",
        img: "../img/lastestRecipes/image6.png",
        text: 'Mighty Cheesy Breakfast Burger',
        user: 'Sunny Hoai Nam'
    },
    {
        id: 2,
        userimg: "../img/user.jpg",
        img: '../img/lastestRecipes/image7.png',
        text: 'Chocolate and Berries Healthy Pudding',
        user: 'Tricia Albert', 
    },
    {
        id: 3,
        userimg: "../img/user.jpg",
        img: '../img/lastestRecipes/image8.png',
        text: 'Caramel Cream Birthday Pudding',
        user: 'Cha Cha Cha', 
    },
    {
        id: 4,
        userimg: "../img/user.jpg",
        img: '../img/lastestRecipes/image9.png',
        text: 'Healthy Caramel Strawberry Milkshake',
        user: 'Sa la la', 
    },
]


const renderlrecipes = recipesLData.map((data) => {
    return `
    <div class="lrecipes__content">
        <div class='leftContent'>
            <div class="lrecipes__content--img">
            <img src=${data.img} alt="">
            </div>
        </div>
        <div class='rightContent'>
            <div class="flex">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <h2>${data.text}</h2>

            <div class="lrecipes__content--user">
            
                <div class='flex'>
                    <div class='user__img'>
                        <img src=${data.userimg} alt="">
                    </div>
                    
                    <p>${data.user}</p>
                </div>

                <div class="banner__comment">
                    <div class="flex">
                    <i class="fa-regular fa-message"></i>
                    <p>456</p>
                    </div>
                    <div class="flex">
                    <i class="fa-regular fa-calendar"></i>
                    <p>Yesterday</p>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  
  `
})
renderLRecipes.innerHTML = renderlrecipes.join('');