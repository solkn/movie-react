import { combineReducers } from "redux"
import { MovieReducer } from "./features/movie/store/reducer";

const rootReducer =  combineReducers ({
  movie:MovieReducer, 
});

export default rootReducer;
