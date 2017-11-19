

export const helperfuncs =  class {
  constructor () {
  }

newEvent(element_object,  event_type, callback, func_argument){
if(element_object.addEventListener){
element_object.addEventListener(event_type, function(event) {
event.preventDefault();	
callback(func_argument);
},
false );
}	else if (element_object.attachEvent) {
element_object.attachEvent("on"+ event_type,
function(event){
event.preventDefault();	
callback(func_argument);
} );
}
}		//close the function block

getFormElement(ele){
    let formElement;
    while(ele.toString() !== "[object HTMLFormElement]") {	//trying to get the form for ele
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


}  // end class block

export const changeAttribute  = function(data_array) {
// data_array = [ele_object, att_to_change, new_att, remove_attr]
const ele_object = data_array[0];
const attr_to_change = data_array[1];
const new_attr = data_array[2];
const remove_attr = data_array[3];		// a string yes/no/change_attr_to if new_attr already exist

const ele_attr = ele_object.getAttribute(attr_to_change);
if (ele_attr === null || ele_attr !== new_attr) 	{
//set the attribute and the image become large
ele_object.setAttribute(attr_to_change, new_attr);
} else
 if (ele_attr === new_attr && remove_attr === "yes") {
//remove the attribute. the image become small
ele_object.removeAttribute(attr_to_change);
} 	
else if (ele_attr === new_attr && remove_attr === "no") {
//no action taken
}
else if(ele_attr === new_attr && (remove_attr !== "yes" || remove_attr !== "no" || remove_attr !== "undefined")){
const change_to = remove_attr;
ele_object.setAttribute(attr_to_change, remove_attr);
} 

}		//end changeClass

