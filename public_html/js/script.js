import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import configureStore from './store';
import { Provider } from 'react-redux';

import AppLayout from './pages/Layout';

let initialState = {
    todos: [{
        id:0,
        text:"Initial text",
        completed:false
    }]
}

let store = configureStore(initialState);

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <AppLayout/>
    </Provider>,
    app
);
