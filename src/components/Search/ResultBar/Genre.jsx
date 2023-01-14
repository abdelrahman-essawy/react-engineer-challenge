import React from 'react'
import { useMoviesContext } from '../../../context/hooks/useMoviesContext';
import { useSearchFilterContext } from '../../../context/hooks/useSearchFilterContext';
import { useToggleContext } from '../../../context/hooks/useToggleContext';
import Border from '../../utilities/Border';

export default function Genre() {
  const { state: toggleState, dispatch: toggleDispatch } = useToggleContext();
  const { state: moviesState, dispatch: moviesDispatch } = useMoviesContext();
  const { state, dispatch: searchFilterDispatch } = useSearchFilterContext();

  const { movies } = moviesState;

  return (
    <>
      <div></div>
      <div className={`col-span-1 ${toggleState.genre ? `block` : `hidden`}`}>
        <Border>
          <div className='flex flex-col gap-2'>
            {
              movies.map(({ genre, id }) => (
                <div
                  key={id}
                  className="flex flex-row items-center gap-3 md:gap-2 lg:gap-4">
                  <input
                    onChange={(event) => {
                      searchFilterDispatch({ type: 'SET_GENRE', payload: event.target.value });
                    }}
                    type="checkbox" className="w-4 h-4 cursor-pointer" value={genre} />
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
