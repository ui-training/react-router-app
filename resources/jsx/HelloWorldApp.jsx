import React from 'react';
import ReactDOM from 'react-dom'
import MainComponent from './MainComponent';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <MainComponent/>
    </BrowserRouter>,
    document.getElementById('content'));
