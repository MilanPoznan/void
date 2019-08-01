export default function slider(mainElement, itemArray, className, defIndex) {
  // defIndex = 0;
  // console.log(defIndex);
    
   mainElement.addEventListener('click',  (e) => {
   
     
    if (e.target.className.includes(className)) {
      console.log(className);
      console.log(e.target);
         
      let sliderItem = document.getElementsByClassName(itemArray);
      if(e.target.className == `${className}__next ${className}__slide`) {
        defIndex++;  
      } else if (e.target.className == `${className}__prev ${className}__slide`) {
        defIndex--;      
      }

      for (let index = 0; index < sliderItem.length; index++) {

        if (defIndex >= sliderItem.length ) {
          defIndex = 0;
        } else if (defIndex < 0) {
          defIndex = sliderItem.length - 1;
        }
        sliderItem[index].style.right = defIndex * 100 + "%";
      }
    }
  });
}