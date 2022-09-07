import { AppModule } from "./app.module";
import { AppComponent } from "./app.component";
// import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { NgModule } from "@angular/core";
import { ServerModule } from '@angular/platform-server';

@NgModule({
   imports:[
    AppModule,
    ServerModule,
],
  bootstrap: [AppComponent]
})

export class AppServerModule {}