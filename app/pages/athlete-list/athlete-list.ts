import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AthleteDetailsPage} from '../athlete-details/athlete-details';


@Component({
  templateUrl: 'build/pages/athlete-list/athlete-list.html'
})
export class AthleteListPage {
  selectedItem: any;
  icons: string[];
  sports: Object[];

  constructor(public navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.sports = [
        
            {
                "type": "Sport",
                "name": "Soccer",
                "relationship": "parent",
                "experience": "Professional"
            }, 
            {
                "type": "Sport",
                "name": "Running",
                "relationship": "child",
                "experience": "Amateur"
            }, 
            {
                "type": "Sport",
                "name": "Golf",
                "relationship": "child",
                "experience": "Amateur"
            }];

          console.log(this.sports);

    }
    
    

  itemTapped(event, item) {
    this.navCtrl.push(AthleteDetailsPage, {
      item: item
    });
  }
}
