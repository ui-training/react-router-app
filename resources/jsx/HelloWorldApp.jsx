import React from 'react';
import ReactDOM from 'react-dom'
import MainComponent from './MainComponent';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <MainComponent/>
    </HashRouter>,
    document.getElementById('content'));
