document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.querySelector('.play');
    const pauseButton = document.querySelector('.pause');
    const video = document.getElementById('cakeVideo');
    
    playButton.addEventListener('click', function() {
        video.play();
        playButton.style.display = 'none'; // Hide play button
        pauseButton.style.display = 'block'; // Show pause button
    });
    
    pauseButton.addEventListener('click', function() {
        video.pause();
        pauseButton.style.display = 'none'; // Hide pause button
        playButton.style.display = 'block'; // Show play button
    });
});