var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var borderWidth = 5;

var v = 10;
var t = 0;

var topBorder;
var rightBorder;
var bottomBorder;
var leftBorder;

var showBorder = false;

function setup() {
  var mainColor = $('.nav-bar').css('background-color');
  var myCanvas = createCanvas(windowWidth, windowHeight);
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
    topBorder.grow();
    topBorder.display();
    rightBorder.grow();
    rightBorder.display();
    bottomBorder.grow();
    bottomBorder.display();
    leftBorder.grow();
    leftBorder.display();
  } else {
    topBorder.shrink();
    topBorder.display();
    rightBorder.shrink();
    rightBorder.display();
    bottomBorder.shrink();
    bottomBorder.display();
    leftBorder.shrink();
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

  this.setMax = function(x, y, w, h) {
    this.xMax = x;
    this.yMax = y;
    this.wMax = w;
    this.hMax = h;
  }

  this.display = function () {
    rect(this.x, this.y, this.w, this.h);
  }

  this.grow = function () {
    if (edge == 'top' || edge == 'bottom') {
      if (this.w <= this.wMax) {
        this.w += v;
      }
      this.x = this.xMax;
      this.y = this.yMax;
      this.h = this.hMax;
      console.log(this.y);
    } else if (edge == 'right' || edge == 'left') {
      if (this.h <= this.hMax) {
        this.h += v;
      }
      this.x = this.xMax;
      this.y = this.yMax;
      this.w = this.wMax;
    }
  }

  this.shrink = function () {
    if (edge == 'top' || edge == 'bottom') {
      if (this.w >= 0) {
        this.w -= v;
      }
      this.x = this.xMax;
      this.y = this.yMax;
      this.h = this.hMax;
    } else if (edge == 'right' || edge == 'left') {
      if (this.h >= 0) {
        this.h -= v;
      }
      this.x = this.xMax;
      this.y = this.yMax;
      this.w = this.wMax;
    }
  }

  if (edge == 'top') {
    this.setMax(0, 0, windowWidth, borderWidth);
  } else if (edge == 'right') {
    this.setMax(windowWidth - borderWidth, 0, windowWidth, windowHeight);
  } else if (edge == 'bottom') {
    this.setMax(0, windowHeight - borderWidth, windowWidth, windowHeight);
  } else if (edge == 'left') {
    this.setMax(0, 0, borderWidth, windowHeight);
  } else {
    console.log('incorrectly set border edge dooofus');
  }
}
