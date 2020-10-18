import {pending, categorySuccess, categoryDelete, productSuccess, dataError} from './Actions/index';

export const catagoryApi = () => {
    return async (dispatch) => {
        try {
            dispatch(pending());
            const categoryData = await(await fetch(`http://localhost:3000/category`)).json();
            dispatch(categorySuccess(categoryData.docs))
        } catch (error) {
            dispatch(dataError(error))
        }
    }
}

export const catagoryAddApi = (data) => {
    return async (dispatch) => {
        const postCategoryData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };
        try {
            dispatch(pending());
            const categoryData = await(await fetch(`http://localhost:3000/category`, postCategoryData)).json();
            dispatch(categorySuccess(categoryData))
        } catch (error) {
            dispatch(dataError(error))
        }
    }
}

export const categoryDeleteApi = (id) => {
    return async (dispatch) => {
        debugger
        try {
            const postCategoryData = {
                method: 'DELETE'
            };
            const categoryData = await(await fetch(`http://localhost:3000/category/${id}`, postCategoryData)).json();
            dispatch(categoryDelete(categoryData))
        } catch (error) {
            dispatch(dataError(error))
        }
    }
}


export const productApi = () => {
    return async (dispatch) => {
        try {
            dispatch(pending());
            const productData = await(await fetch(`http://localhost:3000/product`)).json();
            dispatch(productSuccess(productData.docs))
        } catch (error) {
            dispatch(dataError(error))
        }
    }
}