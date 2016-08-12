import {Component} from "@angular/core";
import {CustomPanelComponent} from "./Panel.component";
@Component({
  selector: 'my-app',
  directives:[CustomPanelComponent],
  template:`<c-panel>
    Hello Angular 2!!!
  </c-panel>`
})

export class AppComponent{

}