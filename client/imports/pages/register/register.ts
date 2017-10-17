import { Component } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/of';

import { Register } from '../../../../both/models';
import { Registers } from '../../../../both/collections/register'
import template from './register.html';

@Component({
    template
})

export class RegisterPage {

    registers: Observable<Register[]>;
    
    constructor() {
        this.registers= Registers.find({}).zone();
    }
}