export default function imageWithTitle(result) {
  return (
    `
    <div class="image-text-component wrapper">
      ${result.acf.image_with_title_repeater.map(
        item => `
        <div class="image-text-component__wrapper">
          <a class="image-text-component__link" href="${item.component_link}"   style="background-image: url('${item.component_image}')">
            <div class="image-text-component__overlay"></div>
            <div class="image-text-component__title">${item.component_title}</div>
          </a>
        </div>`
      ).join('')}
    </div>
  `
  )
}