import {
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE,
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE,
} from './CommentConst'

const initialState = {
    isLoading: false,
    data: [],
    error: null,
}

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT_REQUEST:
        case FETCH_COMMENTS_REQUEST:
            // Set isLoading to true when making the request
            return {
                ...state,
                isLoading: true,
            };
        case ADD_COMMENT_SUCCESS:
            // Add the new comment to the state data array
            return {
                ...state,
                isLoading: false,
                data: [...state.data, action.payload],
                error: null,
            };
        case FETCH_COMMENTS_SUCCESS:
            // Replace the current comments in the state data array with the new ones fetched from the API
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: null,
            };
        case ADD_COMMENT_FAILURE:
        case FETCH_COMMENTS_FAILURE:
            // Set the error message in the state
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

export default commentsReducer;