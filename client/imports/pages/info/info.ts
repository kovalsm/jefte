import {Component, OnInit} from '@angular/core';
import template from './info.html';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Register} from '../../../../both/models';
import {BarcodeScanner} from 'ionic-native';

import {ListOfActions} from '../../../../both/collections/listOfActions';
import {Registers} from '../../../../both/collections/register'

@Component({
    template
})
export class InfoPage implements OnInit {

    private id;
    private sub: any;

    private registers: Register;
    //listOfActions: Observable<any[]>;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        Meteor.subscribe('clients');
        Meteor.subscribe('listOfActions');
        this.sub = this.route.queryParams.subscribe(params => {
            this.id = params['id'];
            this.registers = Registers.findOne({_id: this.id});
          //  this.listOfActions = ListOfActions.find({}).zone();

        })

    }

    findAction(){

       // this.registers.forEach(function(myData){
        //    console.log("Akcia:"+myData.name);
       // });

    }

    doAction(text){

       // this.listOfActions.forEach(function(myData){
       //     console.log("Akcia:"+);
       // });
    }

}