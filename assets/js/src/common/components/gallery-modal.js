import sliderFunction from './slider';
export default function galleryModal(result) {
  // const galleryArray = result.acf.galerija;
  // console.log(galleryArray);
  const body = document.getElementsByTagName('body');
  let modal = document.getElementById('gallery-modal');

  let closeModal = document.getElementById('js-close-modal');

  let sliderIndex = 0;
  let galleryArray = result;
  console.log(galleryArray);

  body[0].onclick = (e) => {

    if (e.target.className === 'project-galery__item') {

      let galleryItem = document.getElementsByClassName('project-galery__item');
      let galleryItemArray = [...galleryItem];
      // let dataAttribute = e.target.getAttribute('data-url');
      let modalGalleryImage = document.querySelector('.modal__image');
      console.log(modalGalleryImage);
      // modalGalleryImage.map(image => {
      //   image.onclick
      // })
      // for (let index = 0; index < galleryItem.length; index++) {
      // }


      galleryItemArray.map((item, index) => {
        let i = index;
        item.onclick = () => 
          console.log(i);
          var result = i * 100;
          // console.log(result);

          modalGalleryImage.style.right = '300%'; 
          console.log(modalGalleryImage.style.right);
          
          // for (let index = 0; index < modalGalleryImage.length; index++) {
          //   console.log(modalGalleryImage[index]);
            
            
          // }
        }).join();
      
    }
    
   
 
  } 
  sliderFunction(body[0], 'modal__image', 'modal', sliderIndex);

  return (
    `<div id="gallery-modal" class="modal">

      <div class="modal__close" id="js-close-modal"></div>
      <div class="modal__images">
        ${galleryArray.map(item => {
          return (
            `<div class="modal__image">
              <img src="${item.galerija_image}" />
            </div>`
          )
        }).join('')}
      </div>
      <div class="modal__navi">
        <span class="modal__prev modal__slide"></span>
        <span class="modal__next modal__slide"></span>
      </div>
    </div>` 
  )
}