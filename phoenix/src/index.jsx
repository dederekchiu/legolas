import 'cross-fetch/polyfill';
import 'babel-polyfill'
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { createHashHistory } from 'history'

import configureStore from './store';
import App from './containers/App/AppContainer';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <HashRouter history={createHashHistory}>
            <Switch>
                <Route path='/:id' component={App}/>
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('index'),
)