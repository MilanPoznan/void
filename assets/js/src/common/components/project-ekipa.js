import sliderFunction from './slider';
import { log } from 'util';

export default function ekipaFilma(result) {
  const projectMainWrapper = document.querySelector('.single-project');
  let sliderIndex = 0;
  const body = document.getElementsByTagName('body');
  sliderFunction(body[0], 'team__member', 'team', sliderIndex);

  body[0].addEventListener('click', (e) => {
    let isClicked = false;

    if(e.target.parentNode.className === 'team__member-wrapp') {
      if(!isClicked) {
        e.target.parentNode.className += ' move-top';
        isClicked = true;
        console.log(isClicked);
      } else {
        e.target.parentNode.className -= ' move-top';
        isClicked = false;
        console.log(isClicked);
      }
    } else {
      console.log(e.target.className)
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
      
    </div>`
  )
}