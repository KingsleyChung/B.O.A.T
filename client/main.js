import React from 'react';
import { Metor, Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Gallery from '../imports/ui/Gallery.js';
import People from '../imports/ui/People.js';
import App from '../imports/ui/App.js';

Meteor.startup(() => {
    render(<App />, document.getElementById('render-target'));
});
