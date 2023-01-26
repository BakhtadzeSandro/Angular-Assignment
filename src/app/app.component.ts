import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Task 1;

  date = new Date();
  usersAreLoaded = false;
  usersLoading = false;
  beforeLoad = true;

  get persons(){
    return this.appService.persons;
  }

  switchColors(status: string){
    switch(status){
      case "Active":
        return "active-person-color";
      case "Inactive":
        return "inactive-person-color";
      case "Deleted":
        return "deleted-person-color";
      default:
        return '';
    }
  }

  loadUsers() {
    this.usersLoading = true;
    this.beforeLoad = false;
    if(this.usersAreLoaded == true){
      this.usersAreLoaded = false;
    }
    this.delay(3000)
    .then(()=>{
      this.usersAreLoaded = true;
      this.usersLoading = false;
    });
  }
  delay(time: number) {
    return new Promise( resolve => setTimeout(resolve, time) );
  }

  constructor(private appService: AppService){};
  // Task 2;
  title = 'Angular-assignment';
  squares = [1,2,3,4,5,6,7];
}
