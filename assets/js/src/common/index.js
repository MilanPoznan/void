import videoSection from './components/video';
import imageWithText from './components/image-with-text';
import pressPage from './components/pressPage';
import projectHero from './components/project-hero';
import testimonialsSection from './components/testimonials';
import projectAbout from './components/project-about';
import ekipaFilma from './components/project-ekipa';
//Elements
const $menuItem = $('.menu-item a');
const $mainContentDiv = $('.site-content');
const $projectMainContentDiv = $('.single-project');
const currentUrl = window.location.href;
//Vars
var sliceUrl;

function getLastCharactersFromPageUrl(url) {
  sliceUrl = url.split('/');
  sliceUrl = sliceUrl[sliceUrl.length - 2];
  console.log(sliceUrl);
} 


function createFrontPage(result) {
  $mainContentDiv.append(videoSection(result));
  $mainContentDiv.append(imageWithText(result));
  $mainContentDiv.append(testimonialsSection(result));
}
function createPressPage(result) {
  $mainContentDiv.append(pressPage(result));
}

function createDefautlPageTemplate(result) {
  // $mainContentDiv.append(videoSection(result));
  console.log('test for def page');
  
}

function createProjectCPT(result) {
  $mainContentDiv.append(projectHero(result));
  $mainContentDiv.append(projectAbout(result));
  $mainContentDiv.append(ekipaFilma(result));
}

function getProjectData() {
  $.getJSON(
    projectData.root_url + '/wp-json/wp/v2/projects',
    results => {
      results.map(result => {
        console.log(result);
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
        console.log(result);
        let currentSliceUrl = sliceUrl;
        if (sliceUrl == 'void') {
          currentSliceUrl = 'frontpage';
        }
        history.pushState(result, '', projectData.root_url + '/' + currentSliceUrl);
        
        if (result.slug == currentSliceUrl) {
          switch (result.slug) {
            case 'frontpage':
              createFrontPage(result);
              break;
            case 'press': 
                       
              createPressPage(result);
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

function getDataFromREST(e) {
  let targetUrl = e.target.href; 
  e.preventDefault();
  $mainContentDiv.empty();
  $mainContentDiv.empty();
  
  if (targetUrl.includes('projects')) {
    getLastCharactersFromPageUrl(targetUrl);
    getProjectData();
  } else {
    getLastCharactersFromPageUrl(targetUrl);
    getPageData();
  }
}
//Events 
$menuItem.on('click', function(e) {
  getDataFromREST(e);
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

