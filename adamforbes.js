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


adamforbes.mainPage.navBreadcrumbs = function(opt_data, opt_ignored) {
  var output = '<div class="nav-breadcrumb">Home</div>';
  var locationList8 = opt_data.locations;
  var locationListLen8 = locationList8.length;
  for (var locationIndex8 = 0; locationIndex8 < locationListLen8; locationIndex8++) {
    var locationData8 = locationList8[locationIndex8];
    output += '<i class="material-icons float-left">chevron_right</i><div class="nav-breadcrumb"></div>';
  }
  return output;
};
if (goog.DEBUG) {
  adamforbes.mainPage.navBreadcrumbs.soyTemplateName = 'adamforbes.mainPage.navBreadcrumbs';
}


adamforbes.mainPage.loadNavLinks = function(opt_data, opt_ignored) {
  var output = '';
  var linkList12 = opt_data.links;
  var linkListLen12 = linkList12.length;
  for (var linkIndex12 = 0; linkIndex12 < linkListLen12; linkIndex12++) {
    var linkData12 = linkList12[linkIndex12];
    output += '<div class=\'nav-link\' id=\'nav-bar-' + soy.$$escapeHtml(linkData12.navId) + '-button\'>' + soy.$$escapeHtml(linkData12.displayName) + '</div>';
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
    var topicList28 = opt_data.topics;
    var topicListLen28 = topicList28.length;
    for (var topicIndex28 = 0; topicIndex28 < topicListLen28; topicIndex28++) {
      var topicData28 = topicList28[topicIndex28];
      output += '<div class=\'topic-container\' id=\'' + soy.$$escapeHtml(topicData28.topicId) + '\'>' + adamforbes.mainPage.topic(topicData28) + '</div>';
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
  return '<div class=\'topic-page-container\' id=\'' + soy.$$escapeHtml(opt_data.topicPage.topicId) + '\'>' + adamforbes.mainPage.topic(opt_data.topicPage) + '</div>';
};
if (goog.DEBUG) {
  adamforbes.mainPage.loadTopicPage.soyTemplateName = 'adamforbes.mainPage.loadTopicPage';
}


adamforbes.mainPage.topic = function(opt_data, opt_ignored) {
  var output = '<div class=\'topic-header clearfix\'>' + adamforbes.mainPage.header(opt_data) + '</div><div class=\'topic-content\'>';
  var contentList49 = opt_data.contents;
  var contentListLen49 = contentList49.length;
  for (var contentIndex49 = 0; contentIndex49 < contentListLen49; contentIndex49++) {
    var contentData49 = contentList49[contentIndex49];
    output += adamforbes.mainPage.content({topicId: opt_data.topicId, content: contentData49});
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  adamforbes.mainPage.topic.soyTemplateName = 'adamforbes.mainPage.topic';
}


adamforbes.mainPage.header = function(opt_data, opt_ignored) {
  return '<div class=\'topic-header-title float-left\' id=\'' + soy.$$escapeHtml(opt_data.topicId) + '\'>' + adamforbes.mainPage.title({topicId: opt_data.topicId, title: opt_data.header.title}) + '</div>' + ((opt_data.header.chronology) ? '<div class=\'topic-header-chronology float-right\'>' + adamforbes.mainPage.chronology({chronology: opt_data.header.chronology}) + '</div>' : '');
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
  return '' + ((opt_data.content.text) ? '<div class=\'topic-content-text\'>' + soy.$$escapeHtml(opt_data.content.text) + '</div>' : (opt_data.content.image) ? '<div class=\'topic-content-image\'><img src=\'img/' + soy.$$escapeHtml(opt_data.topicId) + '/' + soy.$$escapeHtml(opt_data.content.image) + '\' alt=\'' + soy.$$escapeHtml(opt_data.content.image) + '\'></div>' : (opt_data.content.caption) ? '<div class=\'topic-content-caption\'>' + soy.$$escapeHtml(opt_data.content.caption) + '</div>' : (opt_data.content.subheading) ? '<div class=\'topic-content-subheading\'>' + soy.$$escapeHtml(opt_data.content.subheading) + '</div>' : (opt_data.content.blockLink) ? '<div class=\'clearfix\'><div class=\'button-container\'><div class=\'topic-content-block-link float-left button\' data-link=\'' + soy.$$escapeHtml(opt_data.content.blockLink.link) + '\'><div class=\'button-text\'>' + soy.$$escapeHtml(opt_data.content.blockLink.text) + '</div></div><i class="open-in-new-tab material-icons float-left">launch</i></div></div>' : (opt_data.content.topicPageButton) ? '<div class=\'button-container\'><div class=\'topic-content-topic-page-button button\' data-topic-id=\'' + soy.$$escapeHtml(opt_data.topicId) + '\'><div class=\'button-text\'>' + soy.$$escapeHtml(opt_data.content.topicPageButton) + '</div></div></div>' : '');
};
if (goog.DEBUG) {
  adamforbes.mainPage.content.soyTemplateName = 'adamforbes.mainPage.content';
}
