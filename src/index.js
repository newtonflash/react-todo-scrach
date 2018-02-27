import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
//import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

const initialState =  {
    "searchString": "",
    "products" : []
};
//window._initialState_ = initialState;
const Store = createStore(reducers,  initialState, window.devToolsExtension && window.devToolsExtension() );

class ReduxedApp  extends React.Component{
    render (){
        return (
            <Provider store={Store}>
                <App></App>
            </Provider>
        )
    }
}

ReactDOM.render(<ReduxedApp />, document.getElementById('root'));
//registerServiceWorker();
