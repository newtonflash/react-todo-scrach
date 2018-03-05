import {createSelector} from 'reselect';

const getProductList = (state) => {return state.products};
const getSearchString = (state) => {return state.searchString};

const searchSelector = createSelector(
    getProductList,
    getSearchString,
    (productList, searchString) => {
        if(searchString === ""){
            return productList;
        } else {
            return productList.filter((item) => { return (item.name.toLowerCase().indexOf(searchString.toLowerCase()) >= 0); })
        }
    }
);

export default {searchSelector};