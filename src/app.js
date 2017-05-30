const css = require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import img from './images/raichu.jpg';

ReactDOM.render(
    <div>
        <h1>Hello, app page!</h1>
        <img src={img}/>
    </div>,
    document.getElementById('root')
);