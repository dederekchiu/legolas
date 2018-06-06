import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import reducer from './reducer';
import saga from './sagas';

let composeEnhancers = compose;
// composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers;

export default function configureStore(initialStore) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        reducer,
        initialStore,
        composeEnhancers(applyMiddleware(sagaMiddleware)),
    );
    sagaMiddleware.run(saga);
    store.close = () => {
        store.dispatch(END);
    };
    return store;
}