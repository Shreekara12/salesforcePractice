import { LightningElement, api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class FileUploadDemo extends LightningElement {
    @api recordId

    get acceptedFormats(){
        return ['.png', '.pdf']
    } 

    handleFileUpload(event){
        const uploadedFiles = event.detail.files;
        let uploadedFileNames = '';
        for(let i=0; i<uploadedFiles.length; i++){
        uploadedFileNames += uploadedFiles[i].name + ', ';
        }
        this.dispatchEvent(
        new ShowToastEvent({
        title:'Success',
        message:uploadedFiles.length + ' files uploaded successfully: ' + uploadedFileNames,
        variant: 'success',
        }),
        );
    }
        

}
