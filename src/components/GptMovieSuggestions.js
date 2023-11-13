import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
const GptMovieSuggestions = () => {
  const searchedMovies = useSelector((state) => state.gpt.searchedMovies);
  console.log(searchedMovies);
  return (
    searchedMovies && (
      <div className="grid grid-cols-4 gap-1 overflow-scroll bg-black mt-10 p-5 w-9/12 h-600 relative left-[14%]">
        {searchedMovies.map(
          (movie) =>
            movie.poster_path && (
              <div className=" text-white">
                <div>
                  <img
                    className="m-5 w-64 h-full"
                    src={
                      'https://image.tmdb.org/t/p/original' + movie.poster_path
                    }
                    alt="movie poster"
                  />
                </div>
              </div>
            )
        )}
      </div>
    )
  );
};

export default GptMovieSuggestions;
