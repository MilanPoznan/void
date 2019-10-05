import sliderFunction from './slider';

export default function articlesSlider(result) {
  const sliderArr = result;
  const body = document.getElementsByTagName('body');
  let sliderIndex = 0;

  sliderFunction(body[0], 'articles-slider__slider', 'articles-slider', sliderIndex);

  return (`
    <div class="articles-slider">
      <div class="articles-slider__wrapper">
      ${sliderArr.map(item => {
        const shortContent = item.content.rendered.substring(0, 50);

        return (
          `
          <div class="articles-slider__slider">
            <div class="articles-slider__image" style="background-image: url('${item.acf.post_image}')">
            <div class="articles-slider__title">${item.title.rendered}</div>
            <div class="articles-slider__content">${shortContent}</div>    
            </div> 
          </div>
          
          `
        )
      }).join('')}
      <span class="articles-slider__prev articles-slider__slide"></span>
      <span class="articles-slider__next articles-slider__slide"></span>
      </div>  
    </div>
  `)
}