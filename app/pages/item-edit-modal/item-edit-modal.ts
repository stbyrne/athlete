import { Component } from '@angular/core';
import {NavController, NavParams, ModalController, ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/item-edit-modal/item-edit-modal.html'
})

export class ItemEditModalPage {
  selectedEditable: any;
  /*item: any;*/
    
  constructor (public viewCtrl: ViewController, navParams: NavParams){
      
    this.selectedEditable = navParams.get('editable');
      
    console.log(this.selectedEditable);
      
      
  }
    

  
  update() {
    this.selectedEditable;
    this.viewCtrl.dismiss();
    
  }
    
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
