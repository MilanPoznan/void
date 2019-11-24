export default function heroAnimation(title) {
  const sliderTitle = $('.articles-slider__title');
  const sliderContent = $('.articles-slider__content');
  const sliderButton = $('.articles-slider__link');
// console.log(sliderTitle)
  TweenMax.fromTo(sliderTitle[0], 0.8, {
    top: '-60px',
    opacity: 0
  },
  {
    top: '0px',
    opacity: 1
  })

  TweenMax.fromTo(sliderContent[0], 0.8, {
    bottom: '-60px'
  }, {
    bottom: '0px'
  })
  TweenMax.fromTo(sliderButton[0], 0.8, {
    bottom: '-60px'
  }, {
    bottom: '0px'
  })

}