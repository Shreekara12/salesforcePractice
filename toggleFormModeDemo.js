import { LightningElement, track } from 'lwc';

export default class ToggleFormModeDemo extends LightningElement {
    isEditMode = false
    
    //initialise data to be displayed
    @track formData = { 
        name :'Shree',
        phone :'9619348924',
        email :'shree@gmail.com'
    }

    toggleHandler(event){
        this.isEditMode = event.target.checked //set the value for isEditMode based on toggle button position
        console.log(this.isEditMode)
    }

    changeHandler(event){
        this.formData[event.target.name] = event.target.value
    }
}