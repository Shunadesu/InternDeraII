const comit = document.querySelector('.comit')
const setreply = document.querySelectorAll('.setreply')
        
comit.addEventListener('click', function() {
    setreply.forEach(element => element.classList.toggle('hidden'));
});

// Select all heart icons
const heartIcons = document.querySelectorAll('.fa-heart');

// Add click event listener to each heart icon
heartIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        // Toggle a class on the clicked heart icon to change its color
        this.classList.toggle('liked');
    });
});


// Get the elements
const commentTextElement = document.getElementById('commentText');
const commentDisplay = document.getElementById('commentDisplay');

// Display the initial value of the textarea
commentDisplay.textContent = commentTextElement.value;

// Add click event listener to the "Post comment" button
postCommentButton.addEventListener('click', function() {
    // Get the value of the textarea
    const commentText = commentTextElement.value;
    
    // Display the comment text
    addComment(commentText);
});

// Function to show the modal notification
function showModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
}

// Function to hide the modal notification
function hideModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}


// Function to add a new comment
function addComment(text) {
    // Create a new comments__content div
    const newComment = document.createElement('div');
    newComment.classList.add('comments__content', 'flex');

    // Create the structure for the new comment
    newComment.innerHTML = `
        <div class="user__imgDiv">
            <img src="../img/user.jpg" alt="user">
        </div>
        <div class="comments__div">
            <div>
                <h3>Sunny Pham Nam</h3>
                <p style="opacity: 0.6;">1 mins ago</p>
            </div>
            <p>${text}</p>
            <div class="comments__content--more flex">
                <div class="reply flex">
                    <i class="fa-regular fa-message"></i>
                    <p>Reply (2)</p>
                </div>
                <div class="like flex">
                    <i class="fa-regular fa-heart"></i>
                    <p>45</p>
                </div>
                <div class="more flex">
                    <i class="fa-solid fa-ellipsis"></i>
                    <p>More</p>
                </div>
            </div>
        </div>
    `;

    // Append the new comment to the commentDisplay div
    document.getElementById('commentDisplay').appendChild(newComment);
    // Show modal notification
    showModal();

    // Hide modal notification after 3 seconds
    setTimeout(hideModal, 3000);
}