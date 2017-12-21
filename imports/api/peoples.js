import { Mongo } from 'meteor/mongo';

export const Peoples = new Mongo.Collection('peoples');

if (Meteor.isServer) {
    Meteor.publish('peoples', function peoplesPublication() {
        return Peoples.find();
    });
}