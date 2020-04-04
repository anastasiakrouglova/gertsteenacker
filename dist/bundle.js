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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("{\n  var allKoppels;\n\n  var getUniqueKoppel = function getUniqueKoppel() {\n    var koppels = [];\n    allKoppels.forEach(function (koppel) {\n      if (!koppels.includes(koppel.img)) {\n        koppels.push(koppel.img);\n      }\n    });\n    return koppels;\n  };\n\n  var setActiveElement = function setActiveElement($li) {\n    var $old = document.querySelector(\".active\");\n\n    if ($old) {\n      $old.classList.add(\"filter-koppel\");\n      $old.classList.remove(\"active\");\n    }\n\n    $li.classList.remove(\"filter-koppel\");\n    $li.classList.add(\"active\");\n  };\n\n  var createFilterKoppels = function createFilterKoppels() {\n    var $ulKoppels = document.querySelector(\".koppels\");\n    getUniqueKoppel().forEach(function (koppel) {\n      var $button = document.createElement(\"button\");\n      var $image = document.createElement(\"img\");\n      $button.value = koppel;\n      $button.classList.add(\"filter-koppel\");\n      $image.src = \"./src/images/wedding/\".concat(koppel, \".jpg\");\n      $image.width = 100;\n      $image.classList.add(\"review-img\");\n\n      if ($button.value === 'gertjan') {\n        $button.classList.add(\"active\");\n      }\n\n      $button.addEventListener('click', function () {\n        setActiveElement($button);\n        $reviewKoppel = document.querySelector(\".review-container\");\n        $reviewKoppel.innerHTML = \"\";\n        allKoppels.forEach(function (kpl) {\n          if (koppel === kpl.img) {\n            var $h3 = document.createElement(\"h3\");\n            $h3.innerHTML = kpl.name;\n            $h3.classList.add(\"review-title\");\n            var $text = document.createElement(\"p\");\n            $text.innerHTML = \"\\\"\".concat(kpl.text, \"\\\"\");\n            $text.classList.add(\"review-text\");\n            $reviewKoppel.appendChild($h3);\n            $reviewKoppel.appendChild($text);\n          }\n        });\n      });\n      $button.appendChild($image);\n      $ulKoppels.appendChild($button);\n    });\n  };\n\n  var initFetch = function initFetch() {\n    var url = \"src/data/koppels.json\";\n    fetch(url).then(function (r) {\n      return r.json();\n    }).then(function (jsonData) {\n      allKoppels = jsonData;\n      console.log(allKoppels);\n      createFilterKoppels();\n    });\n  };\n\n  var init = function init() {\n    initFetch();\n  };\n\n  init();\n}\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ })

/******/ });