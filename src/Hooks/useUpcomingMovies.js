import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpcomingMovies } from "../utils/moviesSlice";

// Remove the async keyword
const useUpcomingMovies = () => {
  const dispatch = useDispatch();
const upcomingMovies=useSelector((store)=>store.movies.upcomingMovies);


  const getUpcomingMovies = async () => {
    try {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?page=1',
        API_OPTIONS
      );
      const json = await data.json();
      // console.log(json.results);
      dispatch(addUpcomingMovies(json.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  // Move the useEffect inside the custom hook
  useEffect(() => {
    if(!upcomingMovies)
    {
    getUpcomingMovies();
    }
  }, []); // Include dispatch as a dependency

  // No need to return anything from the hook
};

export default useUpcomingMovies;
