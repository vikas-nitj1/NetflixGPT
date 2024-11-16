import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/moviesSlice";

// Remove the async keyword
const usePopularMovies = () => {
  const dispatch = useDispatch();
const popularMovies=useSelector((store)=>store.movies.popularMovies)


  const getPopularMovies = async () => {
    try {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/popular?page=1',
        API_OPTIONS
      );
      const json = await data.json();
      // console.log(json.results);
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  // Move the useEffect inside the custom hook
  useEffect(() => {
    if(!popularMovies)
    {
    getPopularMovies();
    }
  }, []); // Include dispatch as a dependency

  // No need to return anything from the hook
};

export default usePopularMovies;
