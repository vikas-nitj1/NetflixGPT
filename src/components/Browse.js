import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
// import { API_OPTIONS } from '../utils/constant'
// import { useDispatch } from 'react-redux'
// import { addNowPlayingMovies } from '../utils/moviesSlice'
const Browse = () => {

  
// const dispatch=useDispatch();
// const getNowPlayingMovies=async()=>{
//   const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS)
//   const json=await data.json();
//   console.log(json.results);
//   dispatch(addNowPlayingMovies(json.results));
// }

// useEffect(()=>{
// getNowPlayingMovies();
// },[]);


const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);


useNowPlayingMovies();
usePopularMovies();
useUpcomingMovies();
useTopRatedMovies();
  return (
    <div>
      <Header/>
      {
        showGptSearch?
        (
          <GptSearch/>
        ):
        (
          <>
          <MainContainer/>
          <SecondaryContainer/>
          </>
        )
      }
    </div>
  )
}

export default Browse;
