

export default function fadeInSlider(mainElement, itemArray, className, defIndex) {

  const sliderItem = document.getElementsByClassName(itemArray);

  mainElement.addEventListener('click',  (e) => {
    let commingImage = sliderItem[defIndex];
    let leavingImage = sliderItem[defIndex - 1];
    if (e.target.className.includes(`${className}__next `)) {
        defIndex++;  
      for (let index = 0; index < sliderItem.length; index++) {
        if (defIndex > sliderItem.length ) {
          defIndex = 0;
          commingImage = sliderItem[0];
        } else if (defIndex < 0) {
          defIndex = sliderItem.length - 1;
          commingImage = sliderItem[defIndex];
        }
        leavingImage.style.opacity = 0;
        commingImage.style.opacity = 1;
      }
    }
  });
  setInterval(() => {
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
      leavingImage.style.opacity = 0;
      commingImage.style.opacity = 1;
    }
  }, 3000);
}