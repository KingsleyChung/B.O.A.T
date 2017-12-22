import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import Layout from  '../ui/Layout.js'
import MainBody from '../ui/Main_body.js'
import Aboutus from '../ui/Aboutus.js'
import App from '../ui/App.js'
import People from '../ui/People.js'

FlowRouter.subscriptions = function() {
    this.register('mainList', Meteor.subscribe('mainList'));
};

FlowRouter.route('/', {
  name: 'mainPage.show',
  
  subscriptions: function(params, queryParams) {
    this.register('mottos', Meteor.subscribe('mottos'));
    this.register('mainList', Meteor.subscribe('mainList'));
  },
    
  action() { mount(Layout, { main: <MainBody/>,}); },
});

FlowRouter.route('/:page', {
  name: 'babyPage.show',
  
  action(params, queryParams) {
    if (params.page == 'Products') {
      mount(Layout, { main: <App/>,});    
    } 
    else if (params.page == 'About us') {
       mount(Layout, { main: <Aboutus/>,});    
    } 
    else if (params.page == "People") {
       mount(Layout, { main: <People/>,});     
    } else {
       FlowRouter.go('mainPage.show');
    }
  },
});

FlowRouter.notFound = {
  
    action: function() {
       FlowRouter.go('mainPage.show');
    }
};



