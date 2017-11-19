import { helperfuncs, changeAttribute }  from './funcs';
const newFuncs = new helperfuncs();

export const  Validation = class {
  constructor () {
  }
  
  validate(formElement) {
     let validated = true;
     let radioChecked = true;
     let eleControls = formElement.elements;
     const regex = /requiredFields/;
	   for(let elem of eleControls){
       let eleValue;
       
     if(elem.getAttribute('class')){
       const eleClass = elem.getAttribute('class');
       if(eleClass.match(regex)){
         const eleType = elem.type;
         // alert(eleType)
         let eleId
         if(eleType === 'text'){
           eleValue = elem.value.trim();
           if(eleValue === '' || eleValue === ' '){
              changeAttribute([elem, 'class', 'failValidation form-control']);
              validated = false;
           } else {
            //validated
           }
         } else if (eleType === 'password'  && elem.value.trim() === '') {
           validated = false;
           changeAttribute([elem, 'class', 'failValidation form-control']);
         } else if (eleType === 'select-one'){
           let eleName = elem.getAttribute('name');
           eleValue = newFuncs.selectValue(eleName);
           if(eleValue === 'select' || eleValue === ''){
              changeAttribute([elem, 'class', 'failValidation form-control']);
           }
         } else if ( eleType === 'radio') {
           radioName = elem.name;
           eleValue = newFuncs.getCheckedValue(elem);
           if(eleValue === undefined) {
             radioChecked = false;
           } else {
             radioChecked = true;
           }
         }



       }
     }
     }
    if(radioChecked === false) {
      const radioEle = document.getElementById('radio-div');
      changeAttribute([radioEle, 'class', 'failValidation form-group']);
    }
    if(validated === false){
      const pElement = document.getElementById('validationNotice');
      pElement.style.visibility = 'visible';
    }
   }
  
}