import { Component } from '@angular/core';
import { ModalController, ViewController } from 'ionic-angular';
/*import { ItemEditModal } from './item-edit-modal';*/


@Component({
  templateUrl: 'build/pages/item-edit-modal/item-edit-modal.html',
})

export class ItemEditModalPage {
  constructor (public viewCtrl: ViewController ){
      
      
  }
    
    dismiss() {
    this.viewCtrl.dismiss();
  }

}
