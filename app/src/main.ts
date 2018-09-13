//console.log("hello cli");

import "zone.js/dist/zone";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";


declare var docReady:any;
import { DocReadyJsModule } from './docready';

new DocReadyJsModule();
//console.log('docReadyJs Obj: ', DocReadyJsModule);
/*alert('before doc load');
docReady(() => {
  console.log('doc ready running');
  alert('after doc load');
});*/


//docReadyJs.docReadyTest();
docReady(() => {
  platformBrowserDynamic().bootstrapModule(AppModule);
});

