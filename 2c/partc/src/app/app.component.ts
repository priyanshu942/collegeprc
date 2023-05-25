import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registeration|Form';

  displayname='';
  displayemail='';
  displayaddress='';
  displaycontact='';

  getValue(name:string,address:string,email:string,contact:string)
  {
    this.displayname=name;
    this.displayaddress=address;
    this.displayemail=email;
    this.displaycontact=contact;
  }
}
