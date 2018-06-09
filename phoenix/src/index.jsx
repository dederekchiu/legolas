import 'cross-fetch/polyfill';
import 'babel-polyfill'
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { createHashHistory } from 'history'

import configureStore from './store';
import Home from './containers/Home/Home';
import BroadcasterContainer from './containers/BroadcasterPage/BroadcasterContainer';
import GameContainer from './containers/GamePage/GameClipsContainer';
import Layout from './components/Layout';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <HashRouter history={createHashHistory}>
            <Switch>
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route path='/broadcaster/:broadcaster' component={BroadcasterContainer} />
                    <Route path='/game/:game' component={GameContainer} />
                </Layout>
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('index'),
);
