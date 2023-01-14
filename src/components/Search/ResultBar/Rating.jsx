import React from 'react'
import { useSearchFilterContext } from '../../../context/hooks/useSearchFilterContext';
import { useToggleContext } from '../../../context/hooks/useToggleContext';
import Border from '../../utilities/Border'
import StarRating from '../../utilities/StarRating'

export default function Rating() {

    const { dispatch: searchFilterDispatch } = useSearchFilterContext();
    const { state: toggleState } = useToggleContext();

    return (
        <div className={`col-span-2 ${toggleState.rating ? `block` : `hidden`}`}>
            <Border>
                <div className='flex flex-col gap-2'>
                    {
                        [...Array(11)].map((_, i) => (
                            <div
                                key={i}
                                className="flex flex-row items-center gap-3 md:gap-2 lg:gap-4 ">
                                <input
                                    name='Ratings'
                                    id={`Rating ${i}`}
                                    onChange={(event) => {
                                        searchFilterDispatch({ type: 'SET_RATING', payload: event.target.value });
                                    }}
                                    type="radio" className="w-4 h-4 cursor-pointer accent-black" value={i} defaultChecked={i === 0 ? true : false} />
                                <label htmlFor={`Rating ${i}`} className="flex-1 cursor-pointer"><StarRating rating={i} /></label>
                            </div>
                        ))
                    }
                </div>
            </Border>
        </div>
    )
}
