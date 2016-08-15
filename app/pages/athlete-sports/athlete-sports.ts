import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AthleteDetailsPage} from '../athlete-details/athlete-details';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/athlete-sports/athlete-sports.html'
})
export class AthleteSportsPage {
  selectedItem: any;
  sports: Object[];

constructor(public navCtrl: NavController, navParams: NavParams, public http: Http) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.http.get('build/json/sports.json')
    .map(res => res.json())
    .subscribe(res => {
        
        console.log(res);
        this.sports = res;
        
        
        
    }, (error) => {
        
        console.log('Error!');
    });
      
    /*this.sports = [
        
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
            }];*/

          console.log(this.sports);

    }
    
    

  itemTapped(event, item) {
    this.navCtrl.push(AthleteDetailsPage, {
      item: item
    });
  }
}
