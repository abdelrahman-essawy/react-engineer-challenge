import React from 'react';
import { useSearchFilterContext } from '../../../context/hooks/useSearchFilterContext';
import StyledBorder from '../../utilities/StyledBorder';
import DisplayStars from '../../utilities/DisplayStars';

const SearchResult = ({ movies }) => {
  const { state: searchFilterState } = useSearchFilterContext();
  const { keyword } = searchFilterState;
  const filteredMovies = ({ title, rating, genre }) =>
    title.toLowerCase().includes(keyword.toLowerCase()) &&
    (rating >= parseInt(searchFilterState.rating) || parseInt(searchFilterState.rating) === 0) &&
    (searchFilterState.genre.includes('Any genre') || searchFilterState.genre.includes(genre));
  console.log(searchFilterState);

  return (
    <div className={`col-span-1 ${keyword ? `block` : `hidden`}`}>
      <StyledBorder>
        <div className="flex flex-col gap-4">
          {movies.filter(filteredMovies).length === 0 ? (
            <p className='text-gray-600'>Not found</p>
          ) : (
            movies
              .filter(filteredMovies)
              .map(({ title, rating, genre, id }) => (
                <div key={id} className="grid grid-cols-2 gap-1 items-start">
                  <span className="sm:text-sm md:text-lg font-medium text-gray-900">{title}</span>
                  <span className="sm:text-sm md:text-lg text-gray-600 place-self-end">{genre}</span>
                  <span className="pr-4">
                    <DisplayStars rating={rating} />
                  </span>
                </div>
              ))
          )}
        </div>
      </StyledBorder>
    </div>
  );
};

export default SearchResult;
