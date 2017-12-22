import React ,{ Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Apps } from '../api/collection.js'

class App extends Component {
    render() {
        if (this.props.app[0])
        return ( 
            <div className="app-container">
                <div className="wechat-cover">
                    <h1 className="title-text">{this.props.app[0].name}</h1>
                </div>
                <div className="app-info">
                    <img className="app-icon" src={this.props.app[0].icon}/>
                    <img className="app-code" src={this.props.app[0].code}/>
                    <span className="app-description">{this.props.app[0].description}</span>
                </div>
            </div>
            
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('apps');
    return {
        app: Apps.find({name: "WeChat"}).fetch(),
    };
})(App);