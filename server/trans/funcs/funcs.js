"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
this file will export a class of functions
**/
var Functs = function () {
  function Functs() {
    _classCallCheck(this, Functs);
  }

  _createClass(Functs, [{
    key: "getId",
    value: function getId(usersList) {
      var totalUsers = usersList.length;
      var lastUserId = usersList[totalUsers - 1].id;
      var newUserId = lastUserId + 1;
      return newUserId;
    }
  }, {
    key: "verifyId",

    // function to verify that the field exist
    value: function verifyId(arrayOfObject, idToVerify) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = arrayOfObject[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var objCollection = _step.value;

          if (objCollection[idToVerify]) {
            return objCollection[idToVerify];
          } else {
            return false;
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
    key: "getField",
    value: function getField(objCollector, field) {
      if (objCollector[field]) {
        return objCollector[field];
      } else {
        return null;
      }
    }
  }]);

  return Functs;
}();

exports.default = Functs;
//# sourceMappingURL=funcs.js.map