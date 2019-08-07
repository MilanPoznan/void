import sliderFunction from './slider';

export default function testimonialsSection(result) {
  const body = document.getElementsByTagName('body');
  let sliderIndex = 0;

  sliderFunction(body[0], 'testimonials-section__item', 'testimonials-section', sliderIndex);
 

  return (
    `
    <div class="testimonials-section wrapper">
      <div class="testimonials-section__wrapper">
        <div class="testimonials-section__title">
          <h4>testimonials</h4>
          <h1>${result.acf.testimonials_title}</h1>
        </div>
        <div class="testimonials-section__slider">
        <div class="testimonials-section__quotations"></div>
          ${result.acf.testimonials_repeater.map(
            item => 
              ` <div class="testimonials-section__item" style="transition: 0.5s;">
                <div class="testimonials-section__item-title">${item.testimonials_title}</div>
                <div class="testimonials-section__item-subtitle">${item.testimonial_subtitle}</div>
                <div class="testimonials-section__item-content">${item.testimonials_text}</div>
              </div>`
            ).join('')
          }
        </div>
       
        <span class="testimonials-section__prev testimonials-section__slide"></span>
        <span class="testimonials-section__middle "></span>
        <span class="testimonials-section__next testimonials-section__slide"></span>

        </div>
      </div>
    </div>
    `
  )
}