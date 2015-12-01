var mainPageContent = {topics: [
      {topicId: 'about-me', 
        header: {title: 'about me', chronology: 'april 12, 2014'},
        contents: [{text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}]
      },
      {topicId: 'the-argus-mag', 
        header: {title: '_imageOverride', chronology: 'created in 2013'},
        contents: [{text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'}, 
          {tripleImage: ['cover-spring-2012.jpg', 'cover-spring-2013.jpg', 'cover-spring-2014.jpg']}]
      },
      {topicId: 'zapdos', 
        header: {title: 'Zapdos!'},
        contents: [{image: 'zapdos.png'}]
      },
      {topicId: 'red-chamber',
        header: {title: 'The Dream of the Red Chamber by Cao XueQin'},
        contents: [{text: 'The following covers are mockups for Cao XueQin\'s classical masterpiece \"The Dream of the Red Chamber\", otherwise known as the \"The Story of the Stone\". The novel is one of China\'s four great classical novels. The books contain a detailed history of 18th century Chinese culture as well as a intricate narrative including some forty main characters and over five hundred minor characters.'}, 
          {text: 'The next five covers are a single set of covers using landscape paintings from the five great masters of Chinese landscape painting and their disciples/derivatives.'}]}
    ]};

var resumeContent = {topics: [
      {topicId: 'info', 
        header: {title: 'info'},
        contents: [{text: 'this is my resume! Awesome'}]
      }
    ]};

//NOT a list of topicPages, but rather, a MAP
var topicPages = {theArgusMag: {
      topicId: 'the-argus-mag',
      header: {title: '_imageOverride'},
      contents: [{text: 'Between 2011 and 2013 I acted as the Artistic Director of the Argus Magazine. In this role, I made a bunch of cool illustrations, sourced art, and did the layout of the whole magazine! It was a ton of fun. Wahoooo test test test'}, 
        {image: 'cover-spring-2014.jpg'}]
    }};

function loadDefault() {
  $('body').append(adamforbes.mainPage.navBar());
  loadMainPageDefaults(true);

  // Adding the click events
  $('.nav-title-name').click(function() {
    loadMainPageDefaults(false);
    resetNavLinkPosition();
  });
  $('#nav-bar-resume-button').click(function() {
    animatedLoad(function() {
      $('.main-page').empty();
      $('.main-page').append(adamforbes.mainPage.loadTopics(resumeContent));
    });
    $(this).animate({
      marginLeft: '10px'
    }, 100);
  })
}

function loadMainPageDefaults(firstLoad) {
  if (firstLoad) {
    $('body').append(adamforbes.mainPage.mainPage(mainPageContent));
  } else {
    animatedLoad(function() {
      $('.main-page').empty();
      $('.main-page').append(adamforbes.mainPage.loadTopics(mainPageContent));
    });
  }

  //INTRODUCED A BUG where the click events aren't working the second time
  //around... not sure why. To troubleshoot tomorrow. 
  for (key in topicPages) {
    $('#' + topicPages[key].topicId + '-title').click(function() {
      animatedLoad(function() {
        $('.main-page').empty();
        $('.main-page').append(adamforbes.mainPage.loadTopicPage(topicPages[key]));
      });
    });
  }
}

function hyphenToCamel(hyphenString) {
  return hyphenString.replace(/-([a-z])/g, function (a) { return a[1].toUpperCase(); });
}

function camelToHyphen(camelString) {
  return camelString.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
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
    functionToRunWhileHidden();
    $('.animation-overlay').addClass('.float-right');
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
