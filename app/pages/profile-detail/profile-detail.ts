import { Component } from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {ItemEditModalPage} from '../item-edit-modal/item-edit-modal.ts';

/*
  Generated class for the ProfileDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/profile-detail/profile-detail.html',
})
export class ProfileDetailPage {
  selectedDetail: any;
  selectedDetailId: any;

  constructor(public navCtrl: NavController, navParams: NavParams, private modalController : ModalController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedDetail = navParams.get('detail');
    this.selectedDetailId = navParams.get('id');
      
    console.log("ID: " + this.selectedDetailId);
  }
  /*  itemTapped(event, editable) {
    this.navCtrl.push(ItemEditModalPage, {
      editable: editable
    });
  }*/
    presentModal(editable, category, unit, id) {
    let modal = this.modalController.create(ItemEditModalPage);
    this.navCtrl.push(ItemEditModalPage, {
      editable: editable,
      category: category,
      unit: unit,
      id: this.selectedDetailId
    });
    modal.present(editable);
  }
}
