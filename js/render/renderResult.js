const renderResult = document.querySelector('.result__container')
const ResultData = [
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

    {
        id: 25,
        img: "../img/recipes/image23.png",
        text: 'Caramel Strawberry Milkshake'
    },
    {
        id: 26,
        img: '../img/recipes/image2.png',
        text: 'Cashew Vegan Rice'
    },
    {
        id: 27,
        img: '../img/recipes/image3.png',
        text: 'Smoked Salmon Salad Sandwich'
    },
    {
        id: 28,
        img: '../img/recipes/image4.png',
        text: 'Salmon in Creamy Sun Dried Tomato Sauce'
    },
    {
        id: 29,
        img: '../img/recipes/image5.png',
        text: 'Healthy Jam Waffle Breakfast'
    },
    {
        id: 30,
        img: '../img/recipes/image6.png',
        text: 'Sunny Cake'
    },
    {
        id: 31,
        img: '../img/recipes/image7.png',
        text: 'Caramel Blueberry Scones'
    },
    {
        id: 32,
        img: '../img/recipes/image8.png',
        text: 'Blueberry Carrot Cake'
    },

    {
        id: 33,
        img: '../img/recipes/image9.png',
        text: 'Vegan Cauliflower Salad'
    },
    {
        id: 34,
        img: '../img/recipes/image10.png',
        text: 'Roasted Red Pepper Soup'
    },
    {
        id: 35,
        img: '../img/recipes/image11.png',
        text: 'Eggs and Avocado Toast'
    },
    {
        id: 36,
        img: '../img/recipes/image12.png',
        text: 'Pork Shoulder Cashew Noodles'
    },
    {
        id: 37,
        img: '../img/recipes/image13.png',
        text: 'Toasted Farfalle In Pesto Sauce'
    },
    {
        id: 38,
        img: '../img/recipes/image14.png',
        text: 'Cheesy Bacon Burger Sliders'
    },
    {
        id: 39,
        img: '../img/recipes/image15.png',
        text: 'Fig and Raisins Oatmeal'
    },
    {
        id: 40,
        img: '../img/recipes/image16.png',
        text: 'Silky Smooth Panacotta'
    },

    {
        id: 41,
        img: '../img/recipes/image17.png',
        text: 'Tripple Decker Cranberry'
    },
    {
        id: 42,
        img: '../img/recipes/image18.png',
        text: 'Very Berry Healthy Summer Smoothie'
    },
    {
        id: 43,
        img: '../img/recipes/image19.png',
        text: 'Crispy Orange Chips'
    },
    {
        id: 44,
        img: '../img/recipes/image20.png',
        text: 'Tumeric Lavendar Tea'
    },
    {
        id: 45,
        img: '../img/recipes/image21.png',
        text: 'Blue Velvet Brownies'
    },
    {
        id: 46,
        img: '../img/recipes/image22.png',
        text: 'Birthday Cupcakes'
    },
    {
        id: 47,
        img: '../img/recipes/image23.png',
        text: 'Gourmet Fillet in Roasted Almond Sauce'
    },
    {
        id: 48,
        img: '../img/recipes/image24.png',
        text: 'Four Ingredient Oatmeal Pancakes'
    },
]

const loadMoreBtn = document.getElementById('loadMoreBtn');

// Function to render recipes based on current page and page size
function renderRecipesPerPage(page, pageSize) {
    // Calculate the starting index of recipes for the current page
    const startIndex = (page - 1) * pageSize;
    // Get the recipes to display for the current page
    const recipesToRender = ResultData.slice(startIndex, startIndex + pageSize);
    // Map the recipes to HTML elements
    const renderedResult = recipesToRender.map(recipe => {
        return `
            <div class="sunny">
                <a href='#' class="recipes__content">
                    <div class="recipes__content--img">
                        <img src="${recipe.img}" alt="">
                    </div>
                    <div class="recipes__content--text">
                        ${recipe.text}
                    </div>
                </a>
            </div>
        `;
    });
    // Render the HTML elements to the page
    renderResult.insertAdjacentHTML('beforeend', renderedResult.join('')); // Append recipes to the existing content
}

// Initial load: render the first page of recipes
const pageSize = 24;
let currentPage = 1;
renderRecipesPerPage(currentPage, pageSize);

// Function to handle "Load More" button click
loadMoreBtn.addEventListener('click', function() {
    currentPage++; // Increment the current page
    console.log('Current Page:', currentPage); // Debugging statement
    renderRecipesPerPage(currentPage, pageSize); // Render the next page of recipes
    console.log('Load more clicked!'); // Debugging statement
});