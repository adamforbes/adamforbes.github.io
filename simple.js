// This file was automatically generated from simple.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace example.simple.
 */

if (typeof example == 'undefined') { var example = {}; }
if (typeof example.simple == 'undefined') { example.simple = {}; }


example.simple.navBar = function(opt_data, opt_ignored) {
  return '<div class="nav-bar"><div class="nav-title-name">Adam<br>Forbes</div><div class="nav-links"><a>Projects</a><br><a>Resume</a></div></div>';
};
if (goog.DEBUG) {
  example.simple.navBar.soyTemplateName = 'example.simple.navBar';
}


example.simple.mainPage = function(opt_data, opt_ignored) {
  var output = '<div class="main-page">';
  var topicList6 = opt_data.topics;
  var topicListLen6 = topicList6.length;
  for (var topicIndex6 = 0; topicIndex6 < topicListLen6; topicIndex6++) {
    var topicData6 = topicList6[topicIndex6];
    output += example.simple.topic(topicData6);
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  example.simple.mainPage.soyTemplateName = 'example.simple.mainPage';
}


example.simple.topic = function(opt_data, opt_ignored) {
  return '<div class="topic-container"><div class="topic-title">' + soy.$$escapeHtml(opt_data.title) + '</div><div class="topic-contents topic-contents-text">' + soy.$$escapeHtml(opt_data.content) + '</div></div>';
};
if (goog.DEBUG) {
  example.simple.topic.soyTemplateName = 'example.simple.topic';
}
