

export default function fadeInSlider(mainElement, itemArray, className, defIndex) {

  const sliderItem = document.getElementsByClassName(itemArray);

  function nextSlide(e) {
    console.log(sliderItem)
    let commingImage = sliderItem[defIndex];
    let leavingImage = sliderItem[defIndex - 1];
    defIndex++;  
    for (let index = 0; index < sliderItem.length; index++) {
      if (defIndex > sliderItem.length ) {
        defIndex = 0;
        commingImage = sliderItem[0];
      } else if (defIndex < 0) {
        defIndex = sliderItem.length - 1;
        commingImage = sliderItem[defIndex];
      }
      console.log(leavingImage)
      leavingImage.style.opacity = 0;
      commingImage.style.opacity = 1;
    }
  }
  mainElement.addEventListener('click',  (e) => {
    
    if (e.target.className.includes(`${className}__next `)) {
      nextSlide();
    }
  });
  setInterval(() => {
    nextSlide();
  }, 3000);
}