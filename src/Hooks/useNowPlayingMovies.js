import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";

// Remove the async keyword
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
const nowPlayingMovies=useSelector((store)=>store.movies.nowPlayingMovies);


  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?page=1',
        API_OPTIONS
      );
      const json = await data.json();
      // console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  // Move the useEffect inside the custom hook
  useEffect(() => {
    if(!nowPlayingMovies)
    {
    getNowPlayingMovies();
    }
  }, [dispatch]); // Include dispatch as a dependency

  // No need to return anything from the hook
};

export default useNowPlayingMovies;
