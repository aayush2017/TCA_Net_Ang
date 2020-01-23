import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasendComponent } from './basend/basend.component';
import { AppCComponent } from './app-c/app-c.component';
import { HeaderComponent } from './basend/header/header.component';
import { VelitComponent } from './basend/velit/velit.component';
import { FormCtrlComponent } from './form-ctrl/form-ctrl.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { OutputDecoratorComponent } from './output-decorator/output-decorator.component';
import { HostExampleComponent } from './host-example/host-example.component';

@NgModule({
  declarations: [
    AppComponent,
    BasendComponent,
    AppCComponent,
    HeaderComponent,
    VelitComponent,
    FormCtrlComponent,
    BlogListComponent,
    OutputDecoratorComponent,
    HostExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
