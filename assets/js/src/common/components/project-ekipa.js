import sliderFunction from './slider';
import { log } from 'util';

export default function ekipaFilma(result) {
  const projectMainWrapper = document.querySelector('.single-project');
  let sliderIndex = 0;
  const body = document.getElementsByTagName('body');
  
  sliderFunction(body[0], 'team__member', 'team', sliderIndex);

  body[0].addEventListener('click', (e) => {
    if(e.target.parentNode.className === 'team__member-wrapp') {
      e.target.parentNode.className += ' move-top';
    } else if (e.target.parentNode.className === 'team__member-wrapp move-top') {
      e.target.parentNode.classList.remove("move-top"); 
    }
  });

  body[0].addEventListener('click', (e) => {
    const element = document.querySelector('.team__full-cast');
    const link = document.querySelector('.team__cast-link');
    console.log(element, link);
    if(e.target === link) {
      element.style.display = 'flex';
      link.style.display = 'none';     
    } else {
      element.style.display = 'none';
      link.style.display = 'flex';
    }
  });
  
  return (
    `<div class="team">
      <div class="team__wrapper">
        <div class="team__titles">
          <h3>${result.acf.team_subtitle}</h3> 
          <h1>${result.acf.team_title}</h1>
        </div>
        <div class="team__peoples-slider">
          ${result.acf.ekipa_filma.map(item => 
            `<div class="team__member" style="transition: 0.5s;">
              <div class="team__member-wrapp">
                <div class="team__member-image" style="background-image: url('${item.image}')"></div>
                <h3 class="team__member-name">${item.name}</h3>
                <div class="team__member-position">${item.position}</div>
                <div class="team__member-description">${item.description}</div>
              </div>
            </div>`  
          ).join('')}
        </div>
      </div>
      <span class="team__prev team__slide"></span>
      <span class="team__next team__slide"></span>
    </div>
    <div class="team__cast-link">see all cast and crew</div>
    <div class="team__cast-wrapp">
      ${result.acf.ekipa_filma.map(item => `
        <div class="team__full-cast">
          ${item.full_cast}
        </div>
      `).join('')}
    </div>
    `
  )
}