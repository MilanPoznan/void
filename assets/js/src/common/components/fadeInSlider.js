

export default function fadeInSlider(mainElement, itemArray, className, defIndex) {

  mainElement.addEventListener('click',  (e) => {
     
    if (e.target.className.includes(className)) {
         
      let sliderItem = document.getElementsByClassName(itemArray);
      if(e.target.className == `${className}__next ${className}__slide`) {
        defIndex++;  
      } else if (e.target.className == `${className}__prev ${className}__slide`) {
        defIndex--;      
      }

      for (let index = 0; index < sliderItem.length; index++) {
        // console.log(defIndex);
        // console.log(sliderItem);
        if (defIndex >= sliderItem.length ) {
          defIndex = 0;
        } else if (defIndex < 0) {
          defIndex = sliderItem.length - 1;
        }
        let commingImage = sliderItem[defIndex];
        let leavingImage = sliderItem[defIndex - 1];

        leavingImage.style.opacity = 0;


        console.log('commingImage', commingImage);
        console.log('leaving',leavingImage);
        // sliderItem[index].style.right = defIndex * 100 + "%";


      }
    }
  });
}