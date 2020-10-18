import { PENDING, CATEGORY_SUCCESS, DELETE_CATEGORY, ERROR } from '../Type';

const initialState = {
    pendingState: false,
    data: [],
    status: null,
    error: null
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case PENDING:
            return {
                ...state,
                pendingState: true
            };
        case CATEGORY_SUCCESS:
            return {
                ...state,
                pendingState: false,
                data: action.payload
            };
        case DELETE_CATEGORY: 
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

export default categoryReducer;