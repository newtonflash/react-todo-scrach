import React, { Component, Fragment } from 'react';
import style from './product.css';

class Product extends Component {


    render() {
        let data = this.props.data;
        return (
            <div className={style.product}>
                <div>
                    <image src="" />
                </div>
                <h2>{data.name}</h2>
                <p>{data.desc}</p>
                <div>{data.price}</div>
                <div>
                    <button className={ "ctaButton " + style.ctaButton }>Details</button>
                </div>
            </div>

        );
    }
}

export default Product;

