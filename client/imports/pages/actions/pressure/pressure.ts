import { Component,OnInit } from '@angular/core';
import template from './pressure.html';
import {ActivatedRoute} from '@angular/router';
import{Observable} from 'rxjs';
import { Register } from '../../../../../both/models';
import {ModalController} from 'ionic-angular';
import {MyModalPressure} from './pressure-modal';
import {MeteorObservable} from "meteor-rxjs";
import {Actions} from '../../../../../both/collections/actions';
import {errorHandler} from "@angular/platform-browser/src/browser";

@Component({
    template
})


export class PressurePage {

    private id;
    private sub :any;
    registers: Observable<Register[]>;
    temperature : Observable<any>;
    pressure : Observable<any>;

    constructor(private route: ActivatedRoute, public modalCtrl: ModalController){
        Meteor.subscribe('actions');
    }

    ngOnInit(){
        this.sub = this.route.queryParams.subscribe(params => {
            this.id= params['id'];


        })
        this.pressure = Actions.find({id_client:this.id, action_name:"pressure"},{ sort: {createdAt:-1}, limit:5});

    }

    openModal() {
        let modal = this.modalCtrl.create(MyModalPressure);

        modal.present();
        modal.onDidDismiss(data => {

            if(data){
                MeteorObservable.call('addPressure',
                    this.id,
                    Meteor.user()._id,
                    'pressure',
                    data.systolic, data.diastolic).zone().subscribe(
                        ()=> console.log('doneZ'),
                    (e:Error)=>{

                }
                );
                console.log('Modal data',data);}
        })
    }

}
