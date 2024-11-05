import { NgModule } from '@angular/core';

// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from "../../../my-library/projects/web-components/src/lib/components/card/card.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // BrowserModule, // Il faut retirer "BrowserModule" ici car il est déjà importé dans le module principal de "host-app" (il ne peut pas l'appeler deux fois).
    CommonModule,
    AppRoutingModule,
    CardModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
