import React from 'react'
import { useSearchFilterContext } from '../../../context/hooks/useSearchFilterContext';
import Border from '../../utilities/Border';
import StarRating from '../../utilities/StarRating';

export default function SearchResult({ movies }) {

  const { state: searchFilterState } = useSearchFilterContext();
  console.log(searchFilterState)
  const { keyword } = searchFilterState;

  const filteredMovies = ({ title, rating, genre }) => {
    if (
      title.toLowerCase().includes(keyword.toLowerCase()) &&
      (rating === parseInt(searchFilterState.rating) || parseInt(searchFilterState.rating) === 0)
    ) {
      return true;
    }
    return false;
  };


  return (
    <div>
      <div className={`col-span-1 ${keyword ? `block` : `hidden`}`}>
        <Border>
          <div className="flex flex-col gap-4">
            {
              movies
                .filter((movie) => filteredMovies(movie))
                .map(({ title, genre, id, rating }) => (
                  <div
                    key={id}
                    className="grid grid-cols-2 gap-1 items-start">
                    <span className="sm:text-sm md:text-lg font-medium text-gray-900">{title}</span>
                    <span className="sm:text-sm md:text-lg text-gray-600 place-self-end">{genre}</span>
                    <span className='pr-4'>
                      <StarRating rating={rating} />
                    </span>
                  </div>
                ))
            }
          </div>

        </Border>

      </div>
    </div>
  )
}
