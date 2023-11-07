const imgContainer = document.querySelector(".items");
console.log(imgContainer);
let itemString = "";
for (let i = 0; i < images.length; i++) {
  const curItem = images[i];
  itemString += `<div class="item"><img src="${curItem.image}" alt=""><p class="title">${curItem.title}</p><span class="description">${curItem.text}</span></div>`;
}
console.log(itemString);
imgContainer.innerHTML += itemString;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slides = document.querySelectorAll(".item");
console.log(slides);
activeImgIndex = 0;
slides[activeImgIndex].classList.add("active");
prev.addEventListener("click", function (event) {
  event.preventDefault();
  if (activeImgIndex > 0) {
    slides[activeImgIndex].classList.remove("active");
    activeImgIndex--;
    slides[activeImgIndex].classList.add("active");
  } else {
    slides[activeImgIndex].classList.remove("active");
    activeImgIndex = slides.length - 1;
    slides[activeImgIndex].classList.add("active");
  }
});
next.addEventListener("click", function (event) {
  event.preventDefault();
  if (activeImgIndex < slides.length - 1) {
    slides[activeImgIndex].classList.remove("active");
    activeImgIndex++;
    slides[activeImgIndex].classList.add("active");
  } else {
    slides[activeImgIndex].classList.remove("active");
    activeImgIndex = 0;
    slides[activeImgIndex].classList.add("active");
  }
});