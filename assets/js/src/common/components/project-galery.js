import sliderFunction from './slider';
import galleryModal from './gallery-modal';

export default function projectGallery(result) {

  const galleryArray = result.acf.galerija;
  let isModalOpen = false;
  const body = document.getElementsByTagName('body');
  // const htmlObj = document.getElementsByTagName('html');
  // var galleryItemArray = [];
  // let sliderIndex = 0;
  let sliderIndex = 0;

  sliderFunction(body[0], 'project-galery__modal', 'project-galery', sliderIndex);
  
  
  
  return (
    `<div class="project-galery">
      <div class="project-galery__wrapper">
        ${galleryArray.map(
          image => 
            `<div class="project-galery__item" data-url=${image.galerija_image} style="background-image: url('${image.galerija_image}')">
            </div>`
          ).join('')
        }
      </div>
    </div>
    ${galleryModal(galleryArray)}`
  )
  
}
