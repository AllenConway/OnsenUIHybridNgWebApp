import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Modern Apps Live! Orlando';
  checkbox1 = 'OnsenUI';
  checkbox2 = 'PhoneGap';

  login() {
    alert('You have logged in');
  }

}
