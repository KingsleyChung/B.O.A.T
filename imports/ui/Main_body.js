import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import {Motto} from '../api/collection.js'
import {MainList} from '../api/collection.js'
import { withTracker } from 'meteor/react-meteor-data';

class MainBody extends Component {

  jump(item, e) {
    e.preventDefault();
    FlowRouter.go('babyPage.show',{ page: item });
  }
  
  render() {
    const listItems = this.props.mainList.map((itemList) =>
        <li key = {itemList._id}><a onClick={this.jump.bind(this, itemList.item)}>{itemList.item}</a></li>
    );
    return (
        <div className="container">
            <video class="video-backgroud" preload="auto" loop="" autoplay="" muted="" id="bg_video" poster="stellaragency.com/themes/gostellar/images/stellar-video-background-poster.png">
              <source src="video/bgvideo.mp4" type="video/mp4"/>
            </video>
            <div className = "mottos">
                {this.props.motto[0] && this.props.motto[0].text}
            </div>
            <div>
                <ul>
                {listItems}
                </ul>
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
})(MainBody);

