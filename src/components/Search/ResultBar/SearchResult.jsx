import React, { useEffect, useState } from 'react'
import { useSearchFilterContext } from '../../../context/hooks/useSearchFilterContext';
import Border from '../../utilities/Border';
import Stars from '../../utilities/Stars';

export default function SearchResult({ movies, state }) {

  const { state: searchFilterState } = useSearchFilterContext();

  const { keyword } = searchFilterState;
  return (
    <div>
      <div className={`col-span-1 ${keyword ? `block` : `hidden`}`}>
        <Border>
          <div className="flex flex-col gap-4">
            {
              movies
                .filter(({ title }) => title.toLowerCase().includes(keyword.toLowerCase()))
                .map(({ title, genre, id, rating }) => (
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
