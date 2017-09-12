import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import reducers from './reducers/index';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import thunk from 'redux-thunk';

import App from './containers/App';
import Index from './containers/Index';
import Article from './containers/PinDetail';

let store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Index}/>
                <Route path='/pindetail/:id' component={Article}></Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('container')
);