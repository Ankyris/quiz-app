import React from 'react'
import { useContext } from 'react'
import DataContext from '../Context/dataContext';

const Start = () => {

    const {startQuiz, showStart} = useContext(DataContext);

  return (
    <section className='text-white text-center bg-gray-900' style={{display: `${showStart ? 'block' : 'none'}` }}>
        <div className='container mx-auto'>
            <div className='flex items-center justify-center h-screen'>
                <div className='w-2/3'>
                    <h1 className='font-bold text-[40px] mb-4'>Basic React JS Quiz</h1>
                    <button onClick={startQuiz} className='rounded-md px-4 py-2 bg-white text-black font-bold'>Start Quiz</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Start