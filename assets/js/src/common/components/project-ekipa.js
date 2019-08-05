import sliderFunction from './slider';
import { log } from 'util';

export default function ekipaFilma(result) {
  const projectMainWrapper = document.querySelector('.single-project');
  let sliderIndex = 0;
  const body = document.getElementsByTagName('body');
<<<<<<< HEAD

  const windowWidth = window.innerWidth;
 
    if(windowWidth < 1199) {
      sliderFunction(body[0], 'team__member', 'team', sliderIndex);
    } 


  body[0].addEventListener('click', (e) => {
    if(e.target.parentNode.className === 'team__member-wrapp') {
      e.target.parentNode.className += ' move-top';
    } else if (e.target.parentNode.className === 'team__member-wrapp move-top') {
      e.target.parentNode.classList.remove("move-top"); 
    }
  });

  body[0].addEventListener('click', (e) => {
    const el = document.querySelector('.team__cast-wrapp');
    const innerHeight = document.querySelector('.team__full-cast-inner').offsetHeight;
    const element = document.querySelector('.team__full-cast');
    // console.log(innerHeight);


    const link = document.querySelector('.team__cast-link');
    // console.log(element, link);
    if(e.target === link) {
      el.style.height = `${innerHeight}px`;
      element.style.position = 'initial';
      link.style.display = 'none';     
    } else {
      el.style.height = '0px';
      element.style.position = 'absolute';
      link.style.display = 'flex';
    }
  });
  
=======
  
  sliderFunction(body[0], 'team__member-wrapp', 'team', sliderIndex);

>>>>>>> eb177a5d58553340e2f3b5d5c6796b56686f86a4
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
      <div class="team__full-cast">
        <div class="team__full-cast-inner">
        ${result.acf.ekipa_filma.map(item => `
            ${item.full_cast}
        `).join('')}
        </div>
      </div>
    </div>
    `
  )
}