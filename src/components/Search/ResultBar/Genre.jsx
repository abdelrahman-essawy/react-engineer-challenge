import React from 'react'
import { useMoviesContext } from '../../../context/hooks/useMoviesContext';
import { useSearchFilterContext } from '../../../context/hooks/useSearchFilterContext';
import { useToggleContext } from '../../../context/hooks/useToggleContext';
import StyledBorder from '../../utilities/StyledBorder';

const Genre = () => {
  const { state: toggleState } = useToggleContext();
  const { state: moviesState } = useMoviesContext();
  const { dispatch: searchFilterDispatch } = useSearchFilterContext();

  const { movies } = moviesState;

  const uniqueGenres = ['Any genre', ...new Set(movies.map(({ genre }) => genre))]

  return (
    <div className={`col-span-1 ${toggleState.genre ? `block` : `hidden`}`}>
      <StyledBorder>
        <div className='flex flex-col gap-2'>
          {
            uniqueGenres
              .map((genre, id) => (
                <div key={id} className="flex flex-row items-center gap-3 md:gap-2 lg:gap-4">
                  <input
                    name='Genres'
                    id={`Genre ${id}`}
                    onChange={() => {
                      searchFilterDispatch({ type: 'SET_GENRE', payload: genre });
                    }}
                    type="radio" className="w-4 h-4 cursor-pointer accent-black" value={genre} defaultChecked={genre === 'Any genre' ? true : false} />
                  <label htmlFor={`Genre ${id}`} className="flex-1 cursor-pointer">{genre}</label>
                </div>
              ))
          }
        </div>
      </StyledBorder>
    </div>
  );
}

export default Genre;
