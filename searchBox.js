import { LightningElement, wire } from 'lwc';
import getRecordNames from '@salesforce/apex/SearchBoxController.getRecordNames';
export default class SearchBox extends LightningElement {
    searchText;
    searchResults;
    error;
    selectedSearchText

    @wire(getRecordNames, {searchText: '$searchText'})
    wiredResults({error,data}){
        if(data){
            this.searchResults = data;
            this.error=undefined;
        }
        else if(error){
            this.searchResults=undefined;
            this.error= error;
        }
    }

    search(event){
        this.searchText = event.target.value
        console.log(`searchText: ${this.searchText}`)
    }

    selectSearchResult(event){
        this.selectedSearchText = event.currentTarget.dataset.value
        console.log(`You have selected: ${this.selectedSearchText}`);
        console.log('target: ' +event.target)
        console.log('currentTarget: ' +event.currentTarget)
    }

    get selectedValue(){
        return this.selectedSearchText
    }

}