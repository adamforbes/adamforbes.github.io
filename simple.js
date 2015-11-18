// This file was automatically generated from simple.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace example.simple.
 */

if (typeof example == 'undefined') { var example = {}; }
if (typeof example.simple == 'undefined') { example.simple = {}; }


example.simple.navBar = function(opt_data, opt_ignored) {
  return '<div class=\'nav-bar\'><div class=\'nav-title-name\'>Adam<br>Forbes</div><div class=\'nav-links\'><a>Projects</a><br><a>Resume</a></div></div>';
};
if (goog.DEBUG) {
  example.simple.navBar.soyTemplateName = 'example.simple.navBar';
}


example.simple.mainPage = function(opt_data, opt_ignored) {
  var output = '<div class=\'main-page\'>';
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
  var output = '<div class=\'topic-container\'>' + ((opt_data.title.text) ? '<div class=\'topic-title\'>' + soy.$$escapeHtml(opt_data.title.text) + '</div>' : (opt_data.title.image) ? '<div class=\'topic-title\'><img src=\'img/' + soy.$$escapeHtml(opt_data.title.image) + '\' alt=\'' + soy.$$escapeHtml(opt_data.title.image) + '\'></div>' : '');
  var contentList23 = opt_data.contents;
  var contentListLen23 = contentList23.length;
  for (var contentIndex23 = 0; contentIndex23 < contentListLen23; contentIndex23++) {
    var contentData23 = contentList23[contentIndex23];
    output += example.simple.content({content: contentData23});
  }
  output += '</div></div>';
  return output;
};
if (goog.DEBUG) {
  example.simple.topic.soyTemplateName = 'example.simple.topic';
}


example.simple.content = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.content.text) {
    output += '<div class=\'topic-contents topic-contents-text\'>' + soy.$$escapeHtml(opt_data.content.text) + '</div>';
  } else if (opt_data.content.image) {
    output += '<div>WHAT</div><img src=\'img/' + soy.$$escapeHtml(opt_data.content.image) + '\' alt=\'' + soy.$$escapeHtml(opt_data.content.image) + '\'>';
  } else if (opt_data.content.tripleImage) {
    output += '<div class="topic-gallery-sampling topic-gallery-sampling-triple clearfix">';
    var imageList42 = content.tripleImage;
    var imageListLen42 = imageList42.length;
    for (var imageIndex42 = 0; imageIndex42 < imageListLen42; imageIndex42++) {
      var imageData42 = imageList42[imageIndex42];
      output += '<img src="img/$image.jpg" alt="$image">';
    }
    output += '</div>';
  }
  return output;
};
if (goog.DEBUG) {
  example.simple.content.soyTemplateName = 'example.simple.content';
}
