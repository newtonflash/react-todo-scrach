let initialState = {
    products: [],
    searchString: ""
};

const ProductListReducer = (state = initialState , action) => {
    switch (action.type){
        case "SEARCH":
            return Object.assign({}, state, {searchString : action.searchKey});
        case "UPDATE_PRODUCT_LIST":
            return Object.assign({}, state, action.data);
        default:
            return state ;
    }
};

export default ProductListReducer;