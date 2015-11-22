// This file was automatically generated from simple.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace adamforbes.main.
 */

if (typeof adamforbes == 'undefined') { var adamforbes = {}; }
if (typeof adamforbes.main == 'undefined') { adamforbes.main = {}; }


adamforbes.main.navBar = function(opt_data, opt_ignored) {
  return '<div class=\'nav-bar\'><div class=\'nav-title-name clickable\'>Adam<br>Forbes</div><div class=\'nav-links\'><a class=\'clickable\'>Projects</a><br><a class=\'clickable\'>Resume</a></div></div>';
};
if (goog.DEBUG) {
  adamforbes.main.navBar.soyTemplateName = 'adamforbes.main.navBar';
}


adamforbes.main.mainPage = function(opt_data, opt_ignored) {
  var output = '<div class=\'main-page\'>';
  var topicList6 = opt_data.topics;
  var topicListLen6 = topicList6.length;
  for (var topicIndex6 = 0; topicIndex6 < topicListLen6; topicIndex6++) {
    var topicData6 = topicList6[topicIndex6];
    output += adamforbes.main.topic(topicData6);
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  adamforbes.main.mainPage.soyTemplateName = 'adamforbes.main.mainPage';
}


adamforbes.main.topic = function(opt_data, opt_ignored) {
  var output = '<div class=\'topic-container\' id=\'' + soy.$$escapeHtml(opt_data.topicId) + '\'>' + ((opt_data.title == '_imageOverride') ? '<img class=\'topic-title-image clickable\' id=\'' + soy.$$escapeHtml(opt_data.topicId) + '-title\' src=\'img/' + soy.$$escapeHtml(opt_data.topicId) + '/' + soy.$$escapeHtml(opt_data.topicId) + '-title.png\' alt=\'' + soy.$$escapeHtml(opt_data.topicId) + '\'>' : '<div class=\'topic-title clickable\'>' + soy.$$escapeHtml(opt_data.title) + '</div>');
  var contentList29 = opt_data.contents;
  var contentListLen29 = contentList29.length;
  for (var contentIndex29 = 0; contentIndex29 < contentListLen29; contentIndex29++) {
    var contentData29 = contentList29[contentIndex29];
    output += adamforbes.main.content({topicId: opt_data.topicId, content: contentData29});
  }
  output += ((opt_data.footer) ? adamforbes.main.footer(opt_data) : '') + '</div>';
  return output;
};
if (goog.DEBUG) {
  adamforbes.main.topic.soyTemplateName = 'adamforbes.main.topic';
}


adamforbes.main.content = function(opt_data, opt_ignored) {
  var output = '<div class=\'topic-content\'>';
  if (opt_data.content.text) {
    output += '<div class=\'topic-content-text\'>' + soy.$$escapeHtml(opt_data.content.text) + '</div>';
  } else if (opt_data.content.image) {
    output += '<div class=\'topic-content-image\'><img src=\'img/' + soy.$$escapeHtml(opt_data.topicId) + '/' + soy.$$escapeHtml(opt_data.topicId) + '-' + soy.$$escapeHtml(opt_data.content.image) + '\' alt=\'' + soy.$$escapeHtml(opt_data.content.image) + '\'></div>';
  } else if (opt_data.content.tripleImage) {
    output += '<div class=\'topic-content-gallery-sampling topic-content-gallery-sampling-triple contentlearfix\'>';
    var imageList58 = opt_data.content.tripleImage;
    var imageListLen58 = imageList58.length;
    for (var imageIndex58 = 0; imageIndex58 < imageListLen58; imageIndex58++) {
      var imageData58 = imageList58[imageIndex58];
      output += '<img src=\'img/' + soy.$$escapeHtml(opt_data.topicId) + '/' + soy.$$escapeHtml(opt_data.topicId) + '-' + soy.$$escapeHtml(imageData58) + '\' alt=\'' + soy.$$escapeHtml(opt_data.topicId) + '-' + soy.$$escapeHtml(imageData58) + '\'  id=\'' + soy.$$escapeHtml(opt_data.topicId) + '-' + soy.$$escapeHtml(imageData58) + '\'>';
    }
    output += '</div>';
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  adamforbes.main.content.soyTemplateName = 'adamforbes.main.content';
}


adamforbes.main.footer = function(opt_data, opt_ignored) {
  return '<div class=\'topic-footer clearfix\'>' + ((opt_data.footer.moreLink) ? '<div class=\'topic-footer-more-link\'><a href=\'#\' class=\'clickable\'>More...</a></div>' : '') + ((opt_data.footer.date) ? '<div class=\'topic-footer-date\'>' + soy.$$escapeHtml(opt_data.footer.date) + '</div>' : '') + '</div>';
};
if (goog.DEBUG) {
  adamforbes.main.footer.soyTemplateName = 'adamforbes.main.footer';
}
