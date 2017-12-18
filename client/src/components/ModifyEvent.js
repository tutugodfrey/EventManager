
import React from 'react';
import ReactDom from 'react-dom';
import { FormInput, FormSelect, CheckBox  }  from './formComponents/formInputs';
import Div from './elementComponents/Div';
import Form from './elementComponents/Form';
import Link  from './elementComponents/Link';

class ModifyEventForm extends React.Component {
  constructor () {
    super();
    this.date = new Date();
    this.state = {
      days:['day', 1,2, 3, 4, 5, ,6 ,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 2, 23, 24, 25, 6, 27, 28, 29, 30,],
      months: ['month', 1, 2, 3,4, 5, 6, 7,8, 9, 10, 11, 12],
      years:['year',  this.date.getFullYear(), this.date.getFullYear()+ 1, this.date.getFullYear() + 2, this.date.getFullYear() + 3],
      checkBoxData: {},
      center: {},
      user: {}
    }
  }

  componentWillMount() {
    this.setState({
      center:{
        id:1,
        facilities:['Air Condition', 'Catering', 'Projector']
      },
      checkBoxData: {
        name:'facilities',
        values:['Air Condition', 'Catering', 'Projector'],
        inputClass: 'form-control'
      },
      event:{
        id:1,
        type:'Wedding',
        facilities:['Air Condition', 'Catering', 'Projector']
      },
      user: {
        id:2,
      }
    })
  }
  form(){
   return <Form formId = 'modify-event-Form' method = 'put' action = '/api/events' formControls = {this.content()} />
  }
  content() {
   return ( 
    <div> 
        <h1> Modify Event </h1>
        <FormInput type = 'text' id ='type-of-event' labelValue = 'Type of Event' divClass = 'form-group' inputClass = 'requiredFields form-control' ref = 'name' name = 'type' placeholder = 'Type of Event' value ={ this.state.event.type } /><br />
        <FormSelect inputClass = 'requiredFields form-control' name = 'day' options = {this.state.days} />
        <FormSelect inputClass = 'requiredFields form-control' name = 'month' options = {this.state.months} />
        <FormSelect inputClass = 'requiredFields form-control' name = 'year' options = {this.state.years} />
        <FormInput type = 'hidden' id ='centerId' name = 'centerId' value = {this.state.center.id} /><br />
        <FormInput type = 'hidden' id ='userId' name = 'userId' value = {this.state.user.id} /><br />
        <FormInput type = 'file' id ='photo' labelValue = 'Photo' inputClass = 'form-group' name = 'centers-pix' /><br />
        <FormInput type = 'text' id ='sits' labelValue = 'Sits' divClass = 'form-group' inputClass = 'requiredFields form-control' ref = 'sits' name = 'sits' placeholder = 'Sits' /><br />
        <CheckBox checkBoxData = {this.state.checkBoxData} />
        <FormInput type = 'submit' inputClass = 'btn btn-primary' value = 'Add Center' />
      </div>
    )
  }
  render () {
    return ( 
      <div>
        <Div divClass = 'card' divContent = {this.form()} />
        <Link hrefLink = '#' hrefId = 'viewCenters' hrefContent = 'View Events' hrefClass = 'btn btn-primary' /> <br />
      </div>
    )
  } 
}

export default ModifyEventForm;

