import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserModule } from "@angular/platform-browser";

import { Component, NgModule } from "@angular/core";

@Component({
  selector: "root-app",
  template: "<h1>Hello World!!</h1>"
})
class AppComponent {}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
