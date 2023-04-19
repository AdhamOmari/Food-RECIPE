import *  as FETCH_CATEGORIES from "./fetchConst";

const initialState = {
    categories: [],
    error: null,
    loading: false
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES.FETCH_CATEGORIES_LOADING:
            return { ...state, loading: true, error: null };
        case FETCH_CATEGORIES.FETCH_CATEGORIES_SUCCESS:
            return { ...state, categories: action.payload, loading: false, error: null };
        case FETCH_CATEGORIES.FETCH_CATEGORIES_ERROR:
            return { ...state, categories: [], loading: false, error: action.payload };
        default:
            return state;
    }
};

export default categoryReducer;
