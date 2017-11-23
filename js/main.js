var navBarContents = {links: [
    {navId: 'resume', displayName: 'Resume'},
    {navId: 'graphic-design', displayName: 'Graphic Design'},
    {navId: 'web-sketching', displayName: 'Web Sketching'},
    {navId: 'web-design', displayName: 'Web Design'},
    {navId: 'photography', displayName: 'Photography'},
    {navId: 'misc', displayName: 'Misc.'},
    {navId: 'colophon', displayName: 'Colophon'}]};

var topicShorts = {topics: [
    {topicId: 'grand-opening',
      navIds: ['main-page', 'graphic-design'],
      header: {title: 'grand opening!', chronology: 'feb 26, 2016'},
      contents: [
          {text: 'Hello! Welcome to my personal website. If you haven\'t noticed already, there\'s not a lot of content yet. However! Underneath the bare-bones exterior is a custom content management system built on top of js closure templates (soy), sass, and js. My heavy usage of templates allows me to have a very brief html file. How brief? Take a look at this page\'s source.'},
          {image: 'source.png'},
          {text: 'My next improvements will be to the mobile experience (right now desktop is favored) and shifting content to a proper backend.'},
          {blockLink: {text: 'SEE CODE', link: 'https://github.com/adamforbes/adamforbes.github.io'}}
    ]},
    {topicId: 'about-me',
      navIds: ['main-page'],
      header: {title: 'about me', chronology: 'april 12, 2014'},
      contents: [
          {text: 'I\'m Adam Forbes. I like to design stuffs.'},
          {text: 'This is my eponymous website. Here, I hope to showcase the best of my personal and professional body of work.'}
    ]},
    {topicId: 'the-argus-mag',
      navIds: ['main-page', 'graphic-design'],
      header: {title: '_imageOverride', chronology: 'created in 2013'},
      contents: [
          {text: 'A few friends and I founded The Argus Magazine: Wesleyan University\'s first longform nonfiction periodical. We published a new issue once a semester. These issues carried everything from scientific essays comparing methods of combating climate change to photo journalism exploring Christianity in contemporary America.'},
          {text: 'I acted as the Art Director and Designer; I designed the layout of the magazine in InDesign, sourced all the accompanying art, designed the logo, and created all of the covers.'},
          {image: 'cover-spring-2012.jpg'},
          {image: 'cover-spring-2013.jpg'},
          {image: 'cover-spring-2014.jpg'},
          {topicPageButton: 'read more'}
    ]},
    {topicId: 'red-chamber',
      navIds: ['main-page', 'graphic-design'],
      header: {title: 'The Dream of the Red Chamber'},
      contents: [
          {text: 'The following covers are mockups for Cao XueQin\'s classical masterpiece \"The Dream of the Red Chamber\", otherwise known as the \"The Story of the Stone\". The novel is one of China\'s four great classical novels. The books contain a detailed history of 18th century Chinese culture as well as a intricate narrative including some forty main characters and over five hundred minor characters.'},
          {text: 'The next five covers are a single set of covers using landscape paintings from the five great masters of Chinese landscape painting and their disciples/derivatives.'},
          {image: 'vol1_the-golden-days.jpg'}
    ]},
    {topicId: 'zapdos',
      navIds: ['main-page', 'graphic-design'],
      header: {title: 'Zapdos!'},
      contents: [
          {text: 'this is a test'},
          {image: 'zapdos.png'},
          {caption: 'I love Zapdos in the Morning'},
          {image: 'large-square.png'}
    ]},
    {topicId: 'colophon',
      navIds: ['colophon'],
      header: {title: 'Colophon'},
      contents: [
          {text: 'This is a work in progress'}
    ]},
]};

var topicPages = {topics: [
    {topicId: 'the-argus-mag',
      header: {title: '_imageOverride', chronology: 'created in 2013'},
      contents: [
          {text: 'A few friends and I founded The Argus Magazine: Wesleyan University\'s first longform nonfiction periodical. We published a new issue once a semester. These issues carried everything from scientific essays comparing methods of combating climate change to photo journalism exploring Christianity in contemporary America.'},
          {text: 'I acted as the Art Director and Designer; I designed the layout of the magazine in InDesign, sourced all the accompanying art, designed the logo, and created all of the covers.'},
          {image: 'cover-spring-2012.jpg'},
          {image: 'cover-spring-2013.jpg'},
          {image: 'cover-spring-2014.jpg'}
    ]},
    {topicId: 'zapdos',
      header: {title: 'Zapdos!'},
      contents: [
          {image: 'zapdos.png'},
          {caption: 'I love Zapdos in the Morning'},
          {image: 'large-square.png'},
          {image: 'med-square.png'},
          {image: 'small-square.png'},
          {image: 'tall-skinny.png'},
          {image: 'short-fat.png'},
          {image: 'short-fat-large.png'},
          {image: 'tall-skinny-large.png'}
    ]},
    {topicId: 'error-page',
      header: {title: 'Error! Missing topic'},
      contents: [
          {text: 'This topic page doesn\'t exist!'}
    ]}
]};

/* 
==========================================================================
TopicPage
==========================================================================

TopicPages will take up the entire main page div. These are the full contents
of a project. The topic snippet on the mainpage is either an extract of this
topic page or a separate introduction. I doubt I will spend the effort to make
these two things different, but hey. At least you have the flexibility

Order of fields matters. +1 to lists

Both TopicPages and MainPage/Topics will have the same datatype. That is...

- Required header
  - Required title
  - Optional chronology
- Repeated navIds : a list of pages this topic should appear. Corresonds to
                    the navBar list of items plus the MainPage as a special
                    case navigation item
- Repeated content
  - Optional text
  - Optional image
  - Optional caption
  - Optional subheading
  - etc...
- ???? Perhaps include an non-display timestamp for sorting

This will be used by the soy template to generate the content.

==========================================================================
TopicShorts
==========================================================================

These objects will appear on the Homepage on the initial load of the website.
They are either full topics, or they have "...read more" buttons that will
appear if there is addition content to cover.

There is a MainPage/Topic for every TopicPage, but not a TopicPage for
every MainPage/Topic

HOWEVER. Now that I think of it. The mainpage isn't the only place we want
to have a list of the Topic blurbs..


==========================================================================
Next Steps
==========================================================================
- Add content
- Visually connect topic pages and nav bar (move name and animate in 'back
  button')
- Add a pixel margin at the top of the TOPIC PAGE to allign it with your name.
  LUXURIOUS page looks way better even if it uses up whitespace. Remove it
  if not on desktop
- Split out JS file to easier maintenance
- Write a simple test suite
- Add swipe motions for mobile
- Style the nav bar to be smaller for mobile screens. Atm it's
  half of the page
- Topics should be it's own object with topicPage and topicShorts under

message Topic {
  required string topicId
  required header {
    required string title
    required string chronology
  }
  required navIdTags {
    repeated string navId
  }
  required shortContent {
    repeated Content
  }
  optional pageContent {
    repeated Content
  }
}

*/


/* ==========================================================================
   UI Loading
   ========================================================================== */

function loadDefault() {
  var $body = $('body');

  // Load Overlays
  $body.append(adamforbes.mainPage.overlays());

  loadNavBar();
  loadMainPageDefaults(true /* firstLoad */);

  // Adding the click event to the nav-title-name. Essentially the home button
  $('.nav-title-name').click(function() {
    loadMainPageDefaults(false /* !firstLoad */);
    resetNavLinkPosition();
  });

  // This toggles the nav bar on and off
  $('.menu-toggle').click(function() {
    toggleNavBar();
  });

  // For mobile.
  $('.layering-shadow-overlay').click(function() {
    toggleNavBar();
  });
}

function loadNavBar() {
  $('body').append(adamforbes.mainPage.navBar(navBarContents));
  if (window.innerWidth < 840) {
    showBorder = false; //disabling this feature
  }
  addNavPageListLinkToNavItems();
}

function loadMainPageDefaults(firstLoad) {
  if (firstLoad) {
    $('body').append(adamforbes.mainPage.mainPage(topicShorts));
    loadBodyInteractiveElements();
  } else {
    loadToMainPage(adamforbes.mainPage.loadTopics(topicShorts));
  }
}

function loadTopicPage(topicId) {
  var topicPage = getTopic(topicPages, topicId);
  console.log(topicPage);

  console.log(topicPage.topicId);

  // When there is no matching topic page, show an error page
  if (topicPage == -1) {
    topicPage = topicPages.topics[topicPages.topics.length - 1];
    console.log('Error! No topic page found');
  }

  // the loadTopics template requires an array. Note to self, never use a 
  // dynamically typed language again....
  var displayObject = {topics: [topicPage]};

  animatedLoad(function() {
    loadToMainPage(adamforbes.mainPage.loadTopics(displayObject));
  });

}

function loadToMainPage(content) {
  animatedLoad(function() {
    $('.main-page').empty();
    $('.main-page').append(content);
    document.documentElement.scrollTop = document.body.scrollTop = 0;
    loadBodyInteractiveElements();
    if (window.innerWidth < 840 && isNavBarOpen()) {
      closeNavBar();
    }
  });
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

function loadBodyInteractiveElements () {
  addTopicPageLinksToTitles();
  addLinksToBlockLinks();
  addLinksToTopicPageButton();
}

/* ==========================================================================
   Attaching events to UI component
   ========================================================================== */

function addNavPageListLinkToNavItems() {
  $('.nav-bar').on('click', '.nav-link', function(e) {
    var $elem = $(this);
    var key = getNavIdFromDivId($elem.attr('id'));
    var displayObject = {topics: generateNavPageList(key)};

    loadToMainPage(adamforbes.mainPage.loadTopics(displayObject));
    resetNavLinkPosition();

    // Highlight the currently selected nav item
    $elem.animate({
      marginLeft: '10px'
    }, { duration: 100, queue: false });
  });
}

function addTopicPageLinksToTitles() {
  $('.topic-header').on('click', '.topic-header-title', function(e) {
    var key = $(this).attr('id');
    loadTopicPage(key);
  });
}

// Created this function as a workaround for some of the limitations of soy.
// We need to run this whenever a new list of items is added to the page.
// To-do: fix this so that it works with tabs
function addLinksToBlockLinks() {
  $('.topic-content-block-link').click(function() {
    window.open($(this).attr('data-link'),'_blank');
  });
}

function addLinksToTopicPageButton() {
  $('.topic-content-topic-page-button').click(function() {
    var key = $(this).attr('data-topic-id');
    loadTopicPage(key);
  });
}

/* ==========================================================================
   Utility functions
   ========================================================================== */

function hyphenToCamel(hyphenString) {
  return hyphenString.replace(/-([a-z])/g, function (a) { return a[1].toUpperCase(); });
}

function camelToHyphen(camelString) {
  return camelString.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function getKeyFromTitleId(titleId) {
  return hyphenToCamel(titleId.substring(0, titleId.length - "-title".length));
}

// This needs to be kept up to date with the .loadNavLinks template in soy
function getNavIdFromDivId(divId) {
  //Remove "-button$"
  var retVal = divId.substring(0, divId.length - "-button".length);
  //Remove "^nav-bar-"
  return retVal.substring("nav-bar-".length, retVal.length)
}

function getTopic(topicsObject, topicId) {
  var topic = -1;

  for (i = 0; i < topicsObject.topics.length; i++) {
    if (topicsObject.topics[i].topicId == topicId) {
      topic = topicsObject.topics[i];
    }
  }
  return topic;
}



/* ==========================================================================
   Nav related functions
   ========================================================================== */

function resetNavLinkPosition() {
  $('.nav-link').animate({
    marginLeft: '0px'
  }, { duration: 100, queue: false });
}

function toggleNavBar() {
  // True when the nav bar is slide off
  if (isNavBarOpen()) {
    closeNavBar();
  } else {
    openNavBar();
  }
}

function isNavBarOpen() {
  if ($('.nav-bar').position().left == 0) {
    return true;
  } else {
    return false;
  }
}

// To-do: animation color insteads of opacity for the menu-toggle. This
// can only be done after jquery-color

function closeNavBar() {
  var $navBar = $('.nav-bar');
  var leftValue = '-' + $navBar.width();
  $navBar.animate({
    left: leftValue
  }, 300, 'swing');
  $('.layering-shadow-overlay').animate({
    opacity: '0'
  }, 300, 'swing');
  $('.layering-shadow-overlay').css('pointer-events', 'none');
  $('.menu-toggle').animate({
    opacity: '1'
  }, 300, 'swing');
  showBorder = false; //disabling this feature.
}

function openNavBar() {
  $('.nav-bar').animate({
    left: '0px'
  }, 300, 'swing');
  $('.layering-shadow-overlay').animate({
    opacity: '.7'
  }, 300, 'swing');
  $('.layering-shadow-overlay').css('pointer-events', 'auto');
  $('.menu-toggle').animate({
    opacity: '.2'
  }, 300, 'swing');
  showBorder = false;
}

/* This function will take as input a navId and generate a list of
   topicShorts to include in the page. Although, for resume and colophon
   we'll do different things */
function generateNavPageList(navId) {
  var navPageList = [];
  if (navId == 'resume') {
    //To-do: figure this out. Could just be the same and we don't need to make
    //special cases. Guess it depends on how different the colophon and resume
    //pages are from the rest of the site. Could just end up making unique
    //resume topics. Or a separate resume section? Not sure.
  } else if (navId == 'colophon') {
  } else {
    for (i = 0; i < topicShorts.topics.length; i++) {
      for (j = 0; j < topicShorts.topics[i].navIds.length; j++) {
        if (topicShorts.topics[i].navIds[j] == navId) {
          navPageList.push(topicShorts.topics[i]);
        }
      }
    }
  }
  return navPageList;
}

