import React from 'react'
import { ToggleProvider } from '../../../context/ToggleContext'
import Genre from './Genre'
import Rating from './Rating'
import SearchResult from './SearchResult'


export default function SearchResults() {
    return (
        <>
            <div className='grid grid-cols-4 md:grid-cols-6 gap-5 items-start w-full grid-flow-row'>

                <div className="col-span-4 md:col-span-4">
                    <SearchResult />
                </div>

                <div className="col-span-4 md:col-span-2 grid grid-cols-2 gap-5 items-start">
                    <Rating />
                    <Genre />
                </div>

            </div>
        </>

    )
}
