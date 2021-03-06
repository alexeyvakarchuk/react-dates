module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 76);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("airbnb-prop-types");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("is-touch-device");

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function () {
      function render() {
        return _react2["default"].createElement(
          "svg",
          _extends({ viewBox: "0 0 12 12" }, this.props),
          _react2["default"].createElement("path", { fillRule: "evenodd", d: "M11.53.47a.75.75 0 0 0-1.061 0l-4.47 4.47L1.529.47A.75.75 0 1 0 .468 1.531l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.061 1.061l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.061-1.061l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.061z" })
        );
      }

      return render;
    }()
  }]);

  return SVG;
}(_react2["default"].Component);

exports["default"] = SVG;

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("../utils/toISODateString");

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("../utils/isInclusivelyAfterDay");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("./OutsideClickHandler");

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("consolidated-events");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("object.assign");

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = require("../utils/getResponsiveContainerStyles");

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = require("../utils/toLocalizedDateString");

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = require("../utils/toMomentObject");

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

module.exports = require("react-portal");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("../../constants");

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

module.exports = require("../shapes/SingleDatePickerShape");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("../defaultPhrases");

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

module.exports = require("./DayPickerSingleDateController");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("react-with-styles");

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

module.exports = require("./SingleDatePickerInput");

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PureSingleDatePicker = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _object = __webpack_require__(2);

var _object2 = _interopRequireDefault(_object);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(8);

var _moment2 = _interopRequireDefault(_moment);

var _reactWithStyles = __webpack_require__(6);

var _reactPortal = __webpack_require__(38);

var _reactPortal2 = _interopRequireDefault(_reactPortal);

var _airbnbPropTypes = __webpack_require__(1);

var _consolidatedEvents = __webpack_require__(19);

var _isTouchDevice = __webpack_require__(10);

var _isTouchDevice2 = _interopRequireDefault(_isTouchDevice);

var _SingleDatePickerShape = __webpack_require__(43);

var _SingleDatePickerShape2 = _interopRequireDefault(_SingleDatePickerShape);

var _defaultPhrases = __webpack_require__(5);

var _OutsideClickHandler = __webpack_require__(18);

var _OutsideClickHandler2 = _interopRequireDefault(_OutsideClickHandler);

var _toMomentObject = __webpack_require__(33);

var _toMomentObject2 = _interopRequireDefault(_toMomentObject);

var _toLocalizedDateString = __webpack_require__(32);

var _toLocalizedDateString2 = _interopRequireDefault(_toLocalizedDateString);

var _getResponsiveContainerStyles = __webpack_require__(29);

var _getResponsiveContainerStyles2 = _interopRequireDefault(_getResponsiveContainerStyles);

var _toISODateString = __webpack_require__(14);

var _toISODateString2 = _interopRequireDefault(_toISODateString);

var _SingleDatePickerInput = __webpack_require__(61);

var _SingleDatePickerInput2 = _interopRequireDefault(_SingleDatePickerInput);

var _DayPickerSingleDateController = __webpack_require__(59);

var _DayPickerSingleDateController2 = _interopRequireDefault(_DayPickerSingleDateController);

var _close = __webpack_require__(12);

var _close2 = _interopRequireDefault(_close);

var _isInclusivelyAfterDay = __webpack_require__(17);

var _isInclusivelyAfterDay2 = _interopRequireDefault(_isInclusivelyAfterDay);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)((0, _object2['default'])({}, _reactWithStyles.withStylesPropTypes, _SingleDatePickerShape2['default']));

var defaultProps = {
  // required props for a functional interactive SingleDatePicker
  date: null,
  focused: false,

  // input related props
  id: 'date',
  placeholder: 'Date',
  disabled: false,
  required: false,
  readOnly: false,
  screenReaderInputMessage: '',
  showClearDate: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  customInputIcon: null,
  customCloseIcon: null,

  // calendar presentation and interaction related props
  orientation: _constants.HORIZONTAL_ORIENTATION,
  anchorDirection: _constants.ANCHOR_LEFT,
  openDirection: _constants.OPEN_DOWN,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  initialVisibleMonth: null,
  firstDayOfWeek: null,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDate: false,
  renderCalendarInfo: null,
  hideKeyboardShortcutsPanel: false,
  daySize: _constants.DAY_SIZE,
  isRTL: false,

  // navigation related props
  navPrev: null,
  navNext: null,

  onPrevMonthClick: function () {
    function onPrevMonthClick() {}

    return onPrevMonthClick;
  }(),
  onNextMonthClick: function () {
    function onNextMonthClick() {}

    return onNextMonthClick;
  }(),
  onClose: function () {
    function onClose() {}

    return onClose;
  }(),

  // month presentation and interaction related props
  renderMonth: null,

  // day presentation and interaction related props
  renderDay: null,
  enableOutsideDays: false,
  isDayBlocked: function () {
    function isDayBlocked() {
      return false;
    }

    return isDayBlocked;
  }(),
  isOutsideRange: function () {
    function isOutsideRange(day) {
      return !(0, _isInclusivelyAfterDay2['default'])(day, (0, _moment2['default'])());
    }

    return isOutsideRange;
  }(),
  isDayHighlighted: function () {
    function isDayHighlighted() {}

    return isDayHighlighted;
  }(),

  // internationalization props
  displayFormat: function () {
    function displayFormat() {
      return _moment2['default'].localeData().longDateFormat('L');
    }

    return displayFormat;
  }(),
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  phrases: _defaultPhrases.SingleDatePickerPhrases
};

var SingleDatePicker = function (_React$Component) {
  _inherits(SingleDatePicker, _React$Component);

  function SingleDatePicker(props) {
    _classCallCheck(this, SingleDatePicker);

    var _this = _possibleConstructorReturn(this, (SingleDatePicker.__proto__ || Object.getPrototypeOf(SingleDatePicker)).call(this, props));

    _this.isTouchDevice = false;

    _this.state = {
      dayPickerContainerStyles: {},
      isDayPickerFocused: false,
      isInputFocused: false
    };

    _this.onDayPickerFocus = _this.onDayPickerFocus.bind(_this);
    _this.onDayPickerBlur = _this.onDayPickerBlur.bind(_this);

    _this.onChange = _this.onChange.bind(_this);
    _this.onFocus = _this.onFocus.bind(_this);
    _this.onClearFocus = _this.onClearFocus.bind(_this);
    _this.clearDate = _this.clearDate.bind(_this);

    _this.responsivizePickerPosition = _this.responsivizePickerPosition.bind(_this);

    _this.setDayPickerContainerRef = _this.setDayPickerContainerRef.bind(_this);
    return _this;
  }

  /* istanbul ignore next */

  _createClass(SingleDatePicker, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        this.resizeHandle = (0, _consolidatedEvents.addEventListener)(window, 'resize', this.responsivizePickerPosition, { passive: true });
        this.responsivizePickerPosition();

        if (this.props.focused) {
          this.setState({
            isInputFocused: true
          });
        }

        this.isTouchDevice = (0, _isTouchDevice2['default'])();
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentDidUpdate',
    value: function () {
      function componentDidUpdate(prevProps) {
        if (!prevProps.focused && this.props.focused) {
          this.responsivizePickerPosition();
        }
      }

      return componentDidUpdate;
    }()

    /* istanbul ignore next */

  }, {
    key: 'componentWillUnmount',
    value: function () {
      function componentWillUnmount() {
        (0, _consolidatedEvents.removeEventListener)(this.resizeHandle);
      }

      return componentWillUnmount;
    }()
  }, {
    key: 'onChange',
    value: function () {
      function onChange(dateString) {
        var _props = this.props,
            isOutsideRange = _props.isOutsideRange,
            keepOpenOnDateSelect = _props.keepOpenOnDateSelect,
            onDateChange = _props.onDateChange,
            onFocusChange = _props.onFocusChange,
            onClose = _props.onClose;

        var newDate = (0, _toMomentObject2['default'])(dateString, this.getDisplayFormat());

        var isValid = newDate && !isOutsideRange(newDate);
        if (isValid) {
          onDateChange(newDate);
          if (!keepOpenOnDateSelect) {
            onFocusChange({ focused: false });
            onClose({ date: newDate });
          }
        } else {
          onDateChange(null);
        }
      }

      return onChange;
    }()
  }, {
    key: 'onFocus',
    value: function () {
      function onFocus() {
        var _props2 = this.props,
            disabled = _props2.disabled,
            onFocusChange = _props2.onFocusChange,
            withPortal = _props2.withPortal,
            withFullScreenPortal = _props2.withFullScreenPortal;

        var moveFocusToDayPicker = withPortal || withFullScreenPortal || this.isTouchDevice;
        if (moveFocusToDayPicker) {
          this.onDayPickerFocus();
        } else {
          this.onDayPickerBlur();
        }

        if (!disabled) {
          onFocusChange({ focused: true });
        }
      }

      return onFocus;
    }()
  }, {
    key: 'onClearFocus',
    value: function () {
      function onClearFocus() {
        var _props3 = this.props,
            startDate = _props3.startDate,
            endDate = _props3.endDate,
            focused = _props3.focused,
            onFocusChange = _props3.onFocusChange,
            onClose = _props3.onClose;

        if (!focused) return;

        this.setState({
          isInputFocused: false,
          isDayPickerFocused: false
        });

        onFocusChange({ focused: false });
        onClose({ startDate: startDate, endDate: endDate });
      }

      return onClearFocus;
    }()
  }, {
    key: 'onDayPickerFocus',
    value: function () {
      function onDayPickerFocus() {
        this.setState({
          isInputFocused: false,
          isDayPickerFocused: true
        });
      }

      return onDayPickerFocus;
    }()
  }, {
    key: 'onDayPickerBlur',
    value: function () {
      function onDayPickerBlur() {
        this.setState({
          isInputFocused: true,
          isDayPickerFocused: false
        });
      }

      return onDayPickerBlur;
    }()
  }, {
    key: 'getDateString',
    value: function () {
      function getDateString(date) {
        var displayFormat = this.getDisplayFormat();
        if (date && displayFormat) {
          return date && date.format(displayFormat);
        }
        return (0, _toLocalizedDateString2['default'])(date);
      }

      return getDateString;
    }()
  }, {
    key: 'getDisplayFormat',
    value: function () {
      function getDisplayFormat() {
        var displayFormat = this.props.displayFormat;

        return typeof displayFormat === 'string' ? displayFormat : displayFormat();
      }

      return getDisplayFormat;
    }()
  }, {
    key: 'setDayPickerContainerRef',
    value: function () {
      function setDayPickerContainerRef(ref) {
        this.dayPickerContainer = ref;
      }

      return setDayPickerContainerRef;
    }()
  }, {
    key: 'clearDate',
    value: function () {
      function clearDate() {
        var _props4 = this.props,
            onDateChange = _props4.onDateChange,
            reopenPickerOnClearDate = _props4.reopenPickerOnClearDate,
            onFocusChange = _props4.onFocusChange;

        onDateChange(null);
        if (reopenPickerOnClearDate) {
          onFocusChange({ focused: true });
        }
      }

      return clearDate;
    }()

    /* istanbul ignore next */

  }, {
    key: 'responsivizePickerPosition',
    value: function () {
      function responsivizePickerPosition() {
        // It's possible the portal props have been changed in response to window resizes
        // So let's ensure we reset this back to the base state each time
        this.setState({ dayPickerContainerStyles: {} });

        var _props5 = this.props,
            anchorDirection = _props5.anchorDirection,
            horizontalMargin = _props5.horizontalMargin,
            withPortal = _props5.withPortal,
            withFullScreenPortal = _props5.withFullScreenPortal,
            focused = _props5.focused;
        var dayPickerContainerStyles = this.state.dayPickerContainerStyles;

        if (!focused) {
          return;
        }

        var isAnchoredLeft = anchorDirection === _constants.ANCHOR_LEFT;

        if (!withPortal && !withFullScreenPortal) {
          var containerRect = this.dayPickerContainer.getBoundingClientRect();
          var currentOffset = dayPickerContainerStyles[anchorDirection] || 0;
          var containerEdge = isAnchoredLeft ? containerRect[_constants.ANCHOR_RIGHT] : containerRect[_constants.ANCHOR_LEFT];

          this.setState({
            dayPickerContainerStyles: (0, _getResponsiveContainerStyles2['default'])(anchorDirection, currentOffset, containerEdge, horizontalMargin)
          });
        }
      }

      return responsivizePickerPosition;
    }()
  }, {
    key: 'maybeRenderDayPickerWithPortal',
    value: function () {
      function maybeRenderDayPickerWithPortal() {
        var _props6 = this.props,
            focused = _props6.focused,
            withPortal = _props6.withPortal,
            withFullScreenPortal = _props6.withFullScreenPortal;

        if (!focused) {
          return null;
        }

        if (withPortal || withFullScreenPortal) {
          return _react2['default'].createElement(_reactPortal2['default'], { isOpened: true }, this.renderDayPicker());
        }

        return this.renderDayPicker();
      }

      return maybeRenderDayPickerWithPortal;
    }()
  }, {
    key: 'renderDayPicker',
    value: function () {
      function renderDayPicker() {
        var _props7 = this.props,
            anchorDirection = _props7.anchorDirection,
            openDirection = _props7.openDirection,
            onDateChange = _props7.onDateChange,
            date = _props7.date,
            onFocusChange = _props7.onFocusChange,
            focused = _props7.focused,
            enableOutsideDays = _props7.enableOutsideDays,
            numberOfMonths = _props7.numberOfMonths,
            orientation = _props7.orientation,
            monthFormat = _props7.monthFormat,
            navPrev = _props7.navPrev,
            navNext = _props7.navNext,
            onPrevMonthClick = _props7.onPrevMonthClick,
            onNextMonthClick = _props7.onNextMonthClick,
            withPortal = _props7.withPortal,
            withFullScreenPortal = _props7.withFullScreenPortal,
            keepOpenOnDateSelect = _props7.keepOpenOnDateSelect,
            initialVisibleMonth = _props7.initialVisibleMonth,
            renderMonth = _props7.renderMonth,
            renderDay = _props7.renderDay,
            renderCalendarInfo = _props7.renderCalendarInfo,
            hideKeyboardShortcutsPanel = _props7.hideKeyboardShortcutsPanel,
            firstDayOfWeek = _props7.firstDayOfWeek,
            customCloseIcon = _props7.customCloseIcon,
            phrases = _props7.phrases,
            daySize = _props7.daySize,
            isRTL = _props7.isRTL,
            isOutsideRange = _props7.isOutsideRange,
            isDayBlocked = _props7.isDayBlocked,
            isDayHighlighted = _props7.isDayHighlighted,
            weekDayFormat = _props7.weekDayFormat,
            styles = _props7.styles;
        var _state = this.state,
            dayPickerContainerStyles = _state.dayPickerContainerStyles,
            isDayPickerFocused = _state.isDayPickerFocused;

        var onOutsideClick = !withFullScreenPortal && withPortal ? this.onClearFocus : undefined;
        var closeIcon = customCloseIcon || _react2['default'].createElement(_close2['default'], null);

        return _react2['default'].createElement('div', _extends({ // eslint-disable-line jsx-a11y/no-static-element-interactions
          ref: this.setDayPickerContainerRef
        }, (0, _reactWithStyles.css)(styles.SingleDatePicker_picker, anchorDirection === _constants.ANCHOR_LEFT && styles.SingleDatePicker_picker__directionLeft, anchorDirection === _constants.ANCHOR_RIGHT && styles.SingleDatePicker_picker__directionRight, openDirection === _constants.OPEN_DOWN && styles.SingleDatePicker_picker__openDown, openDirection === _constants.OPEN_UP && styles.SingleDatePicker_picker__openUp, orientation === _constants.HORIZONTAL_ORIENTATION && styles.SingleDatePicker_picker__horizontal, orientation === _constants.VERTICAL_ORIENTATION && styles.SingleDatePicker_picker__vertical, (withPortal || withFullScreenPortal) && styles.SingleDatePicker_picker__portal, withFullScreenPortal && styles.SingleDatePicker_picker__fullScreenPortal, isRTL && styles.SingleDatePicker_picker__rtl), {
          style: dayPickerContainerStyles,
          onClick: onOutsideClick
        }), _react2['default'].createElement(_DayPickerSingleDateController2['default'], {
          date: date,
          onDateChange: onDateChange,
          onFocusChange: onFocusChange,
          orientation: orientation,
          enableOutsideDays: enableOutsideDays,
          numberOfMonths: numberOfMonths,
          monthFormat: monthFormat,
          withPortal: withPortal || withFullScreenPortal,
          focused: focused,
          keepOpenOnDateSelect: keepOpenOnDateSelect,
          hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
          initialVisibleMonth: initialVisibleMonth,
          navPrev: navPrev,
          navNext: navNext,
          onPrevMonthClick: onPrevMonthClick,
          onNextMonthClick: onNextMonthClick,
          renderMonth: renderMonth,
          renderDay: renderDay,
          renderCalendarInfo: renderCalendarInfo,
          isFocused: isDayPickerFocused,
          phrases: phrases,
          daySize: daySize,
          isRTL: isRTL,
          isOutsideRange: isOutsideRange,
          isDayBlocked: isDayBlocked,
          isDayHighlighted: isDayHighlighted,
          firstDayOfWeek: firstDayOfWeek,
          weekDayFormat: weekDayFormat
        }), withFullScreenPortal && _react2['default'].createElement('button', {
          'aria-label': phrases.closeDatePicker,
          className: 'SingleDatePicker__close',
          type: 'button',
          onClick: this.onClearFocus
        }, _react2['default'].createElement('div', { className: 'SingleDatePicker__close-icon' }, closeIcon)));
      }

      return renderDayPicker;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props8 = this.props,
            id = _props8.id,
            placeholder = _props8.placeholder,
            disabled = _props8.disabled,
            focused = _props8.focused,
            required = _props8.required,
            readOnly = _props8.readOnly,
            openDirection = _props8.openDirection,
            showClearDate = _props8.showClearDate,
            showDefaultInputIcon = _props8.showDefaultInputIcon,
            inputIconPosition = _props8.inputIconPosition,
            customCloseIcon = _props8.customCloseIcon,
            customInputIcon = _props8.customInputIcon,
            date = _props8.date,
            phrases = _props8.phrases,
            withPortal = _props8.withPortal,
            withFullScreenPortal = _props8.withFullScreenPortal,
            screenReaderInputMessage = _props8.screenReaderInputMessage,
            isRTL = _props8.isRTL,
            styles = _props8.styles;
        var isInputFocused = this.state.isInputFocused;

        var displayValue = this.getDateString(date);
        var inputValue = (0, _toISODateString2['default'])(date);

        var onOutsideClick = !withPortal && !withFullScreenPortal ? this.onClearFocus : undefined;

        return _react2['default'].createElement('div', (0, _reactWithStyles.css)(styles.SingleDatePicker), _react2['default'].createElement(_OutsideClickHandler2['default'], { onOutsideClick: onOutsideClick }, _react2['default'].createElement(_SingleDatePickerInput2['default'], {
          id: id,
          placeholder: placeholder,
          focused: focused,
          isFocused: isInputFocused,
          disabled: disabled,
          required: required,
          readOnly: readOnly,
          openDirection: openDirection,
          showCaret: !withPortal && !withFullScreenPortal,
          onClearDate: this.clearDate,
          showClearDate: showClearDate,
          showDefaultInputIcon: showDefaultInputIcon,
          inputIconPosition: inputIconPosition,
          customCloseIcon: customCloseIcon,
          customInputIcon: customInputIcon,
          displayValue: displayValue,
          inputValue: inputValue,
          onChange: this.onChange,
          onFocus: this.onFocus,
          onKeyDownShiftTab: this.onClearFocus,
          onKeyDownTab: this.onClearFocus,
          onKeyDownArrowDown: this.onDayPickerFocus,
          screenReaderMessage: screenReaderInputMessage,
          phrases: phrases,
          isRTL: isRTL
        }), this.maybeRenderDayPickerWithPortal()));
      }

      return render;
    }()
  }]);

  return SingleDatePicker;
}(_react2['default'].Component);

SingleDatePicker.propTypes = propTypes;
SingleDatePicker.defaultProps = defaultProps;

exports.PureSingleDatePicker = SingleDatePicker;
exports['default'] = (0, _reactWithStyles.withStyles)(function (_ref) {
  var _ref$reactDates = _ref.reactDates,
      color = _ref$reactDates.color,
      spacing = _ref$reactDates.spacing,
      zIndex = _ref$reactDates.zIndex;
  return {
    SingleDatePicker: {
      position: 'relative',
      display: 'inline-block'
    },

    SingleDatePicker_picker: {
      zIndex: zIndex + 1,
      backgroundColor: color.background,
      position: 'absolute'
    },

    SingleDatePicker_picker__rtl: {
      direction: 'rtl'
    },

    SingleDatePicker_picker__directionLeft: {
      left: 0
    },

    SingleDatePicker_picker__directionRight: {
      right: 0
    },

    SingleDatePicker_picker__openDown: {
      top: spacing.inputMarginBottom
    },

    SingleDatePicker_picker__openUp: {
      bottom: spacing.inputMarginBottom
    },

    SingleDatePicker_picker__portal: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%'
    },

    SingleDatePicker_picker__fullScreenPortal: {
      backgroundColor: color.background
    },

    SingleDatePicker_closeButton: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',

      position: 'absolute',
      top: 0,
      right: 0,
      padding: 15,
      zIndex: zIndex + 2,

      ':hover': {
        color: 'darken(' + String(color.core.grayLighter) + ', 10%)',
        textDecoration: 'none'
      },

      ':focus': {
        color: 'darken(' + String(color.core.grayLighter) + ', 10%)',
        textDecoration: 'none'
      }
    },

    SingleDatePicker_closeButton_svg: {
      height: 15,
      width: 15,
      fill: color.core.grayLighter
    }
  };
})(SingleDatePicker);

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ })

/******/ });