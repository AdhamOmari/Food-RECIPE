import * as FETCH_CATEGORIES from "./fetchConst";

export const fetchCategories = () => async (dispatch) => {
    dispatch({ type: FETCH_CATEGORIES.FETCH_CATEGORIES_LOADING });
    try {
        const response = await fetch("http://localhost:8000/categories");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        dispatch({ type: FETCH_CATEGORIES.FETCH_CATEGORIES_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_CATEGORIES.FETCH_CATEGORIES_ERROR, payload: error.message });
    }
};