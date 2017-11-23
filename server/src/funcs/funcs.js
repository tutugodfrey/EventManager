/**
this file will export a class of functions
* */
const Functs = class {
  getId(usersList) {
    const totalUsers = usersList.length;
    const lastUserId = usersList[totalUsers - 1].id;
    const newUserId = lastUserId + 1;
    return newUserId;
  }
  // function to verify that the field exist
  verifyId(arrayOfObject, idToVerify) {
  	for (const objCollection of arrayOfObject) {
  		if (objCollection[idToVerify]) {
  			return objCollection[idToVerify];
  		}
  			return false;
  	}
  }
  // funtion to get fields value of an object
  getField(objCollector, field) {
    if (objCollector[field]) {
      return objCollector[field];
    }
    return null;
  }
};

export default Functs;
