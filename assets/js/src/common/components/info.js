export default function InfoContent(result) {
  return (
    `
    <div class="info wrapper">
      <div class="info__titles">
        <h3 class="info__titles-subtitle">${result.acf.info_subtitle}</h3>
        <h1 class="info__titles-title">${result.acf.info_title}</h1>    
      </div>
      <div class="info__container">
        <div class="info__container-text">${result.acf.info_text}</div>
        <a href="${result.acf.info_link_url}" class="info__container-link">
          ${result.acf.info_link_text}
          <div class="info__container-link-arrow"></div>
        </a>
      </div>
    </div>
  `
  )
}