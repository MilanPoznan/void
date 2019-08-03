import sliderFunction from './slider';

export default function ekipaFilma(result) {
  const projectMainWrapper = document.querySelector('.single-project');
  let sliderIndex = 0;
  const body = document.getElementsByTagName('body');
  
  sliderFunction(body[0], 'team__member-wrapp', 'team', sliderIndex);

  return (
    `<div class="team">
      <div class="team__wrapper">
      <div class="team__title">
        <h3>Our crew</h3>
        <h1>TEAM</h1>
      </div>
      <div class="team__peoples-slider">
        ${result.acf.ekipa_filma.map(item => 
          `<div class="team__member-wrapp" style="transition: 0.5s;">
            <div class="team__member-image" style="background: url('${item.image}')"></div>
            <h3>${item.name}</h3>
            <div class="team__position">${item.description}</div>
          </div>`  
        ).join('')}
        </div>
      </div>
      <span class="team__prev team__slide"></span>
      <span class="team__next team__slide"></span>

    </div>`
  )
}