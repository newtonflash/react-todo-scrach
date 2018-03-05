import React, { Component } from 'react';
import './App.css';
import Search from './search';
import Product from './product';
import {connect} from 'react-redux';
import ProductSelector from './selector/product-selector'

import PLPAction from './actions';


class App extends Component {

    constructor(props){
        super(props);
        this.searchEventHandler = this.searchEventHandler.bind(this);
    }

    componentDidMount(){
        this.props.dispatch(PLPAction.loadProductsData());

    }


    searchEventHandler(searchKey){
        this.props.dispatch(PLPAction.search(searchKey));
    }

  render() {

      /*const getProductList = () => {

          if(this.props.searchString === ""){
              return this.props.products.map((item, index) => {
                  return (<Product key={index} data={item} ></Product>);
              });
          } else {
              return this.props.products
                  .filter((item) => { return (item.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) >= 0); })
                  .map((item, index) => {
                     return (<Product key={index} data={item} ></Product>);
                  });
          }
      };*/

      const getProductList = () => {
              return this.props.products.map((item, index) => {
                  return (<Product key={index} data={item} ></Product>);
              });
      }


    return (
      <div className="App">
        <h1>Product List</h1>
          <Search searchEventHandler={this.searchEventHandler}></Search>
          <ul>
              {getProductList()}
          </ul>

      </div>
    );
  }
}

const convertStateToProps = (state) => {
    return {
        products : ProductSelector.searchSelector(state),
        searchString : state.searchString
    }
};

const convertDispatchToProps = (dispatch)=> {
    return { dispatch };
};


export default connect(convertStateToProps, convertDispatchToProps)(App);
