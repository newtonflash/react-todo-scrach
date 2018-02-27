let initialState = {
    products: [],
    searchString: ""
};

const ProductListReducer = (state = initialState , action) => {
    switch (action.type){
        case "SEARCH":
            return Object.assign({}, state, {searchString : action.searchKey});
        default:
            return state ;
    }
};

export default ProductListReducer;