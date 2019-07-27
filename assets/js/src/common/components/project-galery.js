import sliderFunction from './slider';

export default function projectGallery(result) {

  const galleryArray = result.acf.galerija;

  const body = document.getElementsByTagName('body');
  let sliderIndex = 0;

  sliderFunction(body[0], 'project-galery__wrapper', 'project-galery', sliderIndex);
  
  return (
    `<div class="project-galery">
      <div class="project-galery__wrapper">
        ${galleryArray.map(
          image => 
            `<div class="project-galery__item" style="background-image: url('${image.galerija_image}')">
            </div>`
          ).join('')
        }
      </div>
      <span class="project-galery__prev project-galery__slide"></span>
      <span class="project-galery__next project-galery__slide"></span>
    </div>`
  )
  
}