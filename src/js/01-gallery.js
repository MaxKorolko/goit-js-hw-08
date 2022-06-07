import { galleryItems } from './gallery-items';

// пробував по різному...

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

function renderingGalleryHtml(array) {
  return array
    .map(
      ({ original, preview, description }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`,
    )
    .join('');
}

galleryEl.innerHTML = renderingGalleryHtml(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: '.gallery__image',
  captionsData: 'alt',
  captionDelay: 250,
});
