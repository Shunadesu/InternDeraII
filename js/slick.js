const images = document.querySelectorAll(".img__slick");
const caption = document.querySelector(".caption");
const prevBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
const totalImages = images.length;
console.log(images.length)
let imageIndex = 0;

window.addEventListener("load", () => {
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  imageIndex++;
  if (imageIndex > totalImages - 1) {
    imageIndex = 0;
  }
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = totalImages - 1;
  }
  updateSlider();
});

function updateSlider() {
  images.forEach((image, index) => {
    if (index === imageIndex) {
      image.style.display = "block";
    //   caption.innerHTML = image.alt;
    } else {
      image.style.display = "none";
    }
  });
}
