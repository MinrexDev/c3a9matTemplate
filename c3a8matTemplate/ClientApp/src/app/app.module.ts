import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { ServerComponent } from './server/server.component';
import { TopnavComponent } from './topnav/topnav.component';
import { FooternavComponent } from './footernav/footernav.component';

@NgModule({
  declarations: [
        AppComponent,
        ServerComponent,
        TopnavComponent,
        FooternavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

