import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ProfileDetailPage} from '../profile-detail/profile-detail';

/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/profile/profile.html',
})
export class ProfilePage {
    selectedItem: any;
    profile: Object[];
  /*static get parameters() {
    return [[NavController]];
  }*/

  constructor(public navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('detail');
    
    this.profile = [{
                "type": "Profile",
                "name": "Stuart Byrne",
                "gender": "Male",
                "dob": "04-11-1976",
                "weight": "80kg",
                "height": "178cm"
            }];

    console.log(this.profile);

    }
    
    

  itemTapped(event, detail) {
    this.navCtrl.push(ProfileDetailPage, {
      detail: detail
    });
  }
}
