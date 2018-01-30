import {Meteor} from 'meteor/meteor';
import {Actions} from "../both/collections/actions";
import {Staff} from "../both/collections/staff";
import {Registers} from "../both/collections/register";
import {ListOfActions} from "../both/collections/listOfActions";
import {Roles} from 'meteor/alanning:roles';

Meteor.methods({
    addTemperature(id_client: any, id_staff: any, action_name: any, value: number) {
        Actions.collection.insert({
            id_client: id_client,
            id_staff: id_staff,
            action_name: action_name,
            value: value,
            createdAt: new Date()
        });
    },
    addPressure(id_client: any, id_staff: any, action_name: any, value1: number, value2: number) {
        Actions.collection.insert({
            id_client: id_client,
            id_staff: id_staff,
            action_name: action_name,
            systolic: value1,
            diastolic: value2,
            createdAt: new Date()
        });

    },
    addPerson(id_client: any, name: string, lastName: string, birth: string, beg: string, centrum: string, department: string, room: string) {
        console.log(id_client);
        Registers.collection.insert({
            _id: id_client,
            name: name,
            lastname: lastName,
            birth: birth,
            beginningOfStay: beg,
            centrum: centrum,
            department: department,
            room: room
        })
    }
});

Meteor.publish('clients', function () {
    var currentUser = this.userId;
    if (Roles.userIsInRole(currentUser,'staff')) {
        return Registers.find();
    } else {
        return Registers.find({_id: currentUser});
    }
});

Meteor.publish('actions', function () {
    return Actions.find();
})
Meteor.publish('listOfActions', function () {
    return ListOfActions.find();
})