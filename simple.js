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
  var output = '<div class=\'topic-container\' id=\'' + soy.$$escapeHtml(opt_data.topicId) + '\'>' + ((opt_data.title == 'imageOverride') ? '<div class=\'topic-title\'><img src=\'img/' + soy.$$escapeHtml(opt_data.topicId) + '/' + soy.$$escapeHtml(opt_data.topicId) + '-title.png\' alt=\'' + soy.$$escapeHtml(opt_data.topicId) + '\'></div>' : '<div class=\'topic-title\'>' + soy.$$escapeHtml(opt_data.title) + '</div>');
  var contentList27 = opt_data.contents;
  var contentListLen27 = contentList27.length;
  for (var contentIndex27 = 0; contentIndex27 < contentListLen27; contentIndex27++) {
    var contentData27 = contentList27[contentIndex27];
    output += example.simple.content({content: contentData27});
  }
  output += '</div>';
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
    var imageList46 = content.tripleImage;
    var imageListLen46 = imageList46.length;
    for (var imageIndex46 = 0; imageIndex46 < imageListLen46; imageIndex46++) {
      var imageData46 = imageList46[imageIndex46];
      output += '<img src="img/$image.jpg" alt="$image">';
    }
    output += '</div>';
  }
  return output;
};
if (goog.DEBUG) {
  example.simple.content.soyTemplateName = 'example.simple.content';
}


example.simple.nest1 = function(opt_data, opt_ignored) {
  var output = '<div class=\'nest1\'>inside nest1';
  for (var i52 = 0; i52 < 4; i52++) {
    output += example.simple.nest2(opt_data);
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  example.simple.nest1.soyTemplateName = 'example.simple.nest1';
}


example.simple.nest2 = function(opt_data, opt_ignored) {
  return '<div class=\'nest2\'>inside nest2' + example.simple.nest3(opt_data) + '</div>';
};
if (goog.DEBUG) {
  example.simple.nest2.soyTemplateName = 'example.simple.nest2';
}


example.simple.nest3 = function(opt_data, opt_ignored) {
  return '<div class=\'nest3\'>inside nest3' + soy.$$escapeHtml(opt_data.data) + '!</div>';
};
if (goog.DEBUG) {
  example.simple.nest3.soyTemplateName = 'example.simple.nest3';
}
