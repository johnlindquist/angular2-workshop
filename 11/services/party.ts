import {Injectable} from 'angular2/core';

@Injectable()
export class PartyService{
    public attendees = [];
    
    get total(){
        return this.attendees.length;
    }

    addAttendee(person){
        this.attendees = [...this.attendees, person];
    }
}

