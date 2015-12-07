/*

Adam Forbes .com

Home Page
- Resume
- Graphic Design
  - Thesis work
  - Argus Magazine Logo
  - Argus Magazine Layout
- Web Design
  - This website: link to colophon
  - Dschorr's site
- Photography
  - ????
  - ????
  - ????
- Misc.
  - 
- Colophon
*/

//Trying to igure out a way of sorting out the pages of the website
var currLocation = '';

//My attempt to include a list of locations fo where one could be in my site...
//not sure if this is a good idea. Ideally it would be procedurally generated from
//the content, however, I am not sure atm how to do so.
var locations = {
  mainPage: 0,
  projects: 1,
  resume: 2,
  colophon: 3
}

var mainPageContent = {topics: [
      {topicId: 'about-me', 
        header: {title: 'about me', chronology: 'april 12, 2014'},
        contents: [{text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}]
      },
      {topicId: 'the-argus-mag', 
        header: {title: '_imageOverride', chronology: 'created in 2013'},
        contents: [{text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'}/*
        , I have taken out the images from the content here so 
          we can troubleshoot an issue with page width. Basically, I'm
          not sure why the mainPage class has a set width. 
          {tripleImage: ['cover-spring-2012.jpg', 'cover-spring-2013.jpg', 'cover-spring-2014.jpg']}*/]
      },
      {topicId: 'zapdos', 
        header: {title: 'Zapdos!'},
        contents: [/*{image: 'zapdos.png'}*/]
      },
      {topicId: 'red-chamber',
        header: {title: 'The Dream of the Red Chamber by Cao XueQin'},
        contents: [{text: 'The following covers are mockups for Cao XueQin\'s classical masterpiece \"The Dream of the Red Chamber\", otherwise known as the \"The Story of the Stone\". The novel is one of China\'s four great classical novels. The books contain a detailed history of 18th century Chinese culture as well as a intricate narrative including some forty main characters and over five hundred minor characters.'}, 
          {text: 'The next five covers are a single set of covers using landscape paintings from the five great masters of Chinese landscape painting and their disciples/derivatives.'}]}
    ]};

// Let's sort this out after I figure out exactly 
// How the pages work, as these will share the same sylings
// and soy templates

// var navBar = {navBarItems: [
//       {topicId: 'projects', 
//         title: 'Projects',
//         contents: [{text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}]
//       },
//       {item: 'Projects',
//         contents: 
//       },
//       {item: 'Resume'
//       },
//       {item: 'Colophon'
//       }
//     ]};

// [{projects: ''},
//               {resume: },
//               {colophon: }]

var projectsContent = {topics: [
      {topicId: 'unsure', 
        header: {title: 'what'},
        contents: [{text: 'this IS for.'}]
      }
    ]};

var resumeContent = {topics: [
      {topicId: 'info', 
        header: {title: 'info'},
        contents: [{text: 'this is my resume! Awesome'}]
      }
    ]};

var colophonContent = {topics: [
      {topicId: 'code', 
        header: {title: 'code'},
        contents: [{text: 'code used to build the site'}]
      },
      {topicId: 'font', 
        header: {title: 'font'},
        contents: [{text: 'Roboto babay'}]
      },
      {topicId: 'design', 
        header: {title: 'design'},
        contents: [{text: 'pretty cool eh?'}]
      }
    ]};

// NOT a list of topicPages, but rather, a map
// Mapping because order doesn't matter and we will be accessing this by key, not
// iterrating through it. 
var topicPages = {theArgusMag: {
      topicId: 'the-argus-mag',
      header: {title: '_imageOverride'},
      contents: [{text: 'Between 2011 and 2013 I acted as the Artistic Director of the Argus Magazine. In this role, I made a bunch of cool illustrations, sourced art, and did the layout of the whole magazine! It was a ton of fun. Wahoooo test test test'}, 
        {image: 'cover-spring-2014.jpg'}]
    }};

function loadDefault() {
  var body = $('body');
  var mainPage = $('.main-page');
  body.append(adamforbes.mainPage.navBar());
  body.append(adamforbes.mainPage.overlays());
  loadMainPageDefaults(true /* firstLoad */);

  //WIP
  currLocation = 'mainPage';

  // Adding the click events
  $('.nav-title-name').click(function() {
    loadMainPageDefaults(false /* !firstLoad */);
    resetNavLinkPosition();
  });

  //TODO(adamforbes): do this using event delegation
  $('#nav-bar-resume-button').click(function() {
    resetNavLinkPosition();
    animatedLoad(function() {
      mainPage.empty();
      mainPage.append(adamforbes.mainPage.loadTopics(resumeContent));
    });
    $(this).animate({
      marginLeft: '10px'
    }, 100);
  });
  $('#nav-bar-colophon-button').click(function() {
    resetNavLinkPosition();
    animatedLoad(function() {
      mainPage.empty();
      mainPage.append(adamforbes.mainPage.loadTopics(colophonContent));
    });
    $(this).animate({
      marginLeft: '10px'
    }, 100);
  });
  $('.menu-button').click(function() {
    var navBar = $('.nav-bar');
    var layeringShadowOverlay = $('.layering-shadow-overlay');

    // True when the nav bar is slide off
    if (navBar.position().left == 0) {          //Close
      var leftValue = '-' + navBar.width();
      navBar.animate({
        left: leftValue
      }, 300, 'swing');
      layeringShadowOverlay.animate({
        opacity: '0'
      }, 300, 'swing')
    } else {                                    // Open
      navBar.animate({
        left: '0px'
      }, 300, 'swing'); 
      layeringShadowOverlay.animate({
        opacity: '.7'
      }, 300, 'swing')
    }
  });
}

function loadMainPageDefaults(firstLoad) {
  var mainPage = $('.main-page');
  if (firstLoad) {
    $('body').append(adamforbes.mainPage.mainPage(mainPageContent));
  } else {
    animatedLoad(function() {
      mainPage.empty();
      mainPage.append(adamforbes.mainPage.loadTopics(mainPageContent));
    });
  }

  //This just doesn't work after I empty and then re-append the list.... no clue why
  //Event delegation on the .clickable objects
  mainPage.on('click', '.topic-header-title-image', function(e) {
    var elem = $(this);
    animatedLoad(function() {
      var key = getKeyFromTitleId(elem.attr('id'));
      mainPage.empty();
      mainPage.append(adamforbes.mainPage.loadTopicPage(topicPages[key]));
    });
  });
}

function hyphenToCamel(hyphenString) {
  return hyphenString.replace(/-([a-z])/g, function (a) { return a[1].toUpperCase(); });
}

function camelToHyphen(camelString) {
  return camelString.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function getKeyFromTitleId(titleId) {
  console.log("in function, titleId: " + titleId);
  console.log(titleId.length - "-title".length);
  return hyphenToCamel(titleId.substring(0, titleId.length - "-title".length));
}

function resetNavLinkPosition() {
  $('.nav-link').animate({
    marginLeft: '0px'
  }, 100);
}

//Animation that will draw the passed in function midway
//through the animation
function animatedLoad(functionToRunWhileHidden) {
  $('.animation-overlay').animate({
    width: '100%'
  }, 400, 'swing', function() {
    //it could be really cool to also show/hide a spinner here while we wait
    //for the functionToRunWhileHidden AKA what content to load
    functionToRunWhileHidden();
    $('.animation-overlay').animate({
      width:'0%'
    }, 300, 'swing');
  });
}

function set_body_height() { // set body height = window height
    $('body').height($(window).height());
}

$(document).ready(function() {
  $(window).bind('resize', set_body_height);
  set_body_height();
});

