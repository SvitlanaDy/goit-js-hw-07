import { galleryItems } from './gallery-items.js';
// Change code below this line
const imagesElement = document.querySelector(".gallery");
const gallery = galleryItems
  .map((img) => {
    return `<div class="gallery__item">
              <a class="gallery__link" href=${img.original}>
                <img 
                  class="gallery__image"
                  src=${img.preview} 
                  data-source=${img.original}
                  alt=${img.description}>
              </a>
            </div>`;
  })
  .join("");
  imagesElement.insertAdjacentHTML("afterbegin", gallery);
  imagesElement.addEventListener("click", onImageClick);
 
function onImageClick(evt){
evt.preventDefault();
if(evt.target.nodeName !== "IMG"){
    return;
}
console.log(evt.target.dataset.source);
const activeFullScreenImg = basicLightbox.create(
    `<img src = '${evt.target.dataset.source}'>`
);
activeFullScreenImg.show();
imagesElement.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      activeFullScreenImg.close();
    }
  });
}
console.log(galleryItems);
