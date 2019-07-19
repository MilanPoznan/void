export default function pressPage(result) {
  
  function toggleBottomPress(e) {
    console.log(e.taget);
  }
  $('.content-wrapper').on('click', '.press__arrow-wrap', (e) => {
    console.log(e.target.next);
  });


  return (`
    <div class="press">
      <div class="press__wrapper">
        ${result.acf.press_repeater.map(
          item => `
            <div class="press__section">
              <div class="press__top">
                <div class="press__image" style="background: url('${item.section_image.url}')"></div>
                <div class="press__title">${item.section_title}</div>
                <div class="press__subtitle">${item.section_subtitle}</div>
                <div class="press__arrow-wrap">
                  <div class="press__top-arrow press__arrow js-press-arrow js-show-arrow"></div>
                </div>
              </div>
              <div class="press__bottom">
                <div class="press__content">${item.section_content}</div>
                <div class="press__arrow-wrap" onClick="{$('.press__bottom').toggle('slow')}">
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
