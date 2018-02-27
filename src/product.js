import React, { Component, Fragment } from 'react';

class Product extends Component {


    render() {
        let data = this.props.data;
        return (
            <div className="product">
                <div>
                    <image src="" />
                </div>
                <h2>{data.name}</h2>
                <p>{data.desc}</p>
                <div>{data.price}</div>
                <div>
                    <button className="cta-button">Details</button>
                </div>
            </div>

        );
    }
}

export default Product;

