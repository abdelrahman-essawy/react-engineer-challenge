import React from 'react'
import { useMoviesContext } from '../../../context/hooks/useMoviesContext';
import { useToggleContext } from '../../../context/hooks/useToggleContext';
import Border from '../../utilities/Border';

export default function Genre() {
  const { state: toggleState, dispatch: toggleDispatch } = useToggleContext();
  const { state: moviesState, dispatch: moviesDispatch } = useMoviesContext();
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
                  <input type="checkbox" className="w-4 h-4 cursor-pointer" />
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
