
import { HelperFuncs }   from './src/funcs';
import { ValidateForm } from './src/validateForm';
const validation = new ValidateForm();
const newFuncs = new HelperFuncs();

dom_notifier();

function dom_notifier () {
	// const submitElementId = ['signup', 'signin']; not in use for now
	if(document.getElementsByClassName('submitForm')){
		const eleObject = document.getElementsByClassName('submitForm');
		newFuncs.newEvent(eleObject[0], 'click', getSubmitEle, eleObject[0]);
	}
}

function getSubmitEle(ele) {
	// can perform logics base on the type of element here
  const formElement = newFuncs.getFormElement(ele);
	validation.validateForms(formElement);
}		



// keep at the bottom of the script
const modificationNotice = document.getElementById('modificationNotice');
let modificationDate = document.lastModified;
modificationDate = modificationDate.split(' ');
modificationNotice.innerHTML = `last modified: ${modificationDate[0]}`;



