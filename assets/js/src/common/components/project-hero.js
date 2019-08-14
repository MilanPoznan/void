export default function projectHero(result) {
  // const body = document.getElementsByTagName('body');
  const windowWidth = window.innerWidth;
  const maxWrappWidth = 1440;
  
  const padding = () => ((windowWidth - maxWrappWidth) / 2);
  if(windowWidth >= 1600 ) {
    padding();
  } 
   
  
  return (
    `<div class="hero">
      <div class="hero__wrapper">
        <div class="hero__image" style="background-image: url('${result.acf.project_image}')"></div>
        <div class="hero__content" style="padding: 0 0 0 ${padding()}px">
          <div class="hero__titles">
            <h4 class="hero__titles-subtitle">${result.acf.project_description}</h4>
            <h1 class="hero__titles-title">${result.title.rendered}</h1>
          </div>
          <div class="hero__short-info">
            ${result.acf.project_details.map(item => `<div>${item.project_detail}</div>`).join('')}
            <div class="hero__short-info-links">
              ${result.acf.project_external_links.map(item =>
                `<a target="_blank" href="${item.url}" style="background-image: url('${item.icon}')"></a>`
              ).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>`
  )
}