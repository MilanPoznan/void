import slickSlider from './components/slick-slider';
// import videoSection from './components/video';
import infoContent from './components/info';
import bioPage from './components/bioPage';
import articlesArchive from './components/articlesArchive';
import imageWithTitle from './components/image-with-title';
import pressPage from './components/pressPage';
import projectHero from './components/project-hero';
import testimonialsSection from './components/testimonials';
import projectGallery from './components/project-galery';
import projectAbout from './components/project-about';
import ekipaFilma from './components/project-ekipa';
import singleArticle from './components/singleArticle';

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
let heroTitle = null;
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
$('.menu-item').on('click', (e) => console.log(e.target))
function getLastCharactersFromPageUrl(url) {
  sliceUrl = url.split('/');
  sliceUrl = sliceUrl[sliceUrl.length - 2];
} 
function animateSliderTitle() {
  const sliderTitle = $('.articles-slider__title');
  const sliderContent = $('.articles-slider__content');
  const sliderButton = $('.articles-slider__link');
  sliderTitle.addClass('title-animation');
  sliderContent.addClass('content-animation');
  sliderButton.addClass('content-animation');
  setTimeout(() => {
    sliderTitle.removeClass('title-animation');
    sliderContent.removeClass('content-animation');
    sliderButton.removeClass('content-animation');
  }, 800);
}
function createFrontPage(result, lang, articles) {
  $mainContentDiv.append(slickSlider(articles, lang));
  // $mainContentDiv.append(videoSection(result));
  $mainContentDiv.append(infoContent(result));
  $mainContentDiv.append(imageWithTitle(result));
  $mainContentDiv.append(testimonialsSection(result));
  animateSliderTitle();
  
}
function createPressPage(result) {
  $mainContentDiv.append(pressPage(result));
}
function createBioPage(result) {
  $mainContentDiv.append(bioPage(result));
}
function createBlogPage(result) {
  $mainContentDiv.append(articlesArchive(result));
}

function createDefautlPageTemplate(result) {
  console.log('test for def page');
}

function createSlickSlider() {
  $('.articles-slider__wrapper').slick({
    dots: false,
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'linear'
  });
}
function createArticlesCPT(result) {
  $mainContentDiv.append(singleArticle(result));
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
let englishArticles = [];

const getArticlesDataForNews = () => {
  $.getJSON(
    projectData.root_url + '/wp-json/wp/v2/articles',
    results => {
      results.map(article => {
        if (!article.link.includes("/sr/")) {
          englishArticles.push(article)
        } 
      })
    }    
  )
  // return englishArticles;
}
getArticlesDataForNews();
let serbianArticles = [];

const getArticlesDataForNewsSerbian = () => {
  $.getJSON(
    projectData.root_url + '/wp-json/wp/v2/articles',
    results => {
      results.map(article => {
        if (article.link.includes("/sr/")) {
          serbianArticles.push(article);
        } 
      })
    }    
  )
  // return serbianArticles;
}
getArticlesDataForNewsSerbian()
// console.log(getArticlesDataForNewsSerbian())
// getArticlesDataForNews();

function getArticlesData() {
  $.getJSON(
    projectData.root_url + '/wp-json/wp/v2/articles',
    results => {
      results.map(result => {
        history.pushState(result, '', projectData.root_url + '/articles/' + sliceUrl);
        if (result.slug == sliceUrl) {
          createArticlesCPT(result);
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
        //Dev purpose
        if (sliceUrl == 'voidpictures.com') {
        // if (sliceUrl == 'void') {
          currentSliceUrl = 'home';
        }
        history.pushState(result, '', projectData.root_url + '/' + currentSliceUrl);
        if (result.slug == currentSliceUrl) {
          switch (result.slug) {
            case 'home':
            createFrontPage(result, 'en', englishArticles);
            createSlickSlider();
              break;
            case 'frontpage':
              createFrontPage(result, 'sr', serbianArticles);
              createSlickSlider();
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
            case 'news': 
              createBlogPage(englishArticles);
              break;
            case 'vesti':  
              createBlogPage(serbianArticles);
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
  let targetUrl = e.currentTarget.href;
  console.log(targetUrl)
  e.preventDefault();
  if (targetUrl.includes('#')) {
    e.preventDefault();
    return false;
  } else if (targetUrl.includes('projects')) {
    $mainContentDiv.empty();
    getLastCharactersFromPageUrl(targetUrl);
    getProjectData();
  } else if(targetUrl.includes('articles')) {
    $mainContentDiv.empty();
    getLastCharactersFromPageUrl(targetUrl);
    getArticlesData()
  } else {
    loadFrontPage(targetUrl);
  }
}

//Events 
$('#header-logo').on('click', function(e) {
  e.preventDefault();
  siteAnimation();
 
  getDataFromREST(e);
  setTimeout(() => {
    animateSliderTitle();
  }, 1800);

})


$menuItem.on('click', function(e) {
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
  } else if(currentUrl.includes('articles')) {
    getLastCharactersFromPageUrl(currentUrl);
    getArticlesData();
  }else {
    getLastCharactersFromPageUrl(currentUrl);
    getPageData();
  }

});
$('body').on('click', '.image-text-component__link, .info__container-link, .js-link', function(e) {
  e.preventDefault();
  siteAnimation();
  document.documentElement.scrollTop = 0;
  getDataFromREST(e);
});



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