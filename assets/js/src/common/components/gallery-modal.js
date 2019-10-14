import sliderFunction from './slider';
export default function galleryModal(bgImage) {
  const body = document.getElementsByTagName('body');
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
