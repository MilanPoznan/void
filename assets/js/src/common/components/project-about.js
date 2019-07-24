export default function projectAbout(result) {
  return (
    `<div class="about-project wrapper">
      <div class="about-project__description">
        ${result.acf.about_project.map(item => `<div class="about-project__box">${item.about_project_box}</div>`).join('')}
      </div>  
    </div>`
  )

}
