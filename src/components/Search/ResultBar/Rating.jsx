import React from 'react'
import Border from '../../utilities/Border'
import Stars from '../../utilities/Stars'

export default function Rating() {
    return (

        <div className="col-span-2">
            <Border className="px-4 py-3">
                <div className='flex flex-col gap-2'>
                    {
                        [...Array(11)].map((_, i) => (
                            <div className="flex flex-row items-center gap-3 md:gap-2 lg:gap-4">
                                <input type="checkbox" className="w-4 h-4" />
                                <span className="flex-1"><Stars rating={(i - 1) + 1} /></span>
                            </div>
                        ))
                    }
                </div>
            </Border>
        </div>
    )
}
