import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies } from "../utils/moviesSlice";

// Remove the async keyword
const useTopRatedMovies = () => {
  const dispatch = useDispatch();
const topRatedMovies=useSelector((store)=>store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?page=1',
        API_OPTIONS
      );
      const json = await data.json();
      // console.log(json.results);
      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  // Move the useEffect inside the custom hook
  useEffect(() => {
    if(!topRatedMovies)
    {
    getTopRatedMovies();
    }
  }, []); // Include dispatch as a dependency

  // No need to return anything from the hook
};

export default useTopRatedMovies;
