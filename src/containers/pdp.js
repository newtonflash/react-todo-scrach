import React, { Component } from 'react';
import './plp.css';
import {connect} from 'react-redux';
import PLPAction from '../actions/actions';

class PDP extends Component {

    constructor(props){
        super(props);
        console.log(props);
        this.state={
            ProductName : ""
        }

    }

    componentDidMount(){
        switch(this.props.match.params.sku){
            case "1231241":
                this.setState({
                    ProductName: "Arrow"
                })
        }

    }

    render() {
        return (
            <div className="App">
                <h1>Product Name: {this.state.ProductName}</h1>
                <p>Product description goes here</p>
            </div>
        );
    }
}

const convertStateToProps = (state) => {

    return {

    }
};

const convertDispatchToProps = (dispatch)=> {
    return { dispatch };
};


export default connect(convertStateToProps, convertDispatchToProps)(PDP);
