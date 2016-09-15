import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Profiles {

  data: any;
  id:any;
  category: any;
  value: any;

  constructor(private http: Http) {
    this.data = null;
  }

  getProfiles(){

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      this.http.get('http://localhost:8080/api/profiles')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });

  }
    
  updateProfiles(id, category, value){

    console.log("You are updating Profile ID: " + id + " with the new value of " + value + " for your " + category + "!");
      
      
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
      
    var object = {
                    "_id": id,
                    [category]: value
    };
      
      console.log("From Profiles.ts: " + object);

    this.http.put('http://localhost:8080/api/profiles/' + id, JSON.stringify(object), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });   

  }

  createProfile(profile){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:8080/api/profiles', JSON.stringify(profile), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });

  }

  deleteProfile(id){

    this.http.delete('http://localhost:8080/api/profiles/' + id).subscribe((res) => {
      console.log(res.json());
    });    

  }

}