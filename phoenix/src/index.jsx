import 'cross-fetch/polyfill';
import 'babel-polyfill'
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { Route, Switch, HashRouter, Router } from 'react-router-dom';
import { createHashHistory, createBrowserHistory } from 'history'

import configureStore from './store';
import Home from './containers/Home/Home';
import BroadcasterContainer from './containers/ChannelClips/ChannelClipsContainer';
import GameContainer from './containers/GameClips/GameClipsContainer';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <HashRouter history={createHashHistory}>
            <Switch>
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route path='/channel/:channel' component={BroadcasterContainer} />
                    <Route path='/game/:game' component={GameContainer} />
                </Layout>
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('index'),
);
