import React, { useRef } from 'react';
import lang from './LanguageConstants';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { API_CONSTANTS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { searchedMovieSuggestions } from '../utils/gptSlice';

const GptSearchBar = () => {
  const langKey = useSelector((state) => state.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const handleGptSearchClick = async () => {
    const gptResults = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchText.current.value}`,
      API_CONSTANTS
    );

    const json = await gptResults.json();
    dispatch(searchedMovieSuggestions(json.results));
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
