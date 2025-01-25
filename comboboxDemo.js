import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class ComboboxDemo extends LightningElement {
    inputTypes= [
        {label:'Name', value:'name'},
        {label:'Email', value: 'email'}
    ] //options available in the picklist(combobox)

    selectedInput //stores the selected input type
    inputGiven //stores the input value
    selectedLabel //label for the input field- will be set dynamically based on the type selected
    selectedType //type for the input field- will be set dynamically based on the type selected
    selectedInputName //name for the input field- will be set dynamically based on the type selected

    optionChangeHandler(event){
        this.selectedInput = event.target.value
        console.log('Selected input type: ' +this.selectedInput)
        this.inputGiven = '' //clear the input value when the input type is changed
        console.log(`inputGiven inside optionChangeHandler: ${this.inputGiven}`)
    }

    get inputSelected(){
        if(this.selectedInput === 'name'){
            this.selectedLabel = "Enter Name"
            this.selectedType = "text"
            this.selectedInputName = "name"
        }
        else if(this.selectedInput === 'email'){
            this.selectedLabel = "Enter Email"
            this.selectedType = "email"
            this.selectedInputName = "email"
        }
        return this.selectedInput === 'name' ? true : this.selectedInput === 'email' ? true : false
    }

    /*
    get nameSelected(){
        this.selectedLabel = "Enter Name"
        this.selectedType = "text"
        return this.selectedInput === 'name'
    }

    get emailSelected(){
        return this.selectedInput === 'email'
    }
        */

    inputChangeHandler(event){
        this.inputGiven = event.target.value
        console.log('Given input: ' +this.inputGiven)
    }

    submitHandler(){
        console.log('hello')
        if(this.inputGiven){
            console.log(`inputGiven value: ${this.inputGiven}`)
            this.showToast('Submit Successful!!',`Submitted value: ${this.inputGiven}`,'success' );
        }
        else{
            this.showToast('Error!!',`Please enter a value`,'error' );
        }
    }

    showToast(title, message, variant){
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(evt);
    }
}