import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AthleteDetailsPage} from '../athlete-details/athlete-details';


@Component({
  templateUrl: 'build/pages/athlete-list/athlete-list.html'
})
export class AthleteListPage {
  selectedItem: any;
  icons: string[];
  items: Object[];

  constructor(public navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

this.items = [{
            "type": "Profile",
            "name": "Stuart Byrne",
            "gender": "Male",
            "dob": "04-11-1976",
            "weight": "80kg",
            "height": "178cm"
        }, 
        {
            "type": "Sport",
            "name": "Soccer",
            "relationship": "parent",
            "experience": [{
                "grade": "Professional"
            }]
        }, 
        {
            "type": "Sport",
            "name": "Running",
            "relationship": "child",
            "experience": [{
                "grade": "Amateur"
            }]
        }, 
        {
            "type": "Sport",
            "name": "Golf",
            "relationship": "child",
            "experience": [{
                "grade": "Amateur"
            }]
        }];
      
      console.log(this.items);
    
  }
    
    

  itemTapped(event, item) {
    this.navCtrl.push(AthleteDetailsPage, {
      item: item
    });
  }
}
