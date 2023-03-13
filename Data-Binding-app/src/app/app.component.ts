import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data-Binding-app';
  buttonPresses = 0;
  showStar = true;
  
  buttonPressed() {
    this.buttonPresses++;
  }

  lookMessage() {
    if(this.showStar == true){
      this.showStar = false;
    }
    else {
      this.showStar = true;
    }
  }

}
