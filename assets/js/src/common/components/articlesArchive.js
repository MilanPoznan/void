export default function articlesArchive (result) {
  
  console.log(result);
  return (
    `
    <div class="news">
      <div class="news__wrapper">
      ${result.map(item => {
        const shortContent = item.content.rendered.substring(0, 400);
        const bgImage = item.acf.post_image;
       return (
         `
          <div class="news__single">
            <div class="news__image-wrapp">
              <div class="news__image" style="background-image: url('${bgImage}')"></div>
            </div>
            <div class="news__content-wrapp">
              <h3 class="news__title">${item.title.rendered}</h3>
              <div class="news__content">${item.content.rendered}</div>
              <a href=${item.link} class="news__link js-link">Read more</a>
            </div>
            
          </div>
         `
       ) 
      }).join('')}
      </div>
    </div>
              
    `
  )
};
{/*  */}
