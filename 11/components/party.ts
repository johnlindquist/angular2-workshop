import {Component} from '@angular/core';
import {PartyService} from '../services/party';

@Component({
    selector: 'party',
    template: `<ul>
    <li *ngFor="let person of partyService.attendees">
        {{person.name}}
    </li>
</ul>
`
})
export class Party {
    constructor(public partyService:PartyService) {
    }
}
