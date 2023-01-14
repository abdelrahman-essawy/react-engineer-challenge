import React from 'react'
import { useToggleContext } from '../../../context/hooks/useToggleContext';
import Border from '../../utilities/Border';

export default function Genre() {
  const { state, dispatch } = useToggleContext();
  return (
    <>
      <div></div>
      <div className={`col-span-1 ${state.genre ? `block` : `hidden`}`}>
        <Border className="px-4 py-3">
          <div className='flex flex-col gap-2'>
            {
              [...Array(11)].map((_, i) => (
                <div className="flex flex-row items-center gap-3 md:gap-2 lg:gap-4">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="flex-1">sad</span>
                </div>
              ))
            }
          </div>
        </Border>
      </div>
    </>

  )
}
