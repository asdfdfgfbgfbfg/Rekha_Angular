import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule); // to ru module

//  mail->module :  inbox-> c, spam -> c, send->c,......

/*


function add( num1, num2){
  print : num1 + num2
}

a=10
b=20

add(a,b)

*/

// index.html -> main.ts [ to call app.module]
// app.module [ to call app.compo ]    -> app.component.ts [ View : html, css, ts data]
