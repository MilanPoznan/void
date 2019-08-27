export default function pressPage(result) {
  
  console.log(result);
  
  
  const body = document.getElementsByTagName('body');
  function toggleContent () {
    console.log('toggle');
  }
  
  body[0].onclick = (e) => {
    if (e.target.className.includes('press__top-arrow')) {
      $(e.target).parent().next().slideToggle('slow');
      $('.js-press-arrow').toggleClass('press__top-arrow--open');
    } else if (e.target.className.includes('press__bottom-arrow')) {
      $(e.target).parent().parent().slideToggle('slow');
      $('.js-press-arrow').toggleClass('press__bottom-arrow--open');
    }
  } 

  return (`
    <div class="press">
      <div class="press__wrapper">
        ${result.acf.press_repeater.map(
          (item, index) => `
            <div class="press__section">
              <div class="press__top press__section--top">
                <div class="press__image" style="background-image: url('${item.section_image.url}')"></div>
                <div class="press__title-wrapp">
                  <h4 class="press__subtitle">${item.section_subtitle}</h4>
                  <h1 class="press__title">${item.section_title}</h1>
                </div>
              </div>
              <div class="press__arrow-wrap">
                  <div class="press__top-arrow press__arrow js-press-arrow js-show-arrow" data-index=${index}></div>
                </div>
              <div class="press__bottom">
                <div class="press__bottom-head">
                </div>
                <div class="press__content">${item.section_content}</div>
                <div class="press__arrow-wrap">
                  <div class="press__bottom-arrow press__arrow js-press-arrow js-hide-arrow"></div>
                </div>

              </div>
            </div>
          `
        ).join('')
        }

      </div>
    </div>
  `
  )
}
