export default function imageWithText(result) {
  return (
    `
    <div class="image-text-component">
      <div class="image-text-component__wrapper">
        <div class="image-text-component__image" style="background: url('${result.acf.component_image}')">
        </div>
        <div class="image-text-component__content">
          <div class="image-text-component__title">
          ${result.acf.component_title}
          </div>
          <div class="image-text-component__content">
          ${result.acf.component_description}
          </div>
        </div>
      </div>
    </div>
  `
  )
}