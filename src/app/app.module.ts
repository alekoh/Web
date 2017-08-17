// Built-in modules
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Imported modules
import {  FormsModule, ReactiveFormsModule, FormBuilder } from "@angular/forms";
import { MaterialModule, MdButtonModule, MdCheckboxModule, MdToolbarModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AgmCoreModule } from '@agm/core';


// Components
import { AppComponent } from './_components/main-component/app.component';
import { FrontSearchComponent } from './_components/front-search-component/front-search.component';
import { MapComponent } from './_components/map/map.component';

import 'hammerjs';


@NgModule({
    declarations: [
        AppComponent,
        FrontSearchComponent,
        MapComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        MdButtonModule,
        MdCheckboxModule,
        FormsModule,
        MDBBootstrapModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDC9Ct0NAV8ciFUdp1Ue0cmjPL_eA_8u5w'
        }),
    ],
    providers: [],

    schemas: [
        NO_ERRORS_SCHEMA
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }
