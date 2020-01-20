import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasendComponent } from './basend/basend.component';
import { AppCComponent } from './app-c/app-c.component';
import { HeaderComponent } from './basend/header/header.component';
import { VelitComponent } from './basend/velit/velit.component';
import { FormCtrlComponent } from './form-ctrl/form-ctrl.component';

@NgModule({
  declarations: [
    AppComponent,
    BasendComponent,
    AppCComponent,
    HeaderComponent,
    VelitComponent,
    FormCtrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
