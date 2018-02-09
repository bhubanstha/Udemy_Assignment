import { User } from '../Model/user';
import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './Logging.service';

@Injectable()
export class UserService {
    Users: User[] = [
        new User(1, 'Max', true, 0),
        new User(2, 'Steve', true, 0),
        new User(3, 'Jack', false, 0),
        new User(4, 'John', true, 0),
        new User(5, 'Marshal', false, 0),
        new User(6, 'Kavin', true, 0),
        new User(7, 'Michael', false, 0),
    ];

    onUserStatusChanged = new EventEmitter<boolean>();
    constructor(private loggingService: LoggingService) {}

    onUserUpdate(id: number, status: boolean) {
        const objIndex = this.Users.findIndex(obj => obj.Id === id);
        if (objIndex >= -1) {
            this.Users[objIndex].Status = status;
            this.Users[objIndex].ClickCount = this.Users[objIndex].ClickCount + 1;
            this.loggingService.logToConsole(this.Users[objIndex]);
        }else {
            this.loggingService.logToConsole(id + 'No user found to update');
        }
    }

}
