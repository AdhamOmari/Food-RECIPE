import { combineReducers } from "redux";
import categoryReducer from "./FechData/fetchReduser";
import commentsReducer from './AddCommant/CommentReducer'
const allReducer = combineReducers({
    categoryReducer, commentsReducer
});

export default allReducer;