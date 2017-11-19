
/**
 * This file will the use for performing form validation
 * it should export a  class that contains methods for validation on different basis
 */
import { Validation } from './validation';
import { HelperFuncs, changeAttribute }  from './funcs';
const newFuncs = new HelperFuncs();
const checkValidation = new Validation();

 export const ValidateForm = class {
   constructor () {
   }
    validateForms(formElement) {
     checkValidation.validate(formElement);
    }
   validateSignin(formElement) {
     checkValidation.validate(formElement);
   }  //end validateSignin
   validateSignup(formElement) {
     checkValidation.validate(formElement);
   }
 } //end class block