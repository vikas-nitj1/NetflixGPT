import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const GptMovieSuggestions = () => {
  //subscribing to the store
  const gpt=useSelector((store)=>store.gpt);
  const {movieResults,movieNames}=gpt;
  if(!movieNames)
  return null;

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-75'>
      <div>
      {movieNames.map((movieName,index)=><MovieList
       key={{movieName}} 
       title={movieName}
        movies={movieResults[index]}/>
)}
      
      </div>
    </div>
  )
}

export default GptMovieSuggestions
