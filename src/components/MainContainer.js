import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  // Assuming 'movies' is an array in the Redux store
  const movies = useSelector(store => store?.movies?.nowPlayingMovies);

  // Check if 'movies' is falsy or an empty array
  if (!movies || movies.length === 0) {
    return null; // or you can render a loading state or an error message
  }

  // Assuming you want to display information about the first movie
  const mainMovie = movies[0];
  const { original_title, overview,id } = mainMovie;

  // console.log(mainMovie);

  return (
    <div className='pt-[30%] bg-black md:pt-0'>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;
