import './client.css';

import React from 'react';
import ReactDom from 'react-dom';

import axios from 'axios';

import { Router, Route, Link, IndexRoute } from 'react-router';

import HelloWorld from './components/helloworld';
import Greeter from './components/greeter';
import Counterizer from './components/counterizer';
import HelloWorldApp from './components/helloworldapp';
import Index from './components/index';
import Counter from './components/counter';








const routes = (
    <Router>
        <Route path="/" component={HelloWorldApp}>
            <IndexRoute component={Index} />
            <Route path="/hello/:name" component={Greeter}></Route>
        </Route>
    </Router>
    );



ReactDom.render(
    routes,
    document.getElementById('app')
);

