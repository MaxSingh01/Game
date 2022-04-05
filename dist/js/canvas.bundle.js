/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "afbad786c9372861e0ebd5dee3ee0ff5.jpg");

/***/ }),

/***/ "./src/img/platform (2).png":
/*!**********************************!*\
  !*** ./src/img/platform (2).png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "57fb6fd6f2cbb225ae29cc1f64a9fc49.png");

/***/ }),

/***/ "./src/img/smallplateform.png":
/*!************************************!*\
  !*** ./src/img/smallplateform.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bf926246431f0f9f5178bdac1eefda0a.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_2_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform (2).png */ "./src/img/platform (2).png");
/* harmony import */ var _img_smallplateform_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/smallplateform.png */ "./src/img/smallplateform.png");
/* harmony import */ var _img_background_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background.jpg */ "./src/img/background.jpg");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








console.log(_img_platform_2_png__WEBPACK_IMPORTED_MODULE_0__["default"], 'img');
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
console.log(c);
canvas.width = 1024;
canvas.height = 576;
var gravity = 1.5;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.speed = 10;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 1
    };
    this.width = 66, this.height = 150, this.image = createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_6__["default"]);
    this.frames = 0;
    this.sprite = {
      stand: {
        right: createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        left: createImage(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        cropwidth: 177,
        width: 66
      },
      run: {
        right: createImage(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
        left: createImage(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_3__["default"]),
        cropwidth: 341,
        width: 120.875
      }
    };
    this.current = this.sprite.stand.right;
    this.currentwidth = 177;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.current, this.currentwidth * this.frames, 0, this.currentwidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames > 59 && (this.current === this.sprite.stand.right || this.current === this.sprite.stand.left)) this.frames = 0;else if (this.frames > 29 && (this.current === this.sprite.run.right || this.current === this.sprite.run.left)) this.frames = 0;
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      }
    }
  }]);

  return Player;
}();

var Plateform = /*#__PURE__*/function () {
  function Plateform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Plateform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Plateform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Plateform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var platformImage = createImage(_img_platform_2_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var player = new Player();
var plateforms = [];
var genericObjects = [];
var lastkey;
var key = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  down: {
    pressed: false
  }
};
var scrollOff = 0;

function init() {
  platformImage = createImage(_img_platform_2_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  player = new Player();
  plateforms = [new Plateform({
    x: -1,
    y: 510,
    image: platformImage
  }), new Plateform({
    x: platformImage.width + 200,
    y: 510,
    image: platformImage
  }), new Plateform({
    x: platformImage.width * 2 + 550,
    y: 510,
    image: platformImage
  }), new Plateform({
    x: platformImage.width * 2 + 90,
    y: 350,
    image: createImage(_img_smallplateform_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
  genericObjects = [new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_img_background_jpg__WEBPACK_IMPORTED_MODULE_2__["default"])
  })];
  scrollOff = 0;
}

function animation() {
  requestAnimationFrame(animation);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  plateforms.forEach(function (plateform) {
    plateform.draw();
  });
  player.update();

  if (key.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (key.left.pressed && player.position.x > 100 || key.left.pressed && scrollOff == 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (key.right.pressed) {
      scrollOff += player.speed;
      plateforms.forEach(function (plateform) {
        plateform.position.x -= player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x -= player.speed * 0.66;
      });
    } else if (key.left.pressed && scrollOff > 0) {
      scrollOff -= player.speed;
      plateforms.forEach(function (plateform) {
        plateform.position.x += player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x += player.speed * 0.66;
      });
    }
  }

  console.log(scrollOff);
  plateforms.forEach(function (plateform) {
    if (player.position.y + player.height <= plateform.position.y && player.position.y + player.height + player.velocity.y >= plateform.position.y && player.position.x + player.width >= plateform.position.x && player.position.x < plateform.position.x + plateform.width) {
      player.velocity.y = 0;
    }
  });

  if (key.right.pressed && lastkey === 'right' && player.current != player.sprite.run.right) {
    player.frames = 1;
    player.current = player.sprite.run.right;
    player.currentwidth = player.sprite.run.cropwidth;
    player.width = player.sprite.run.width;
  } else if (key.left.pressed && lastkey === 'left' && player.current != player.sprite.run.left) {
    player.current = player.sprite.run.left;
    player.currentwidth = player.sprite.run.cropwidth;
    player.width = player.sprite.run.width;
  } else if (key.left.pressed && lastkey === 'left' && player.current != player.sprite.run.left) {
    player.current = player.sprite.stand.left;
    player.currentwidth = player.sprite.stand.cropwidth;
    player.width = player.sprite.stand.width;
  } else if (key.right.pressed && lastkey === 'right' && player.current != player.sprite.run.right) {
    player.current = player.sprite.stand.right;
    player.currentwidth = player.sprite.stand.cropwidth;
    player.width = player.sprite.stand.width;
  }

  if (scrollOff > 2490) {
    console.log("YOu Won");
  }

  if (player.position.y > canvas.height) {
    console.log('You Lost');
    init();
  }
}

init();
animation();
window.addEventListener('keydown', function (_ref3) {
  var keyCode = _ref3.keyCode;
  console.log(keyCode);

  switch (keyCode) {
    case 65:
      console.log('left');
      key.left.pressed = true;
      lastkey = 'left';
      break;

    case 83:
      console.log("down");
      key.down.pressed = true;
      break;

    case 68:
      console.log('right');
      key.right.pressed = true;
      lastkey = 'right';
      break;

    case 87:
      console.log('up');
      player.velocity.y -= 25;
      break;
  }
});
window.addEventListener('keyup', function (_ref4) {
  var keyCode = _ref4.keyCode;
  console.log(keyCode);

  switch (keyCode) {
    case 65:
      console.log('left');
      key.left.pressed = false;
      player.current = player.sprite.stand.left;
      player.currentwidth = player.sprite.stand.cropwidth;
      player.width = player.sprite.stand.width;
      break;

    case 83:
      console.log("down");
      key.down.pressed = false;
      break;

    case 68:
      console.log('right');
      key.right.pressed = false;
      player.current = player.sprite.stand.right;
      player.currentwidth = player.sprite.stand.cropwidth;
      player.width = player.sprite.stand.width;
      break;

    case 87:
      console.log('up');
      player.velocity.y = 0;
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map