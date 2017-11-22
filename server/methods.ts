import { Meteor } from 'meteor/meteor';
import{Actions} from "../both/collections/actions";

Meteor.methods({
    addTemperature(id_client : any, id_staff: any, action_name:any, value: number ){
        Actions.collection.insert({
            id_client : id_client,
            id_staff: id_staff,
            action_name: action_name,
            value:value,
            createdAt : new Date()
        });
    }
})