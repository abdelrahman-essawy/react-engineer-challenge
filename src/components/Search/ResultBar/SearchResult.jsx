import React, { useEffect, useState } from 'react'
import { useMoviesContext } from '../../../context/hooks/useMoviesContext';
import Border from '../../utilities/Border';
import Stars from '../../utilities/Stars';

export default function SearchResult() {
  const { state } = useMoviesContext();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(state.movies);
  }, [state]);


  return (
    <div>
      <div className={`col-span-1 ${state ? `block` : `hidden`}`}>
        <Border>
          <div className="flex flex-col gap-4">
            {
              movies.map(({ title, genre, id, rating }) => (
                <div
                  key={id}
                  className="grid grid-cols-2 gap-1 items-start">
                  <span className="sm:text-sm md:text-lg font-medium text-gray-900">{title}</span>
                  <span className="sm:text-sm md:text-lg text-gray-600 place-self-end">{genre}</span>
                  <span className='pr-4'>
                    <Stars rating={rating} />
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
