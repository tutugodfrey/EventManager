
/**
 * This file will the use for performing form validation
 * it should export a  class that contains methods for validation on different basis
 */
import { Validation } from './validation';
import { helperfuncs, changeAttribute }  from './funcs';
const newFuncs = new helperfuncs();
const checkValidation = new Validation();

 export const ValidateForm = class {
   constructor () {
   }
   validateSignin(formElement) {
     checkValidation.validate(formElement);
   }  //end validateSignin

   validateSignup(formElement) {
     checkValidation.validate(formElement);
   }
 } //end class block