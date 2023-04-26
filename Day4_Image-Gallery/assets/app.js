const images = document.querySelectorAll(".image img");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const btnClose = document.querySelector(".btn-close");
const galleryImg = document.querySelector(".gallery__inner img");
const gallery = document.querySelector(".gallery");

var currentIndex = 0;

function showGallery() {
  if (currentIndex === 0) {
    btnPrev.classList.add("hide");
  } else {
    btnPrev.classList.remove("hide");
  }

  if (currentIndex === images.length - 1) {
    btnNext.classList.add("hide");
  } else {
    btnNext.classList.remove("hide");
  }

  // display gallery
  galleryImg.src = images[currentIndex].src;
  gallery.classList.add("show");
}

images.forEach((item, index) => {
  item.addEventListener("click", function () {
    currentIndex = index;
    showGallery();
  });
});

btnClose.addEventListener("click", function () {
  gallery.classList.remove("show");
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    gallery.classList.remove("show");
  }
});

btnPrev.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    showGallery();
  }
});

btnNext.addEventListener("click", function () {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showGallery();
  }
});
