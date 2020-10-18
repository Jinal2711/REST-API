import { PENDING, CATEGORY_SUCCESS, DELETE_CATEGORY, PRODUCT_SUCCESS, ERROR} from '../Type';

export const pending = () => {
    return {
        type: PENDING
    }
}
export const categorySuccess = (data) => {
    return {
        type: CATEGORY_SUCCESS,
        payload: data
    }
}
export const categoryDelete = (status) => {
    return {
        type: DELETE_CATEGORY,
        payload: status
    }
}
export const productSuccess = (data) => {
    return {
        type: PRODUCT_SUCCESS,
        payload: data
    }
}
export const dataError = (error) => {
    return {
        type: ERROR,
        error: error
    }
}

