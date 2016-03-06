var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var borderWidth = 5;

var v = 1;
var t = 0;

var topBorder;
var rightBorder;
var bottomBorder;
var leftBorder;

var showBorder = false;

function setup() {
  var mainColor = $('.nav-bar').css('background-color');
  var myCanvas = createCanvas($(window).width(), $(window).height());
  myCanvas.parent('p5-container');
  frameRate(60);
  stroke(mainColor);
  fill(mainColor);

  topBorder = new Border('top');
  rightBorder = new Border('right');
  bottomBorder = new Border('bottom');
  leftBorder = new Border('left');
}

//We will encounter the issue of width going beyond the border
//Need to check if the sum of curr width + v > window Width and
//set to window width. Need to create a function to check this.
//not today..

function draw() {
  clear();

  if (showBorder) {
    topBorder.display();
    rightBorder.display();
    bottomBorder.display();
    leftBorder.display();
  }

  // TODO - Finish animation???

  // if (!showBorder) {
  //   if (topBorder.w > 0) {
  //     topBorder.w = topBorder.w - v;
  //   }
  //   if (rightBorder.h > 0) {
  //     rightBorder.h = rightBorder.h - v;
  //   }
  //   if (bottomBorder.w > 0) {
  //     bottomBorder.w = bottomBorder.w - v;
  //   }
  //   if (leftBorder.h > 0) {
  //     leftBorder.h = leftBorder.h - v;
  //   }
  // } else {
  //   if (topBorder.w <= windowWidth) {
  //     topBorder.w = topBorder.w + v;
  //   }
  //   if (rightBorder.h <= windowHeight) {
  //     rightBorder.h = rightBorder.h + v;
  //   }
  //   if (bottomBorder.w <= windowWidth) {
  //     bottomBorder.w = bottomBorder.w + v;
  //   }
  //   if (leftBorder.h <= windowHeight) {
  //     leftBorder.h = leftBorder.h + v;
  //   }
  // }
}

function Border(edge) {
  this.x = 0;
  this.y = 0;
  this.w = 0;
  this.h = 0;

  this.xMax = 0;
  this.yMax = 0;

  this.display = function () {
    if (edge == 'top') {
      rect(0, 0, windowWidth, borderWidth);
    } else if (edge == 'right') {
      rect(windowWidth - borderWidth, 0, windowWidth, windowHeight);
    } else if (edge == 'bottom') {
      rect(0, windowHeight - borderWidth, windowWidth, windowHeight);
    } else if (edge == 'left') {
      rect(0, 0, borderWidth, windowHeight);
    } else {
      console.log('incorrectly set border edge dooofus');
    }
  }

  this.grow = function () {

  }
}
