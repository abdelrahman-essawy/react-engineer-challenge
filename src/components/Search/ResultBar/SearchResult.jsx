import React, { useEffect, useState } from 'react'
import { useMoviesContext } from '../../../context/hooks/useMoviesContext';
import Border from '../../utilities/Border';

export default function SearchResult() {
  const [movies, setMovies] = useState([]);
  const { state, dispatch } = useMoviesContext();

  console.log(state);

  return (
    <div>
      <div className={`col-span-1 ${state ? `block` : `hidden`}`}>
        <Border>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
                <span className="text-sm font-semibold">Genre</span>
                <span className="text-sm font-semibold">sadas</span>

            </div>
          </div>
        </Border>

      </div>
    </div>
  )
}
