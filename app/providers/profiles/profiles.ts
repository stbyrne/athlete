import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Profiles {

  data: any;

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