export default function imageWithTitle(result) {
  return (
    `
    <div class="image-text-component wrapper">
      ${result.acf.image_with_title_repeater.map(
        item => `
        <div class="image-text-component__wrapper">
          <a href="${item.component_link}" class="image-text-component__link">
          <img class="image-text-component__image" src="${item.component_image}">
          <div class="image-text-component__overlay-title">${item.component_title}</div>
          </a>
        </div>`
      ).join('')}
    </div>
  `
  )
}