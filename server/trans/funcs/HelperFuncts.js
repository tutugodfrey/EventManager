'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
this file will export a class of functions
* */
var HelperFuncts = function () {
  function HelperFuncts() {
    _classCallCheck(this, HelperFuncts);
  }

  _createClass(HelperFuncts, [{
    key: 'getField',
    value: function getField(listOfObj, fieldToGet) {
      var total = listOfObj.length - 1;
      var lastObj = listOfObj[total];
      var fieldValue = lastObj[fieldToGet];
      return fieldValue;
    }
    // function to get an object from a list of object

  }, {
    key: 'getObject',
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
  }, {
    key: 'getObjectByField',
    value: function getObjectByField(arrayOfObjects, objectField, fieldValue) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = arrayOfObjects[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var objCollection = _step2.value;

          if (objCollection[objectField] === fieldValue) {
            return objCollection;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return 'No object with field ' + objectField + ' found';
    }

    // funtion to get fields value of an object

  }, {
    key: 'getFields',
    value: function getFields(objCollector, field) {
      if (objCollector[field]) {
        return objCollector[field];
      }
      return null;
    }
  }]);

  return HelperFuncts;
}();

var getImgUrl = exports.getImgUrl = function getImgUrl(path) {
  if (typeof path !== 'string') {
    return 'expected a string as argument';
  } else {
    var newPath = path.replace(/\\/g, '/');
    if (newPath.indexOf('/') < 0) {
      return 'Cant resolve path ' + newPath;
    } else {
      var indexOfPublic = newPath.indexOf('/');
      var relPath = newPath.substr(indexOfPublic, newPath.length);
      return relPath;
    }
  }
};

exports.default = HelperFuncts;
//# sourceMappingURL=HelperFuncts.js.map