export default function projectAbout(result) {
  return (
    `<div class="about-project" style="border: 1px solid red">
      <div class="about-project__wrapper">

        <div class="about-project__description">
          ${result.acf.about_project}
        </div>
      </div>
    </div>`
  )

}
