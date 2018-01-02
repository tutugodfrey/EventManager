/**
this file will export a class of functions
* */
const HelperFuncts = class {
  getField(listOfObj, fieldToGet ) {
    const total = listOfObj.length - 1;
    const lastObj = listOfObj[total];
    const fieldValue = lastObj[fieldToGet];
    return fieldValue;
  }
  // function to get an object from a list of object
  getObject(arrayOfObject, objectRef) {
  	for (let objCollection of arrayOfObject) {
  		if (objCollection[objectRef]) {
        return objCollection;
    	}
  	}
  }
  
  getObjectByField(arrayOfObjects, objectField, fieldValue ) {
  	for (let objCollection of arrayOfObjects) {
  		if (objCollection[objectField] === fieldValue) {
        return objCollection;
    	}
    }
    return `No object with field ${objectField} found`;
  }

  // funtion to get fields value of an object
  getFields(objCollector, field) {
    if (objCollector[field]) {
      return objCollector[field];
    }
    return null;
  }
};

export const getImgUrl = function(path) {
    if(typeof(path) !== 'string') {
        return 'expected a string as argument'
    } else {
      const newPath = path.replace(/\\/g, '/')
      if (newPath.indexOf('/') < 0) {
        return `Cant resolve path ${ newPath }`
      } else {
        const indexOfPublic = newPath.indexOf('/');
      const relPath = newPath.substr(indexOfPublic, newPath.length);
      return relPath; 
      }
    }
}

export default HelperFuncts;
