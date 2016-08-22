import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
bootstrap(AppComponent)
.then(success=>console.log('App launched successfully'))
.catch(error=>console.log('Something messed up!'))