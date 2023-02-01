import { galleryItems } from './gallery-items.js';
// Change code below this line
const imagesElement = document.querySelector(".gallery");

const gallery = galleryItems
  .map((img) => {
    return `<a class="gallery__item" href=${img.original}>
                <img 
                class="gallery__image"
                src=${img.preview} 
                alt=${img.description}>
            </a>`;
  })
  .join("");

  imagesElement.insertAdjacentHTML("afterbegin", gallery);
  

new SimpleLightbox('.gallery a', {
    captionData: 'alt',
    captionDelay: 250,
});
  
console.log(galleryItems);
