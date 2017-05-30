const css = require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import bulbasaur from './images/bulbasaur.jpg';

ReactDOM.render(
    <div>
        <h1>Hello, app page!</h1>
        <img src={bulbasaur} />
    </div>,
    document.getElementById('root')
);