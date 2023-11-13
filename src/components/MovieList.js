import React from 'react';
import MovieCard from './MovieCard';
import { useRef } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { BsChevronLeft } from 'react-icons/bs';
const MovieList = ({ title, movies }) => {
  const movieListRef = useRef();
  const slide = (direction) => {
    console.log(movieListRef.current);
    if (movieListRef.current) {
      if (direction === 'left') {
        movieListRef.current.scrollLeft -= 400;
      } else {
        movieListRef.current.scrollLeft += 400;
      }
    }
  };

  return (
    movies && (
      <div className="px-6">
        <h1 className="text-2xl py-4 text-white">{title}</h1>
        <div className="flex justify-center align-middle">
          <button className="relative left-0 " onClick={() => slide('left')}>
            <BsChevronLeft className="text-white text-4xl" />
          </button>
          <div
            className="flex overflow-x-scroll md:overflow-x-hidden scroll-smooth"
            ref={movieListRef}
          >
            <div className="flex">
              {movies.map((movie) => (
                <MovieCard posterPath={movie.poster_path} />
              ))}
            </div>
          </div>
          <button className="relative right-0" onClick={() => slide('right')}>
            <BsChevronRight className="text-white text-4xl" />
          </button>
        </div>
      </div>
    )
  );
};

export default MovieList;
