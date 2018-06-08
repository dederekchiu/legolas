import 'cross-fetch/polyfill';
import 'babel-polyfill'
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { createHashHistory } from 'history'

import configureStore from './store';
import App from './containers/App/AppContainer';
import BroadcasterContainer from './containers/BroadcasterPage/BroadcasterContainer';
import GameContainer from './containers/GamePage/GameContainer';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <HashRouter history={createHashHistory}>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/broadcaster/:broadcaster' component={BroadcasterContainer} />
                <Route path='/game/:game' component={GameContainer} />
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('index'),
)