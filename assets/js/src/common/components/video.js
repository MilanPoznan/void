export default function videoSection(result) {
  return (
    `
    <div class="video-section">
      <video autoplay muted loop src="${result.acf.video}" class="video-section__video">
      <a href="#" class="home-hero__scroll"></a>
    </div>
  `
  )
}