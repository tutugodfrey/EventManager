
import { helperfuncs }   from './src/funcs';
import { ValidateForm } from './src/validateForm';
const validation = new ValidateForm();
const newFuncs = new helperfuncs();

dom_notifier();

function dom_notifier () {
	const submitElementId = ['signup', 'signin']
	if(document.getElementById('submitForm')){
		const eleObject = document.getElementsByClassName('submitForm');
		newFuncs.newEvent(eleObject[0], 'click', getSubmitEle, eleObject[0]);
	}
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



//keep at the bottom of the script
const modificationNotice = document.getElementById('modificationNotice');
let modificationDate = document.lastModified;
modificationDate = modificationDate.split(' ');
modificationNotice.innerHTML = `last modified: ${modificationDate[0]}`;



