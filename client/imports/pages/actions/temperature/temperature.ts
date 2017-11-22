import { Component,OnInit } from '@angular/core';
import template from './temperature.html';
import {ActivatedRoute} from '@angular/router';
import{Observable} from 'rxjs';
import { Register } from '../../../../../both/models';
import {ModalController} from 'ionic-angular';
import {MyModal} from './temperature-modal';
import {MeteorObservable} from "meteor-rxjs"
import {Actions} from '../../../../../both/collections/actions';
import { Registers } from '../../../../../both/collections/register'

@Component({
    template
})


export class TemperaturePage {

    private id;
    private sub :any;
    registers: Observable<Register[]>;
    temperature : Observable<any>;
    pressure : Observable<any>;

    constructor(private route: ActivatedRoute, public modalCtrl: ModalController){

    }

    ngOnInit(){
        this.sub = this.route.queryParams.subscribe(params => {
            this.id= params['id'];


        })
        this.temperature = Actions.find({id_client:this.id, action_name:"temperature"},{ sort: {createdAt:-1}, limit:5});

    }

    openModal() {
        let modal = this.modalCtrl.create(MyModal);

        modal.present();
        modal.onDidDismiss(data => {

            if(data){
                MeteorObservable.call('addTemperature',
                    this.id,
                    Meteor.user()._id,
                    'temperature',
                    data.temperature).zone().subscribe(()=> console.log('doneZ'));
                console.log('Modal data',data);}
        })
    }

}
