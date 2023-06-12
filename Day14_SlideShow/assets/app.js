const imgFeature = document.querySelector(".img-feature");
const listImg = document.querySelectorAll(".list-image img");
const preBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

var currentIndex = 0;
const updateImgByIndex = index => {
  // remove class Active
  document.querySelectorAll(".list-image div").forEach(item => {
    item.classList.remove("active");
  });

  // add class Active
  currentIndex = index;
  imgFeature.src = listImg[index].getAttribute("src");
  listImg[index].parentElement.classList.add("active");
};

listImg.forEach((imgELement, index) => {
  imgELement.addEventListener("click", event => {
    imgFeature.style.opacity = "0";

    setTimeout(() => {
      updateImgByIndex(index);
      imgFeature.style.opacity = "1";
    }, 400);
  });
});

preBtn.addEventListener("click", event => {
  if (currentIndex === 0) {
    currentIndex = listImg.length - 1;
  } else {
    currentIndex--;
  }

  imgFeature.style.animation = "";
  setTimeout(() => {
    updateImgByIndex(currentIndex);
    imgFeature.style.animation = "slideLeft 1s ease-in-out forwards";
  });
});

nextBtn.addEventListener("click", event => {
  if (currentIndex === listImg.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  imgFeature.style.animation = "";
  setTimeout(() => {
    updateImgByIndex(currentIndex);
    imgFeature.style.animation = "slideRight 1s ease-in-out forwards";
  });
});

updateImgByIndex(0);
