import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import TodoInput from './components/TodoInput';

const app = document.getElementById('app');

ReactDOM.render(
    <TodoInput/>,
    app
);
