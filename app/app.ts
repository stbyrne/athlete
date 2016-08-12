import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloAthletePage} from './pages/hello-athlete/hello-athlete';
import {ProfilePage} from './pages/profile/profile';
import {ProfileDetailPage} from './pages/profile-detail/profile-detail';
import {AthleteListPage} from './pages/athlete-list/athlete-list';
import {Http, Response} from '@angular/http';


@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloAthletePage the root (or first) page
  rootPage: any = HelloAthletePage;
pages: Array<{title: string, icon: string, component: any}>;
  

  constructor(
    public platform: Platform,
    public menu: MenuController,
    private http: Http
    
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Athlete Home', icon: 'home', component: HelloAthletePage },
      { title: 'Profile', icon: 'contact', component: ProfilePage },
      { title: 'Athlete Details', icon: 'body', component: AthleteListPage }
    ];
    
    this.http.get('../app/athlete.json')
    //.map((res) => res.json())
    .subscribe((data) => {
        
        console.log(data);
        
    }, (error) => {
        
        console.log('Error!');
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
