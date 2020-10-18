import { PENDING, PRODUCT_SUCCESS, ERROR } from '../Type';

const initialState = {
    pendingState: false,
    data: [],
    error: null
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PENDING:
            return {
                ...state,
                pendingState: true
            };
        case PRODUCT_SUCCESS:
            return {
                ...state,
                pendingState: false,
                data: action.payload
            };
        case ERROR:
            return {
                ...state,
                pendingState: false,
                error: action.error
            };
        default: return state;
    }
}

export default productReducer;