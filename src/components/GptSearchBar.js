import React, { useRef } from 'react';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleGenerativeAI } from "@google/generative-ai"; // Move this import to the top
import { API_OPTIONS } from '../utils/constant';
import { addGptMovieResult } from '../utils/gptSlice';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY; // Define your API key
const genAI = new GoogleGenerativeAI(API_KEY); // Initialize genAI with the API key

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query=' +
        movie +
        '&include_adult=false&language=en-US&page=1',
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const searchQuery =
      "Act as movie recommendation system and suggest movies for the query: " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the given result ahead. Example Result: Avatar, Sholay, Bahubali, Singham, Krish";

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(searchQuery);
    const response = await result.response;
    const text = await response.text();

    if (!text) {
      // TODO: write error handling
      return;
    }

    const gptMovies = text.split(", ");

    // For each movie search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    //[Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
  };

  return (
    <div className='pt-[30%] md:pt-[10%] flex justify-center'>
      <form className='w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg' onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type='text'
          className='p-4 m-4 col-span-9'
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className='col-span-3 m-4 py-2 px-1 bg-red-700 text-white rounded-lg'
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
