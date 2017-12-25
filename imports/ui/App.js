import React ,{ Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Apps } from '../api/collection.js'

class App extends Component {
    render() {
        return ( 
            <div className="app-container">
                <div className="app-cover">
                    <img className="iPhone-frame" src="image/iPhoneFrame.png"/>
                    <img className="app-capture" src="image/QinGongShanXueCapture.jpg"/>
                    <img className="app-code" src={this.props.app[0] && this.props.app[0].code}/>
                    <h1 className="app-title-text">{this.props.app[0] && this.props.app[0].name}</h1>
                </div>
                <div className="app-info">
                    <button className="go-back">GO BACK</button>
                    <img className="app-icon" src={this.props.app[0] && this.props.app[0].icon}/>
                    <span className="app-description">{this.props.app[0] && this.props.app[0].description}</span>
                </div>
            </div>
            
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('apps');
    return {
        app: Apps.find({name: "勤工善学"}).fetch(),
    };
})(App);