import { api, LightningElement, wire } from 'lwc';
import getTopAccount from '@salesforce/apex/AccountController.getTopAccount'
export default class DynamicRecordFetchDemo extends LightningElement {
    numOfAcc = 0
    accounts
    error

    changeHandler(event){
        this.numOfAcc = event.target.value
    }

    @wire(getTopAccount,{numOfAccounts:'$numOfAcc'})
    wiredAccounts({error,data}){
        if(data){
            this.accounts = data
            this.error = undefined
        }
        else if(error){
            this.error = error
            this.data = undefined
        }
    }
}