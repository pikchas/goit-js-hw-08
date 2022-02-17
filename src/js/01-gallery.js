// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryListMarkup = document.querySelector('.gallery');
const galleryImages = makeGallery(galleryItems)
galleryListMarkup.insertAdjacentHTML('beforeend', galleryImages);

function makeGallery(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `
        <a class="gallery__item" href="${original}">
          <img class=" gallery__image" src="${preview}" alt="${description}">
        </a>
      `
    )
.join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

console.log(galleryItems);
