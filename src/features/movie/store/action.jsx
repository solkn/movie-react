import { ACTIONTYPES } from "./type";
import { MOVIESERVICES } from "../services/movie";

/**
 * MOVIE FETCH ACTION
 * @returns ACTION
 */


export const fetchMovieStart = () =>({
  type:ACTIONTYPES.MOVIE_FETCH_START,
});

export const fetchMovieSuccess = (movie) =>({
  type:ACTIONTYPES.MOVIE_FETCH_SUCCESS,
  payload:{
    movie,
  },
});

export const fetchMovieFailure = (error) =>({
  type:ACTIONTYPES.MOVIE_FETCH_FAILURE,
  payload:{
    error,
  },
});

/**
 * STAFF CREATE ACTION
 * @returns ACTION
 */

export const createMovieStart = ()=>({
  type:ACTIONTYPES.MOVIE_CREATE_START,
});

export const createMovieSuccess = (movie)=>({
  type:ACTIONTYPES.MOVIE_CREATE__SUCCESS,
  payload:{
    movie,
  },
});

export const createMovieFailure = (error)=>({
  type:ACTIONTYPES.MOVIE_CREATE_FAILURE,
  payload:{
    error,
  },
});




/**
 * MOVIE ASYNC ACTION TYPES
 */

 export const fetchMovieAsync = () => {
  
  return async (dispatch) => {
 
    try {
      dispatch(fetchMovieStart());
      
      const response = await MOVIESERVICES;
    
      dispatch(
        fetchMovieSuccess(
        
          response.data
          
        )       
      );

    } catch (err) {
      dispatch(fetchMovieFailure(err));
    }
  };
};



export const createMovieAsync = (name,rating,duration) => {

  
  return async (dispatch) => {

    try {
      dispatch(createMovieStart());
      
      var movieData = await MOVIESERVICES;


      const response = movieData["data"].push({"name":name,"rating":rating,"duration":duration});
  
      dispatch(createMovieSuccess(response));

    } catch (err) {
      dispatch(createMovieFailure(err));
    }
  };
};
