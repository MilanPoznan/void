export default function projectAbout(result) {
  return (
    `<div class="about-project" style="border: 1px solid red">
      <div class="about-project__wrapper">
        <div class="about-project__short-info">
        ${result.acf.project_details.map(item => `<div>${item.project_detail}</div>`).join('')}
        ${result.acf.project_external_links.map(item =>
          `<a target="_blank" href="${item.url}" style="background: url('${item.icon}')"></a>`
        ).join('')}

        </div>
        <div class="about-project__description">
          ${result.acf.about_project}
        </div>
      </div>
    </div>`
  )

}
