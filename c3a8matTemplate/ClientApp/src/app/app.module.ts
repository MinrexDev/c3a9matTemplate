import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { ServerComponent } from './server/server.component';
import { SubServerComponent } from './subserver/SubServer.component';
import { TopnavComponent } from './topnav/topnav.component';

@NgModule({
  declarations: [
        AppComponent,
        ServerComponent,
        SubServerComponent,
        TopnavComponent
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

