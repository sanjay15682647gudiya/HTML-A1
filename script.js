const imageSlider = document.getElementById('imageSlider');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

// Image Slider Functionality
rightBtn.addEventListener('click', () => {
    imageSlider.scrollBy({
        left: 310, // Adjust for image width + margin
        behavior: 'smooth',
    });
});

leftBtn.addEventListener('click', () => {
    imageSlider.scrollBy({
        left: -310,
        behavior: 'smooth',
    });
});
