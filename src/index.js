import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './css/index.css';
import App from './components/App';

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
