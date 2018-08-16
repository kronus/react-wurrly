import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import '../css/bootstrap.min.css';
import '../css/bootstrap.min.css.map';
import NavComponent from "./nav.component";
import MainComponent from "./main.component";

const App = () => (
    <div>
        <NavComponent />
        <MainComponent />
    </div>
)

export default App;
