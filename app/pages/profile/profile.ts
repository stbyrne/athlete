import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ProfileDetailPage} from '../profile-detail/profile-detail';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Profiles} from '../../providers/profiles/profiles.ts';

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
    getProfiles: any;
  /*static get parameters() {
    return [[NavController]];
  }*/

constructor(public navCtrl: NavController, navParams: NavParams, public http: Http, private profilesService: Profiles) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('detail');
   
    this.profile = [];
      
    this.profilesService.getProfiles().then((data) => {
            console.log('Data from mongodb: ' + data);
            this.profile = data;
            this.profile.forEach(function(athlete){
                console.log(athlete);
            });
    });

    

    }

  itemTapped(event, detail, id) {
    this.navCtrl.push(ProfileDetailPage, {
        detail: detail,
        id: id
    });
  }
}
