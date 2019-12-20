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
/******/ 	return __webpack_require__(__webpack_require__.s = "./block.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./block.js":
/*!******************!*\
  !*** ./block.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_blocks_call_to_action_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/blocks/call-to-action/editor.scss */ "./src/blocks/call-to-action/editor.scss");
/* harmony import */ var _src_blocks_call_to_action_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_call_to_action_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_blocks_call_to_action_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/blocks/call-to-action/style.scss */ "./src/blocks/call-to-action/style.scss");
/* harmony import */ var _src_blocks_call_to_action_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_call_to_action_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_blocks_call_to_action_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/blocks/call-to-action/block */ "./src/blocks/call-to-action/block.js");




/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/blocks/call-to-action/attributes.js":
/*!*************************************************!*\
  !*** ./src/blocks/call-to-action/attributes.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * BLOCK: Call To Action - Attributes
 */
const attributes = {
  blockVerticalPadding: {
    type: 'number',
    default: '0'
  },
  blockHorizontalPadding: {
    type: 'number',
    default: '0'
  },
  ctaTitle: {
    source: 'html',
    selector: 'h1,h2,h3,h4,h5,h6',
    default: 'Call To Action'
  },
  description: {
    source: 'html',
    selector: 'p',
    default: 'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  },
  textAlign: {
    type: 'string',
    default: 'left'
  },
  titleColor: {
    type: 'string'
  },
  descColor: {
    type: 'string'
  },
  ctaPosition: {
    type: 'string',
    default: 'right'
  },
  titleTag: {
    type: 'string',
    default: 'h3'
  },
  titleFontSize: {
    type: 'number',
    default: '20'
  },
  descFontSize: {
    type: 'number',
    default: '16'
  },
  blockId: {
    type: 'string',
    default: 'not_set'
  },
  buttonAlign: {
    type: 'string',
    default: 'middle'
  },
  ctaTarget: {
    type: 'boolean',
    default: false
  },
  ctaType: {
    type: 'string',
    default: 'button'
  },
  ctaText: {
    type: 'string',
    default: 'Read More'
  },
  ctaLink: {
    type: 'string',
    default: '#'
  },
  ctaFontSize: {
    type: 'number',
    default: '16'
  },
  contentWidth: {
    type: 'number',
    default: '70'
  },
  ctaBtnLinkColor: {
    type: 'string',
    default: '#333'
  },
  ctaLinkHoverColor: {
    type: 'string',
    default: ''
  },
  ctaBgColor: {
    type: 'string',
    default: 'transparent'
  },
  ctaBgHoverColor: {
    type: 'string',
    default: 'transparent'
  },
  ctaBorderColor: {
    type: 'string',
    default: '#333'
  },
  ctaBorderhoverColor: {
    type: 'string',
    default: ''
  },
  ctaBorderStyle: {
    type: 'string',
    default: 'solid'
  },
  ctaBtnVertPadding: {
    type: 'number',
    default: 10
  },
  ctaBtnHrPadding: {
    type: 'number',
    default: 14
  },
  ctaBorderWidth: {
    type: 'number',
    default: 1
  },
  ctaBorderRadius: {
    type: 'number',
    default: 0
  },
  stack: {
    type: 'string',
    default: 'tablet'
  },
  ctaLeftSpace: {
    type: 'number',
    default: 5
  },
  ctaRightSpace: {
    type: 'number',
    default: 5
  },
  bgImages: {
    type: 'array',
    default: []
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/blocks/call-to-action/block.js":
/*!********************************************!*\
  !*** ./src/blocks/call-to-action/block.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Title */ "./src/blocks/call-to-action/components/Title.js");
/* harmony import */ var _components_Description__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Description */ "./src/blocks/call-to-action/components/Description.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes */ "./src/blocks/call-to-action/classes.js");
/* harmony import */ var _components_CTA__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/CTA */ "./src/blocks/call-to-action/components/CTA.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/blocks/call-to-action/edit.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/blocks/call-to-action/attributes.js");
/* harmony import */ var _components_background_images__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/background-images */ "./src/blocks/call-to-action/components/background-images/index.js");
/* harmony import */ var _inline_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inline-styles */ "./src/blocks/call-to-action/inline-styles.js");
/**
 * BLOCK: Call To Action.
 */
// Import block dependencies and components.
 // Import icon.









const __ = wp.i18n.__;
const registerBlockType = wp.blocks.registerBlockType;
const Fragment = wp.element.Fragment;
registerBlockType('ubc/call-to-action', {
  title: 'UBC Cards Block',
  description: 'Some description',
  icon: 'book-alt',
  keywords: [__('cta'), __('call to action')],
  category: 'layout',
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"],

  save(props) {
    const _props$attributes = props.attributes,
          ctaPosition = _props$attributes.ctaPosition,
          blockId = _props$attributes.blockId,
          ctaType = _props$attributes.ctaType,
          ctaLink = _props$attributes.ctaLink,
          ctaTarget = _props$attributes.ctaTarget,
          className = _props$attributes.className,
          ctaTitle = _props$attributes.ctaTitle,
          description = _props$attributes.description,
          bgImages = _props$attributes.bgImages;
    const isCta = React.createElement(_components_CTA__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attributes: props.attributes,
      setAttributes: "not_set"
    });
    const bgStyles = Object(_components_background_images__WEBPACK_IMPORTED_MODULE_7__["generateBackgroundStyle"])(bgImages); // Get description and seperator components.

    const desc = React.createElement(Fragment, null, '' !== description && React.createElement("div", {
      className: "uagb-cta-text-wrap"
    }, React.createElement(_components_Description__WEBPACK_IMPORTED_MODULE_2__["default"], {
      attributes: props.attributes,
      setAttributes: "not_set"
    }))); // Get Title components.

    const titleText = React.createElement(Fragment, null, '' !== ctaTitle && React.createElement("div", {
      className: "uagb-cta__title-wrap"
    }, React.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
      attributes: props.attributes,
      setAttributes: "not_set"
    })));
    const output = React.createElement(Fragment, null, React.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("uagb-cta__content-wrap", ...Object(_classes__WEBPACK_IMPORTED_MODULE_3__["default"])(props.attributes))
    }, React.createElement("div", {
      className: "uagb-cta__left-right-wrap"
    }, ctaPosition == "left" && isCta, React.createElement("div", {
      className: "uagb-cta__content"
    }, ctaPosition == "above-title" && React.createElement(Fragment, null, isCta, titleText, desc), ctaPosition == "below-title" && React.createElement(Fragment, null, titleText, desc, isCta), (ctaPosition == "left" || ctaPosition == "right") && React.createElement(Fragment, null, titleText, desc)), ctaPosition == "right" && isCta)));
    let target = '';

    if (ctaTarget) {
      target = '_blank';
    }

    return React.createElement(Fragment, null, React.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, 'uagb-cta__outer-wrap'),
      id: `ubc-cta-block-${blockId}`,
      style: bgStyles
    }, ctaType === 'all' && React.createElement(Fragment, null, React.createElement("a", {
      href: ctaLink,
      className: "uagb-cta__block-link-wrap uagb-cta__link-to-all",
      target: target,
      rel: "noopener noreferrer"
    }, output)), ctaType !== "all" && output), React.createElement(_inline_styles__WEBPACK_IMPORTED_MODULE_8__["default"], {
      attributes: props.attributes
    }));
  }

});

/***/ }),

/***/ "./src/blocks/call-to-action/classes.js":
/*!**********************************************!*\
  !*** ./src/blocks/call-to-action/classes.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Returns Dynamic Generated Classes
 */
function CtaPositionClasses(attributes) {
  let iconimgStyleClass = '';
  iconimgStyleClass += 'uagb-cta__block' + ' ';
  iconimgStyleClass += 'uagb-cta__icon-position-' + attributes.ctaPosition + ' ';

  if (attributes.ctaPosition === 'right') {
    iconimgStyleClass += 'uagb-cta__content-right' + ' ';
  }

  if (attributes.ctaPosition === 'right' && attributes.stack !== 'none') {
    iconimgStyleClass += 'uagb-cta__content-stacked-' + attributes.stack + ' ';
  }

  if (attributes.ctaPosition !== 'below-title') {
    iconimgStyleClass += 'uagb-cta__button-valign-' + attributes.buttonAlign + ' ';
  }

  if (attributes.ctaType !== 'text' && attributes.ctaType !== 'button') {
    iconimgStyleClass += 'uagb-cta__button-type-none' + ' ';
  }

  return [iconimgStyleClass];
}

/* harmony default export */ __webpack_exports__["default"] = (CtaPositionClasses);

/***/ }),

/***/ "./src/blocks/call-to-action/components/CTA.js":
/*!*****************************************************!*\
  !*** ./src/blocks/call-to-action/components/CTA.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Component = wp.element.Component;

class CTA extends Component {
  render() {
    const _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
    const ctaBtnClass = ' uagb-cta__block-link uagb-cta__button-link-wrapper uagb-cta-typeof-' + attributes.ctaType;
    let target = '_self';
    const rel = 'noopener noreferrer';

    if (attributes.ctaTarget) {
      target = '_blank';
    }

    let link = 'javascript:void(0)';

    if (setAttributes === 'not_set') {
      link = attributes.ctaLink;
    }

    return React.createElement("div", {
      className: "uagb-cta__link-wrapper uagb-cta__block-link-style"
    }, (attributes.ctaType === 'button' || attributes.ctaType === 'text') && React.createElement("div", {
      className: "uagb-cta__button-wrapper"
    }, React.createElement("a", {
      href: link,
      className: ctaBtnClass,
      target: target,
      rel: rel
    }, React.createElement("span", {
      className: "uagb-cta__link-content-inner"
    }, React.createElement("span", null, attributes.ctaText)))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CTA);

/***/ }),

/***/ "./src/blocks/call-to-action/components/Description.js":
/*!*************************************************************!*\
  !*** ./src/blocks/call-to-action/components/Description.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const RichText = wp.blockEditor.RichText;
const __ = wp.i18n.__;
const createBlock = wp.blocks.createBlock;
const Component = wp.element.Component;

class Description extends Component {
  render() {
    const _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          props = _this$props.props;
    let output = '';

    if (setAttributes !== 'not_set') {
      output = React.createElement(RichText, {
        tagName: "p",
        value: attributes.description,
        placeholder: __('Write a Description'),
        className: "uagb-cta__desc",
        onChange: value => setAttributes({
          description: value
        }),
        onMerge: props.mergeBlocks,
        unstableOnSplit: props.insertBlocksAfter ? (before, after, ...blocks) => {
          setAttributes({
            content: before
          });
          props.insertBlocksAfter([...blocks, createBlock('core/paragraph', {
            content: after
          })]);
        } : undefined,
        onRemove: () => props.onReplace([])
      });
    } else {
      output = React.createElement(RichText.Content, {
        tagName: "p",
        value: attributes.description,
        className: "uagb-cta__desc"
      });
    }

    return output;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Description);

/***/ }),

/***/ "./src/blocks/call-to-action/components/Title.js":
/*!*******************************************************!*\
  !*** ./src/blocks/call-to-action/components/Title.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const RichText = wp.blockEditor.RichText;
const createBlock = wp.blocks.createBlock;
const Component = wp.element.Component;
const __ = wp.i18n.__;

class Title extends Component {
  render() {
    const _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          props = _this$props.props;
    let output = '';

    if (setAttributes !== 'not_set') {
      output = React.createElement(RichText, {
        tagName: attributes.titleTag,
        placeholder: __('Write a Heading'),
        value: attributes.ctaTitle,
        className: "uagb-cta__title",
        onChange: value => setAttributes({
          ctaTitle: value
        }),
        multiline: false,
        onMerge: props.mergeBlocks,
        unstableOnSplit: props.insertBlocksAfter ? (before, after, ...blocks) => {
          setAttributes({
            content: before
          });
          props.insertBlocksAfter([...blocks, createBlock('core/paragraph', {
            content: after
          })]);
        } : undefined,
        onRemove: () => props.onReplace([])
      });
    } else {
      output = React.createElement(RichText.Content, {
        tagName: attributes.titleTag,
        value: attributes.ctaTitle,
        className: "uagb-cta__title"
      });
    }

    return output;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./src/blocks/call-to-action/components/background-images/constants.js":
/*!*****************************************************************************!*\
  !*** ./src/blocks/call-to-action/components/background-images/constants.js ***!
  \*****************************************************************************/
/*! exports provided: defaultAttrs, sizeOptions, positionXOptions, positionYOptions, backgroundRepeatOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultAttrs", function() { return defaultAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeOptions", function() { return sizeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionXOptions", function() { return positionXOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionYOptions", function() { return positionYOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundRepeatOptions", function() { return backgroundRepeatOptions; });
const defaultAttrs = {
  url: 'https://via.placeholder.com/400x400',
  backgroundSize: 'cover',
  backgroundPositionX: 'center',
  backgroundPositionY: 'center',
  backgroundRepeat: 'no-repeat'
};
const sizeOptions = [{
  label: 'Auto',
  value: 'auto'
}, {
  label: 'Cover',
  value: 'cover'
}, {
  label: 'Contain',
  value: 'contain'
}];
const positionXOptions = [{
  label: 'Left',
  value: 'left'
}, {
  label: 'Center',
  value: 'center'
}, {
  label: 'Right',
  value: 'right'
}];
const positionYOptions = [{
  label: 'Top',
  value: 'top'
}, {
  label: 'Center',
  value: 'center'
}, {
  label: 'Right',
  value: 'right'
}];
const backgroundRepeatOptions = [{
  label: 'No Repeat',
  value: 'no-repeat'
}, {
  label: 'Repeat',
  value: 'repeat'
}, {
  label: 'Repeat X',
  value: 'repeat-x'
}, {
  label: 'Repeat y',
  value: 'repeat-y'
}];

/***/ }),

/***/ "./src/blocks/call-to-action/components/background-images/icons.js":
/*!*************************************************************************!*\
  !*** ./src/blocks/call-to-action/components/background-images/icons.js ***!
  \*************************************************************************/
/*! exports provided: ArrowUpIcon, ArrowDownIcon, TrashIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowUpIcon", function() { return ArrowUpIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowDownIcon", function() { return ArrowDownIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashIcon", function() { return TrashIcon; });
const ArrowUpIcon = () => {
  return React.createElement("svg", {
    width: "18",
    height: "18",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 18"
  }, React.createElement("polygon", {
    points: "9,4.5 3.3,10.1 4.8,11.5 9,7.3 13.2,11.5 14.7,10.1 "
  }));
};
const ArrowDownIcon = () => {
  return React.createElement("svg", {
    width: "18",
    height: "18",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 18"
  }, React.createElement("polygon", {
    points: "9,13.5 14.7,7.9 13.2,6.5 9,10.7 4.8,6.5 3.3,7.9 "
  }));
};
const TrashIcon = () => {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "12",
    viewBox: "0 0 10 12"
  }, React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M7 0H3v2H0v2h10V2H7zM7 10H3V6H1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6H7v4z"
  })));
};

/***/ }),

/***/ "./src/blocks/call-to-action/components/background-images/index.js":
/*!*************************************************************************!*\
  !*** ./src/blocks/call-to-action/components/background-images/index.js ***!
  \*************************************************************************/
/*! exports provided: BGSettings, generateBackgroundStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BGSettings", function() { return BGSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBackgroundStyle", function() { return generateBackgroundStyle; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/blocks/call-to-action/components/background-images/constants.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/blocks/call-to-action/components/background-images/icons.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const __ = wp.i18n.__;
const _wp$element = wp.element,
      Fragment = _wp$element.Fragment,
      Component = _wp$element.Component;
const _wp$components = wp.components,
      PanelBody = _wp$components.PanelBody,
      SelectControl = _wp$components.SelectControl,
      Button = _wp$components.Button;
const _wp$blockEditor = wp.blockEditor,
      MediaUpload = _wp$blockEditor.MediaUpload,
      MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;

class BGSettings extends Component {
  constructor(props) {
    super(...arguments);
    this.props = props;
  } // Find background image by index and update specified property


  onUpdateBackgroundProperty(index, property, value) {
    const _this$props = this.props,
          _this$props$bgImages = _this$props.bgImages,
          bgImages = _this$props$bgImages === void 0 ? [] : _this$props$bgImages,
          setAttributes = _this$props.setAttributes;
    setAttributes({
      bgImages: Object.assign([...bgImages], {
        [index]: _objectSpread({}, bgImages[index], {
          [property]: value
        })
      })
    });
  }

  onRemoveBackground(index) {
    const _this$props2 = this.props,
          _this$props2$bgImages = _this$props2.bgImages,
          bgImages = _this$props2$bgImages === void 0 ? [] : _this$props2$bgImages,
          setAttributes = _this$props2.setAttributes;
    setAttributes({
      bgImages: bgImages.filter(function (item, currentIndex) {
        return currentIndex !== index;
      })
    });
  }

  isFirst(index) {
    const _this$props$bgImages2 = this.props.bgImages,
          bgImages = _this$props$bgImages2 === void 0 ? [] : _this$props$bgImages2;
    return bgImages.length > 0 && index === 0;
  }

  isLast(index) {
    const _this$props$bgImages3 = this.props.bgImages,
          bgImages = _this$props$bgImages3 === void 0 ? [] : _this$props$bgImages3;
    return bgImages.length > 0 && index === bgImages.length - 1;
  }

  onMoveUp(index) {
    const _this$props3 = this.props,
          _this$props3$bgImages = _this$props3.bgImages,
          bgImages = _this$props3$bgImages === void 0 ? [] : _this$props3$bgImages,
          setAttributes = _this$props3.setAttributes;
    const backgroundImage = [...bgImages];

    if (backgroundImage.length > 1 && !this.isFirst(index)) {
      var _ref = [backgroundImage[index], backgroundImage[index - 1]];
      backgroundImage[index - 1] = _ref[0];
      backgroundImage[index] = _ref[1];
    }

    setAttributes({
      bgImages: backgroundImage
    });
  }

  onMoveDown(index) {
    const _this$props4 = this.props,
          _this$props4$bgImages = _this$props4.bgImages,
          bgImages = _this$props4$bgImages === void 0 ? [] : _this$props4$bgImages,
          setAttributes = _this$props4.setAttributes;
    const backgroundImage = [...bgImages];

    if (backgroundImage.length > 1 && !this.isLast(index)) {
      var _ref2 = [backgroundImage[index + 1], backgroundImage[index]];
      backgroundImage[index] = _ref2[0];
      backgroundImage[index + 1] = _ref2[1];
    }

    setAttributes({
      bgImages: backgroundImage
    });
  }

  render() {
    const _this$props5 = this.props,
          _this$props5$bgImages = _this$props5.bgImages,
          bgImages = _this$props5$bgImages === void 0 ? [] : _this$props5$bgImages,
          setAttributes = _this$props5.setAttributes;
    return React.createElement(PanelBody, {
      title: __('Background Images'),
      initialOpen: false
    }, React.createElement(Button, {
      isPrimary: true,
      onClick: e => {
        e.stopPropagation();
        setAttributes({
          bgImages: [...bgImages, _constants__WEBPACK_IMPORTED_MODULE_0__["defaultAttrs"]]
        });
      }
    }, "Add"), React.createElement("hr", null), bgImages.map(function (bgImage, index) {
      const url = bgImage.url,
            backgroundSize = bgImage.backgroundSize,
            backgroundPositionX = bgImage.backgroundPositionX,
            backgroundPositionY = bgImage.backgroundPositionY,
            backgroundRepeat = bgImage.backgroundRepeat;
      const ALLOWED_MEDIA_TYPES = ['image'];
      return React.createElement(Fragment, {
        key: index
      }, React.createElement("div", {
        className: "ubc-background-image-controll"
      }, React.createElement("div", {
        className: "ubc-background-image-controll__preview"
      }, React.createElement("div", {
        className: "ubc-background-image-controll__preview-bottom"
      }, React.createElement(MediaUploadCheck, null, React.createElement(MediaUpload, {
        onSelect: media => {
          this.onUpdateBackgroundProperty(index, 'url', media.url);
        },
        allowedTypes: ALLOWED_MEDIA_TYPES,
        render: ({
          open
        }) => React.createElement(Fragment, null, React.createElement("div", {
          className: "ubc-background-image-controll__preview-top"
        }, React.createElement("button", {
          className: "ubc-background-image-controll__upload",
          onClick: open
        }, React.createElement("img", {
          src: url,
          alt: `Background ${index}`
        }))), React.createElement(Button, {
          onClick: open,
          isPrimary: true
        }, "Upload Image"))
      })), React.createElement(Button, {
        onClick: () => {
          this.onRemoveBackground(index);
        }
      }, React.createElement(_icons__WEBPACK_IMPORTED_MODULE_1__["TrashIcon"], null)), React.createElement(Button, {
        onClick: () => {
          this.onMoveUp(index);
        },
        disabled: this.isFirst(index)
      }, React.createElement(_icons__WEBPACK_IMPORTED_MODULE_1__["ArrowUpIcon"], null)), React.createElement(Button, {
        onClick: () => {
          this.onMoveDown(index);
        },
        disabled: this.isLast(index)
      }, React.createElement(_icons__WEBPACK_IMPORTED_MODULE_1__["ArrowDownIcon"], null)))), React.createElement("div", {
        className: "ubc-background-image-controll__settings"
      }, React.createElement(SelectControl, {
        label: "Position X",
        value: backgroundPositionX,
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["positionXOptions"],
        onChange: position => {
          this.onUpdateBackgroundProperty(index, 'backgroundPositionX', position);
        }
      }), React.createElement(SelectControl, {
        label: "Position Y",
        value: backgroundPositionY,
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["positionYOptions"],
        onChange: position => {
          this.onUpdateBackgroundProperty(index, 'backgroundPositionY', position);
        }
      }), React.createElement(SelectControl, {
        label: "Size",
        value: backgroundSize,
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["sizeOptions"],
        onChange: size => {
          this.onUpdateBackgroundProperty(index, 'backgroundSize', size);
        }
      }), React.createElement(SelectControl, {
        label: "Repeat",
        value: backgroundRepeat,
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["backgroundRepeatOptions"],
        onChange: repeat => {
          this.onUpdateBackgroundProperty(index, 'backgroundRepeat', repeat);
        }
      }))), React.createElement("hr", null));
    }.bind(this)));
  }

}

const generateBackgroundStyle = (bgImages = []) => {
  const arrayOfBackgroundImageAsString = bgImages.map(function (bg) {
    const url = bg.url,
          backgroundSize = bg.backgroundSize,
          backgroundPositionX = bg.backgroundPositionX,
          backgroundPositionY = bg.backgroundPositionY,
          backgroundRepeat = bg.backgroundRepeat;
    return `url(${url}) ${backgroundPositionY} ${backgroundPositionX}/${backgroundSize} ${backgroundRepeat}`;
  });
  return {
    background: arrayOfBackgroundImageAsString.join(',')
  };
};



/***/ }),

/***/ "./src/blocks/call-to-action/edit.js":
/*!*******************************************!*\
  !*** ./src/blocks/call-to-action/edit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Title */ "./src/blocks/call-to-action/components/Title.js");
/* harmony import */ var _components_Description__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Description */ "./src/blocks/call-to-action/components/Description.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes */ "./src/blocks/call-to-action/classes.js");
/* harmony import */ var _components_CTA__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/CTA */ "./src/blocks/call-to-action/components/CTA.js");
/* harmony import */ var _components_background_images__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/background-images */ "./src/blocks/call-to-action/components/background-images/index.js");
/* harmony import */ var _inline_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inline-styles */ "./src/blocks/call-to-action/inline-styles.js");
/**
 * BLOCK: Call To Action
 */







const __ = wp.i18n.__;
const _wp$blockEditor = wp.blockEditor,
      AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
      BlockControls = _wp$blockEditor.BlockControls,
      ColorPalette = _wp$blockEditor.ColorPalette,
      InspectorControls = _wp$blockEditor.InspectorControls;
const _wp$components = wp.components,
      PanelBody = _wp$components.PanelBody,
      SelectControl = _wp$components.SelectControl,
      RangeControl = _wp$components.RangeControl,
      TabPanel = _wp$components.TabPanel,
      ToggleControl = _wp$components.ToggleControl,
      TextControl = _wp$components.TextControl;
const _wp$element = wp.element,
      Component = _wp$element.Component,
      Fragment = _wp$element.Fragment;

class UAGBCallToAction extends Component {
  /**
   * Function Name: toggleTarget.
   */
  toggleTarget() {
    const ctaTarget = this.props.attributes.ctaTarget;
    const setAttributes = this.props.setAttributes;
    setAttributes({
      ctaTarget: !ctaTarget
    });
  }

  render() {
    const _this$props = this.props,
          className = _this$props.className,
          setAttributes = _this$props.setAttributes,
          attributes = _this$props.attributes; // Setup the attributes.

    const textAlign = attributes.textAlign,
          titleColor = attributes.titleColor,
          descColor = attributes.descColor,
          titleTag = attributes.titleTag,
          titleFontSize = attributes.titleFontSize,
          descFontSize = attributes.descFontSize,
          ctaPosition = attributes.ctaPosition,
          buttonAlign = attributes.buttonAlign,
          ctaType = attributes.ctaType,
          ctaText = attributes.ctaText,
          ctaLink = attributes.ctaLink,
          ctaTarget = attributes.ctaTarget,
          ctaFontSize = attributes.ctaFontSize,
          contentWidth = attributes.contentWidth,
          ctaBtnLinkColor = attributes.ctaBtnLinkColor,
          ctaBgHoverColor = attributes.ctaBgHoverColor,
          ctaBgColor = attributes.ctaBgColor,
          ctaBtnVertPadding = attributes.ctaBtnVertPadding,
          ctaBtnHrPadding = attributes.ctaBtnHrPadding,
          ctaBorderStyle = attributes.ctaBorderStyle,
          ctaBorderColor = attributes.ctaBorderColor,
          ctaBorderhoverColor = attributes.ctaBorderhoverColor,
          ctaBorderWidth = attributes.ctaBorderWidth,
          ctaBorderRadius = attributes.ctaBorderRadius,
          stack = attributes.stack,
          ctaLinkHoverColor = attributes.ctaLinkHoverColor,
          bgImages = attributes.bgImages,
          blockId = attributes.blockId,
          blockVerticalPadding = attributes.blockVerticalPadding,
          blockHorizontalPadding = attributes.blockHorizontalPadding;

    if (blockId === 'not_set') {
      setAttributes({
        blockId: this.props.clientId
      });
    } // Get object of background image style


    const bgStyles = Object(_components_background_images__WEBPACK_IMPORTED_MODULE_5__["generateBackgroundStyle"])(bgImages); // CTA settings.

    const ctaSettings = React.createElement(PanelBody, {
      title: __('Button'),
      initialOpen: false
    }, React.createElement(SelectControl, {
      label: __('Type'),
      value: ctaType,
      onChange: value => setAttributes({
        ctaType: value
      }),
      options: [{
        value: 'none',
        label: __('None')
      }, {
        value: 'text',
        label: __('Text')
      }, {
        value: 'button',
        label: __('Button')
      }, {
        value: 'all',
        label: __('Complete Box')
      }]
    }), (ctaType === 'text' || ctaType === 'button') && React.createElement(Fragment, null, React.createElement(TextControl, {
      label: __('Text'),
      value: ctaText,
      onChange: value => setAttributes({
        ctaText: value
      })
    }), React.createElement(RangeControl, {
      label: "Font Size",
      value: ctaFontSize,
      onChange: fontSize => {
        setAttributes({
          ctaFontSize: fontSize
        });
      },
      min: 10,
      max: 30
    })), ctaType !== 'none' && React.createElement(Fragment, null, React.createElement(TextControl, {
      label: __('Link'),
      value: ctaLink,
      onChange: value => setAttributes({
        ctaLink: value
      })
    }), React.createElement(ToggleControl, {
      label: __('Open in new Window'),
      checked: ctaTarget,
      onChange: () => this.toggleTarget()
    })), ctaType === 'button' && React.createElement(Fragment, null, React.createElement("hr", {
      className: "uagb-editor__separator"
    }), React.createElement("h2", null, __('Button Padding (px)')), React.createElement(RangeControl, {
      label: __('Vertical Padding'),
      className: 'uagb-margin-control',
      value: ctaBtnVertPadding,
      onChange: value => setAttributes({
        ctaBtnVertPadding: value
      }),
      min: 0,
      max: 40,
      beforeIcon: "",
      allowReset: true
    }), React.createElement(RangeControl, {
      label: __('Horizontal Padding'),
      className: 'uagb-margin-control',
      value: ctaBtnHrPadding,
      onChange: value => setAttributes({
        ctaBtnHrPadding: value
      }),
      min: 0,
      max: 40,
      beforeIcon: "",
      allowReset: true
    }), React.createElement("hr", {
      className: "uagb-editor__separator"
    }), React.createElement("h2", null, __('Button Border')), React.createElement(SelectControl, {
      label: __('Style'),
      value: ctaBorderStyle,
      onChange: value => setAttributes({
        ctaBorderStyle: value
      }),
      options: [{
        value: 'none',
        label: __('None')
      }, {
        value: 'solid',
        label: __('Solid')
      }, {
        value: 'double',
        label: __('Double')
      }, {
        value: 'dashed',
        label: __('Dashed')
      }, {
        value: 'dotted',
        label: __('Dotted')
      }]
    }), ctaBorderStyle !== 'none' && React.createElement(Fragment, null, React.createElement(RangeControl, {
      label: __('Width'),
      value: ctaBorderWidth,
      onChange: value => setAttributes({
        ctaBorderWidth: value
      }),
      min: 0,
      max: 10,
      beforeIcon: "",
      allowReset: true
    }), React.createElement(RangeControl, {
      label: __('Rounded Corner'),
      value: ctaBorderRadius,
      onChange: value => setAttributes({
        ctaBorderRadius: value
      }),
      min: 0,
      max: 100,
      beforeIcon: "",
      allowReset: true
    }))), ctaType === 'text' && React.createElement(TabPanel, {
      className: "uagb-inspect-tabs uagb-inspect-tabs-col-2",
      activeClass: "active-tab",
      tabs: [{
        name: 'normal',
        title: __('Normal'),
        className: 'uagb-normal-tab'
      }, {
        name: 'hover',
        title: __('Hover'),
        className: 'uagb-hover-tab'
      }]
    }, tabName => {
      let ctaTextTab;

      if ('normal' === tabName.name) {
        ctaTextTab = ctaTxtColor;
      } else {
        ctaTextTab = ctaTxtHoverColor;
      }

      return React.createElement("div", null, ctaTextTab);
    }), ctaType === 'button' && React.createElement(TabPanel, {
      className: "uagb-inspect-tabs uagb-inspect-tabs-col-2",
      activeClass: "active-tab",
      tabs: [{
        name: 'normal',
        title: __('Normal'),
        className: 'uagb-normal-tab'
      }, {
        name: 'hover',
        title: __('Hover'),
        className: 'uagb-focus-tab'
      }]
    }, tabName => {
      let tabout;

      if ('normal' === tabName.name) {
        tabout = ctaNormalSettings;
      } else {
        tabout = ctaHoverSettings;
      }

      return React.createElement("div", null, tabout);
    }));
    const ctaNormalSettings = React.createElement(Fragment, null, React.createElement("p", {
      className: "uagb-setting-label"
    }, __('Text Color'), React.createElement("span", {
      className: "components-base-control__label"
    }, React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: ctaBtnLinkColor
      }
    }))), React.createElement(ColorPalette, {
      value: ctaBtnLinkColor,
      onChange: colorValue => setAttributes({
        ctaBtnLinkColor: colorValue
      }),
      allowReset: true
    }), React.createElement("p", {
      className: "uagb-setting-label"
    }, __('Background Color'), React.createElement("span", {
      className: "components-base-control__label"
    }, React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: ctaBgColor
      }
    }))), React.createElement(ColorPalette, {
      value: ctaBgColor,
      onChange: colorValue => setAttributes({
        ctaBgColor: colorValue
      }),
      allowReset: true
    }), ctaBorderStyle !== 'none' && React.createElement(Fragment, null, React.createElement("p", {
      className: "uagb-setting-label"
    }, __('Border Color'), React.createElement("span", {
      className: "components-base-control__label"
    }, React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: ctaBorderColor
      }
    }))), React.createElement(ColorPalette, {
      value: ctaBorderColor,
      onChange: colorValue => setAttributes({
        ctaBorderColor: colorValue
      }),
      allowReset: true
    })));
    const ctaHoverSettings = React.createElement(Fragment, null, React.createElement("p", {
      className: "uagb-setting-label"
    }, __('Text Hover Color'), React.createElement("span", {
      className: "components-base-control__label"
    }, React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: ctaLinkHoverColor
      }
    }))), React.createElement(ColorPalette, {
      value: ctaLinkHoverColor,
      onChange: colorValue => setAttributes({
        ctaLinkHoverColor: colorValue
      }),
      allowReset: true
    }), React.createElement("p", {
      className: "uagb-setting-label"
    }, __('Background Hover Color'), React.createElement("span", {
      className: "components-base-control__label"
    }, React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: ctaBgHoverColor
      }
    }))), React.createElement(ColorPalette, {
      value: ctaBgHoverColor,
      onChange: colorValue => setAttributes({
        ctaBgHoverColor: colorValue
      }),
      allowReset: true
    }), ctaBorderStyle !== 'none' && React.createElement(Fragment, null, React.createElement("p", {
      className: "uagb-setting-label"
    }, __('Border Hover Color'), React.createElement("span", {
      className: "components-base-control__label"
    }, React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: ctaBorderhoverColor
      }
    }))), React.createElement(ColorPalette, {
      value: ctaBorderhoverColor,
      onChange: colorValue => setAttributes({
        ctaBorderhoverColor: colorValue
      }),
      allowReset: true
    })));
    const ctaTxtColor = React.createElement(Fragment, null, React.createElement("p", {
      className: "uagb-setting-label"
    }, __('CTA Text Color'), React.createElement("span", {
      className: "components-base-control__label"
    }, React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: ctaBtnLinkColor
      }
    }))), React.createElement(ColorPalette, {
      value: ctaBtnLinkColor,
      onChange: colorValue => setAttributes({
        ctaBtnLinkColor: colorValue
      }),
      allowReset: true
    }));
    const ctaTxtHoverColor = React.createElement(Fragment, null, React.createElement("p", {
      className: "uagb-setting-label"
    }, __('CTA Text Hover Color'), React.createElement("span", {
      className: "components-base-control__label"
    }, React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: ctaLinkHoverColor
      }
    }))), React.createElement(ColorPalette, {
      value: ctaLinkHoverColor,
      onChange: colorValue => setAttributes({
        ctaLinkHoverColor: colorValue
      }),
      allowReset: true
    })); // Typography settings.

    const TypographySettings = React.createElement(PanelBody, {
      title: __('Content'),
      initialOpen: false
    }, React.createElement("h2", null, __('Heading')), React.createElement(SelectControl, {
      label: __('Tag'),
      value: titleTag,
      onChange: value => setAttributes({
        titleTag: value
      }),
      options: [{
        value: 'h1',
        label: __('H1')
      }, {
        value: 'h2',
        label: __('H2')
      }, {
        value: 'h3',
        label: __('H3')
      }, {
        value: 'h4',
        label: __('H4')
      }, {
        value: 'h5',
        label: __('H5')
      }, {
        value: 'h6',
        label: __('H6')
      }]
    }), React.createElement(RangeControl, {
      label: "Font Size",
      value: titleFontSize,
      onChange: fontSize => {
        setAttributes({
          titleFontSize: fontSize
        });
      },
      min: 14,
      max: 50
    }), React.createElement("p", {
      className: "uagb-setting-label"
    }, __('Color'), React.createElement("span", {
      className: "components-base-control__label"
    }, React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: titleColor
      }
    }))), React.createElement(ColorPalette, {
      value: titleColor,
      onChange: colorValue => setAttributes({
        titleColor: colorValue
      }),
      allowReset: true
    }), React.createElement("hr", {
      className: "uagb-editor__separator"
    }), React.createElement("h2", null, __('Description')), React.createElement(RangeControl, {
      label: "Font Size",
      value: descFontSize,
      onChange: fontSize => {
        setAttributes({
          descFontSize: fontSize
        });
      },
      min: 10,
      max: 30
    }), React.createElement("p", {
      className: "uagb-setting-label"
    }, __('Color'), React.createElement("span", {
      className: "components-base-control__label"
    }, React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: descColor
      }
    }))), React.createElement(ColorPalette, {
      value: descColor,
      onChange: colorValue => setAttributes({
        descColor: colorValue
      }),
      allowReset: true
    }));
    const layouts = React.createElement(PanelBody, {
      title: __('Layout'),
      initialOpen: false
    }, React.createElement(RangeControl, {
      label: "Block Vertical Padding",
      value: blockVerticalPadding,
      onChange: value => {
        setAttributes({
          blockVerticalPadding: value
        });
      },
      min: 0,
      max: 50
    }), React.createElement(RangeControl, {
      label: "Block Horizontal Padding",
      value: blockHorizontalPadding,
      onChange: value => {
        setAttributes({
          blockHorizontalPadding: value
        });
      },
      min: 0,
      max: 50
    }), React.createElement(SelectControl, {
      label: __('Button Position'),
      value: ctaPosition,
      onChange: value => setAttributes({
        ctaPosition: value
      }),
      options: [{
        value: 'right',
        label: __('Normal')
      }, {
        value: 'below-title',
        label: __('Stack')
      }]
    }), ctaPosition === 'right' && React.createElement(SelectControl, {
      label: __('Stack on'),
      value: stack,
      options: [{
        value: 'none',
        label: __('None')
      }, {
        value: 'tablet',
        label: __('Tablet')
      }, {
        value: 'mobile',
        label: __('Mobile')
      }],
      help: __('Note: Choose on what breakpoint the CTA button will stack.'),
      onChange: value => setAttributes({
        stack: value
      })
    }), (ctaType === 'text' || ctaType === 'button') && React.createElement(Fragment, null, ctaPosition === 'right' && React.createElement(RangeControl, {
      label: __('Content Width (%)'),
      value: contentWidth,
      onChange: value => setAttributes({
        contentWidth: value
      }),
      min: 0,
      max: 100,
      initialPosition: 70,
      allowReset: true
    })), ctaPosition && ctaPosition === 'right' && React.createElement(SelectControl, {
      label: __('Verticle Alignment'),
      value: buttonAlign,
      onChange: value => setAttributes({
        buttonAlign: value
      }),
      options: [{
        value: 'top',
        label: __('Top')
      }, {
        value: 'middle',
        label: __('Middle')
      }]
    })); // Global Controls.

    const inspectControl = React.createElement(InspectorControls, null, ctaType !== 'all' && ctaType !== 'none' && layouts, TypographySettings, ctaSettings, React.createElement(_components_background_images__WEBPACK_IMPORTED_MODULE_5__["BGSettings"], {
      bgImages: bgImages,
      setAttributes: setAttributes
    })); // Get icon/Image components.

    const isCta = React.createElement(_components_CTA__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attributes: attributes,
      setAttributes: setAttributes
    }); // Get description components.

    const desc = React.createElement("div", {
      className: "uagb-cta-text-wrap"
    }, React.createElement(_components_Description__WEBPACK_IMPORTED_MODULE_2__["default"], {
      attributes: attributes,
      setAttributes: setAttributes,
      props: this.props
    })); // Get Title components.

    const titleText = React.createElement("div", {
      className: "uagb-cta__title-wrap"
    }, React.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
      attributes: attributes,
      setAttributes: setAttributes,
      props: this.props
    }));
    const output = React.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-cta__content-wrap', ...Object(_classes__WEBPACK_IMPORTED_MODULE_3__["default"])(attributes))
    }, React.createElement("div", {
      className: "uagb-cta__left-right-wrap"
    }, React.createElement("div", {
      className: "uagb-cta__content"
    }, ctaPosition === 'below-title' && React.createElement(Fragment, null, titleText, desc, isCta), ctaPosition === 'right' && React.createElement(Fragment, null, titleText, desc)), ctaPosition === 'right' && isCta));
    return React.createElement(Fragment, null, React.createElement(BlockControls, {
      key: "controls"
    }, React.createElement(AlignmentToolbar, {
      value: textAlign,
      onChange: value => setAttributes({
        textAlign: value
      })
    })), inspectControl, React.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, 'uagb-cta__outer-wrap'),
      id: `ubc-cta-block-${this.props.clientId}`,
      style: bgStyles
    }, ctaType === 'all' && React.createElement(Fragment, null, React.createElement("div", {
      className: "uagb-cta__block-link-wrap uagb-cta__link-to-all",
      rel: "noopener noreferrer"
    }, output)), ctaType !== 'all' && output), React.createElement(_inline_styles__WEBPACK_IMPORTED_MODULE_6__["default"], {
      attributes: attributes
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UAGBCallToAction);

/***/ }),

/***/ "./src/blocks/call-to-action/editor.scss":
/*!***********************************************!*\
  !*** ./src/blocks/call-to-action/editor.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/call-to-action/inline-styles.js":
/*!****************************************************!*\
  !*** ./src/blocks/call-to-action/inline-styles.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InlineStyles; });
function InlineStyles(props) {
  const _props$attributes = props.attributes,
        blockId = _props$attributes.blockId,
        titleColor = _props$attributes.titleColor,
        descColor = _props$attributes.descColor,
        titleFontSize = _props$attributes.titleFontSize,
        descFontSize = _props$attributes.descFontSize,
        ctaFontSize = _props$attributes.ctaFontSize,
        ctaBtnVertPadding = _props$attributes.ctaBtnVertPadding,
        ctaBtnHrPadding = _props$attributes.ctaBtnHrPadding,
        ctaBorderStyle = _props$attributes.ctaBorderStyle,
        ctaBorderWidth = _props$attributes.ctaBorderWidth,
        ctaBorderRadius = _props$attributes.ctaBorderRadius,
        ctaBtnLinkColor = _props$attributes.ctaBtnLinkColor,
        ctaLinkHoverColor = _props$attributes.ctaLinkHoverColor,
        ctaBgColor = _props$attributes.ctaBgColor,
        ctaBgHoverColor = _props$attributes.ctaBgHoverColor,
        ctaBorderColor = _props$attributes.ctaBorderColor,
        ctaBorderhoverColor = _props$attributes.ctaBorderhoverColor,
        blockVerticalPadding = _props$attributes.blockVerticalPadding,
        blockHorizontalPadding = _props$attributes.blockHorizontalPadding;
  return React.createElement("style", null, `
				#ubc-cta-block-${blockId}{
					padding: ${blockVerticalPadding}px ${blockHorizontalPadding}px;
				}
				#ubc-cta-block-${blockId} .uagb-cta__title{
					color: ${titleColor};
					font-size: ${titleFontSize}px;
				}
				#ubc-cta-block-${blockId} .uagb-cta__desc{
					color: ${descColor};
					font-size: ${descFontSize}px;
				}
				#ubc-cta-block-${blockId} .uagb-cta__block-link{
					font-size: ${ctaFontSize}px;
					padding: ${ctaBtnVertPadding}px ${ctaBtnHrPadding}px;
					border-style: ${ctaBorderStyle};
					border-width: ${ctaBorderWidth}px;
					border-radius: ${ctaBorderRadius}px;
					border-color: ${ctaBorderColor};
					color: ${ctaBtnLinkColor};
					background-color: ${ctaBgColor};
				}
				#ubc-cta-block-${blockId} .uagb-cta__block-link:hover{
					color: ${ctaLinkHoverColor};
					background-color: ${ctaBgHoverColor};
					border-color: ${ctaBorderhoverColor};
				}
			`);
}

/***/ }),

/***/ "./src/blocks/call-to-action/style.scss":
/*!**********************************************!*\
  !*** ./src/blocks/call-to-action/style.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=block.js.map