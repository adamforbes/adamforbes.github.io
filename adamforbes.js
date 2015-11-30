// This file was automatically generated from mainPage.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace adamforbes.mainPage.
 */

if (typeof adamforbes == 'undefined') { var adamforbes = {}; }
if (typeof adamforbes.mainPage == 'undefined') { adamforbes.mainPage = {}; }


adamforbes.mainPage.navBar = function(opt_data, opt_ignored) {
  return '<div class=\'nav-bar\'><div class=\'nav-title-name clickable\'>Adam<br>Forbes</div><div class=\'nav-links\'><div class=\'nav-link clickable\' id=\'nav-bar-projects-button\'>Projects</div><br><div class=\'nav-link clickable\'  id=\'nav-bar-resume-button\'>Resume</div><br><div class=\'nav-link clickable\'  id=\'nav-bar-colophon-button\'>Colophon</div></div></div>';
};
if (goog.DEBUG) {
  adamforbes.mainPage.navBar.soyTemplateName = 'adamforbes.mainPage.navBar';
}


adamforbes.mainPage.mainPage = function(opt_data, opt_ignored) {
  return '<div class=\'main-page\'>' + adamforbes.mainPage.loadTopics(opt_data) + '</div>';
};
if (goog.DEBUG) {
  adamforbes.mainPage.mainPage.soyTemplateName = 'adamforbes.mainPage.mainPage';
}


adamforbes.mainPage.loadTopics = function(opt_data, opt_ignored) {
  var output = '';
  var topicList9 = opt_data.topics;
  var topicListLen9 = topicList9.length;
  for (var topicIndex9 = 0; topicIndex9 < topicListLen9; topicIndex9++) {
    var topicData9 = topicList9[topicIndex9];
    output += '<div class=\'topic-container\' id=\'' + soy.$$escapeHtml(topicData9.topicId) + '\'>' + adamforbes.mainPage.topic(topicData9) + '</div>';
  }
  return output;
};
if (goog.DEBUG) {
  adamforbes.mainPage.loadTopics.soyTemplateName = 'adamforbes.mainPage.loadTopics';
}


adamforbes.mainPage.topic = function(opt_data, opt_ignored) {
  var output = '<div class=\'topic-header clearfix\'>' + adamforbes.mainPage.header(opt_data) + '</div>';
  var contentList22 = opt_data.contents;
  var contentListLen22 = contentList22.length;
  for (var contentIndex22 = 0; contentIndex22 < contentListLen22; contentIndex22++) {
    var contentData22 = contentList22[contentIndex22];
    output += '<div class=\'topic-content\'>' + adamforbes.mainPage.content({topicId: opt_data.topicId, content: contentData22}) + '</div>';
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
  var output = '';
  if (opt_data.content.text) {
    output += '<div class=\'ts-body topic-content-text\'>' + soy.$$escapeHtml(opt_data.content.text) + '</div>';
  } else if (opt_data.content.image) {
    output += '<div class=\'topic-content-image\'><img src=\'img/' + soy.$$escapeHtml(opt_data.topicId) + '/' + soy.$$escapeHtml(opt_data.topicId) + '-' + soy.$$escapeHtml(opt_data.content.image) + '\' alt=\'' + soy.$$escapeHtml(opt_data.content.image) + '\'></div>';
  } else if (opt_data.content.tripleImage) {
    output += '<div class=\'topic-content-gallery topic-content-gallery-triple clearfix\'>';
    var imageList79 = opt_data.content.tripleImage;
    var imageListLen79 = imageList79.length;
    for (var imageIndex79 = 0; imageIndex79 < imageListLen79; imageIndex79++) {
      var imageData79 = imageList79[imageIndex79];
      output += '<img class=\'float-left\' src=\'img/' + soy.$$escapeHtml(opt_data.topicId) + '/' + soy.$$escapeHtml(opt_data.topicId) + '-' + soy.$$escapeHtml(imageData79) + '\' alt=\'' + soy.$$escapeHtml(opt_data.topicId) + '-' + soy.$$escapeHtml(imageData79) + '\'  id=\'' + soy.$$escapeHtml(opt_data.topicId) + '-' + soy.$$escapeHtml(imageData79) + '\'>';
    }
    output += '</div>';
  }
  return output;
};
if (goog.DEBUG) {
  adamforbes.mainPage.content.soyTemplateName = 'adamforbes.mainPage.content';
}


adamforbes.mainPage.loadTopicPage = function(opt_data, opt_ignored) {
  var output = '<div class=\'topic-page\'><div class=\'topic-header\'>' + adamforbes.mainPage.header(opt_data) + '</div>';
  var contentList103 = opt_data.contents;
  var contentListLen103 = contentList103.length;
  for (var contentIndex103 = 0; contentIndex103 < contentListLen103; contentIndex103++) {
    var contentData103 = contentList103[contentIndex103];
    output += '<div class=\'topic-page-content-container\' id=\'' + soy.$$escapeHtml(contentData103.topicId) + '\'>' + adamforbes.mainPage.topicPageContent({topicId: opt_data.topicId, content: contentData103}) + '</div>';
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
    var imageList131 = opt_data.content.tripleImage;
    var imageListLen131 = imageList131.length;
    for (var imageIndex131 = 0; imageIndex131 < imageListLen131; imageIndex131++) {
      var imageData131 = imageList131[imageIndex131];
      output += '<img src=\'img/' + soy.$$escapeHtml(opt_data.topicId) + '/' + soy.$$escapeHtml(opt_data.topicId) + '-' + soy.$$escapeHtml(imageData131) + '\' alt=\'' + soy.$$escapeHtml(opt_data.topicId) + '-' + soy.$$escapeHtml(imageData131) + '\'  id=\'' + soy.$$escapeHtml(opt_data.topicId) + '-' + soy.$$escapeHtml(imageData131) + '\'>';
    }
    output += '</div>';
  }
  return output;
};
if (goog.DEBUG) {
  adamforbes.mainPage.topicPageContent.soyTemplateName = 'adamforbes.mainPage.topicPageContent';
}
