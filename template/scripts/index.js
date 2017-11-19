
import { helperfuncs }   from './src/funcs';
import { ValidateForm } from './src/validateForm';
const validation = new ValidateForm();
const newFuncs = new helperfuncs();

dom_notifier();

function dom_notifier () {
	const submitElementId = ['signup', 'signin']
const eleObject = document.getElementsByClassName('submitForm');

let ele_id = newFuncs.newEvent(eleObject[0], 'click', getSubmitEle, eleObject[0]);
}

function getSubmitEle(ele) {
//	const submitEleId = ele.getAttribute("id");
  const formElement = newFuncs.getFormElement(ele);
//	if(submitEleId === 'signin'){
//		validation.validateSignin(formElement);
//	} else if (submitEleId === 'signup') {
		validation.validateSignup(formElement);
//	}
}		




