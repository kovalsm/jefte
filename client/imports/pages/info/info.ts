import {Component, OnInit} from '@angular/core';
import template from './info.html';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/observable';
import {Register} from '../../../../both/models';
import {Actions} from '../../../../both/models';
import {BarcodeScanner} from 'ionic-native';

import {ListOfActions} from '../../../../both/collections/listOfActions';
import {Registers} from '../../../../both/collections/register'

@Component({
    template
})
export class InfoPage implements OnInit {

    private id;
    private sub: any;
    private registers : Register;
    private listOfActions: Observable<Actions[]>;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        Meteor.subscribe('clients');
        Meteor.subscribe('listOfActions');
        this.sub = this.route.queryParams.subscribe(params => {
            this.id = params['id'];
        });
        this.registers = Registers.findOne({_id: new Mongo.ObjectID(this.id)});
        this.listOfActions = ListOfActions.find().zone();
        this.doAction();


    }

    findAction(){

       // this.registers.forEach(function(myData){
        //    console.log("Akcia:"+myData.name);
       // });

    }

    doAction(){
        //this.listOfActions.((p:Actions)=> console.log("Akcia:"+ p.nazov));
        this.listOfActions.subscribe(todoCount => todoCount.forEach(function (myData) {
            console.log(myData.nazov);
        }));
    }

}