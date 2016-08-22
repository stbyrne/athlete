import { Component } from '@angular/core';
import {NavController, NavParams, ModalController, ViewController} from 'ionic-angular';
import {FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, AbstractControl} from '@angular/common';
import {CustomValidators} from '../validators/CustomValidators.ts';
/*import {ProfileDetailPage} from '../profile-detail/profile-detail.ts';*/
/*import { ItemEditModal } from './item-edit-modal';*/


@Component({
  templateUrl: 'build/pages/item-edit-modal/item-edit-modal.html',
  directives: [FORM_DIRECTIVES]
})

export class ItemEditModalPage {
  selectedEditable: any;
  authForm: ControlGroup;
  item: AbstractControl;
    
  constructor (public viewCtrl: ViewController, navParams: NavParams, private fb: FormBuilder){
      
    this.selectedEditable = navParams.get('editable');
      
    console.log(this.selectedEditable);
      
    this.authForm = fb.group({  
        'item': ['', Validators.compose([Validators.required, Validators.minLength(3), CustomValidators.checkFirstCharacterValidator])]
    });

    this.item = this.authForm.controls['item'];
      
    

  }
  update() {
    this.selectedEditable;
    this.viewCtrl.dismiss();
    
  }
    
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
