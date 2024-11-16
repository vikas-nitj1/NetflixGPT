import React from 'react'
import MovieList from './MovieList'
import Footer from './Footer'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies)
  return movies.nowPlayingMovies &&  (
    <div className='bg-black'>
       {/* secondary container */}
       {/* 
        MovieList-popular
             -n cards
        MovieList-nowPlaying
             -n cards
        MovieList-Trending
            -n cards
        MovieList-Trending
             -n cards
       
        */}
        <div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20 '>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Upcomming"} movies={movies.upcomingMovies}/>
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
        <Footer/>
        </div>
    </div>
  )
}

export default SecondaryContainer;
