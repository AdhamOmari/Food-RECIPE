import {
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE,
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE,
} from './CommentConst'



export const addComment = (categoryId, recipeId, comment) => async dispatch => {
    dispatch({ type: ADD_COMMENT_REQUEST })

    try {
        const response = await fetch(`http://localhost:8000/categories/${categoryId}/recipes/${recipeId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ comment: comment })
        });
        const data = await response.json();

        dispatch({
            type: ADD_COMMENT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ADD_COMMENT_FAILURE,
            payload: error,
        });
    }
}