import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularnew';
  myfunction(){
    console.log("welcome");
    
  }
    keyup(event:any) {
    console.log("up");
    
   }
}
