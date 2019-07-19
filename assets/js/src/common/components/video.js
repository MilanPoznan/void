export default function videoSection(result) {
  return (
    `
    <div class="video-section">
      <video muted src="${result.acf.video}" class="video-section__video">
    </div>
  `
  )
}