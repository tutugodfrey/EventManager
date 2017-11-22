

/**
this file will export a class of functions
**/


const Functs = class {

  getId(usersList) {
    const totalUsers = usersList.length;
    const lastUserId = usersList[totalUsers - 1].id;
    const newUserId = lastUserId + 1;
    return newUserId;
  };

}

export default Functs;