import { LightningElement,wire} from 'lwc';
import getAccount from '@salesforce/apex/PopoverCloseController.getAccount';
export default class Closepopover extends LightningElement {
    
     
    showpopover = false;
    mouseinpopover = false;
    error;
    isLoading = false;
    
    
    @wire (getAccount)
    accounts;

    //Function called when user click the button to open the popover
    //adds a event listener to document and listens for mousdown event
    //when that happens 
    handleClick(event){
        var recordId = event.target.dataset.recordId;
        var element = this.template.querySelector(`[data-id= '${recordId}' ]`);
        element.classList.toggle("slds-hide");
        document.addEventListener("mousedown", (e) => {
            if (!this.mouseinpopover) {
                var element = this.template.querySelector(`[data-id= '${recordId}']`);
                element.classList.add('slds-hide');
                document.removeEventListener("mousedown");
            } 
        });
    }
    
    //Function called when clicked outside of popover
    mouseOutHandler(){
        this.mouseinpopover = false;
    }

    //Function called when clickd inside of popover
    mouseEnterHandler(){
        this.mouseinpopover = true;
    }
}