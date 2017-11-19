

export const HelperFuncs =  class {
  constructor () {
  }

  newEvent(elementObject,  eventType, callBack, callBackArgument){
    if(elementObject.addEventListener){
      elementObject.addEventListener(eventType, function(event) {
      event.preventDefault();	
      callBack(callBackArgument);
      },
      false );
    }	else if (element_object.attachEvent) {
      elementObject.attachEvent("on"+ eventType, function(event){
      event.preventDefault();	
      callBack(callBackArgument);
      });
    }
  }		//close the function block

getFormElement(ele){
    let formElement;
    while(ele.toString() !== "[object HTMLFormElement]") {	
      //trying to get the form containing ele
      ele = ele.parentNode;
      if(ele.toString()  === "[object HTMLFormElement]"){
        formElement = ele;
        break;
      }
    }
    return formElement;
  } // getFormElement
selectValue(eleName) {
  let eleValue;
  if(document.getElementsByName(eleName)){
  const selectEle = document.getElementsByName(eleName);
  for(let i = 0; i < selectEle.length; i++){
   eleValue = (selectEle[i].value);
  }
  }
  return eleValue;
}

getCheckedValue(checkEle){		//can be used for both checkbox and radio button
  if(checkEle.checked){
    const eleValue = checkEle.value;
    return eleValue;
  }
}

//confirm password
confirmPasswordValues(passWord1, passWord2){
  if(passWord1 !== passWord2){
    return false;
  }
  return true;
}

}  // end class block

export const changeAttribute  = function(dataArray) {
  // data_array = [eleObject, att_to_change, newAttr, removeAttr]
  const eleObject = dataArray[0];
  const attrToChange = dataArray[1];
  const newAttr = dataArray[2];
  const removeAttr = dataArray[3];		// a string yes/no/change_attr_to if newAttr already exist
  const eleAttr = eleObject.getAttribute(attrToChange);
  if (eleAttr === null || eleAttr !== newAttr) 	{
  //set the attribute and the image become large
  eleObject.setAttribute(attrToChange, newAttr);
  } else
  if (eleAttr === newAttr && removeAttr === "yes") {
  eleObject.removeAttribute(attrToChange);
  } 	
  else if (eleAttr === newAttr && removeAttr === "no") {
  //no action taken
  }
  else if(eleAttr === newAttr && (removeAttr !== "yes" || removeAttr !== "no" || removeAttr !== "undefined")){
  eleObject.setAttribute(attrToChange, removeAttr);
  } 
}		//end changeClass

