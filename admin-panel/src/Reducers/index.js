
    import { combineReducers } from 'redux';
    import CatagoryReducer from './CategoryReducer';
    import ProductReducer from './ProductReducer';

    const rootReducer = combineReducers({
        CatagoryReducer,
        ProductReducer
    });

    export default rootReducer;