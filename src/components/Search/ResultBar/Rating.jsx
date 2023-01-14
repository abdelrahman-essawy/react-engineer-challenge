import React from 'react'
import { useSearchFilterContext } from '../../../context/hooks/useSearchFilterContext';
import { useToggleContext } from '../../../context/hooks/useToggleContext';
import Border from '../../utilities/Border'
import Stars from '../../utilities/Stars'

export default function Rating() {

    const { state, dispatch: searchFilterDispatch } = useSearchFilterContext();
    const { state: toggleState, dispatch: toggleDispatch } = useToggleContext();
    
    console.log(state);
    return (
        <div className={`col-span-2 ${toggleState.rating ? `block` : `hidden`}`}>
            <Border>
                <div className='flex flex-col gap-2'>
                    {
                        [...Array(11)].map((_, i) => (
                            <div
                                key={i}
                                className="flex flex-row items-center gap-3 md:gap-2 lg:gap-4">
                                <input
                                    onChange={(event) => {
                                        searchFilterDispatch({ type: 'SET_RATING', payload: event.target.value });
                                    }}
                                    type="checkbox" className="w-4 h-4 cursor-pointer" value={i} />
                                <span className="flex-1"><Stars rating={i} /></span>
                            </div>
                        ))
                    }
                </div>
            </Border>
        </div>
    )
}
