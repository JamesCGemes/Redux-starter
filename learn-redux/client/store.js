import {createStore} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//import the root reducer, not really sure what that is yet....
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';


//create an object for the default state.
const defaultState ={
    posts,
    comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;