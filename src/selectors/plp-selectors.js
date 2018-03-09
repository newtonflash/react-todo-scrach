import { createSelector } from 'reselect';

const getSearchString = (state) => {
    return state.searchString;
};

const getProductsList = (state) => {
    return state.products;
};

const getSortBy = (state) => {
    return state.sortBy;
};

const searchSelector = createSelector(
    [ getSearchString, getProductsList, getSortBy], ( searchString, productsList, sortBy) => {
        var filteredProductList = productsList;
        
        if(searchString !== ""){
            filteredProductList = productsList.filter((item) => { return (item.name.toLowerCase().indexOf(searchString.toLowerCase()) >= 0); })
        }

         if(sortBy === "A-Z"){
                filteredProductList.sort(function(a,b) {return (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0);})
            }
           else if(sortBy === "Z-A"){
                filteredProductList.sort(function(a,b) {return (a.name.toLowerCase() > b.name.toLowerCase()) ? -1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? 1 : 0);})
            }
            else if(sortBy === "price:low to high"){
                filteredProductList.sort(function(a,b) {return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0);})
            }
            else{
                filteredProductList.sort(function(a,b) {return (a.price > b.price) ? -1 : ((b.price > a.price) ? 1 : 0);})   
            }
        
        return filteredProductList;
    }
);

export default searchSelector;