import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PLP from './containers/plp';
import PDP from './containers/pdp';
import {Provider} from "react-redux";
import Store from './store';
//import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-browser-router';



//window._initialState_ = initialState;
/**
 *  localhost:3000/   - PLP
 *  localhost:3000/pdp/12  - PDP
 */


class ReduxedApp  extends React.Component{
    render (){
        return (
            <Provider store={Store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={PLP} />
                        <Route path="/pdp/:sku" component={PDP} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<ReduxedApp />, document.getElementById('root'));
//registerServiceWorker();
