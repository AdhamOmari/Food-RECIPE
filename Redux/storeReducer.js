import { combineReducers } from "redux";
import categoryReducer from "./FechData/fetchReduser";
const allReducer = combineReducers({
    categoryReducer,
});

export default allReducer;