import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

const fetchProductsJson = () => {
    return fetch("products.json")
        .then( resp => {

            return resp.json().then( data => {
                return data;
            })
        })
        .catch((e)=>{
            console.log("ERROR LOADING FILE", e);
        })

};


function* getPLPDAta(action) {
    try {
        const products = yield call(fetchProductsJson);
        yield put({type: "UPDATE_PRODUCT_LIST", data: products});
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* plpSaga() {

    yield takeLatest("GET_PLP_DATA", getPLPDAta);
}

export default plpSaga;