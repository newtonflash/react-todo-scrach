import React, { Component, Fragment } from 'react';



class CustomDropdown extends Component {

    constructor(props){
        super(props);

    }


    handleFilterOptions(e) {
        var val = e.target.value;
        this.props.sortEventHandler(val)
    }

    render() {

        return (
            <Fragment>
                <span>{this.props.labelText}</span>
                <select onChange={this.handleFilterOptions.bind(this)}>
                    {this.props.options.map((option, i) => <option key= {i} value={option}>{option}</option>)}
                </select>
            </Fragment>
        );
    }
}

export default CustomDropdown;
