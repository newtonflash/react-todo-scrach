import React, { Component, Fragment } from 'react';



class Search extends Component {

    constructor(props){
        super(props);

    }

    onSearchInput(evt){
        this.props.searchEventHandler(evt.target.value);
    }

    render() {

        return (
            <Fragment>
                <input defaultValue="search" type="text" onChange={(evt) => { this.onSearchInput(evt) }} />
                <button >Search</button>
            </Fragment>
        );
    }
}

export default Search;
