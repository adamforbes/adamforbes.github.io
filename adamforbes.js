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
  var output = '' + ((opt_data.title == '_imageOverride') ? '<div class=\'topic-title topic-title-image clickable\' id=\'' + soy.$$escapeHtml(opt_data.topicId) + '-title\'><img src=\'img/' + soy.$$escapeHtml(opt_data.topicId) + '/' + soy.$$escapeHtml(opt_data.topicId) + '-title.png\' alt=\'' + soy.$$escapeHtml(opt_data.topicId) + '\'></div>' : '<div class=\'ts-h1 topic-title topic-title-text clickable\' id=\'' + soy.$$escapeHtml(opt_data.topicId) + '-title\'>' + soy.$$escapeHtml(opt_data.title) + '</div>');
  var contentList34 = opt_data.contents;
  var contentListLen34 = contentList34.length;
  for (var contentIndex34 = 0; contentIndex34 < contentListLen34; contentIndex34++) {
    var contentData34 = contentList34[contentIndex34];
    output += '<div class=\'topic-content\'>' + adamforbes.mainPage.content({topicId: opt_data.topicId, content: contentData34}) + '</div>';
  }
  output += (opt_data.footer) ? '<div class=\'topic-footer clearfix\'>' + adamforbes.mainPage.footer(opt_data) + '</div>' : '';
  return output;
};
if (goog.DEBUG) {
  adamforbes.mainPage.topic.soyTemplateName = 'adamforbes.mainPage.topic';
}


adamforbes.mainPage.content = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.content.text) {
    output += '<div class=\'ts-body topic-content-text\'>' + soy.$$escapeHtml(opt_data.content.text) + '</div>';
  } else if (opt_data.content.image) {
    output += '<div class=\'topic-content-image\'><img src=\'img/' + soy.$$escapeHtml(opt_data.topicId) + '/' + soy.$$escapeHtml(opt_data.topicId) + '-' + soy.$$escapeHtml(opt_data.content.image) + '\' alt=\'' + soy.$$escapeHtml(opt_data.content.image) + '\'></div>';
  } else if (opt_data.content.tripleImage) {
    output += '<div class=\'topic-content-gallery topic-content-gallery-triple clearfix\'>';
    var imageList65 = opt_data.content.tripleImage;
    var imageListLen65 = imageList65.length;
    for (var imageIndex65 = 0; imageIndex65 < imageListLen65; imageIndex65++) {
      var imageData65 = imageList65[imageIndex65];
      output += '<img src=\'img/' + soy.$$escapeHtml(opt_data.topicId) + '/' + soy.$$escapeHtml(opt_data.topicId) + '-' + soy.$$escapeHtml(imageData65) + '\' alt=\'' + soy.$$escapeHtml(opt_data.topicId) + '-' + soy.$$escapeHtml(imageData65) + '\'  id=\'' + soy.$$escapeHtml(opt_data.topicId) + '-' + soy.$$escapeHtml(imageData65) + '\'>';
    }
    output += '</div>';
  }
  return output;
};
if (goog.DEBUG) {
  adamforbes.mainPage.content.soyTemplateName = 'adamforbes.mainPage.content';
}


adamforbes.mainPage.footer = function(opt_data, opt_ignored) {
  return '' + ((opt_data.footer.moreLink) ? '<div class=\'topic-footer-more-link\'><a href=\'#\' class=\'clickable\'>More...</a></div>' : '') + ((opt_data.footer.date) ? '<div class=\'topic-footer-date\'>' + soy.$$escapeHtml(opt_data.footer.date) + '</div>' : '');
};
if (goog.DEBUG) {
  adamforbes.mainPage.footer.soyTemplateName = 'adamforbes.mainPage.footer';
}


adamforbes.mainPage.loadTopicPage = function(opt_data, opt_ignored) {
  var output = '<div class=\'topic-page\'>' + ((opt_data.title == '_imageOverride') ? '<div class=\'topic-title topic-title-image clickable\' id=\'' + soy.$$escapeHtml(opt_data.topicId) + '-title\'><img src=\'img/' + soy.$$escapeHtml(opt_data.topicId) + '/' + soy.$$escapeHtml(opt_data.topicId) + '-title.png\' alt=\'' + soy.$$escapeHtml(opt_data.topicId) + '\'></div>' : '<div class=\'ts-h1 topic-title topic-title-text clickable\' id=\'' + soy.$$escapeHtml(opt_data.topicId) + '-title\'>' + soy.$$escapeHtml(opt_data.title) + '</div>');
  var contentList111 = opt_data.contents;
  var contentListLen111 = contentList111.length;
  for (var contentIndex111 = 0; contentIndex111 < contentListLen111; contentIndex111++) {
    var contentData111 = contentList111[contentIndex111];
    output += '<div class=\'topic-page-content-container\' id=\'' + soy.$$escapeHtml(contentData111.topicId) + '\'>' + adamforbes.mainPage.topicPageContent({topicId: opt_data.topicId, content: contentData111}) + '</div>';
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
    var imageList139 = opt_data.content.tripleImage;
    var imageListLen139 = imageList139.length;
    for (var imageIndex139 = 0; imageIndex139 < imageListLen139; imageIndex139++) {
      var imageData139 = imageList139[imageIndex139];
      output += '<img src=\'img/' + soy.$$escapeHtml(opt_data.topicId) + '/' + soy.$$escapeHtml(opt_data.topicId) + '-' + soy.$$escapeHtml(imageData139) + '\' alt=\'' + soy.$$escapeHtml(opt_data.topicId) + '-' + soy.$$escapeHtml(imageData139) + '\'  id=\'' + soy.$$escapeHtml(opt_data.topicId) + '-' + soy.$$escapeHtml(imageData139) + '\'>';
    }
    output += '</div>';
  }
  return output;
};
if (goog.DEBUG) {
  adamforbes.mainPage.topicPageContent.soyTemplateName = 'adamforbes.mainPage.topicPageContent';
}
