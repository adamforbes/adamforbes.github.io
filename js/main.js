var mainPageContent = {topics: [
      {topicId: 'about-me', 
        title: 'about me',
        contents: [{text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}]
      },
      {topicId: 'the-argus-mag', 
        title: '_imageOverride',
        contents: [{text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'}, 
          {tripleImage: ['cover-spring-2012.jpg', 'cover-spring-2013.jpg', 'cover-spring-2014.jpg']}],
        footer: {moreLink: true, date: 'Created in 2013'}
      },
      {topicId: 'zapdos', 
        title: 'Zapdos!',
        contents: [{image: 'zapdos.png'}],
        footer: {moreLink: true, date: 'Created in 2013'}
      }
    ]};

var resumeContent = {topics: [
      {topicId: 'resume', 
        title: 'info',
        contents: [{text: 'this is my resume! Awesome'}]
      }
    ]};

//NOT a list of topicPages, but rather, a MAP
var topicPages = {theArgusMag: {
      topicId: 'the-argus-mag',
      title: '_imageOverride',
      contents: [{text: 'Between 2011 and 2013 I acted as the Artistic Director of the Argus Magazine. In this role, I made a bunch of cool illustrations, sourced art, and did the layout of the whole magazine! It was a ton of fun. Wahoooo test test test'}, 
        {image: 'cover-spring-2014.jpg'}]
    }};

function loadDefault() {
  $('body').append(adamforbes.mainPage.navBar());
  loadMainPageDefaults();

  // Adding the click events
  $('.nav-title-name').click(function() {
    $('.main-page').empty();
    loadMainPageDefaults();
    resetNavLinkPosition();
  });
  $('#nav-bar-resume-button').click(function() {
    $('.main-page').empty();
    $('.main-page').append(adamforbes.mainPage.loadTopics(resumeContent));
    $(this).animate({
          marginLeft: '10px'
    }, 100);
  })
}

function loadMainPageDefaults() {
  $('body').append(adamforbes.mainPage.mainPage(mainPageContent));
  for (key in topicPages) {
    $('#' + topicPages[key].topicId + '-title').click(function() {
      $('.main-page').empty();
      $('.main-page').append(adamforbes.mainPage.loadTopicPage(topicPages[key]));
    });
  }
}

function getTopicPage(topicId) {
  return topicPages[hyphenToCamel(topicId)];
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

function set_body_height() { // set body height = window height
    $('body').height($(window).height());
}

$(document).ready(function() {
  $(window).bind('resize', set_body_height);
  set_body_height();
});
