import Page from "src/components/Page";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchMovieAsync } from "../store/action";


const  GetMovies = ()=> {

  const dispatch = useDispatch();

  const { movies,fetchMovieLoading,fetchMovieFailure } = useSelector(
    (state) => state.movie);
    
  useEffect(() => {
      dispatch(fetchMovieAsync());

    },[dispatch]);


   if (fetchMovieLoading || !movies) {
    return (

        <Page title="Admin | Site-Repo">
            <h1>Movies</h1>
         <div
          style={{
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress/>
        </div>  

        </Page>
    );
  }
  if (fetchMovieFailure) {
    return (

        <Page title="Movie">
            <h1>Site is not reachable </h1>
         <div
          style={{
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        </div>  

        </Page>
    );
  }
  return (
    <Page title="Movie">
        
        {/* {staffs.filter(staff => staff.user.username.includes("A")).map(filteredStaff => (
          <p>      
            {filteredStaff.user.username}
          </p>
  ))}
   */}

    <TableContainer component={Paper}>
     <Table aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell align="left">Movie</TableCell>
           <TableCell align="left">Rating</TableCell>
           <TableCell align="left">Duration</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
        

          {movies.map((movie) => (
           <TableRow key={movie.name}>
             <TableCell align="left">{movie.name}</TableCell>
             <TableCell align="left">{movie.rating}</TableCell>
             <TableCell align="left">{movie.duration}</TableCell>

           </TableRow>
         ))}

       </TableBody>
     </Table>
   </TableContainer>
    </Page>
  );
}

  

 export default GetMovies;