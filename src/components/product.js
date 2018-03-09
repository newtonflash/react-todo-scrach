import React, { Component, Fragment } from 'react';
import style from './product.css';
import PropTypes from 'prop-types';
import {Link} from "react-browser-router";


class Product extends Component {
    render() {
        let data = this.props.data;
        return (
            <div className={style.product}>

                <h2>{data.name}</h2>
                <p>{data.desc}</p>
                <div>{data.price}</div>
                <div>
                    <Link to={"/pdp/" + data.sku}>
                        <button className={ "ctaButton " + style.ctaButton }>Details</button>
                    </Link>
                </div>
            </div>

        );
    }
}

Product.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        desc: PropTypes.string,
        price: PropTypes.any
    })
};


export default Product;

