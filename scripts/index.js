
import { helperfuncs }   from './src/funcs';
import { ValidateForm } from './src/validateForm';
const validation = new ValidateForm();
const newFuncs = new helperfuncs();

dom_notifier();

function dom_notifier () {
const ele_object = document.getElementsByClassName('submitForm');
let ele_id = newFuncs.newEvent(ele_object[0], 'click', submit_ele, ele_object[0]);
}

function submit_ele(ele) {
	const submitEleId = ele.getAttribute("id");
  const formElement = newFuncs.getFormElement(ele);
	if(submitEleId === 'signin'){
		validation.validateSignin(formElement);
	} else if (submitEleId === 'signup') {
		validation.validateSignup(formElement);
	}
}		




