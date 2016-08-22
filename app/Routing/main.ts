import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {ROUTER_PROVIDERS} from '@angular/router'

bootstrap(AppComponent,[ROUTER_PROVIDERS])
.then(success=>console.log('App launched successfully'))
.catch(error=>console.log('Something messed up!'))

    