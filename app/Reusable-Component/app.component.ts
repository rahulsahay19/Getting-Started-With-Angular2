import {Component} from "@angular/core";
import {CustomPanelComponent} from "./Panel.component";
import {LoginPanelComponent} from "./LoginComponent";

@Component({
  selector: 'my-app',
  // directives:[CustomPanelComponent],
  // template:`<c-panel>
  //   Hello Angular 2!!!
  // </c-panel>`
  directives:[LoginPanelComponent],
  template:`<login-panel></login-panel>`
})

export class AppComponent{

}