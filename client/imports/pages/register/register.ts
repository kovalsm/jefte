import { NgZone,Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/of';


import { Register } from '../../../../both/models';
import { Registers } from '../../../../both/collections/register';
import template from './register.html';

@Component({
    template
})

export class RegisterPage implements OnInit{

    registers: Observable<Register[]>;
    constructor(private zone:NgZone){}
    ngOnInit(){
        
        this.registers= Registers.find({}).zone();

    }
}