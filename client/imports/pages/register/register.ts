import {NgZone, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/observable';
import {Roles} from 'meteor/alanning:roles';
import 'rxjs/add/observable/of';
import {BarcodeScanner} from 'ionic-native';
import {ModalController} from 'ionic-angular';
import {MyModalAddPerson} from './addPerson/addPerson-modal';
import {Register} from '../../../../both/models';
import {Registers} from '../../../../both/collections/register';
import template from './register.html';
import {MeteorObservable} from "meteor-rxjs";
import {Router} from "@angular/router";


@Component({
    template
})

export class RegisterPage implements OnInit {

    registers: Observable<Register[]>;
    private loggedInUser;
    private isInRole;

    constructor(private zone: NgZone, public modalCtrl: ModalController, private router: Router) {

    }

    ngOnInit() {

        this.loggedInUser = Meteor.userId();
        Meteor.subscribe('clients',);
        this.isInRole = function () {
            return Roles.isInRole;
        }
        this.registers = Registers.find({}).zone();
        console.log("Prihlasseny uz:" + this.loggedInUser)
    }

    click() {
        BarcodeScanner.scan()
            .then((result) => {
                alert(
                    "We got a barcode\n" +
                    "Result: " + result.text + "\n" +
                    "Format: " + result.format + "\n" +
                    "Cancelled: " + result.cancelled
                )
                this.router.navigate(["/info", {'id': result.text}]);
            })
            .catch((error) => {
                alert(error);

            })
    }

    addClient() {

        let modal = this.modalCtrl.create(MyModalAddPerson);

        modal.present();
        modal.onDidDismiss(data => {
            if (data) {

                MeteorObservable.call('addPerson',
                    new Mongo.ObjectID,
                    data.name,
                    data.lastname,
                    data.birth,
                    data.beginningOfStay,
                    data.centrum,
                    data.department,
                    data.room
                ).zone().subscribe(() => console.log('doneZ'));
                console.log(data);
            }
        });

    }
}