"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
this file will export a class of functions
* */
var Functs = function () {
  function Functs() {
    _classCallCheck(this, Functs);
  }

  _createClass(Functs, [{
    key: "getField",
    value: function getField(listOfObj, fieldToGet) {
      var total = listOfObj.length - 1;
      var lastObj = listOfObj[total];
      var fieldValue = lastObj[fieldToGet];
      return fieldValue;
    }
    // function to get an object from a list of object

  }, {
    key: "getObject",
    value: function getObject(arrayOfObject, objectRef) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = arrayOfObject[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var objCollection = _step.value;

          if (objCollection[objectRef]) {
            return objCollection;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    // funtion to get fields value of an object

  }, {
    key: "getFields",
    value: function getFields(objCollector, field) {
      if (objCollector[field]) {
        return objCollector[field];
      }
      return null;
    }
  }]);

  return Functs;
}();

exports.default = Functs;
//# sourceMappingURL=funcs.js.map