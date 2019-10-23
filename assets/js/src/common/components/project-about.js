export default function projectAbout(result) {
  console.log(result)
  return (
    `<div class="about-project wrapper">
      <div class="about-project__description">
        ${result.acf.about_project.map(item => 
          `<div class="about-project__box">
            <h2 class="about-project__box-title">${item.about_project_box_title}</h2>
            <div class="about-project__box-content">
              ${item.about_project_box_content}
            </div>
          </div>
          `
        ).join('')}
      </div>  
      ${result.acf.project_trailer_video !== "" ?
        `<div class="about-project__trailer">
          <h2>Trailer</h2>
          ${result.acf.project_trailer_video}
        </div>`  
      : null}
     
    </div>`
  )

}
