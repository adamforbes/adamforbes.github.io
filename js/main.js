var navBarContents = {links: [
    {navId: 'resume', displayName: 'Resume'},
    {navId: 'graphic-design', displayName: 'Graphic Design'},
    {navId: 'web-design', displayName: 'Web Design'},
    {navId: 'photography', displayName: 'Photography'},
    {navId: 'misc', displayName: 'Misc.'},
    {navId: 'colophon', displayName: 'Colophon'}]};

var topicShorts = {topics: [
    {topicId: 'about-me',
      navIds: ['main-page'],
      header: {title: 'about me', chronology: 'april 12, 2014'},
      contents: [
          {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
    ]},
    {topicId: 'the-argus-mag',
      navIds: ['main-page', 'graphic-design'],
      header: {title: '_imageOverride', chronology: 'created in 2013'},
      contents: [
          {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'},
          {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'},
          {subheading: 'This is a subheading! Wow'},
          {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'}
    ]},
    {topicId: 'zapdos',
      navIds: ['main-page', 'graphic-design'],
      header: {title: 'Zapdos!'},
      contents: [
          {image: 'zapdos.png'},
          {caption: 'I love Zapdos in the Morning'},
          {image: 'large-square.png'}
    ]},
    {topicId: 'red-chamber',
      navIds: ['main-page', 'graphic-design'],
      header: {title: 'The Dream of the Red Chamber by Cao XueQin'},
      contents: [
          {text: 'The following covers are mockups for Cao XueQin\'s classical masterpiece \"The Dream of the Red Chamber\", otherwise known as the \"The Story of the Stone\". The novel is one of China\'s four great classical novels. The books contain a detailed history of 18th century Chinese culture as well as a intricate narrative including some forty main characters and over five hundred minor characters.'},
          {text: 'The next five covers are a single set of covers using landscape paintings from the five great masters of Chinese landscape painting and their disciples/derivatives.'}
    ]}
]};

var topicPages = {topics: [
    {topicId: 'the-argus-mag',
      header: {title: '_imageOverride', chronology: 'created in 2013'},
      contents: [
          {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'},
          {subheading: 'this is not the topicShort'},
          {text: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'},
          {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'}
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
    ]}
]};

/* ==========================================================================
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
- Add swipe motions for mobile
- Add a click in open area to close nav bar.
- Style the nav bar to be smaller for mobile screens. Atm it's
  half of the page




*/

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

  $('.layering-shadow-overlay').click(function() {
    toggleNavBar();
  });
}

function loadNavBar() {
  $('body').append(adamforbes.mainPage.navBar(navBarContents));

  $('.nav-bar').on('click', '.nav-link', function(e) {
    var $elem = $(this);
    animatedLoad(function() {
      $('.main-page').empty();
      var key = getNavIdFromDivId($elem.attr('id'));
      var displayObject = {topics: generateNavPageList(key)};
      $('.main-page').append(adamforbes.mainPage.loadTopics(displayObject));
    });
      resetNavLinkPosition();
      $elem.animate({
        marginLeft: '10px'
      }, { duration: 100, queue: false });
  });
}

function loadMainPageDefaults(firstLoad) {
  if (firstLoad) {
    $('body').append(adamforbes.mainPage.mainPage(topicShorts));
  } else {
    animatedLoad(function() {
      $('.main-page').empty();
      $('.main-page').append(adamforbes.mainPage.loadTopics(topicShorts));
    });
  }

  console.log('.topic-header');
  console.log($('.topic-header'));

  $(document).ready(function() {
    $('.topic-header').on('click', '.topic-header-title', function(e) {
      var elem = $(this);
      console.log('inside click event delegation');
      console.log(elem);
      animatedLoad(function() {
        var key = getKeyFromTitleId(elem.attr('id'));
        console.log(topicPages[key]);
        $mainPage.empty();
        $mainPage.append(adamforbes.mainPage.loadTopicPage(topicPages[key]));
      });
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
  return hyphenToCamel(titleId.substring(0, titleId.length - "-title".length));
}

// This needs to be kept up to date with the .loadNavLinks template in soy
function getNavIdFromDivId(divId) {
  //Remove "-button$"
  var retVal = divId.substring(0, divId.length - "-button".length);
  //Remove "^nav-bar-"
  return retVal.substring("nav-bar-".length, retVal.length)
}

function resetNavLinkPosition() {
  $('.nav-link').animate({
    marginLeft: '0px'
  }, { duration: 100, queue: false });
}

function toggleNavBar() {
  // True when the nav bar is slide off
  if ($('.nav-bar').position().left == 0) {
    closeNavBar();
  } else {
    openNavBar();
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
    //linear search! Wahoo i'm a google engineerrrrrr
    for (i = 0; i < topicShorts.topics.length; i++) {
      for (j = 0; j < topicShorts.topics[i].navIds.length; j++) {
        if (topicShorts.topics[i].navIds[j] == navId) {
          navPageList.push(topicShorts.topics[i]);
        }
      }
    }
  }
  console.log("navPageList");
  console.log(navPageList);
  return navPageList;
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

