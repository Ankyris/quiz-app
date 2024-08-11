import React, { useContext } from 'react'
import DataContext from '../Context/dataContext'

const Result = () => {

    const {showResult, quizs, marks, startOver} = useContext(DataContext);

  return (
    <section className={`bg-gray-900 text-white ${showResult ? 'block' : 'hidden'}`}>
        <div className="container mx-auto">
            <div className='flex h-screen items-center justify-center'>
                <div className='w-2/5'>
                    <div className={`text-gray-100 text-center p-5 rounded ${marks > (quizs.length * 5 / 2) ? 'bg-green-500' : 'bg-red-500'} `}>
                        <h1 className='mb-2 font-bold lg:text-[40px] tracking-[0.5px]'>
                            {marks > (quizs.length * 5/2) ? 'Awesome!' : 'Oops!'}
                        </h1>
                        <h3 className='mb-3 font-bold lg:text-[28px]'>
                            Your Score is {marks} out of {quizs.length * 5}
                        </h3>

                        <button onClick={startOver} className='tracking-[0.7px] rounded-md py-2 px-4 bg-gray-100 text-gray-800 font-bold inline-block'>
                            Start Over
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Result;