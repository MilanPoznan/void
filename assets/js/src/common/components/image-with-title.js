export default function imageWithTitle(result) {
  return (
    `
    <div class="image-text-component wrapper">
      ${result.acf.image_with_title_repeater.map(
        item => `
        <div class="image-text-component__wrapper">
          <a href="${item.component_link}">
            <div class="image-text-component__overlay"></div>
            <div class="image-text-component__image" style="background: url('${item.component_image}')">
            </div>
            <div class="image-text-component__content">
              <div class="image-text-component__content-title">
              ${item.component_title}
              </div>
            </div>
          </a>
        </div>`
      ).join('')}
    </div>
  `
  )
}