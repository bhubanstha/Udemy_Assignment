import { Injectable, } from '@angular/core';


@Injectable()
export class User {

    public users: [{Id: Number, Name: string, ClickCount: number, Status: boolean}] = [
        {Id: 1, Name: 'Max', ClickCount: 0, Status: true},
        {Id: 2, Name: 'Jack', ClickCount: 0, Status: false},
        {Id: 3, Name: 'Steve', ClickCount: 0, Status: true},
        {Id: 4, Name: 'Raven', ClickCount: 0, Status: true},
        {Id: 5, Name: 'Jenifer', ClickCount: 0, Status: false},
        {Id: 6, Name: 'Tori', ClickCount: 0, Status: false}
    ];

    onUserUpdate(id: number, status: boolean) {
        id = id - 1;
        console.log(id);
        this.users[id].Status = status;
        this.users[id].ClickCount =  1 ;
        console.log(this.users[id]);
        console.log('this function is called');
        console.log(this.users);
    }
}
