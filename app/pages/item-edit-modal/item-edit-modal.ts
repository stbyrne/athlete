import { Component } from '@angular/core';
import {NavController, NavParams, ModalController, ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/item-edit-modal/item-edit-modal.html'
})

export class ItemEditModalPage {
  selectedEditable: any;
  selectedEditableCategory: any;
  selectedEditableUnit: any;
  /*item: any;*/
    
  constructor (public viewCtrl: ViewController, navParams: NavParams){
      
    this.selectedEditable = navParams.get('editable');
    this.selectedEditableCategory = navParams.get('category');
    this.selectedEditableUnit = navParams.get('unit');
      
    console.log(this.selectedEditable);
    console.log(this.selectedEditableCategory);
    console.log(this.selectedEditableUnit);
      
      
  }
    

  
  update() {
    this.selectedEditable;
    this.viewCtrl.dismiss();
    
  }
    
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
