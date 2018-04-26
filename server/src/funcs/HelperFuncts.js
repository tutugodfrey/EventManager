/*
* export a class for working with objects
*/
const HelperFuncts = class {
  /* eslint-disable class-methods-use-this */
  /*
  * helper class to uniquely assign get and assign integer value (id) to an object
  * check the last element of the array of objects, get the value of the integer field
  * if you are adding an other element to the array increment the value and use it as the
  * the value for the field of the element you are adding
  */
  getField(listOfObj, fieldToGet) {
    const total = listOfObj.length - 1;
    const lastObj = listOfObj[total];
    const fieldValue = lastObj[fieldToGet];
    return fieldValue;
  }

  /*
  * check whether an object is present in a collection/array and return
  * else return object not found
  */
  getObject(arrayOfObjects, objectRef) {
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
  getObjectByField(arrayOfObjects, objectField, fieldValue) {
    arrayOfObjects.foreach((objCollection) => {
      if (objCollection[objectField] === fieldValue) {
        return objCollection;
      }
      return `No object with field ${objectField} found`;
    });
  }

  /*
  * get the value of a field in an object
  * given the object and the field you wish to get the value
  * return undefined if the field is not found
  */
  getFields(objCollector, field) {
    if (objCollector[field]) {
      return objCollector[field];
    }
    return undefined;
  }
};

export const getImgUrl = (path) => {
  if (typeof (path) !== 'string') {
    return 'expected a string as argument';
  }
  const newPath = path.replace(/\\/g, '/');
  if (newPath.indexOf('/') < 0) {
    return `Cant resolve path ${newPath}`;
  }
  const indexOfPublic = newPath.indexOf('/');
  const relPath = newPath.substr(indexOfPublic, newPath.length);
  return relPath;
};
export default HelperFuncts;
