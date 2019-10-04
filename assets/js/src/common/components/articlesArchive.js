export default function articlesArchive (result) {
  return (
    `
    <div class="news">
      <div class="news__wrapper">
      ${result.map(item => {
        const shortContent = item.content.rendered.substring(0, 50);
        const bgImage = item.acf.post_image;
       return (
         `
         <a href=${item.link} class="news__link">
          <div class="news__single">
            <div class="news__image" style="background-image: url('${bgImage}')"></div>
            <h3 class="news__title">${item.title.rendered}</h3>
            <div class="news__content">${shortContent}</div>
          </div>
          </a>
         `
       ) 
      }).join('')}
      </div>
    </div>
    `
  )
};
