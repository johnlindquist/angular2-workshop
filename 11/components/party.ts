import {Component} from 'angular2/core';
import {PartyService} from '../services/party';

@Component({
    selector: 'party',
    template: `<ul>
    <li *ngFor="#person of partyService.attendees">
        {{person.name}}
    </li>
</ul>
`
})
export class Party {
    constructor(public partyService:PartyService) {
    }
}
