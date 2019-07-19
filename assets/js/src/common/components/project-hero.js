export default function projectHero(result) {
  return (
    `<div class="hero">
      <div class="hero__wrapper">
        <div class="hero__content">
          <div class="hero__title">${result.title.rendered}</div>
          <div class="hero__title">${result.acf.project_description}</div>
        </div>
        <div class="hero__image" style="background: url('${result.acf.project_image}')"> </div>
      </div>
    </div>`
  )
}