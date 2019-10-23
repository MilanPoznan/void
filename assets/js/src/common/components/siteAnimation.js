export default function siteAnimation() {

  
  const siteAnimationElem = document.querySelector('.site-animation');
  const rotatedObject = document.querySelector('.rotated-object');
  const footer = document.querySelector('.site-footer');
  
  TweenMax.to(footer, 0, {
    opacity: 0,
  });
  TweenMax.to(siteAnimationElem, 0.1, {
    height: '100vh',
  });
  TweenMax.to(siteAnimationElem, 0.7, {
    opacity: 1,
    delay: 0.1
  });
  TweenMax.to(rotatedObject, 0.5, {
    rotation: 360,
    delay: 0.9
  });
  TweenMax.to(siteAnimationElem, 0.3, {
    opacity: 0,
    delay: 1.5
  });
  TweenMax.to(siteAnimationElem, 0.3, {
    height: '0px',
    delay: 1.7

  });
  TweenMax.to(rotatedObject, 0.1, {
    rotation: 0,
    delay: 2
  });
  TweenMax.to(footer, 0.5, {
    opacity: 1,
    delay: 2
  });

} 