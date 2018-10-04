import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = '2 Francais au Quebec';

    user = {
        name: 'Arthur',
        age: 42
    };

    constructor() {}
}
