import { LightningElement,track } from 'lwc';

export default class DualListBoxDemo extends LightningElement {

    @track selected = []
    @track selectedSkills = []

    get options(){
        return [
            {label:'English', value:'English'},
            {label:'Kannada', value:'Kannada'},
            {label:'Hindi', value:'Hindi'},
            {label:'Malayalam', value:'Malayalam'}
        ]
    }

    get skillOptions(){
        return [
            
            {label:'LWC', value:'LWC'},
            {label:'Flows', value: 'Flows'},
            {label:'Integration', value:'Integration'},
            {label:'Aura', value:'Aura'},
            {label:'Apex', value:'Apex'},
            {label:'Salesforce Admin', value:'Salesforce Admin'}
        ]
    }

    get selected(){
        return this.selected.length > 0 ? this.selected : 'none'
    }

    get selectedSkills(){
        return this.selectedSkills.length > 0 ? this.selectedSkills : 'none'
    }

    handleChange(event){
        if(event.target.name === 'languages'){
            this.selected = event.detail.value
        }
        if(event.target.name === 'skills'){
            this.selectedSkills = event.detail.value
        }
        
        
        console.log(`Selected values: ${this.selected}`)
        console.log(`Selected skill values: ${this.selectedSkills}`)
    }
}