import sliderFunction from './slider';
import galleryModal from './gallery-modal';

export default function projectGallery(result) {

  const galleryArray = result.acf.galerija;
  let isModalOpen = false;
  const body = document.getElementsByTagName('body');
  let sliderIndex = 0;
  var bgImage = 'http://localhost:8888/void/wp-content/uploads/2019/07/zivizivot.png';
  function addImageToModalGallery(e) {
    let modalImage = document.querySelector('.modal__image');
      
      if (e.target.className === 'project-galery__item') {
        var imageUrl = e.target.dataset.url;
        var currImage = e.target;
        bgImage = imageUrl;
        modalImage.src = bgImage;
      } else if (e.target.className.includes('modal__prev')) {
        console.log(currImage.previousSibling);
        // modalImage.src = currImage.previousSibling.dataset.url
      } else if (e.target.className.includes('modal__next')) {
        console.log('next');
        modalImage.src = currImage.nextSibling.dataset.url

      }

  }
  
  body[0].onclick = (e) => {
    addImageToModalGallery(e);
  } 
  
  return (
    `<div class="project-galery">
      <div id="gallery-modal" class="modal">
        <div class="modal__close" id="js-close-modal"></div>
        <div class="modal__images">
          <img src=${bgImage} class="modal__image" /> 
        </div>
      </div>
      <div class="project-galery__wrapper">
        ${galleryArray.map(
          image => 
            `<div class="project-galery__item" data-url=${image.galerija_image} style="background-image: url('${image.galerija_image}')">
            </div>`
          ).join('')
        }
      </div>
    </div>
   ` 
  )
  
}
