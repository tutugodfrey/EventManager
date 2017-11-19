import { HelperFuncs, changeAttribute }  from './funcs';
const newFuncs = new HelperFuncs();

export const  Validation = class {
  constructor () {
  }

  validate(formElement) {
     let allFieldsValidated = true;
     let radioChecked = false;
     let passwordArray = [];
     let emailIsValid = false;
     let eleControls = formElement.elements;
     const emailRegExp = /\w+@\w+\.(net|com|org)/;
     const regex = /requiredFields/;
	   for(let elem of eleControls){
       let eleValue;
       
     if(elem.getAttribute('class')){
       const eleClass = elem.getAttribute('class');
       if(eleClass.match(regex)){
        const eleType = elem.type;
        let eleId
        if(eleType === 'text'){
          eleValue = elem.value.trim();
          if(eleValue === '' || eleValue === ' '){
              changeAttribute([elem, 'class', 'failValidation form-control']);
              allFieldsValidated = false;
          } else if(elem.getAttribute('name') === 'email'){
            emailIsValid = emailRegExp.test(elem.value);
            if(!emailIsValid){
              changeAttribute([elem, 'class', 'failValidation form-control']);
              allFieldsValidated = false;
            };
          }   
        } else if (eleType === 'password') {
           if(elem.value.trim() === ''){
             changeAttribute([elem, 'class', 'failValidation form-control']);
             allFieldsValidated = false;
          }  else {
             passwordArray.push(elem.value)
          }
            
        } else if (eleType === 'select-one'){
           let eleName = elem.getAttribute('name');
           eleValue = newFuncs.selectValue(eleName);
           if(eleValue === 'select' || eleValue === ''){
             changeAttribute([elem, 'class', 'failValidation form-control']);
             allFieldsValidated = false;
          }
        } else if ( eleType === 'radio' || eleType === 'checkbox') {
           let radioName = elem.name;
           eleValue = newFuncs.getCheckedValue(elem);
           if(eleValue !== undefined) {
             radioChecked = true;
          } /*else {
             radioChecked = true;
           }*/
          }
        }
      }
    }
    if(radioChecked === false) {
      const radioEle = document.getElementById('radio-div');
      // bug fix needed here
      //changeAttribute([radioEle, 'class', 'failValidation form-group']);
      //allFieldsValidated = false;
    }
    
    if(passwordArray.length > 1){
      let confirmPassword;
      if(passwordArray.length === 2){
        confirmPassword = newFuncs.confirmPasswordValues(passwordArray[0], passwordArray[1])
      } else if (passwordArray.length === 3) {
        confirmPassword = newFuncs.confirmPasswordValues(passwordArray[1], passwordArray[2])
      }
      if(!confirmPassword){
        allFieldsValidated = false;
      } 
    }
    if(allFieldsValidated === false){
      const pElement = document.getElementById('validationNotice');
      pElement.style.visibility = 'visible';
      console.log('some fields require validation')
    }  else {
      // proceed with form submittion
      console.log('all field is validated');
    }
  } 
}