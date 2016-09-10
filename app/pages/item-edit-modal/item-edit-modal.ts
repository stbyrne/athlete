import { Component } from '@angular/core';
import {NavController, NavParams, ModalController, ViewController, Loading} from 'ionic-angular';
import {DatePicker} from 'ionic-native';
import {Profiles} from '../../providers/profiles/profiles.ts';


@Component({
  templateUrl: 'build/pages/item-edit-modal/item-edit-modal.html'
})


export class ItemEditModalPage {
  selectedEditable: any;
  selectedEditableCategory: any;
  selectedEditableUnit: any;
  updatedDate : any;
  updatedEditable : string;
  myForm: any;
    
/*static get parameters() {
  return [[FormBuilder]];
}*/
    
constructor (public viewCtrl: ViewController, navParams: NavParams, private profilesService: Profiles){
      
    this.selectedEditable = navParams.get('editable');
    this.selectedEditableCategory = navParams.get('category');
    this.selectedEditableUnit = navParams.get('unit');
    
    console.log(this.selectedEditable);
    console.log(this.selectedEditableCategory);
    console.log(this.selectedEditableUnit);
    
  }
    
    
        
	
    
  updateSelectedEditable() {


    console.log('From Item Edit Modal: ' + this.updatedEditable);
    console.log('New Date: ' + this.updatedDate);

    if(this.updatedEditable){
    this.selectedEditable = this.updatedEditable;
    }
    if(this.updatedDate){
    this.selectedEditable = this.updatedDate;
    } 


    console.log('New Editable: ' + this.selectedEditable);


this.viewCtrl.dismiss();

  }
    
  dismissSelectedEditable() {
    this.viewCtrl.dismiss();
  }

}
