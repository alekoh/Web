import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm} from "@angular/forms";

@Component({
    selector: 'app-front-search',
    templateUrl: './front-search.component.html',
    styleUrls: ['./front-search.component.css']
})
export class FrontSearchComponent implements OnInit {

    location: string;
    jobType: string;
    form: FormGroup;

    constructor() {}

    ngOnInit() {
    }

    submitSearchQuery(form: NgForm) {
        this.location = form.value.location;
        this.jobType = form.value.jobType;


    }

}
