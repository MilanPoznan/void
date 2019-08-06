export default function BioPage(result) {
  return (`
    <div class="bio wrapper">
      <div class="bio__titles">
        <h4 class="bio__titles-subtitle">${result.acf.bio_subtitle}</h4>
        <h1 class="bio__titles-title">${result.acf.bio_title}</h1>    
      </div>
      ${result.acf.bio_repeater.map(
        item => `
          <div class="bio__container">
            <div class="bio__image" style="background-image: url('${item.bio_image}')"></div>
            <div class="bio__content">
              <h2 class="bio__content-name">${item.bio_name}</h2>
              <div class="bio__content-text">${item.bio_text}</div>
            <div>
          </div>
        `
      ).join('')}
    </div>
  `
  )
}