import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserModule } from "@angular/platform-browser";

import { Component, NgModule } from "@angular/core";

@Component({
  selector: "app-rot",
  template: "<h1>Hello Rekha</h1>"
})
class App1 {}
@NgModule({
  declarations: [App1],
  imports: [BrowserModule],
  bootstrap: [App1]
})
class App2 {}

platformBrowserDynamic().bootstrapModule(App2);
