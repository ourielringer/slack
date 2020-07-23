import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './comse/signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './mymoduls/mymoduls.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidatorComponent } from './comse/validator/validator.component';
import { PaswordComponent } from './comse/pasword/pasword.component';
import { CreateworkspaceComponent } from './comse/createworkspace/createworkspace.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ValidatorComponent,
    PaswordComponent,
    CreateworkspaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
