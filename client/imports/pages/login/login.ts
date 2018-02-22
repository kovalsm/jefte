import {NgZone, Component} from '@angular/core';
import template from './login.html';
import {Accounts} from 'meteor/accounts-base';
import {Router} from "@angular/router";


export interface LoginCredentials {
    username: string;
    password: string;
}

@Component({
    template
})
export class LoginPage {
    credentials: LoginCredentials;

    constructor(private zone: NgZone, private router: Router) {
        this._resetCredentialsFields();

        return;
        let credentials: LoginCredentials = {username: 'marosi', password: 'marosi'};
        Accounts.createUser(credentials, function (error) {
            if (error) {
                console.log("Cannot create user");
            }
        });
    }

    _resetCredentialsFields() {
        this.credentials = {username: '', password: ''};
    }

    login(): void {
        let username: string = this.credentials.username;
        let password: string = this.credentials.password;
        let base = this;

        Meteor.loginWithPassword(username, password, (error) => {
            if (error) {
                //this.errors.push(error.reason || "Unknown error");
                console.error(error)
            }
            else {
                //this.isDropdownOpen = false;
                this._resetCredentialsFields();
                this.zone.run(() =>
                    base.router.navigate(["/register"]));
            }
        });
    }
}