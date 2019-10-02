import videoSection from './components/video';
import infoContent from './components/info';
import bioPage from './components/bioPage';
import imageWithTitle from './components/image-with-title';
import pressPage from './components/pressPage';
import projectHero from './components/project-hero';
import testimonialsSection from './components/testimonials';
import projectGallery from './components/project-galery';
import projectAbout from './components/project-about';
import ekipaFilma from './components/project-ekipa';
// import galleryModal from './components/gallery-modal';
import siteAnimation from './components/siteAnimation';

//Elements
const $menuItem = $('.menu-item a');
const $headerMenuItems = $('#site-navigation .menu-item a');
const $mainContentDiv = $('.site-content');
const currentUrl = window.location.href;
const $hamburgerWrapper = $('.hamburger-wrapp');
const $hamburger = $('.hamburger');
const $headerMenu = $('.header__menu');
const $mobMenu = $('#primary-menu');
const $menu = $('.js-menu');
const body = document.getElementsByTagName('body');

//Vars
var sliceUrl;

/* START navigation */
$hamburgerWrapper.on('click', () => {
	$hamburger.toggleClass('hamburger--is-active');
	$headerMenu.toggleClass('header__menu--visible');
  $('.header').toggleClass('header--is-open');
  $('body').toggleClass( 'no-scroll' );
  $mobMenu.toggleClass( 'open-menu' );
});
/* END of navigation part */

function getLastCharactersFromPageUrl(url) {
  sliceUrl = url.split('/');
  sliceUrl = sliceUrl[sliceUrl.length - 2];
} 

function createFrontPage(result) {
  $mainContentDiv.append(videoSection(result));
  $mainContentDiv.append(infoContent(result));
  $mainContentDiv.append(imageWithTitle(result));
  $mainContentDiv.append(testimonialsSection(result));
  
}
function createPressPage(result) {
  $mainContentDiv.append(pressPage(result));
}
function createBioPage(result) {
  $mainContentDiv.append(bioPage(result));
}

function createDefautlPageTemplate(result) {
  console.log('test for def page');
}

function createProjectCPT(result) {
  $mainContentDiv.append(projectHero(result));
  $mainContentDiv.append(projectAbout(result));
  $mainContentDiv.append(ekipaFilma(result));
  $mainContentDiv.append(projectGallery(result));
}

function getProjectData() {
  $.getJSON(
    projectData.root_url + '/wp-json/wp/v2/projects',
    results => {
      results.map(result => {
        history.pushState(result, '', projectData.root_url + '/projects/' + sliceUrl);
        if (result.slug == sliceUrl) {
          createProjectCPT(result);
        }
      });
    }
  );
}
function getPageData() {
  $.getJSON(
    projectData.root_url + '/wp-json/wp/v2/pages',
    results => {
      results.map(result => {
        let currentSliceUrl = sliceUrl;
        console.log(currentSliceUrl)
        //Dev purpose
        // if (sliceUrl == 'development.voidpictures.com') {
        if (sliceUrl == 'void') {
          currentSliceUrl = 'home';
        }
        history.pushState(result, '', projectData.root_url + '/' + currentSliceUrl);
        
        if (result.slug == currentSliceUrl) {
          switch (result.slug) {
            case 'home':
              createFrontPage(result);
              break;
            case 'frontpage':
              createFrontPage(result);
              break;
            case 'press': 
              createPressPage(result);
              break;
            case 'stampa': 
              createPressPage(result);
              break;
            case 'biography':
              createBioPage(result);
              break;
            case 'biografija':
              createBioPage(result);
              break;
              default: 
                createDefautlPageTemplate();
              break;
          }
        }
      });
    }
  )
}

function loadFrontPage(targetUrl) {
  $mainContentDiv.empty();
  getLastCharactersFromPageUrl(targetUrl);
  getPageData();
}

function getDataFromREST(e) {
  let targetUrl = e.target.href;
  console.log(targetUrl)
  e.preventDefault();
  if (targetUrl.includes('#')) {
    e.preventDefault();
    return false;
  } else if (targetUrl.includes('projects')) {
    $mainContentDiv.empty();
    getLastCharactersFromPageUrl(targetUrl);
    getProjectData();
  } else {
    loadFrontPage(targetUrl);
  }
}
function setActiveClassToLink(e) {
  console.log(e.target.href);
  console.log($headerMenuItems);
  let $headerMenuVal = Object.values($headerMenuItems);
  console.log($headerMenuVal.href);
  
} 
//Events 
$('#header-logo').on('click', function(e) {
  e.preventDefault();
  siteAnimation();
  getDataFromREST(e);
})
$menuItem.on('click', function(e) {
  // setActiveClassToLink(e);
  if (e.target.parentNode.className.includes('lang-item')) {
    //lang
  } else {
    if (window.innerWidth < 1200 ) {
      $hamburger.removeClass('hamburger--is-active');
      $headerMenu.removeClass('header__menu--visible');
      $mobMenu.removeClass( 'open-menu' );
      $('.header').removeClass('header--is-open');
      $('body').removeClass( 'no-scroll' );
      setTimeout(() => {
        siteAnimation();
        
      }, 500);
    } 
    siteAnimation();
    getDataFromREST(e);
  }
  
});

$(document).ready(function() {
  if (currentUrl.includes('project')) {
    getLastCharactersFromPageUrl(currentUrl);
    getProjectData();
  } else {
    getLastCharactersFromPageUrl(currentUrl);
    getPageData();

  }
});
$('body').on('click', '.image-text-component__link, .info__container-link', function(e) {
  e.preventDefault();
  document.documentElement.scrollTop = 0;
  siteAnimation();
  getDataFromREST(e);
})

body[0].onclick = (e) => {
  if (e.target.className === 'image-text-component__title ') {
    e.preventDefault();
  }
  if (e.target.className === 'image-text-component__overlay') {

    let url = e.target.parentNode.href;
    let urlObj = {
      target: {
        href: url
      }
    }
    e.preventDefault();
    siteAnimation();
    getDataFromREST(urlObj);
  }
} 