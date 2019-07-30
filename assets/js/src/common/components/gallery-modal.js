import sliderFunction from './slider';
export default function galleryModal(bgImage) {
  // const galleryArray = result.acf.galerija;
  // console.log(galleryArray);
  const body = document.getElementsByTagName('body');
  // let modal = document.getElementById('gallery-modal');
  // let closeModal = document.getElementById('js-close-modal');
  // let sliderIndex = 0;
  // let galleryArray = result;

  console.log(bgImage);
  
  
  

  return (
    `<div id="gallery-modal" class="modal">

      <div class="modal__close" id="js-close-modal"></div>
      <div class="modal__images" style="background: url('${bgImage}')">
       
      </div>
        <span class="modal__prev modal__slide"></span>
        <span class="modal__next modal__slide"></span>
    </div>` 
  )
}

// ${galleryArray.map(item => {
//   return (
//     `<div class="modal__image">
//       <img src="${item.galerija_image}" />
//     </div>`
//   )
// }).join('')}