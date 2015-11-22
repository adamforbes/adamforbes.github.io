var mainPageContent = {topics: [
      {topicId: 'about-me', 
        title: 'about me',
        contents: [{text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}]
      },
      {topicId: 'the-argus-mag', 
        title: '_imageOverride',
        contents: [{text: 'cool project! I really liked this one'}, 
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

var topicPages = [
    {topicId: 'the-argus-mag', 
      title: '_imageOverride',
      contents: [{text: 'Between 2011 and 2013 I acted as the Artistic Director of the Argus Magazine. In this role, I made a bunch of cool illustrations, sourced art, and did the layout of the whole magazine! It was a ton of fun. Wahoooo test test test'}, 
        {image: 'cover-spring-2014.jpg'}]
    }];

function loadDefault() {
  $('body').append(adamforbes.mainPage.navBar());

  // Adding the click events
  $('.nav-title-name').click(function() {
    $('.main-page').empty();
    $('.main-page').append(adamforbes.mainPage.loadTopics(mainPageContent));
    resetNavLinkPosition();
  });
  $('#nav-bar-resume-button').click(function() {
    $('.main-page').empty();
    $('.main-page').append(adamforbes.mainPage.loadTopics(resumeContent));
    $(this).animate({
          marginLeft: '10px'
    }, 100);
  });

  //THIS DOENS"T WORK. For some reason the selector i'm using doesn't work properly. I need to figurethis out.
  for (var i = 0; i < topicPages.length; i++) {
    alert('#' + topicPages[i].topicId + '-title');
    $('#' + topicPages[i].topicId + '-title').click(function() {
      alert(topicPages[i].topicId);
      $('.main-page').empty();
      $('.main-page').append(adamforbes.mainPage.loadTopicPage(topicPages[i]));
    });
  }

  loadDefaultMainPage();
}

function loadDefaultMainPage() {
  $('body').append(adamforbes.mainPage.mainPage(mainPageContent));
}

function resetNavLinkPosition() {
  $('.nav-link').animate({
    marginLeft: '0px'
  }, 100);  
}
