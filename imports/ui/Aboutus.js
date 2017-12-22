import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import {Motto} from '../api/collection.js'
import {MainList} from '../api/collection.js'
import { withTracker } from 'meteor/react-meteor-data';

class Aboutus extends Component {

  jump(item, e) {
    e.preventDefault();
    FlowRouter.go('babyPage.show',{ page: item });
  }
  
  render() {
      return (
        <div className="about-us">
          <div className="pic1">
          About BOAT Studio
          </div>
          <div className="pic2">
          Stellar is a full service digital agency located just south of Los Angeles in beautiful Redondo Beach, California. Stellar was founded by interactive industry veterans with deep, digital experience working with some of the world’s best-known brands.
          </div>
        </div>
     );
  }
}

export default withTracker(() => {

  return {
    motto: Motto.find().fetch(),
    mainList:MainList.find().fetch(),
  };
})(Aboutus);

