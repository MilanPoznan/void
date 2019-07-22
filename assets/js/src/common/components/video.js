export default function videoSection(result) {
  return (
    `
    <div class="video-section">
      <video autoplay muted loop src="${result.acf.video}" class="video-section__video"></video>
      <a href="#info" class="video-section__scroll"><span></span></a>
    </div>
  `
  )
}