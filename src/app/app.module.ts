import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { PbAuthService } from './services/pb-auth.service';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule, MatCheckboxModule
  ],
  providers: [PbAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
