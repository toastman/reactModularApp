import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import MainApp from "./mainApp.jsx"

let childRoutes = [];

childRoutes.push(require('./module1'));
childRoutes.push(require('./module2'));

const rootRoute = {
    component: 'div',
    childRoutes: [
        {
            path: '/',
            component: MainApp,
            childRoutes: childRoutes
        }
    ]
}

render(
    <Router history={createBrowserHistory()} routes={rootRoute}/>,
    document.getElementById('appRoot')
);
