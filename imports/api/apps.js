import { Mongo } from 'meteor/mongo';

export const Apps = new Mongo.Collection('apps');

if (Meteor.isServer) {
    Meteor.publish('apps', function appsPublication() {
        return Apps.find();
    });
}