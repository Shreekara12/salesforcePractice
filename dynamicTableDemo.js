import { LightningElement, track } from 'lwc';

export default class DynamicTableDemo extends LightningElement {
    @track selectedRows = []//stores the ids of selected rows
    selectedCount = 0 //stores the number of selected rows
    @track
    columns = [
        {label: 'Name', fieldName: 'name'},
        {label: 'Email', fieldName: 'email', type:'email'}
    ]

    @track data = [
        {id:'1', name:'Shreekara', email:'shreeps97@gmail.com'},
        {id:'2', name:'Shreevara', email:'shreevaraps@gmail.com'},
        {id:'3', name: 'Geetha', email:'geetha@gmail.com'}
    ]

    handleRowSelect(event){
        this.selectedRows = event.detail.selectedRows.map(row=>row.id)
        this.selectedCount = this.selectedRows.length
    }

    handleSelectAll(){
        this.selectedRows = this.data.map(row=> row.id)
        this.selectedCount = this.selectedRows.length
    }

    handleDeselectAll(){
        this.selectedRows = []
        this.selectedCount = 0
    }

}
