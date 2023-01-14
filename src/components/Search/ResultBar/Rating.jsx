import React from 'react'
import { useToggleContext } from '../../../context/hooks/useToggleContext';
import Border from '../../utilities/Border'
import Stars from '../../utilities/Stars'

export default function Rating() {

    const { state, dispatch } = useToggleContext();
    return (

        <div className={`col-span-2 ${state.rating ? `block` : `hidden`}`}>
            <Border>
                <div className='flex flex-col gap-2'>
                    {
                        [...Array(11)].map((_, i) => (
                            <div
                                key={i}
                                className="flex flex-row items-center gap-3 md:gap-2 lg:gap-4">
                                <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                                <span className="flex-1"><Stars rating={(i - 1) + 1} /></span>
                            </div>
                        ))
                    }
                </div>
            </Border>
        </div>
    )
}
