'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
* export a class for working with objects
*/
var HelperFuncts = function () {
  function HelperFuncts() {
    _classCallCheck(this, HelperFuncts);
  }

  _createClass(HelperFuncts, [{
    key: 'getField',

    /* eslint-disable class-methods-use-this */
    /*
    * helper class to uniquely assign get and assign integer value (id) to an object
    * check the last element of the array of objects, get the value of the integer field
    * if you are adding an other element to the array increment the value and use it as the
    * the value for the field of the element you are adding
    */
    value: function getField(listOfObj, fieldToGet) {
      var total = listOfObj.length - 1;
      var lastObj = listOfObj[total];
      var fieldValue = lastObj[fieldToGet];
      return fieldValue;
    }

    /*
    * check whether an object is present in a collection/array and return
    * else return object not found
    */

  }, {
    key: 'getObject',
    value: function getObject(arrayOfObjects, objectRef) {
      if (arrayOfObjects[objectRef]) {
        return arrayOfObjects[objectRef];
      }
      return 'object not found';
    }

    /*
    * given an array of objects
    * to get an object by checking the value of a field
    * supply the array of objects, the field to check for and the value of the field
    * return the object if the fieldValue match
    * otherwise return error message
    */

  }, {
    key: 'getObjectByField',
    value: function getObjectByField(arrayOfObjects, objectField, fieldValue) {
      arrayOfObjects.foreach(function (objCollection) {
        if (objCollection[objectField] === fieldValue) {
          return objCollection;
        }
        return 'No object with field ' + objectField + ' found';
      });
    }

    /*
    * get the value of a field in an object
    * given the object and the field you wish to get the value
    * return undefined if the field is not found
    */

  }, {
    key: 'getFields',
    value: function getFields(objCollector, field) {
      if (objCollector[field]) {
        return objCollector[field];
      }
      return undefined;
    }
  }]);

  return HelperFuncts;
}();

var getImgUrl = exports.getImgUrl = function getImgUrl(path) {
  if (typeof path !== 'string') {
    return 'expected a string as argument';
  }
  var newPath = path.replace(/\\/g, '/');
  if (newPath.indexOf('/') < 0) {
    return 'Cant resolve path ' + newPath;
  }
  var indexOfPublic = newPath.indexOf('/');
  var relPath = newPath.substr(indexOfPublic, newPath.length);
  return relPath;
};
exports.default = HelperFuncts;
//# sourceMappingURL=HelperFuncts.js.map