/**
 * Created by aleksandar.mechkaros on 10-Aug-17.
 */
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {AppComponent} from "./_components/main-component/app.component";


const routes: Routes = [

    { path: "", component: AppComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})


export class AppRoutingModule {}
