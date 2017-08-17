import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-front-search',
    templateUrl: './front-search.component.html',
    styleUrls: ['./front-search.component.css']
})
export class FrontSearchComponent implements OnInit {

    location: string;
    jobType: string;

    constructor() {}

    ngOnInit() {
    }

}
