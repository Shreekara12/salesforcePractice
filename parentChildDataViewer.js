import { LightningElement,wire,track } from 'lwc';
import getAccountList from '@salesforce/apex/ParentChildDataViewerController.getAccountList';
import getContactList from '@salesforce/apex/ParentChildDataViewerController.getContactList';
export default class ParentChildDataViewer extends LightningElement {
    
    error
    accountOptions = []//stores the accounts to be shown on picklist field
    @track selectedAccount//stores the selected account id
    @track contacts = []//stores the contacts related to selectedAccount. Values are assigned dynamically by an imperative apex call

    @track columns = [
        {label:'Name', fieldName:'Name'},
        {label:'Name', fieldName:'Phone', type:'phone'},
        {label:'Name', fieldName:'Email', type:'email'}
    ]

    @wire(getAccountList)
    wiredAccounts({error,data}){
        if(data){
            this.accountOptions=data.map(acc=>{
                return {label:acc.Name, value:acc.Id}
            })
            this.error=undefined
        }
        else if(error){
            console.error('Error fetching accounts')
        }
    }

    accountChangeHandler(event){
        this.selectedAccount = event.detail.value
        console.log(`You have selected: ${this.selectedAccount}`)
        this.contacts=[]
        getContactList({accId : this.selectedAccount}).then(result=>{
            this.contacts = result
        }).catch(error=>{
            console.error('Error fetching Contacts')
        })
        
    }
    

}