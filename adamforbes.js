// This file was automatically generated from mainPage.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace adamforbes.mainPage.
 */

if (typeof adamforbes == 'undefined') { var adamforbes = {}; }
if (typeof adamforbes.mainPage == 'undefined') { adamforbes.mainPage = {}; }


adamforbes.mainPage.navBar = function(opt_data, opt_ignored) {
  return '<div class=\'nav-bar\'><div class=\'nav-title-name\'>Adam<br>Forbes</div><div class=\'nav-links\'>' + adamforbes.mainPage.loadNavLinks(opt_data) + '</div></div>';
};
if (goog.DEBUG) {
  adamforbes.mainPage.navBar.soyTemplateName = 'adamforbes.mainPage.navBar';
}


adamforbes.mainPage.loadNavLinks = function(opt_data, opt_ignored) {
  var output = '';
  var linkList7 = opt_data.links;
  var linkListLen7 = linkList7.length;
  for (var linkIndex7 = 0; linkIndex7 < linkListLen7; linkIndex7++) {
    var linkData7 = linkList7[linkIndex7];
    output += '<div class=\'nav-link\' id=\'nav-bar-' + soy.$$escapeHtml(linkData7.navId) + '-button\'>' + soy.$$escapeHtml(linkData7.displayName) + '</div>';
  }
  return output;
};
if (goog.DEBUG) {
  adamforbes.mainPage.loadNavLinks.soyTemplateName = 'adamforbes.mainPage.loadNavLinks';
}


adamforbes.mainPage.overlays = function(opt_data, opt_ignored) {
  return '<div class=\'menu-toggle\'>&#9776;</div><div class=\'animation-overlay\'></div><div class=\'page-too-small-overlay\'><div class=\'page-too-small-overlay-content\'>\u00AF\\_(\u30C4)_/\u00AF</div></div><div class=\'layering-shadow-overlay\'></div><div id=\'p5-container\'></div>';
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
  if (opt_data.topics.length > 0) {
    var topicList23 = opt_data.topics;
    var topicListLen23 = topicList23.length;
    for (var topicIndex23 = 0; topicIndex23 < topicListLen23; topicIndex23++) {
      var topicData23 = topicList23[topicIndex23];
      output += '<div class=\'topic-container\' id=\'' + soy.$$escapeHtml(topicData23.topicId) + '\'>' + adamforbes.mainPage.topic(topicData23) + '</div>';
    }
  } else {
    output += '<div class=\'wip-page\'>This is a work in progress!</div>';
  }
  return output;
};
if (goog.DEBUG) {
  adamforbes.mainPage.loadTopics.soyTemplateName = 'adamforbes.mainPage.loadTopics';
}


adamforbes.mainPage.loadTopicPage = function(opt_data, opt_ignored) {
  return '<div class=\'topic-container\' id=\'' + soy.$$escapeHtml(opt_data.topicPage.topicId) + '\'>' + adamforbes.mainPage.topic(opt_data) + '</div>';
};
if (goog.DEBUG) {
  adamforbes.mainPage.loadTopicPage.soyTemplateName = 'adamforbes.mainPage.loadTopicPage';
}


adamforbes.mainPage.topic = function(opt_data, opt_ignored) {
  var output = '<div class=\'topic-header clearfix\'>' + adamforbes.mainPage.header(opt_data) + '</div><div class=\'topic-content\'>';
  var contentList44 = opt_data.contents;
  var contentListLen44 = contentList44.length;
  for (var contentIndex44 = 0; contentIndex44 < contentListLen44; contentIndex44++) {
    var contentData44 = contentList44[contentIndex44];
    output += adamforbes.mainPage.content({topicId: opt_data.topicId, content: contentData44});
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  adamforbes.mainPage.topic.soyTemplateName = 'adamforbes.mainPage.topic';
}


adamforbes.mainPage.header = function(opt_data, opt_ignored) {
  return '<div class=\'topic-header-title float-left\' id=\'' + soy.$$escapeHtml(opt_data.topicId) + '-title\'>' + adamforbes.mainPage.title({topicId: opt_data.topicId, title: opt_data.header.title}) + '</div>' + ((opt_data.header.chronology) ? '<div class=\'topic-header-chronology float-right\'>' + adamforbes.mainPage.chronology({chronology: opt_data.header.chronology}) + '</div>' : '');
};
if (goog.DEBUG) {
  adamforbes.mainPage.header.soyTemplateName = 'adamforbes.mainPage.header';
}


adamforbes.mainPage.title = function(opt_data, opt_ignored) {
  return '' + ((opt_data.title == '_imageOverride') ? '<div class=\'topic-header-title-image\'><img src=\'img/' + soy.$$escapeHtml(opt_data.topicId) + '/title.png\' alt=\'' + soy.$$escapeHtml(opt_data.topicId) + '-title-image\'></div>' : '<div class=\'topic-header-title-text\' id=\'' + soy.$$escapeHtml(opt_data.topicId) + '-title\'>' + soy.$$escapeHtml(opt_data.title) + '</div>');
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
  return '' + ((opt_data.content.text) ? '<div class=\'topic-content-text\'>' + soy.$$escapeHtml(opt_data.content.text) + '</div>' : (opt_data.content.image) ? '<div class=\'topic-content-image\'><img src=\'img/' + soy.$$escapeHtml(opt_data.topicId) + '/' + soy.$$escapeHtml(opt_data.content.image) + '\' alt=\'' + soy.$$escapeHtml(opt_data.content.image) + '\'></div>' : (opt_data.content.caption) ? '<div class=\'topic-content-caption\'>' + soy.$$escapeHtml(opt_data.content.caption) + '</div>' : (opt_data.content.subheading) ? '<div class=\'topic-content-subheading\'>' + soy.$$escapeHtml(opt_data.content.subheading) + '</div>' : (opt_data.content.blockLink) ? '<div class=\'topic-content-block-link\' data-link=\'' + soy.$$escapeHtml(opt_data.content.blockLink.link) + '\'>' + soy.$$escapeHtml(opt_data.content.blockLink.text) + '</div>' : '');
};
if (goog.DEBUG) {
  adamforbes.mainPage.content.soyTemplateName = 'adamforbes.mainPage.content';
}
