import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import {Motto} from '../api/collection.js'
import {MainList} from '../api/collection.js'
import { withTracker } from 'meteor/react-meteor-data';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
class Aboutus extends Component {

  jump(item, e) {
    e.preventDefault();
    FlowRouter.go('babyPage.show',{ page: item });
  }
  
  render() {
      return (
        <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <div className="about-us">
          <div className="title">
            About BOAT Studio
          </div>
          <div className="mainus">
            BOAT是一家从事于全栈开发的工作室，使用国内外最先进的全栈技术进行网站，手机app的开发，力争为用户带来最佳的使用体验。
          </div>
        </div>
        </ReactCSSTransitionGroup>
     );
  }
}

export default withTracker(() => {

  return {
    motto: Motto.find().fetch(),
    mainList:MainList.find().fetch(),
  };
})(Aboutus);

