import React, { Component } from 'react';

import './App.css';

import Search from './search';
import Product from './product';

import {connect} from 'react-redux';


class App extends Component {

    constructor(props){
        super(props);
        this.searchEventHandler = this.searchEventHandler.bind(this);
    }

    componentDidMount(){
        fetch("product.json")
            .then( resp => {
                console.log(resp);
               /* console.log(resp.json());
                resp.json().then( data => {
                    console.log(data)
                })*/
            })
            .catch((e)=>{
                console.log("ERROR LOADING FILE", e);
            })
    }


    searchEventHandler(searchKey){
        this.props.dispatch({
            type : "SEARCH",
            searchKey : searchKey
        })
    }

  render() {

      const getProductList = () => {
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
        products : state.products,
        searchString : state.searchString
    }
};

const convertDispatchToProps = (dispatch)=> {
    return { dispatch };
};


export default connect(convertStateToProps, convertDispatchToProps)(App);
