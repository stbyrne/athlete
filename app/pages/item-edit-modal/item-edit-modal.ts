import { Component } from '@angular/core';
import {NavController, NavParams, ModalController, ViewController} from 'ionic-angular';
/*import {ProfileDetailPage} from '../profile-detail/profile-detail.ts';*/
/*import { ItemEditModal } from './item-edit-modal';*/


@Component({
  templateUrl: 'build/pages/item-edit-modal/item-edit-modal.html',
})

export class ItemEditModalPage {
  selectedEditable: any;
    
  constructor (public viewCtrl: ViewController, navParams: NavParams){
      
    this.selectedEditable = navParams.get('editable');
      
    console.log(this.selectedEditable);
      
  }
    
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
