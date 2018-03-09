import reducers from './reducers/reducers';
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';
import saga from './actions/saga';


const sagaMiddleWare = createSagaMiddleware();

const initialState =  {
    "searchString": "",
    "products" : []
};

//const Store = createStore(reducers,  initialState, window.devToolsExtension && window.devToolsExtension(), applyMiddleware(thunk) );
//const Store = createStore(reducers,  initialState,  applyMiddleware(thunk) );
const Store = createStore(reducers,  initialState,  applyMiddleware(sagaMiddleWare) );


sagaMiddleWare.run(saga);


export default Store;