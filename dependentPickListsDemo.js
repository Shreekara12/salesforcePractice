import { LightningElement, track } from 'lwc';

export default class DependentPickListsDemo extends LightningElement {
    @track selectedCountry = ''; //stores the selected value for country
    @track selectedState = ''; //stores the selected state value
    @track states = []; //to store the state values to be displayed on the State picklist field.
    //  Values are assigned to this array dynamicallybased on the country selected.
    
    countries = [
        {label:'USA', value: 'USA'},
        {label:'India', value: 'India'},
        {label:'Canada', value: 'Canada'}
    ];

    countryStateMap = {
        USA : [
            {label:'California', value:'California'},
            {label:'Texas', value:'Texas'},
            {label:'New York', value:'New York'}
        ],
        India : [
            {label:'Karnataka', value:'Karnataka'},
            {label:'Kerala', value:'Kerala'},
            {label:'Tamil Nadu', value:'Tamil Nadu'}
        ],
        Canada : [
            {label:'Ontario', value:'Ontario'},
            {label:'Quebec', value:'Quebec'},
            {label:'British Columbia', value:'British Columbia'}
        ]
    };

    countryChangeHandler(event){
        console.log(event.target.value)
        this.selectedCountry = event.target.value
        this.selectedState = ''
        console.log(`Country selected: ${this.selectedCountry}`)
        this.states = this.countryStateMap[this.selectedCountry]||[]
    }

    stateChangeHandler(event){
        this.selectedState = event.target.value
    }
}