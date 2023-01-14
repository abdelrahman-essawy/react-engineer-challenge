import React from 'react'
import { useMoviesContext } from '../../../context/hooks/useMoviesContext';
import { useSearchFilterContext } from '../../../context/hooks/useSearchFilterContext';
import { useToggleContext } from '../../../context/hooks/useToggleContext';
import Border from '../../utilities/Border';

export default function Genre() {
  const { state: toggleState } = useToggleContext();
  const { state: moviesState } = useMoviesContext();
  const { dispatch: searchFilterDispatch } = useSearchFilterContext();

  const { movies } = moviesState;

  const uniqueGenres = ['Any genre', ...new Set(movies.map(({ genre }) => genre))]

  return (
    <>
      <div></div>
      <div className={`col-span-1 ${toggleState.genre ? `block` : `hidden`}`}>
        <Border>
          <div className='flex flex-col gap-2'>
            {
              uniqueGenres
                .map((genre, id) => (
                  <div
                    key={id}
                    className="flex flex-row items-center gap-3 md:gap-2 lg:gap-4">
                    <input
                      onChange={(event) => {
                        searchFilterDispatch({ type: 'SET_GENRE', payload: event.target.value });
                      }}
                      type="radio" name='Genres' className="w-4 h-4 cursor-pointer accent-black" value={genre} defaultChecked={genre === 'Any genre' ? true : false} />
                    <span className="flex-1">{genre}</span>
                  </div>
                ))
            }
          </div>
        </Border>
      </div>
    </>

  )
}
