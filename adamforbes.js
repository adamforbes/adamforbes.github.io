// This file was automatically generated from mainPage.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace adamforbes.mainPage.
 */

if (typeof adamforbes == 'undefined') { var adamforbes = {}; }
if (typeof adamforbes.mainPage == 'undefined') { adamforbes.mainPage = {}; }


adamforbes.mainPage.navBar = function(opt_data, opt_ignored) {
  return '<div class=\'nav-bar\'><div class=\'nav-title-name clickable\'>Adam<br>Forbes</div><div class=\'nav-links\'><div class=\'nav-link clickable\'  id=\'nav-bar-resume-button\'>Resume</div><br><div class=\'nav-link clickable\' id=\'nav-bar-projects-button\'>Projects</div><br><div class=\'nav-link clickable\'  id=\'nav-bar-colophon-button\'>Colophon</div></div></div>';
};
if (goog.DEBUG) {
  adamforbes.mainPage.navBar.soyTemplateName = 'adamforbes.mainPage.navBar';
}


adamforbes.mainPage.overlays = function(opt_data, opt_ignored) {
  return '<button class=\'menu-button float-right\'>MENU</button><div class=\'animation-overlay\'></div><div class=\'page-too-small-overlay ts-h2\'><div class=\'page-too-small-overlay-content\'>\u00AF\\_(\u30C4)_/\u00AF</div></div><div class=\'layering-shadow-overlay\'></div>';
};
if (goog.DEBUG) {
  adamforbes.mainPage.overlays.soyTemplateName = 'adamforbes.mainPage.overlays';
}


adamforbes.mainPage.mainPage = function(opt_data, opt_ignored) {
  return '<div class=\'main-page\'>' + adamforbes.mainPage.loadTopics(opt_data) + '</div>';
};
if (goog.DEBUG) {
  adamforbes.mainPage.mainPage.soyTemplateName = 'adamforbes.mainPage.mainPage';
}


adamforbes.mainPage.loadTopics = function(opt_data, opt_ignored) {
  var output = '';
  var topicList11 = opt_data.topics;
  var topicListLen11 = topicList11.length;
  for (var topicIndex11 = 0; topicIndex11 < topicListLen11; topicIndex11++) {
    var topicData11 = topicList11[topicIndex11];
    output += '<div class=\'topic-container\' id=\'' + soy.$$escapeHtml(topicData11.topicId) + '\'>' + adamforbes.mainPage.topic(topicData11) + '</div>';
  }
  return output;
};
if (goog.DEBUG) {
  adamforbes.mainPage.loadTopics.soyTemplateName = 'adamforbes.mainPage.loadTopics';
}


adamforbes.mainPage.topic = function(opt_data, opt_ignored) {
  var output = '<div class=\'topic-header clearfix\'>' + adamforbes.mainPage.header(opt_data) + '</div>';
  var contentList24 = opt_data.contents;
  var contentListLen24 = contentList24.length;
  for (var contentIndex24 = 0; contentIndex24 < contentListLen24; contentIndex24++) {
    var contentData24 = contentList24[contentIndex24];
    output += '<div class=\'topic-content\'>' + adamforbes.mainPage.content({topicId: opt_data.topicId, content: contentData24}) + '</div>';
  }
  return output;
};
if (goog.DEBUG) {
  adamforbes.mainPage.topic.soyTemplateName = 'adamforbes.mainPage.topic';
}


adamforbes.mainPage.header = function(opt_data, opt_ignored) {
  return '<div class=\'topic-header-title float-left\'>' + adamforbes.mainPage.title({topicId: opt_data.topicId, title: opt_data.header.title}) + '</div>' + ((opt_data.header.chronology) ? '<div class=\'ts-h2 topic-header-chronology float-right\'>' + adamforbes.mainPage.chronology({chronology: opt_data.header.chronology}) + '</div>' : '');
};
if (goog.DEBUG) {
  adamforbes.mainPage.header.soyTemplateName = 'adamforbes.mainPage.header';
}


adamforbes.mainPage.title = function(opt_data, opt_ignored) {
  return '' + ((opt_data.title == '_imageOverride') ? '<div class=\'topic-header-title-image clickable\' id=\'' + soy.$$escapeHtml(opt_data.topicId) + '-title\'><img src=\'img/' + soy.$$escapeHtml(opt_data.topicId) + '/' + soy.$$escapeHtml(opt_data.topicId) + '-title.png\' alt=\'' + soy.$$escapeHtml(opt_data.topicId) + '\'></div>' : '<div class=\'ts-h1 topic-header-title-text clickable\' id=\'' + soy.$$escapeHtml(opt_data.topicId) + '-title\'>' + soy.$$escapeHtml(opt_data.title) + '</div>');
};
if (goog.DEBUG) {
  adamforbes.mainPage.title.soyTemplateName = 'adamforbes.mainPage.title';
}


adamforbes.mainPage.chronology = function(opt_data, opt_ignored) {
  return '' + soy.$$escapeHtml(opt_data.chronology);
};
if (goog.DEBUG) {
  adamforbes.mainPage.chronology.soyTemplateName = 'adamforbes.mainPage.chronology';
}


adamforbes.mainPage.content = function(opt_data, opt_ignored) {
  return '' + ((opt_data.content.text) ? '<div class=\'ts-body topic-content-text\'>' + soy.$$escapeHtml(opt_data.content.text) + '</div>' : (opt_data.content.image) ? '<div class=\'topic-content-image\'><img src=\'img/' + soy.$$escapeHtml(opt_data.topicId) + '/' + soy.$$escapeHtml(opt_data.topicId) + '-' + soy.$$escapeHtml(opt_data.content.image) + '\' alt=\'' + soy.$$escapeHtml(opt_data.content.image) + '\'></div>' : '');
};
if (goog.DEBUG) {
  adamforbes.mainPage.content.soyTemplateName = 'adamforbes.mainPage.content';
}


adamforbes.mainPage.loadTopicPage = function(opt_data, opt_ignored) {
  var output = '<div class=\'topic-page\'><div class=\'topic-header clearfix\'>' + adamforbes.mainPage.header(opt_data) + '</div>';
  var contentList85 = opt_data.contents;
  var contentListLen85 = contentList85.length;
  for (var contentIndex85 = 0; contentIndex85 < contentListLen85; contentIndex85++) {
    var contentData85 = contentList85[contentIndex85];
    output += '<div class=\'topic-page-content-container\' id=\'' + soy.$$escapeHtml(contentData85.topicId) + '\'>' + adamforbes.mainPage.topicPageContent({topicId: opt_data.topicId, content: contentData85}) + '</div>';
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  adamforbes.mainPage.loadTopicPage.soyTemplateName = 'adamforbes.mainPage.loadTopicPage';
}


adamforbes.mainPage.topicPageContent = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.content.text) {
    output += '<div class=\'ts-body topic-page-content-text\'>' + soy.$$escapeHtml(opt_data.content.text) + '</div>';
  } else if (opt_data.content.image) {
    output += '<div class=\'topic-page-content-image\'><img src=\'img/' + soy.$$escapeHtml(opt_data.topicId) + '/' + soy.$$escapeHtml(opt_data.topicId) + '-' + soy.$$escapeHtml(opt_data.content.image) + '\' alt=\'' + soy.$$escapeHtml(opt_data.content.image) + '\'></div>';
  } else if (opt_data.content.tripleImage) {
    output += '<div class=\'topic-page-content-gallery topic-page-content-gallery-triple clearfix\'>';
    var imageList113 = opt_data.content.tripleImage;
    var imageListLen113 = imageList113.length;
    for (var imageIndex113 = 0; imageIndex113 < imageListLen113; imageIndex113++) {
      var imageData113 = imageList113[imageIndex113];
      output += '<img src=\'img/' + soy.$$escapeHtml(opt_data.topicId) + '/' + soy.$$escapeHtml(opt_data.topicId) + '-' + soy.$$escapeHtml(imageData113) + '\' alt=\'' + soy.$$escapeHtml(opt_data.topicId) + '-' + soy.$$escapeHtml(imageData113) + '\'  id=\'' + soy.$$escapeHtml(opt_data.topicId) + '-' + soy.$$escapeHtml(imageData113) + '\'>';
    }
    output += '</div>';
  }
  return output;
};
if (goog.DEBUG) {
  adamforbes.mainPage.topicPageContent.soyTemplateName = 'adamforbes.mainPage.topicPageContent';
}
