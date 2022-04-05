
import { ACTIONTYPES } from "./type";

const INITIAL_STATE = {
  fetchMovieLoading:false,
  fetchMovieSuccess:false,
  createMovieLoading:false,
  createMovieSuccess:false,
  fetchMovieFailure:null,
  createMovieFailure:null,
  movies:null,
  movie:{},

};


export const MovieReducer = (state = INITIAL_STATE, action) =>{

  switch(action.type){
    case ACTIONTYPES.MOVIE_FETCH_START:
      return {
        ...state,
        fetchMovieLoading:true,
        fetchMovieFailure:null,

      };
    case ACTIONTYPES.MOVIE_FETCH_SUCCESS:
      return {
        ...state,
        fetchMovieLoading:false,
        fetchMovieSuccess:true,
        movies:action.payload.movie,
      };
    case ACTIONTYPES.MOVIE_FETCH_FAILURE:
      return {
        ...state,
        fetchMovieLoading:false,
        fetchMovieFailure:action.payload.error,
      };
    
    case ACTIONTYPES.MOVIE_CREATE_START:
      return {
        ...state,
        createMovieLoading:true,
        createMovieFailure:null,  

      };
    
    case ACTIONTYPES.MOVIE_CREATE_SUCCESS:
      return {
        ...state,
        createMovieLoading:false,
        createMovieSuccess:true,
        staff:[action.payload.movie,...state.movies],
      };
    case ACTIONTYPES.MOVIE_CREATE_FAILURE:
      return {
        ...state,
        createMovieLoading:false,
        createMovieFailure:action.payload.error,
      };

    default:
      return state;  
  }
}

